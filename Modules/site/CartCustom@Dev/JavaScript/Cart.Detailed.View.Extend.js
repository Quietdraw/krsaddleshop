/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Cart
define('Cart.Detailed.View.Extend'
,	[	
		'Cart.Detailed.View'
	,	'ErrorManagement'
	,	'Backbone.CompositeView'
	,	'Cart.Summary.View'
	,	'GlobalViews.Message.View'
	,	'Backbone.CollectionView'
	,	'ItemViews.Cell.Actionable.View'
	,	'ItemViews.RelatedItem.View'
	,	'RecentlyViewedItems.View'
	,	'ItemRelations.Related.View'
	,	'ItemRelations.Correlated.View'
	,	'Cart.Item.Summary.View'
	,	'Cart.Item.Actions.View'
	,	'SC.Configuration'
	,	'Backbone.FormView'

	,	'cart_detailed.tpl'
	, 	'Tracker'
	,	'jQuery'
	,	'Backbone'
	,	'underscore'
	,	'Utils'

	,	'jQuery.scStickyButton'
	]
,	function (
		CartDetailView
	,	ErrorManagement
	,	BackboneCompositeView
	,	CartSummaryView
	,	GlobalViewsMessageView
	,	BackboneCollectionView
	,	ItemViewsActionableView
	,	ItemViewsRelatedItemView
	,	RecentlyViewedItemsView
	,	ItemRelationsRelatedView
	,	ItemRelationsCorrelatedView
	,	CartItemSummaryView
	,	CartItemActionsView
	,	Configuration
	,	BackboneFormView

	,	cart_detailed_tpl

	,	Tracker
	,	jQuery
	,	Backbone
	,	_
	)
{
	'use strict';

	var colapsibles_states = {};

	// @class Cart.Detailed.View This is the Shopping Cart view @extends Backbone.View
	return _.extend(CartDetailView.prototype,{
		getContext: function ()
		{
			Tracker.getInstance().trackViewCart(this.model);
			var lines = this.model.get('lines')
			,	product_count = lines.length
			,	item_count = _.reduce(lines.models, function(memo, line){ return memo + line.get('quantity'); }, 0)
			,	product_and_items_count = '';

			if (product_count === 1)
			{
				if (item_count === 1)
				{
					product_and_items_count =  _('1 Product, 1 Item').translate();
				}
				else
				{
					product_and_items_count = _('1 Product, $(0) Items').translate(item_count);
				}
			}
			else
			{
				if (item_count === 1)
				{
					product_and_items_count = _('$(0) Products, 1 Item').translate(product_count);
				}
				else
				{
					product_and_items_count = _('$(0) Products, $(1) Items').translate(product_count, item_count);
				}
			}

			// @class Cart.Detailed.View.Context
			return {

					//@property {Boolean} showLines
					showLines: !!(lines && lines.length)
					//@property {Orderline.Collection} lines
				,	lines: lines
					//@property {String} productsAndItemsCount
				,	productsAndItemsCount: product_and_items_count
					//@property {Number} productCount
				,	productCount: product_count
					//@property {Number} itemCount
				,	itemCount: item_count
					//@property {String} pageHeader
				,	pageHeader: this.page_header
			};
			// @class Cart.Detailed.View
		}
	});
});
