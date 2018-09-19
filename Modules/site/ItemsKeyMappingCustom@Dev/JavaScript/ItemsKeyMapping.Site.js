define('ItemsKeyMapping.Site', [
    'ItemsKeyMapping.ComparePriceFix'
],
function ItemsKeyMappingSite(
    ItemsKeyMappingComparePriceFix
) {
    'use strict';

    /**
     * Entry point for:
     *
     * ItemsKeyMapping.ComparePriceFix
     * ItemsKeyMapping.IsPurchasableWithStock
     */
    return {
        mountToApp: function mountToApp(application) {
            ItemsKeyMappingComparePriceFix.mountToApp(application);
        }
    };
});
