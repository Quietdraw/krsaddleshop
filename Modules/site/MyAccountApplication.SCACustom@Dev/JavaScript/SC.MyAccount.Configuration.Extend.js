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
		navigationData: [
	{
			text: _('New Arrivals').translate()
		,	href: '/new-arrivals/'
		,	'class': 'header-menu-level1-anchor'
		, data: {
					touchpoint: 'search'
					, hashtag: '#new-arrival/true'
				}
	},
	{
			text: _('Ranch Home').translate()
		,	href: '/ranch-home'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
				{
					text: _('Seating').translate()
				,	href: '/seating'
				,	'class': 'header-menu-level3-anchor'
				, data: {
					touchpoint: 'search'
					, hashtag: '#custitem_websubcat/Seating'
				}
				},
				{
			text: _('Decor Accessories').translate()
		,	href: '/ranch-home/decor-accessories'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Decor-Accessories'
			}
		},
		{
			text: _('Dinnerware').translate()
		,	href: '/ranch-home/dinnerware'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Dinnerware'
			}
		},
		{
			text: _('Table Decor').translate()
		,	href: '/ranch-home/table-decor'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Table-Decor'
			}
		},
		{
			text: _('Glassware').translate()
		,	href: '/ranch-home/glassware'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Glassware'
			}
		},
		{
			text: _('Flatware').translate()
		,	href: '/ranch-home/flatware'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Flatware'
			}
		},
		{
			text: _('Foods').translate()
		,	href: '/ranch-home/foods'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Foods'
			}
		},
		{
			text: _('Books').translate()
		,	href: '/ranch-home/books'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Books'
			}
		},
		{
			text: _('Accent Tables').translate()
		,	href: '/ranch-home/accent-tables'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Accent-Tables'
			}
		},
		{
			text: _('Bar Stools').translate()
		,	href: '/ranch-home/bar-stools'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Bar-Stools'
			}
		},
		{
			text: _('Beds & Bedding').translate()
		,	href: '/ranch-home/beds-bedding'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Beds--AND--Bedding'
			}
		}
			,	{
					text: _('Wall & Art Decor').translate()
				,	href: 'wall-art-decor'
				,	'class': 'header-menu-level3-anchor'
				, data: {
					touchpoint: 'home'
					, hashtag: '#custitem_websubcat/Wall--AND--Art-Decor'
				}
				},
						{
			text: _('Pillows & Throws').translate()
		,	href: 'pillows-throws'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: 'custitem_websubcat/Pillows--AND--Throws'
			}
		},
		{
			text: _('Rugs &  Rug Rails').translate()
		,	href: 'rugs-rails'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Rugs--AND--Rug-Rails'
			}
		},
		{
			text: _('Lighting & Fireplace').translate()
		,	href: '/ranch-home/lighting-fireplace'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Lighting--AND--Fireplace'
			}
		},
			]
		}
	,{
			text: _('Office').translate()
			,	href: '/office'
			,	'class': 'header-menu-level1-anchor'
			,	categories: [
				{
					text: _('Briefcases').translate()
				,	href: '/office/briefcases'
				,	'class': 'header-menu-level3-anchor'
				, data: {
					touchpoint: 'home'
					, hashtag: '#custitem_websubcat/Briefcases'
				}
				},
						{
			text: _('Agendas & Tablet Cases').translate()
		,	href: '/office/agendas-tablet'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Agendas--AND--Tablet-Cases'
			}
		},
		{
			text: _('Office & Desk Accessories').translate()
		,	href: '/office/office-desk-accessories'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Office--AND--Desk-Accessories'
			}
		},
		{
			text: _('Furniture').translate()
		,	href: '/office/furniture'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Furniture'
			}
		}
		]
        },
      	{
			text: _('Luggage').translate()
		,	href: '/luggage'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
		{
			text: _('Carry Ons & Duffels').translate()
		,	href: '/luggage/carryons-duffels'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Carry-Ons--AND--Duffels'
			}
		},
		{
			text: _('Rolling Bags').translate()
		,	href: '/luggage/rolling-bags'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Rolling-Bags'
			}
		},
		{
			text: _('Hanging Bags').translate()
		,	href: '/luggage/hanging-bags'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Hanging-Bags'
			}
		},
		{
			text: _('Shave Cases').translate()
		,	href: '/luggage/shave-cases'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Shave-Cases'
			}
		}
		]
        },
      	{
			text: _('Women').translate()
		,	href: '/women'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
				{
					text: _('Handbags & Wallets').translate()
				,	href: '/women/handbags-wallets'
				,	'class': 'header-menu-level3-anchor'
				,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Handbags--AND--Wallets'
			}
		},
		{
			text: _('Women\'s Apparel').translate()
		,	href: '/women/womens-apparel'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Womens-Apparel'
			}
		},
		{
			text: _('Women\'s Boots').translate()
		,	href: '/women/womens-boots'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Womens-Boots'
			}
		},
		{
			text: _('Jewelry').translate()
		,	href: '/women/jewelry'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Jewelry'
			}
		},
		{
			text: _('Women\'s Accessories').translate()
		,	href: '/women/accessories'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Womens-Accessories'
			}
		}
		]
		}
,	{
			text: _('Men').translate()
		,	href: '/men'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
				{
					text: _('Men\'s Shirts & Pants').translate()
				,	href: '/men/shirts-pants'
				,	'class': 'header-menu-level3-anchor'
				,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Mens-Shirts--AND--Pants'
			}
		},
//		{
//			text: _('Men\'s Vests & Jackets').translate()
//		,	href: '/men/men-vest-jackets'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//				, hashtag: '#custitem_websubcat/Mens-Vests--AND--Jackets'
//			}
//		},
		{
			text: _('Belts & Buckles').translate()
		,	href: '/men/belts-buckles'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Belts--AND--Buckles'
			}
		},
		{
			text: _('Men\'s Boots & Shoes').translate()
		,	href: '/men/boots-shoes'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Mens-Boots--AND--Shoes'
			}
		},
		{
			text: _('Wallets & Money Clips').translate()
		,	href: '/men/wallet-money-clips'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Wallets--AND--Money-Clips'
			},
		},
		{
			text: _('Hats & Caps').translate()
		,	href: '/men/hats-caps'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Hats--AND--Caps'
			}
		},
		{
					text: _('Men\'s Accessories').translate()
				,	href: '/men/men-accessories'
				,	'class': 'header-menu-level3-anchor'
				,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Mens-Accessories'
			}
				}
			]
		}
,
{
			text: _('YOUTH').translate()
		,	href: '/youth'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
				{
						text: _('Youth Apparel').translate()
					,	href: '/youth/apparel'
					,	'class': 'header-menu-level3-anchor'
					,	data: {
						touchpoint: 'home'
					,	hashtag: '#custitem_websubcat/Youth-Apparel'
					}
				},
				{
						text: _('Youth Accessories').translate()
					,	href: '/youth/accessories'
					,	'class': 'header-menu-level3-anchor'
					,	data: {
						touchpoint: 'home'
					,	hashtag: '#custitem_websubcat/Youth-Accessories'
					}
				}
			]
		}
,	{
			text: _('Outdoors').translate()
		,	href: '/outdoors'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
				{
					text: _('Gun Cases').translate()
				,	href: '/outdoors/gun-cases'
				,	'class': 'header-menu-level3-anchor'
				,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Gun-Cases'
			}
				},
						{
			text: _('Shooting Bags & Accessories').translate()
		,	href: '/outdoors/shooting-bags-accessories'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Shooting-Bags--AND--Accessories'
			}
		},
//		{
//			text: _('Hunting Apparel & Boots').translate()
//		,	href: '/outdoors/hunting-apparel-boots'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//			,	hashtag: '#custitem_websubcat/Hunting-Apparel--AND--Boots'
//			}
//		},
//		{
//			text: _('Caps').translate()
//		,	href: '/outdoors/caps'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//			,	hashtag: '#custitem_websubcat/Caps'
//			}
//		},
		{
			text: _('Knives').translate()
		,	href: '/outdoors/knives'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Knives'
			},
		},
			]
		}
,	{
			text: _('Saddles').translate()
		,	href: '/saddles'
		,	'class': 'header-menu-level1-anchor'
			// @property {Array<NavigationData>} categories
		,	categories: [
				{
					text: _('Western Saddles').translate()
				,	href: '/saddles/western-saddles'
				,	'class': 'header-menu-level3-anchor'
				,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Western-Saddles'
			}
				},
						{
			text: _('Saddle Stands').translate()
		,	href: '/saddles/saddle-stands'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
				, hashtag: '#custitem_websubcat/Saddle-Stands'
			}
		},
		{
			text: _('Saddle Accessories').translate()
		,	href: '/saddles/saddle-accessories'
		,	'class': 'header-menu-level3-anchor'
		,	data: {
				touchpoint: 'home'
			,	hashtag: '#custitem_websubcat/Saddle-Accessories'
			}
		},
			]
		},
//		{
//			text: _('Outlet').translate()
//		,	href: '/outlet'
//		,	'class': 'header-menu-level1-anchor'
//			// @property {Array<NavigationData>} categories
//		,	categories: [
//				{
//					text: _('Ranch Home Outlet').translate()
//				,	href: '/outlet/ranch-home'
//				,	'class': 'header-menu-level3-anchor'
//				,	data: {
//				touchpoint: 'home'
//			,	hashtag: '#custitem_websubcat/'
//			}
//				},
//						{
//			text: _('Womens Outlet').translate()
//		,	href: '/outlet/womens'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//				,	hashtag: '#custitem_websubcat/'
//			}
//		},
//		{
//			text: _('Mens Outlet').translate()
//		,	href: '/outlet/mens'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//			,	hashtag: '#search'
//			}
//		},
//		{
//			text: _('Outdoors Outlet').translate()
//		,	href: '/outlet/outdoors'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//			,	hashtag: '#custitem_websubcat/'
//			}
//		},
//		{
//			text: _('Office Outlet').translate()
//		,	href: '/outlet/office'
//		,	'class': 'header-menu-level3-anchor'
//		,	data: {
//				touchpoint: 'home'
//			,	hashtag: '#custitem_websubcat/'
//			}
//		},
//			]
//		}
{
			text: _('Sale').translate()
		,	href: '/outlet/true'
		,	'class': 'header-menu-level1-anchor'
		, data: {
					touchpoint: 'search'
					, hashtag: '#outlet/true'
				}
	},
		],
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
