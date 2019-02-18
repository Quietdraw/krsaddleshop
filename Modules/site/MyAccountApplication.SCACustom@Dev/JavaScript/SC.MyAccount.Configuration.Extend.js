/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Configuration.js
// ----------------
// All of the applications configurable defaults
// Each section is comented with a title, please continue reading
define(
	'SC.MyAccount.Configuration.Extend'
,	[
		'SC.Configuration'
	,	'underscore'
	,	'jQuery'
	,	'PaymentWizard.Module.Invoice'
	,	'PaymentWizard.Module.Summary'
	,	'PaymentWizard.Module.ShowInvoices'
	,	'PaymentWizard.Module.CreditTransaction'
	,	'PaymentWizard.Module.PaymentMethod.Creditcard'
	,	'PaymentWizard.Module.Addresses'
	,	'PaymentWizard.Module.Confirmation'
	,	'PaymentWizard.Module.ShowCreditTransaction'
	,	'PaymentWizard.Module.ShowPayments'
	,	'PaymentWizard.Module.ConfirmationSummary'

	,	'OrderWizard.Module.CartSummary'
	,	'OrderWizard.Module.CartItems'
	,	'OrderWizard.Module.ShowShipments'
	,	'OrderWizard.Module.ShowPayments'
	,	'OrderWizard.Module.TermsAndConditions'
	,	'OrderWizard.Module.SubmitButton'
	,	'OrderWizard.Module.PaymentMethod.Selector'
	,	'OrderWizard.Module.PaymentMethod.Creditcard'
	,	'OrderWizard.Module.PaymentMethod.Invoice'
	,	'OrderWizard.Module.Address.Billing'

	,	'QuoteToSalesOrderWizard.Module.QuoteDetails'
	,	'QuoteToSalesOrderWizard.Module.Confirmation'

	,	'Header.View'
	,	'Utils'
	]

,	function (
		BaseConfiguration
	,	_
	,	jQuery
	,	PaymentWizardModuleInvoice
	,	PaymentWizardModuleSummary
	,	PaymentWizardModuleShowInvoices
	,	PaymentWizardModuleCreditTransaction
	,	PaymentWizardModulePaymentMethodCreditcard
	,	PaymentWizardModuleAddresses
	,	PaymentWizardModuleConfirmation
	,	PaymentWizardModuleShowCreditTransaction
	,	PaymentWizardModuleShowPayments
	,	PaymentWizardModuleConfirmationSummary

	,	OrderWizardModuleCartSummary
	,	OrderWizardModuleCartItems
	,	OrderWizardModuleShowShipments
	,	OrderWizardModuleShowPayments
	,	OrderWizardModuleTermsAndConditions
	,	OrderWizardModuleSubmitButton
	,	OrderWizardModulePaymentMethodSelector
	,	OrderWizardModulePaymentMethodCreditcard
	,	OrderWizardModulePaymentMethodInvoice
	,	OrderWizardModuleAddressBilling

	,	QuoteToSalesOrderWizardModuleQuoteDetails
	,	QuoteToSalesOrderWizardModuleConfirmation


	,	HeaderView
	,	Utils
	)
{
	'use strict';

	var Configuration = {
		
		customerSupportURL: '/contact'


		// Whats your return policy url.
		// If this is set to some value, a link to "Return Items" will appear on order details
		// eg: returnPolicyURL: '/s.nl/sc.5/.f'
	,	returnPolicyURL: '/return-policy'

	,	tracking: {
			// [Google Universal Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
			googleUniversalAnalytics: {
				propertyID: 'UA-6524357-1'
			,	domainName: 'checkout.krsaddleshop.com'
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
