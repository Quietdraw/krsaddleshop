var _USAGE_THRESHOLD_LIMIT = 500;

function deleteItems(){
	var itemstoremove = [];
	var searchId = nlapiGetContext().getSetting('SCRIPT', 'custscript_item_search');
	nlapiLogExecution('DEBUG', 'id', searchId);
	var search = getAllSearchResults('item', null, null, searchId);
	nlapiLogExecution('DEBUG', 'items', search.length);
	for (var i = 0; i < search.length; i++) {
		itemstoremove.push(parseInt(search[i].getId()));
	}
	var categories = nlapiSearchRecord(
	'commercecategory',
	null,
	[
		new nlobjSearchFilter('custrecord_council_category', null, 'is', 'F')
	], [
	new nlobjSearchColumn('name')
	]);
	nlapiLogExecution('DEBUG', 'categories', categories.length);
	var categoriesIds = [];
	for (var i = 0; i < categories.length; i++) {
		categoriesIds.push(categories[i].getId());
	}
	nlapiLogExecution('DEBUG', 'categories', JSON.stringify(categoriesIds));
	for (var i = 0; i < categoriesIds.length; i++) {
		rescheduleScript();
		try {
			var categoryRecord = nlapiLoadRecord('commercecategory', categoriesIds[i]);
			var items = categoryRecord.getLineItemCount('items');
			for (var j = items; j >= 1; j--) {
				var item = categoryRecord.getLineItemValue('items', 'item', j);
				if(itemstoremove.indexOf(parseInt(item)) >= 0){
					nlapiLogExecution('AUDIT', 'REMOVING', 'Item: ' + item + ' from category' + categoriesIds[i]);
					categoryRecord.removeLineItem('items', j);
				}
			}
			nlapiSubmitRecord(categoryRecord, true, true);	
		} catch (e){
			nlapiLogExecution('ERROR', 'error in category ' + categoriesIds[i], e);
		}
	}
}

function rescheduleScript() {
    var startUsage = nlapiGetContext().getRemainingUsage();

    if(startUsage < (parseInt(_USAGE_THRESHOLD_LIMIT, 10) + parseInt(20, 10))) {
        var ys = nlapiYieldScript();
        if(ys.status == 'FAILURE') {
            nlapiLogExecution('AUDIT', "Unable to Yield " + ys.reason + "<br/>Inforamtion: " + ys.information);
        }
        nlapiLogExecution("AUDIT", "After resume with: " + startUsage + " remaining vs max: " + _USAGE_THRESHOLD_LIMIT);
    }
}

function getAllSearchResults(record_type, filters, columns, searchId)
{
	var search;
	if (searchId) {
		search = nlapiLoadSearch(record_type, searchId);
	} else {
		search = nlapiCreateSearch(record_type, filters, columns);
    	search.setIsPublic(true);
	}
    var searchRan = search.runSearch()
        ,   bolStop = false
        ,   count = 1000
        ,   init  = true
        ,   intMaxReg = 1000
        ,   intMinReg = 0
        ,   result = [];

    while (count == 1000 || init) {
        rescheduleScript();
        var ds = searchRan.getResults(intMinReg, intMaxReg);
        result = result.concat(ds);
        intMinReg = intMaxReg;
        intMaxReg += 1000;
        init = false;
        count = ds.length;
    }

    return result;
}