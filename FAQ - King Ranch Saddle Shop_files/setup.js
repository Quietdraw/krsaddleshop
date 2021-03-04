(function() {
    // TODO IMPORTANT
    var evgAccount = "krsaddleshop";
    var evgDataset = "engage";
    if (!evgAccount || !evgDataset) {
        return;
    }

    if (typeof window.evergageHideSections !== "function" && typeof window.evergageReshowPersonalizedSectionsTimeout !== "number") {
        window.evergageHideSections = (function () {
            window.evergageReshowPersonalizedSectionsTimeout = -1;

            function evergageHideSections() {
                var personalizedSectionsString = "";
                if (arguments.length === 0) {
                    return;
                }
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] === "string") {
                        try {
                            if (arguments[i] === "body" || arguments[i] === "html") {
                                continue;
                            }
                            document.querySelector(arguments[i]);
                            if (personalizedSectionsString !== "") {
                                personalizedSectionsString += ", ";
                            }
                            personalizedSectionsString += arguments[i];
                        } catch (exception) {
                        }
                    }
                }
                if (personalizedSectionsString === "") {
                    return;
                }
                personalizedSectionsString += " { visibility: hidden !important; }";

                var head = document.head || document.getElementsByTagName("head")[0];
                var style = document.createElement("style");
                style.type = "text/css";
                style.setAttribute("class", "evergagePersonalizationSections");
                if (style.styleSheet) {
                    style.styleSheet.cssText = personalizedSectionsString;
                } else {
                    style.appendChild(document.createTextNode(personalizedSectionsString));
                }

                var maxTimeToWaitForPersonalization = 2500;
                if (typeof arguments[arguments.length - 1] === "number") {
                    maxTimeToWaitForPersonalization = arguments[arguments.length - 1];
                }
                clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
                window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                    try {
                        reshowPersonalizedSections();
                    } catch (e) {
                    }
                }, maxTimeToWaitForPersonalization);

                head.appendChild(style);
                var _aaq = window._aaq || [];
                _aaq.push(["personalizedSectionsHaveBeenHidden"]);
            }

            function reshowPersonalizedSections() {
                try {
                    if (typeof window.requestAnimationFrame === "function") {
                        window.requestAnimationFrame(reshowPersonalizedSectionsNow);
                    } else {
                        reshowPersonalizedSectionsNow();
                    }
                } catch (exception) {
                }
            }

            function reshowPersonalizedSectionsNow() {
                try {
                    var evergageFlickerStylesheets = document.getElementsByClassName("evergagePersonalizationSections");
                    for (var i = 0; i < evergageFlickerStylesheets.length; i++) {
                        evergageFlickerStylesheets[i].parentNode.removeChild(evergageFlickerStylesheets[i]);
                    }
                    if (typeof window._aaq === "object" && typeof window._aaq.push === "function") {
                        window._aaq.push(["personalizedContentHideTimedOut", new Date().getTime()]);
                    }
                    window.evergageReshowPersonalizedSectionsTimeout = -1;
                } catch (exception) {}
            }

            return evergageHideSections;
        }());
        window.evergageHideSections("[mybuyszone]");
    }

    var _aaq = window._aaq || (window._aaq = []);
    (function(){
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript'; g.defer = true; g.async = true;
        g.src = document.location.protocol + '//cdn.evgnet.com/beacon/' + evgAccount + '/' + evgDataset + '/scripts/evergage.min.js';
        s.parentNode.insertBefore(g, s);
    })();
}());
mybuys.base_initPage = mybuys.base_initPage || mybuys.initPage;
mybuys.initPage = function ()
{
		mybuys.set("egready","true");
	 //MAGNETIC FORCE PIXEL ALL PAGES
	//Create the pixel here and then fire it for all page types except purchase
		var jsNodePV = document.createElement('script');
		jsNodePV.setAttribute('type', 'text/javascript');
		jsNodePV.setAttribute('src', '//magnetic.t.domdex.com/42486/pix.js?t=c&for=Direct_KR+Saddle+Shop');
		 
	//MAGNETIC FORCE PIXEL PRODUCT DETAILS PAGE
	if(mybuys.params["pt"] === "prod")
	{
		var jsNode = document.createElement('script');
		jsNode.setAttribute('type', 'text/javascript');
		jsNode.setAttribute('src', '//magnetic.t.domdex.com/42489/pix.js?t=c&for=Direct_KR+Saddle+Shop');
		document.getElementsByTagName('body')[0].appendChild(jsNode);
		document.getElementsByTagName('body')[0].appendChild(jsNodePV);  
	}
	//MAGNETIC FORCE PIXEL CATEGORY PAGE
	else if(mybuys.params["pt"] === "cat" || mybuys.params["pt"] === "hcat")
	{
		var jsNode = document.createElement('script');
		jsNode.setAttribute('type', 'text/javascript');
		jsNode.setAttribute('src', '//magnetic.t.domdex.com/42488/pix.js?t=c&for=Direct_KR+Saddle+Shop');
		document.getElementsByTagName('body')[0].appendChild(jsNode);
		document.getElementsByTagName('body')[0].appendChild(jsNodePV);
	}  
	//MAGNETIC FORCE PIXEL CART PAGE
	else if(mybuys.params["pt"] === "cart")
	{
		var jsNode = document.createElement('script');
		jsNode.setAttribute('type', 'text/javascript');
		jsNode.setAttribute('src', '//magnetic.t.domdex.com/42490/pix.js?t=c&for=Direct_KR+Saddle+Shop');
		document.getElementsByTagName('body')[0].appendChild(jsNode);
		document.getElementsByTagName('body')[0].appendChild(jsNodePV);
	}
	//MAGNETIC FORCE PIXEL ORDER CONF PAGE
	else if (mybuys.params["pt"] === "purchase")
	{
		var order_id = mybuys.params["orderid"];
		var order_amount = mybuys.params["amount"];
		if(order_amount)
		{
			order_amount = order_amount.replace("$","").replace(",","");
		}
		var jsNode = document.createElement('script');
		jsNode.setAttribute('type', 'text/javascript');
		jsNode.setAttribute('src', '//magnetic.t.domdex.com/42493/pix.js?t=c&for=Direct_KR+Saddle+Shop&ord='+order_id+'&rev='+order_amount);
		document.getElementsByTagName('body')[0].appendChild(jsNode);
		
		var jsNode2 = document.createElement('script');
		jsNode2.setAttribute('type', 'text/javascript');
		jsNode2.setAttribute('src', '//magnetic.t.domdex.com/42492/pix.js?t=c&for=Direct_KR+Saddle+Shop&ord='+order_id+'&rev='+order_amount);
		document.getElementsByTagName('body')[0].appendChild(jsNode2);
	}
	//MAGNETIC FORCE PIXEL HOME PAGE
	else if(mybuys.params["pt"] === "h")
	{
		var jsNode = document.createElement('script');
		jsNode.setAttribute('type', 'text/javascript');
		jsNode.setAttribute('src', '//magnetic.t.domdex.com/42487/pix.js?t=c&for=Direct_KR+Saddle+Shop');
		document.getElementsByTagName('body')[0].appendChild(jsNode);
		document.getElementsByTagName('body')[0].appendChild(jsNodePV);
	}
	//MAGNETIC FORCE PIXEL OTHER PAGES
	else
	{
		var jsNode = document.createElement('script');
		jsNode.setAttribute('type', 'text/javascript');
		jsNode.setAttribute('src', '//magnetic.t.domdex.com/42491/pix.js?t=c&for=Direct_KR+Saddle+Shop');
		document.getElementsByTagName('body')[0].appendChild(jsNode);
		document.getElementsByTagName('body')[0].appendChild(jsNodePV);
	}
	//END MAGNETIC FORCE PIXELS
	 
    this.base_initPage();
}

mybuys.setClient("KRSADDLESHOP");

mybuys.enableZones();

mybuys.setFailOverMsecs(5000);
