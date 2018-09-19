var _USAGE_THRESHOLD_LIMIT = 500;
var SITE_ID = 1;
var FOLDER_ID = 232839;
function map() {
	var searchResult = getAllSearchResults('sitecategory', null, [
		new nlobjSearchColumn('internalid')
		]);
	var order = [];

	for (var i = 0; i < searchResult.length; i++) {
		rescheduleScript();
		var categoryId = searchResult[i].getValue('internalid');
		var category = nlapiLoadRecord('sitecategory', categoryId);
		if(category.getFieldValue('website') == SITE_ID){
            var categoryname = category.getFieldValue('itemid')
			for(var j = 1; j <= category.getLineItemCount('presentationitem'); j++){
				order.push({
					category: category.id,
                    categoryName: categoryname,
					item: category.getLineItemValue('presentationitem', 'item', j),
                    itemName: category.getLineItemValue('presentationitem', 'presentationitem_display', j),
					order: j
				});
			}	
		}
	}

	var result = JSON.stringify(order);
	var file = nlapiCreateFile('categorymap.txt', 'PLAINTEXT', result);
	file.setFolder(FOLDER_ID);
	nlapiSubmitFile(file);
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

function getAllSearchResults(record_type, filters, columns)
{
    var search = nlapiCreateSearch(record_type, filters, columns);
    search.setIsPublic(true);
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