/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module GoogleAdWords
// Adds GoogleAdWords tracking pixel on the checkout confirmation page.
define('FacebookTracking'
,	[	'Tracker'
	,	'jQuery'
	]
,	function (
		Tracker
	,	jQuery
	)
{
	'use strict';

	// @lass GoogleAdWords Adds GoogleAdWords tracking pixel on the checkout confirmation page. @extends ApplicationModule
	var FacebookTracking = {
		trackPageview: function (url)
		{
			var fbq = window.fbq ||null;
			if(fbq){
				fbq('track', 'PageView');
			}
			if (_.isString(url))
			{
				url = url.indexOf("?") >= 0? url.split("?")[0]:url
				if(url =="/shipping/address" || url == "/shipping/method" || url =="/billing" || url == "/review"){
					var fbq = window.fbq || null;
					if(fbq)
					fbq('track', 'InitiateCheckout', {
				    value:this.application._layoutInstance.currentView.model.get("summary").subtotal,
				    currency: 'USD',
				  });

				}

			}

			return this;
		}
	,	trackProductView: function (item)
		{
			var price = item.getPrice();
			var fbq = window.fbq || null;
			if(fbq)
			fbq('track', 'ViewContent', {
		    value: ((price.price) ? price.price : 0).toFixed(2),
		    currency: 'USD',
		    content_ids: item.get('_sku', true)
		  });
			return this;
		}
	,	trackAddToCart: function (item)
		{
			if (item)
			{
				var price = item.getPrice();
				var fbq = window.fbq || null;
				if(fbq)
				fbq('track', 'AddToCart', {
			    value: ((price.price) ? price.price : 0).toFixed(2),
			    currency: 'USD',
			    content_ids: item.get('_sku', true)
			  });
			}

			return this;
		}
	,	trackTransaction: function (order)
		{
			var fbq = window.fbq || null;
			if(fbq)
			fbq('track', 'Purchase', {
				 value: order.get('subTotal'),
				 currency: 'USD'
			 });
			return this;
		}
	,	loadScript: function(){
			jQuery.getScript('https://connect.facebook.net/en_US/fbevents.js').done(function(date){
				var fbq = window.fbq || null;
				if(fbq){
					fbq('init', '231741014186809');
					fbq('track', 'PageView');
				}

			})
		}
	,	mountToApp: function (application)
		{
				this.loadScript()
				this.application = application;
				Tracker.getInstance().trackers.push(FacebookTracking);
		}
	};

	return FacebookTracking;
});
