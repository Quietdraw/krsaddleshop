if (typeof jQuery !== "undefined") {
	jQuery(function() {
		var BASE_URL = "https://cdn.bronto.com/netsuite/settings/";
		var CALLBACK_FUNCTION_NAME = "brontoIntegrationsCallback";
		var CART_COMPLETE_COOKIE = "__btr_ccc";
		var SIX_MONTHS_FROM_NOW = new Date();
		SIX_MONTHS_FROM_NOW.setMonth(SIX_MONTHS_FROM_NOW.getMonth() + 6);

		function logMessage(message) {
			if (console && console.log) {
				console.log("BrontoIntegrations: " + message);
			}
		}

		function loadSettings(url, callback) {
			if (typeof SC === "undefined") {
				logMessage("SuiteCommerce was not found");
				return;
			}
			if (SC.ENVIRONMENT.jsEnvironment !== 'browser') {
				// Don't execute these server side
				return;
			}
			var done = false;
			window[CALLBACK_FUNCTION_NAME] = callback;
			var element = document.createElement("script");
			element.setAttribute("type", "text/javascript");
			element.onload = element.onreadystatechange = function () {
				if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
					done = true;
					element.onload = element.onreadystatechange = null;
					document.documentElement.removeChild(element);
				}
			};
			element.onerror = function() {
				if (window[CALLBACK_FUNCTION_NAME]) {
					window[CALLBACK_FUNCTION_NAME](new Error("Failed to load settings from URL " + url));
				}
				element.onerror = null;
			};
			element.setAttribute("src", url);
			document.documentElement.appendChild(element);
		}

		function getTopLevelDomain() {
			var tld = null;
			var tldCookie = "__btr_tld=cookie";
			var hostname = document.location.hostname.split('.');
			for (var i = hostname.length - 1; i >= 0; i--) {
				tld = hostname.slice(i).join('.');
				document.cookie = tldCookie + ';domain=.' + tld + ';';
				if (document.cookie.indexOf(tldCookie) > -1) {
					document.cookie = tldCookie.split('=')[0] + '=;domain=.' + tld + ';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
					return tld;
				}
			}
		}

		function createCookie(name, value, domain, expirationDate) {
			document.cookie = name + '=' + value + ';expires=' + expirationDate.toUTCString() + ';domain=' + domain + ';path=/;';
		}

		function processSettings(settings) {
			if (!settings) {
				logMessage("No settings found");
				return;
			}
			(function(settings) {

				var CART_RECOVERY_ENABLED = settings["cart-recovery"] && settings["cart-recovery"]["enabled"];
				var CART_RECOVERY_SNIPPET = settings["cart-recovery"] && settings["cart-recovery"]["embed-code"];
				var CONVERSION_TRACKING_ENABLED = settings["cart-recovery"] && settings["cart-recovery"]["conversion-enabled"];
				var CONVERSION_TRACKING_ID = settings["cart-recovery"] && settings["cart-recovery"]["bta-id"];
				var POPUP_MANAGER_ENABLED = settings["popup-manager"] && settings["popup-manager"]["enabled"];
				var POPUP_IDS = (settings["popup-manager"] && settings["popup-manager"]["popups"]) || [];
				var COUPON_MANAGER_ENABLED = settings["coupon-manager"] && settings["coupon-manager"]["enabled"];
				var SCRIPT_MANAGER_ENABLED = settings["script-manager"] && settings["script-manager"]["enabled"];
				var ACCOUNT_ID = settings["account"] && settings["account"]["id"];

				var findApplication = function() {
					var isDefined = function(variable) {
						return typeof(variable) !== "undefined" && variable !== null;
					};
					var isValid = function(app) {
						return isDefined(app) && isDefined(app.Configuration) && isDefined(app.modules);
					};
					var applications = [];
					if (isDefined(SC._applications)) {
						applications = [SC._applications.Shopping, SC._applications.Checkout, SC._applications.MyAccount];
					} else if (isDefined(SC.Application)) {
						applications = [SC.Application];
					}
					var application = null;
					for (var i = 0; i < applications.length; i++) {
						if (isValid(applications[i])) {
							application = applications[i];
							break;
						}
					}
					return application;
				};

				(function (application) {
					var cart = null;
					var user = null;
					if (typeof application !== "undefined") {
						SC.Bronto = SC.Bronto || {};
						SC.Bronto.Cart = SC.Bronto.Cart || {};
						var scriptsLoaded = false;
						var scaEmailCaptureInterval = null;
						var btaInterval = null;
						var bta = null;
						var btaDone = false;

						function loadScripts() {
							if (scriptsLoaded) {
								return;
							}
							scriptsLoaded = true;
							if (SCRIPT_MANAGER_ENABLED) {
								jQuery("body").append(jQuery('<script type="text/javascript" src="https://cdn.bronto.com/bsm-snippet/' + accountId + '/snippet.js"></script>'));
							} else {
								if (CART_RECOVERY_ENABLED) {
									jQuery("body").append(jQuery(CART_RECOVERY_SNIPPET));
									scaEmailCaptureInterval = setInterval(attachEmailCapturePoints, 500);
								}
								if (!CART_RECOVERY_ENABLED && CONVERSION_TRACKING_ENABLED && CONVERSION_TRACKING_ID) {
									var script = document.createElement("script");
									script.type = "text/javascript";
									script.src = "//p.bm23.com/bta.js";
									script.onload = script.onreadystatechange = function () {
										if (!btaDone && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
											btaDone = true;
											bta = new __bta(CONVERSION_TRACKING_ID);
											bta.setHost("app.bronto.com");
										}
									};
									document.body.appendChild(script);
								}
							}

							if (POPUP_MANAGER_ENABLED) {
								var popups = POPUP_IDS.join(" ");
								if (popups.length > 0) {
									var popupCode = jQuery('<script bronto-popup-id="' + popups + '" src="https://cdn.bronto.com/popup/delivery.js"></script>');
									jQuery("body").append(popupCode);
								}
							}
							if (COUPON_MANAGER_ENABLED) {
								jQuery("body").append(jQuery('<script type="text/javascript" src="https://cdn.bronto.com/coupon/js/bcm.js"></script>'));
							}
						}

						/**
						 * Utility method that concatenates all option info for an item.
						 * @param  {Object} itemModel SCA representation of an item model.
						 * @return {String}           String containing option information.
						 */
						function getItemOptionInfo(itemModel) {
							var result = '';
							var options = itemModel.get('options');
							if (options instanceof Array) {
								result = _.map(options, function(option) {
									var optionString = '';
									if (option.hasOwnProperty('name') && option.hasOwnProperty('displayvalue')) {
										optionString = option.name + option.displayvalue;
									}
									return optionString;
								}).join(', ');
							}
							
							return result;
						}

						/**
						 * Gets the bare site URL.
						 * @return {String} Main site URL.
						 */
						function getSiteUrl() {
							var environment = SC.ENVIRONMENT,
								siteSettings = environment.siteSettings || {},
								touchpoints = siteSettings.touchpoints || {},
								homeTouchpoint = touchpoints.home || "",
								siteUrl = homeTouchpoint.split('?')[0];
							return siteUrl;
						}

						/**
						 * Gets a parameter by name
						 * @return {String} parameter.
						 */
						function getParameterByName(url, param_name) {
							param_name = param_name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
							var regex = new RegExp('[\\?&]' + param_name + '=([^&#]*)'),
								results = regex.exec(url);
							return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
						}

						/**
						 * Gets the checkout URL
						 * @return {String} checkout URL.
						 */
						function getCheckoutUrl() {
							var checkoutUrl = null;
							if (SC.ENVIRONMENT.siteSettings.touchpoints.viewcart) {
								checkoutUrl = SC.ENVIRONMENT.siteSettings.touchpoints.viewcart;
								if (checkoutUrl.indexOf("http://") !== 0 && checkoutUrl.indexOf("https://") !== 0) {
									checkoutUrl = encodeURI(window.location.protocol + "//" + SC.ENVIRONMENT.currentHostString + checkoutUrl);
								}
							}
							
							return checkoutUrl;
						}

						/**
						 * Checks if the given URL is whole or if it needs to have the root site URL
						 * prepended otherwise.
						 * @param  {String} url  The given URL.
						 * @return {Boolean}     True if the given site contains the site's root.
						 *                       False otherwise.
						 */
						function containsRootUrl(url) {
							return url.match(/^http/) || url.match(/^www/);
						}

						/**
						 * Returns a comma separated string with all the categories from an item
						 * in case they are present on the item model.
						 * @param  {Object} lineItem Item model
						 * @return {String}          Comma separated string with all categories.
						 */
						function getCategories(lineItem) {
							var categoriesDetail = lineItem.get('defaultcategory_detail'),
								matrixParent = lineItem.get('matrix_parent') || {},
								categoriesOrigin = categoriesDetail || matrixParent.defaultcategory_detail;
							return _.map(categoriesOrigin, function(cat) {
								return _.isObject(cat) && cat.label || "";
							}).join(', ');
						}

						function persistCart(cart) {
							if (jsonAvailable()) {
								var jsonCart = JSON.stringify(SC.Bronto);
								if (localStorageAvailable()) {
									localStorage.setItem("BrontoCart", jsonCart);
								}
							}
						}

						function removePersistedCart() {
							if (localStorageAvailable()) {
								localStorage.removeItem("BrontoCart");
								createCookie(CART_COMPLETE_COOKIE, window.location.hostname, '.' + getTopLevelDomain(), SIX_MONTHS_FROM_NOW);
							}
						}

						function localStorageAvailable() {
							var testKey = 'test', storage = window.localStorage;
							try {
								storage.setItem(testKey, '1');
								storage.removeItem(testKey);
								return true;
							} catch (error) {
								return false;
							}
						}

						function jsonAvailable() {
							return typeof JSON !== "undefined";
						}

						function fixNumber(num) {
							var number = Number(num).toFixed(2);
							return isNaN(number) ? 0.0 : number;
						}
						
						/**
						 * Sends a cart to Bronto or exposes a cart depending on whether script-manager 
						 * is enabled.
						 */
						function sendOrExposeCart() {
							var brontoCart = getBrontoCart();
							if (brontoCart != null) {
								if (SCRIPT_MANAGER_ENABLED) {
									// SCA removes line items from the cart once a confirmation number
									// is set, so in that case we want to send the previously stored
									// SC.Bronto.Cart object that still contains the line items
									if (getConfirmationNumber(cart)) {
										sendBrontoCart(SC.Bronto.Cart);
									} else {
										sendBrontoCart(brontoCart);
									}
								} else {
									// SCA removes line items from the cart once a confirmation number
									// is set, so in that case we want to expose the previously stored
									// SC.Bronto.Cart object that still contains the line items
									if (getConfirmationNumber(cart)) {
										exposeCartObject(SC.Bronto.Cart);
									} else {
										exposeCartObject(brontoCart);
									}
								}
							}
						}

						/**
						 * Generates the global exposed object used by Bronto's web app.  This is 
						 * a legacy approach.
						 * 
						 * @param {object} brontoCart - Bronto compatibile cart object
						 */
						function exposeCartObject(brontoCart) {
							SC.Bronto.Cart = brontoCart;
							persistCart(SC.Bronto);
							checkOrderCompletion(cart);
						}
						
						/**
						 * Sends cart data to Bronto using the script-manager based method.
						 * 
						 * @param {object} brontoCart - Bronto compatible cart object
						 */
						function sendBrontoCart(brontoCart) {
							SC.Bronto.Cart = brontoCart;
							var orderId = getConfirmationNumber(cart);
							if (orderId) {
								brontoCart.customerOrderId = orderId.substring(orderId.indexOf("-") + 1);
								brontoCart.phase = "ORDER_COMPLETE";
								if (COUPON_MANAGER_ENABLED && ACCOUNT_ID) {
									submitCouponRedemption(cart);
								}
							} else if (typeof SC._applications !== 'undefined' && SC._applications.Checkout != null) {
								brontoCart.phase = "SHIPPING_INFO";
							} else if (typeof SC.ENVIRONMENT !== 'undefined' && SC.ENVIRONMENT.SCTouchpoint === "checkout") {
								brontoCart.phase = "SHIPPING_INFO";
							}
							
							brontoCart.cartUrl = brontoCart['url'];
							delete brontoCart['url']; // this property is not used by the script-manager based approach
							
							if (typeof bronto !== 'undefined' && bronto !== null) {
								bronto('cart:send', brontoCart);
							}
						}

						function submitCouponRedemption(cart) {
							var promoCodes = [];
							// promocodes are removed from the cart when the order id is set, but we can still pull them from _previousAttributes
							if (typeof cart._previousAttributes !== 'undefined' && typeof cart._previousAttributes.promocodes !== 'undefined') {
								promoCodes = cart._previousAttributes.promocodes;
							}
							var emailAddress = SC.Bronto.Cart.emailAddress ? SC.Bronto.Cart.emailAddress : user.get('email');
							for (var x = 0; x < promoCodes.length; x++) {
								var promoCode = promoCodes[x];
								if (promoCode && promoCode.isvalid) {
									__bcm.redeemCoupon(ACCOUNT_ID, {
										email: emailAddress,
										coupon: promoCode.code,
										orderId: SC.Bronto.Cart.customerOrderId,
										orderSubtotal: SC.Bronto.Cart.subtotal,
										orderDiscount: SC.Bronto.Cart.discountAmount
									});
								}
							}
						}

						/**
						 * Returns a Bronto compatible representation of the current user's cart.
						 * 
						 * @returns {object} Bronto compatibile cart object
						 */
						function getBrontoCart() {
							var brontoCart = null;
							var orderId = getConfirmationNumber(cart);
							var cartSummary = cart.get('summary') || {},
								lineModels = cart.get('lines').models || [],
								userEmail = user.get('email'),
								environment = SC.ENVIRONMENT,
								customerId = environment.customer_internalid,
								checkoutUrl = getCheckoutUrl(),
								siteUrl = getSiteUrl();

							if (orderId != null || lineModels.length > 0) {
								var totalDiscount = Math.abs(cartSummary.discounttotal);
								brontoCart = {
									"grandTotal": fixNumber(cartSummary.total),
									"subtotal": fixNumber(cartSummary.subtotal),
									"shippingAmount": fixNumber(cartSummary.shippingcost),
									"url": checkoutUrl,
									"currency": environment && environment.currentCurrency && environment.currentCurrency.code,
									"taxAmount": fixNumber(cartSummary.taxtotal),
									"lineItems": [],
									"phase": "SHOPPING"
								};

								if (_.isString(userEmail) && userEmail.length > 0) {
									brontoCart.emailAddress = userEmail;
								}

								_.each(lineModels, function(lineModel) {
									var lineItem = lineModel.get('item'),
										editUrl = lineItem.get('_editUrl') || lineItem.get('_url') || "",
										quantity = lineModel.get('quantity') || 1,
										total = lineModel.get('total');
									brontoCart.lineItems.push({
										"other": getItemOptionInfo(lineItem),
										"imageUrl": encodeURI(lineItem.get('_thumbnail').url),
										"unitPrice": fixNumber(lineModel.get('rate')),
										"sku": lineItem.get('itemid'),
										"category": getCategories(lineItem),
										"description": lineItem.get('displayname'),
										"productUrl": encodeURI(containsRootUrl(editUrl) ? editUrl : siteUrl + editUrl),
										"name": lineItem.get('_name'),
										"quantity": quantity,
										"salePrice": fixNumber(total / quantity),
										"totalPrice": fixNumber(total)
									});
									if (lineModel.get('itemtype') === 'Discount') {
										totalDiscount += Math.abs(lineItem.get('amount'));
									} else if (lineModel.get('discount') > 0) {
										totalDiscount += Math.abs(lineModel.get('discount'));
									}
								});
								brontoCart["discountAmount"] = fixNumber(totalDiscount);
							}
							
							return brontoCart;
						}

						/**
						 * Returns an order-confirmation number if available, null otherwise.
						 * 
						 * @returns {string} order-confirmation number.
						 */
						function getConfirmationNumber(cart) {
							var confirmation = cart.get('confirmation');
							if (_.isObject(confirmation)) {
								try {
									var confirmationNumber = confirmation.confirmationnumber || confirmation.get('confirmationnumber');
									var statuscode = confirmation.statuscode || confirmation.get('statuscode');
									if (statuscode === "success" && confirmationNumber) {
										return confirmationNumber;
									}
								} catch (e) {
									// In case the confirmation object doesn't have get
								}
							}
							return null;
						}

						/**
						 * Checks if the order was completed on Checkout.
						 * If it was, updates the customerOrderId field on the exposed object.
						 * This method is called once on each exposed object generation call.
						 */
						function checkOrderCompletion(cart) {
							var orderId = getConfirmationNumber(cart);
							if (orderId) {
								SC.Bronto.Cart.customerOrderId = orderId.substring(orderId.indexOf("-") + 1);
								removePersistedCart();
								if (COUPON_MANAGER_ENABLED && ACCOUNT_ID) {
									submitCouponRedemption(cart);
								}
								if (!CART_RECOVERY_ENABLED && CONVERSION_TRACKING_ENABLED && bta) {
									var order = {
										order_id: SC.Bronto.Cart.customerOrderId,
										email: SC.Bronto.Cart.emailAddress,
										date: (new Date()).toJSON(),
										items: []
									};
									_.each(SC.Bronto.Cart.lineItems, function(lineItem) {
										order.items.push({
											item_id: lineItem.sku,
											desc: lineItem.description,
											name: lineItem.name,
											amount: lineItem.unitPrice,
											quantity: lineItem.quantity,
											category: lineItem.category,
											image: lineItem.imageUrl,
											url: lineItem.productUrl
										});
									});
									bta.addOrder(order);
								}
								return true;
							}
							return false;
						}

						/**
						 * In case of guest checkout, checks if the email address was entered by the shopper.
						 * If it was, updates the emailAddress field on the exposed object.
						 * This method is called once on each exposed object generation call.
						 */
						function checkGuestEmail() {
							var userEmail = null;
							if (typeof user !== 'undefined' && user !== null) {
								userEmail = user.get('email');
							}
							if (!userEmail) {
								var checkoutApp = null;
								if (typeof SC._applications !== 'undefined' && SC._applications != null) {
									checkoutApp = SC._applications.Checkout;
								} else if (typeof SC.Application !== 'undefined' && SC.Application != null) {
									checkoutApp = SC.Application;
								}
								var currentView = checkoutApp && checkoutApp.getLayout().currentView,
									checkoutWizard = currentView && currentView.wizard,
									checkoutWizardOptions = checkoutWizard && checkoutWizard.options,
									checkoutWizardProfile = checkoutWizardOptions && checkoutWizardOptions.profile,
									email = checkoutWizardProfile && checkoutWizardProfile.get('email');
								if (email && _.isString(email) && email.length > 0) {
									SC.Bronto.Cart.emailAddress = email;
								}
							}
						}

						function dispatchPopupEvent() {
							if (POPUP_MANAGER_ENABLED) {
								var event = document.createEvent('Event');
								event.initEvent('bronto:popup-initialize', true, true);
								document.dispatchEvent(event);
							}
						}

						function attachEmailCapturePoints() {
							if (CART_RECOVERY_ENABLED && typeof bronto !== 'undefined' && typeof bronto.EmailInput !== 'undefined' && typeof bronto.config !== 'undefined' && bronto.config.sca !== 'undefined') {
								if (scaEmailCaptureInterval) {
									clearInterval(scaEmailCaptureInterval);
									scaEmailCaptureInterval = null;
								}
								_.each(bronto.config.sca.emailCapturePoints, function(capturePoint) {
									new bronto.EmailInput({ selector: capturePoint.selector }, bronto.jQuery).observe();
								});
							}
						}
						
						function addOrUpdateBrontoProductDiv(productId) {
							var $brontoDataDiv = jQuery("div#bronto-productId");
							var dataDiv = ($brontoDataDiv.length != 0) ? $brontoDataDiv.get(0) : null;
							if (dataDiv == null) {
								dataDiv = document.createElement("div");
								dataDiv.id = "bronto-productId";
								dataDiv.style.display = "none";
								
								jQuery("body").append(dataDiv);
							}
							dataDiv.innerHTML = productId;
						}
						
						function publishProductId(productId) {
							if (productId != null) {
								addOrUpdateBrontoProductDiv(productId);
								removeDiv = false;
							} else {
								jQuery("div#bronto-productId").remove();
							}
						}

						/**
						 * This method contains all code that is executed on each successful view append event.
						 */
						function afterAppendViewEvents() {
							loadScripts();
							attachEmailCapturePoints();
							checkGuestEmail();
							dispatchPopupEvent();
							sendOrExposeCart();
						}
						
						function getSelectedOptionItemId(item, itemOptionId, itemOptionValueLabel, defaultProductIdProducer) {
							var itemId = null;
							var matrixDetails = item['matrixchilditems_detail'];
							if (matrixDetails != null) {
								for (var x = 0; x < matrixDetails.length; x++) {
									var matrixDetail = matrixDetails[x];
									if (matrixDetail[itemOptionId] == itemOptionValueLabel) {
										itemId = matrixDetail['itemid'];
										break;
									}
								}
							}
							
							if (itemId == null && _.isFunction(defaultProductIdProducer)) {
								itemId = defaultProductIdProducer();
							}
							
							return itemId;
						}
						
						function getSelectedOptionIdAndLabel(itemInfo) {
						  var optionIdAndLabel = null;
						  var options = itemInfo['options'];
						  if (options != null) {
							  for (var x = 0; x < options.length; x++) {
								  var option = options[x];
								  if (option['value'] != null) {
									  optionIdAndLabel = {
										  itemOptionId: option['itemOptionId'], 
										  itemOptionValueLabel: option.value['label']
									  };
									  break;
								  }
							  }
						  }
						  
						  return optionIdAndLabel;
						}
						
						function getCurrentParentItemId(itemInfo) {
							var itemId = null;
							var item = itemInfo['item']
							if (item != null) {
								itemId = item['itemid'];
							}
							
							return itemId;
						}

						/**
						 * Initializes the integration by gathering all necessary information
						 * from pofile and cart promises.
						 * @param  {Promise} cartPromise Shopping jQuery cart promise object.
						 */
						function init(cartPromise, profilePromise, pdpChangeListenerPromise)  {
							jQuery.when(cartPromise, profilePromise, pdpChangeListenerPromise).done(function(cartResult, profileResult) {
								cart = cartResult;
								user = profileResult;
								sendOrExposeCart();
								cart.on('change', sendOrExposeCart);
								application.getLayout().on('afterAppendView', afterAppendViewEvents);
							});
							loadScripts();
						}

						var getPromise = function(obj, func) {
							var promise = null;
							if (_.isFunction(obj[func])) {
								var result = obj[func]();
								if (_.isFunction(result.then)) {
									promise = result;
								} else {
									promise = jQuery.Deferred();
									promise.resolve(result);
								}
							}
							return promise;
						};

						var cartPromise = getPromise(application, "getCart");
						var profilePromise = getPromise(application, "getUser") || SC.PROFILE_PROMISE;
						var pdpChangeListenerPromise = new Promise((resolve, reject) => {
							  pdp = application.getComponent('PDP');

							  if (pdp == null) {
								  resolve();
								  return;
							  }
							  
							  var defaultProductIdProducer = function() {
								  var productId = null;
								  var itemInfo = pdp.getItemInfo();
								  if (itemInfo != null && itemInfo['item'] != null) {
									  var optionIdAndValue = getSelectedOptionIdAndLabel(itemInfo);
									  if (optionIdAndValue != null) {
										  productId = getSelectedOptionItemId(itemInfo['item'], optionIdAndValue.itemOptionId, optionIdAndValue.itemOptionValueLabel, null);
									  }
									  
									  if (productId == null) {
										  productId = getCurrentParentItemId(itemInfo);
									  }
									  
								  }
								  
								  return productId;
							  };
							  
							  publishProductId(defaultProductIdProducer());
							  
							  application.getLayout().on('afterAppendView', function() {
								  publishProductId(defaultProductIdProducer());
							  });
							  
							  pdp.on('afterOptionSelection', function(event) {
								  var itemOptionId = null;
								  var itemOptionValueLabel = null;
								  var item = null;
								  var productId = null;
								  
								  var itemInfo = pdp.getItemInfo();
								  if (itemInfo != null && itemInfo['item'] != null) {
									  item = itemInfo['item'];
									  if (event) {
										  itemOptionId = event['itemOptionId'];
										  itemOptionValueLabel = event.value['label'];
									  } else {
										  var optionIdAndValue = getSelectedOptionIdAndLabel(itemInfo);
										  if (optionIdAndValue != null) {
											  itemOptionId = optionIdAndValue['itemOptionId'];
											  itemOptionValueLabel = optionIdAndValue['itemOptionValueLabel'];
										  }
									  }
									  
									  if (itemOptionId != null && itemOptionValueLabel != null) {
										  productId = getSelectedOptionItemId(item, itemOptionId, itemOptionValueLabel, defaultProductIdProducer);
									  }
									  
									  if (productId == null) {
										  productId = getCurrentParentItemId(itemInfo);
									  }
								  }
								  
								  publishProductId(productId);
							  });
							  resolve();
							});
						init(cartPromise, profilePromise, pdpChangeListenerPromise);
					} else {
						logMessage("Unable to find SuiteCommerce Application");
					}
				})(findApplication());
			})(settings);
		}

		var scriptTag = jQuery("script[data-bronto-integrations]");
		var accountId = scriptTag.data("bronto-integrations");
		if (scriptTag.attr("data-state") !== "loaded" && accountId) {
			scriptTag.attr("data-state", "loaded");
			loadSettings(BASE_URL + accountId + "/settings.js", function(response) {
				if (response instanceof Error) {
					logMessage(response.message);
				} else {
					processSettings(response);
				}
			});
		}
	});
}
