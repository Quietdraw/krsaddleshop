/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*
@module CheckoutApplication
@class SCA.Checkout.Configuration
The front end Configuration file for Checkout application.

The most important part is the property checkoutSteps that defines the full checkout wizard experience and it is fully configurable by declaring steps and steps groups that contains WizardModules, this are, views that ask the user for a certain information required by te Checkout process.

There are three supported and well-tested checkout steps configurations: The 'Standard flow', the 'One Page Checkout' (OPC) and the 'Billing first' flow.

By defuault the Standard Flow is used, but you can easily switch to OPC by just replacing the dependency 'SC.Checkout.Configuration.Steps.Standard' with 'SC.Checkout.Configuration.Steps.OPC' in this file.
*/
define(
	'SC.Checkout.Configuration.Extend'
,	[
		'SC.Configuration'
	,	'underscore'
	,	'jQuery'
	,	'Utils'

		// Checkout steps! Change below to switch the flow options:
		// Standard 	 : 	'SC.Checkout.Configuration.Steps.Standard'
		// OPC 			 : 	'SC.Checkout.Configuration.Steps.OPC'
		// billing first :  'SC.Checkout.Configuration.Steps.BillingFirst'

	,	'SC.Checkout.Configuration.Steps.Standard'

	]
,	function (
		BaseConfiguration
	,	_
	,	jQuery
	,	Utils
	,	CheckoutConfigurationSteps
	)
{
	'use strict';

	//window.screen = false; //always comment this line on production !!
	// Calculates the width of the device, it will try to use the real screen size.
	var screen_width = Utils.getViewportWidth();

	var Configuration = {// You need to set up both popertyID and domainName to make the default trackers work
		tracking: {
			// [Google Universal Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
			googleUniversalAnalytics: {
				propertyID: ''
			,	domainName: ''
			}
			,	googleTagManager: {
						id: "GTM-559CRGV",
						dataLayerName: "dataLayer"
				}
		},
		logoUrl: _.getAbsoluteUrl('img/KRSSwebret.png')
	};
	//Deep extend
	jQuery.extend(true, BaseConfiguration, Configuration);

	return BaseConfiguration;

});
