/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module GoogleTagManager

//@class GoogleTagManager @extends ApplicationModule Loads Google Tag Manager scripts
define('AcuityPlatform'
,	[	'Tracker'
	,	'underscore'
	,	'jQuery'
	,	'Backbone'
	,	'SC.Configuration.Extend'
]
,	function (
		Tracker
	,	_
	,	jQuery
	,	Backbone
	,	Configuration
	)
{
	'use strict';

	var win = window
	,	AcuityPlatform = {

		//@property {Boolean} doCallback Indicates if this module do a callback after some particular events
		//ie: when you do a log-in, we need to track that event before we navigate to the new page, otherwise the track of the event could be aborted
		doCallback: true

		//@method trackPageview
		//@param {String} url
		//@return {AcuityPlatform}
	,	trackPageview: function (url)
		{
			if (_.isString(url))
			{
				if(jQuery("#trackAllPages").length>0){
					jQuery("#trackAllPages").remove();
				}
				jQuery("body").append('<div id="trackAllPages"><iframe src="https://acuityplatform.com/Adserver/pxli/4395469647939297280" width="1" height="1"  MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" FRAMEBORDER="0" SCROLLING="no" BORDERCOLOR="#000000"></iframe></div>');
			}

			return this;
		}
	,	trackHomeView: function(){
			debugger;
			if(jQuery("#trackViewHome").length>0){
				jQuery("#trackViewHome").remove();
			}
			jQuery("body").append('<div id="trackViewHome"><iframe src="https://acuityplatform.com/Adserver/pxli/3111023962085488640" width="1" height="1"  MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" FRAMEBORDER="0" SCROLLING="no" BORDERCOLOR="#000000"></iframe></div>');
		}	
	,	trackViewCart: function(cart){
			if(jQuery("#trackCartView").length>0){
				jQuery("#trackCartView").remove();
			}
			jQuery("body").append('<div id="trackCartView"><iframe src="https://acuityplatform.com/Adserver/pxli/2793766215171512320" width="1" height="1"  MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" FRAMEBORDER="0" SCROLLING="no" BORDERCOLOR="#000000"></iframe></div>');
		}
	,	trackTransaction: function (transaction)
		{
			
			if(jQuery("#trackConversion").length>0){
				jQuery("#trackConversion").remove();
			}
			jQuery("body").append('<div id="trackConversion"><script src="https://acuityplatform.com/Adserver/pxlj/2757454902096670720?ext1='+transaction.get('subTotal')+'" type="text/javascript"></script></div>');	
			return this;
		}

		//@method trackProductList
		//@param {Backbone.Collection} items
		//@param {String} listName
		//@return {GoogleTagManager}
	,	trackProductList: function (items, listName)
		{
			var self = this;
			if(jQuery("#trackCategory").length>0){
				jQuery("#trackCategory").remove();
			}
			jQuery("body").append('<div id="trackCategory"><iframe src="https://acuityplatform.com/Adserver/pxli/6950245876677455872" width="1" height="1"  MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" FRAMEBORDER="0" SCROLLING="no" BORDERCOLOR="#000000"></iframe></div>');
			return this;
		}

		//@method trackProductClick
		//@param {Object} item
		//@return {GoogleTagManager}
	,	trackProductView: function (item)
		{
			if(jQuery("#trackProductView").length>0){
				jQuery("#trackProductView").remove();
			}
			jQuery("body").append('<div id="trackProductView"><iframe src="https://acuityplatform.com/Adserver/pxli/3415201154206865408" width="1" height="1"  MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" FRAMEBORDER="0" SCROLLING="no" BORDERCOLOR="#000000"></iframe></div>');
			return this;
		}

		//@method mountToApp
		//@param {ApplicationSkeleton} application
		//@return {Void}
	,	mountToApp: function (application)
		{
			Tracker.getInstance().trackers.push(AcuityPlatform);
		}
	};

	return AcuityPlatform;
});
