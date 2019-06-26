/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module ItemDetails
define(
	'ItemDetails.View.Custom'
,	[
		'ItemDetails.View'
	,	'Facets.Translator'
	,	'ItemDetails.Collection'

	,	'item_details.tpl'
	,	'quick_view.tpl'

	,	'Backbone.CollectionView'
	,	'ItemDetails.ImageGallery.View'
	,	'ItemViews.Price.View'
	,	'GlobalViews.StarRating.View'
	,	'ProductReviews.Center.View'
	,	'ItemViews.Option.View'
	,	'ItemViews.Stock.View'
	,	'ItemViews.RelatedItem.View'
	,	'ItemRelations.Correlated.View'
	,	'ItemRelations.Related.View'
	,	'SocialSharing.Flyout.View'
	,	'Profile.Model'
	,	'Tracker'

	,	'SC.Configuration'
	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'underscore'
	,	'jQuery'
	,	'RecentlyViewedItems.Collection'
	,	'LiveOrder.Model'

	,	'jquery.zoom'
	,	'jQuery.bxSlider'
	,	'jQuery.scPush'
	,	'jQuery.scSeeMoreLess'
	,	'jQuery.overflowing'
	]
,	function (
		ItemDetails
	,	FacetsTranslator
	,	ItemDetailsCollection

	,	item_details_tpl
	,	quick_view_tpl

	,	BackboneCollectionView
	,	ItemDetailsImageGalleryView
	,	ItemViewsPriceView
	,	GlobalViewsStarRatingView
	,	ProductReviewsCenterView
	,	ItemViewsOptionView
	,	ItemViewsStockView
	,	ItemViewsRelatedItemView
	,	ItemRelationsCorrelatedView
	,	ItemRelationsRelatedView
	,	SocialSharingFlyoutView
	,	ProfileModel
	,	Tracker

	,	Configuration
	,	Backbone
	,	BackboneCompositeView
	,	_
	,	jQuery
	,	RecentlyViewedItemsCollection
	,	LiveOrderModel
	)
{
	'use strict';

	var colapsibles_states = {};

	//@class ItemDetails.View Handles the PDP and quick view @extend Backbone.View
	return _.extend(ItemDetails.prototype, {


		events: _.extend(ItemDetails.prototype.events,{
			'click [data-id="custcol_personstyle"] .item-views-option-color-tile': 'validateStyleInformation'
		,	'blur  input#option-custcol_personthreeinitials': 'validateStyleInformation'
		,	'click [data-custom-action="displayStyleMessage"]': 'displayStyleMessage'
		})

		// @method refreshInterface
		// Computes and store the current state of the item and refresh the whole view, re-rendering the view at the end
		// This also updates the URL, but it does not generates a history point
		//@return {Void}
	,	refreshInterface: function ()
		{
			var self = this;

			var focused_element = this.$(':focus').get(0);

			this.focusedElement = focused_element ? SC.Utils.getFullPathForElement(focused_element) : null;

			if (!this.inModal)
			{
				Backbone.history.navigate(this.options.baseUrl + this.model.getQueryString(), {replace: true});
			}

			//TODO This should be a render, as the render aim to re-paint a view and the showContent aims to navigations
			self.showContent({dontScroll: true});

			//Call Personalization Scripts
			//this.validateStyleInformation();
		}
		,	afterAppend: function ()
			{
				var overflow = false;
				this.focusedElement && this.$(this.focusedElement).focus();

				if (this.tabNavigation)
				{
					var current_index = this.$(':input').index(this.$(this.tabNavigationCurrent).get(0))
					,	next_index = this.tabNavigationUpsidedown ? current_index - 1 : current_index + 1;

					this.$(':input:eq('+ next_index +')').focus();
				}

				this.storeColapsiblesStateCalled ? this.resetColapsiblesState() : this.storeColapsiblesState();

				RecentlyViewedItemsCollection.getInstance().addHistoryItem(this.model);

				if (this.inModal)
				{
					var $link_to_fix = this.$el.find('[data-name="view-full-details"]');
					$link_to_fix.mousedown();
					$link_to_fix.attr('href', $link_to_fix.attr('href') + this.model.getQueryString());
				}

				this.$('#item-details-content-container-0').overflowing('#item-details-info-tab-0', function ()
				{
					overflow = true;
				});

				if(!overflow)
				{
					this.$('.item-details-more').hide();
				}
				//Call Personalization Scripts
				this.validateStyleInformation();

		}
		//@method getContext
		//@return {ItemDetails.View.Context}
	,	getContext: function ()
		{
			var model = this.model
			,	thumbnail = model.get('_images', true)[0] || model.get('_thumbnail')
			,	selected_options = model.getSelectedOptions()

			,	quantity = model.get('quantity')
			,	min_quantity = model.get('_minimumQuantity', true)
			,	min_disabled = false;


			if (model.get('quantity') <= model.get('_minimumQuantity', true))
			{
				// TODO: resolve error with dependency circular.
				if (require('LiveOrder.Model').loadCart().state() === 'resolved')
				{
					// TODO: resolve error with dependency circular.
					var itemCart = SC.Utils.findItemInCart(model, require('LiveOrder.Model').getInstance())
					,	total = itemCart && itemCart.get('quantity') || 0;

					if ((total + model.get('quantity')) <= model.get('_minimumQuantity', true))
					{
						min_disabled = true;
					}
				}
				else
				{
					min_disabled = false;
				}
			}

			// ADDED BY QUIETDRAW
			//debugger;

			//@class ItemDetails.View.Context
			return {
				//@property {ItemDetails.Model} model
				model: model
				//@property {Boolean} isPriceEnabled
			,	isPriceEnabled: !ProfileModel.getInstance().hidePrices()
				//@property {Array<ItemDetailsField>} details
			,	details: this.details
				//@property {Boolean} showDetails
			,	showDetails: this.details.length > 0
				//@property {Boolean} isItemProperlyConfigured
			,	isItemProperlyConfigured: model.isProperlyConfigured()
				//@property {Boolean} showQuantity
			,	showQuantity: model.get('_itemType') === 'GiftCert'
				//@property {Boolean} showRequiredReference
			,	showRequiredReference: model.get('_itemType') === 'GiftCert'
				//@property {Boolean} showSelectOptionifOutOfStock
			,	showSelectOptionMessage : !model.isSelectionComplete() && model.get('_itemType') !== 'GiftCert'
				//@property {Boolean} showMinimumQuantity
			,	showMinimumQuantity: !! min_quantity && min_quantity > 1
				//@property {Boolean} isReadyForCart
			,	isReadyForCart: model.isReadyForCart()
				//@property {Boolean} showReviews
			,	showReviews: this.reviews_enabled
				//@property {String} itemPropSku
			,	itemPropSku: '<span itemprop="sku">' + model.get('_sku', true) + '</span>'
				//@property {String} item_url
			,	item_url : model.get('_url') + model.getQueryString()
				//@property {String} thumbnailUrl
			,	thumbnailUrl : this.options.application.resizeImage(thumbnail.url, 'main')
				//@property {String} thumbnailAlt
			,	thumbnailAlt : thumbnail.altimagetext
				//@property {String} sku
			,	sku : model.get('_sku', true)
				//@property {Boolean} isMinQuantityOne
			,	isMinQuantityOne : model.get('_minimumQuantity', true) === 1
				//@property {Number} minQuantity
			,	minQuantity : min_quantity
				//@property {Number} quantity
			,	quantity : quantity
				//@property {Boolean} isMinusButtonDisabled
			,	isMinusButtonDisabled: min_disabled || model.get('quantity') === 1
				//@property {Boolean} hasCartItem
			,	hasCartItem : !!model.cartItemId
				//@property {Array} selectedOptions
			,	selectedOptions: selected_options
				//@property {Boolean} hasSelectedOptions
			,	hasSelectedOptions: !!selected_options.length
				//@property {Boolean} hasAvailableOptions
			,	hasAvailableOptions: !!model.getPosibleOptions().length
				//@property {Boolean} isReadyForWishList
			,	isReadyForWishList: model.isReadyForWishList()

			};
		}
		,validateStyleInformation: function ()
		{

			//If style is checked
			var $styleInputText = this.$("#option-custcol_personthreeinitials");
			var $styleSelected  = this.$("[data-id='custcol_personstyle'] a[data-active='true']").length;
			var $optionButton   = this.$('.item-details-add-to-cart-button');

			if($styleInputText.length > 0){
				//If Both Conditions are OK
				if(($styleSelected == 1 && $styleInputText.val() == "") || ($styleSelected == 0 && $styleInputText.val() != "")){
						$optionButton.removeAttr('data-type');
						$optionButton.attr('data-custom-action','displayStyleMessage');
				}else{
						$optionButton.attr('data-type','add-to-cart');
						$optionButton.removeAttr('data-custom-action');
				}
			}
		}
		,displayStyleMessage: function (e){
			e.preventDefault();
			alert('Please select a style (step 1) and the initials (step 2) before add this item to the cart.');
		}

	});
});

//@class ItemDetails.View.Initialize.Parameters
//@property {ItemDetails.Model} model
//@property {String} baseUrl
//@property {ApplicationSkeleton} application
