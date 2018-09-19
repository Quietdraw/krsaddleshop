/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module OrderWizard.Module.Confirmation
define(
	'OrderWizard.Module.Confirmation.Extend'
,	[
		'OrderWizard.Module.Confirmation'
	,	'SC.Configuration'
	,	'Wizard.Module'
	,	'Tracker'

	,	'order_wizard_confirmation_module.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		OrderWizardModuleConfirmation
	,	Configuration
	,	WizardModule
	,	Tracker

	,	order_wizard_confirmation_module_tpl

	,	Backbone
	,	_
	,	jQuery
	,	Utils
	)
{
	'use strict';

	// @class OrderWizard.Module.Confirmation @extends Wizard.Module
	return _.extend(OrderWizardModuleConfirmation.prototype,	{
		trackTransaction: function (confirmation)
		{
			var summary = confirmation.get('summary')
			,	transaction = {
					confirmationNumber: confirmation.get('tranid')
				,	subTotal: summary.subtotal
				,	total: summary.total
				,	taxTotal: summary.taxtotal
				,	shippingCost: summary.shippingcost
				,	handlingCost: summary.handlingcost
				,	products: new Backbone.Collection()
				}
			,	transactionModel = new Backbone.Model(transaction);

			confirmation.get('lines').each(function(line)
			{
				var item = line.get('item')
				,	sku = item.get('itemDisplay') || item.get('number')
				,	name = item.get('itemDisplay') || item.get('number')
				,	option = '';

				if (item.get('itemDisplay') && item.get('itemDisplay').indexOf(':') !== -1)
				{
					sku = jQuery.trim(item.get('itemDisplay').split(':')[1]);
					name = jQuery.trim(item.get('itemDisplay').split(':')[0]);
				}
				try{
					if (line.get('options'))
					{
						var options = line.get('options').split(String.fromCharCode(4));

						option = _.map(options, function(singleOption)
						{
							var opt = singleOption.split(String.fromCharCode(3));
							return opt[opt.length - 1];
						}).sort().join(', ');
					}
				}catch(e){
					
				}

				transactionModel.get('products').add(new Backbone.Model({
					sku: sku
				,	name: name
				,	category: item.get('category')
				,	rate: line.get('rate')
				,	quantity: line.get('quantity')
				,	options: option
				}));
			});

			Tracker.getInstance().trackTransaction(transactionModel);
		}
	});
});
