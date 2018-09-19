/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*
@module ItemsKeyMapping

Item related models, like ItemDetails.Model, override its get() method to support high level item semantics defined here.
For example, attributes like '_url', '_name', '_images' are calculated taking into account matrix options, item type, etc.

Since this holds the mapping definition of whats returned by the search api / Commerce api for items and this semantics
is used across all the applications it is a good place to extenders to add its own high level item semantics or even
override existing ones.

For example, people may want to set that the name of the items are store in a custom item field instead of the display name field,
then you just change the mapping here instead of looking for that attribute in all templates and js files.

*/
define('ItemsKeyMapping.ComparePriceFix'
,	[	'ItemsKeyMapping',
		'SC.Configuration'
	,	'underscore'
	,	'Handlebars'
	,	'Utils'
	,	'UrlHelper'
	]
,	function (
		ItemsKeyMapping
	,	Configuration
	,	_
	,	Handlebars
	)
{
	'use strict';
	function _showInStockMessage(){
		return true;
	}
	function _comparePriceAgainst(item) {
			var prices = item.get('_priceDetails');

			if (prices && (!item.get('pricelevel12') || prices.onlinecustomerprice>item.get('pricelevel12')) )
			{
				if (prices.priceschedule)
				{
					return prices.priceschedule[0].price;
				}
				else
				{
					return prices.onlinecustomerprice;
				}
			}
			else
			{
				return item.get('pricelevel12');
			}
    }

    function _comparePriceAgainstFormated(item) {
			var prices = item.get('_priceDetails');

			if (prices && (!item.get('pricelevel12') || prices.onlinecustomerprice>item.get('pricelevel12')) )
			{
				if (prices.priceschedule)
				{
					return prices.priceschedule[0].price_formatted;
				}
				else
				{
					return prices.onlinecustomerprice_formatted;
				}
			}
			else
			{
				return item.get('pricelevel12_formatted');
			}
    }

    return {
        mountToApp: function mountToApp() {
            Configuration.itemKeyMapping = Configuration.itemKeyMapping || {};

            _.extend(Configuration.itemKeyMapping, {
                _comparePriceAgainst: _comparePriceAgainst,
                _comparePriceAgainstFormated: _comparePriceAgainstFormated
            });
        }
    };
});
