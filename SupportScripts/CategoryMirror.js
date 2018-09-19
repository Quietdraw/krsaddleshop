function createRecords(){
	var level1 = nlapiSearchRecord(
	'commercecategory',
	null,
	[
		new nlobjSearchFilter('primaryparent', null, 'anyof', '@NONE@'),
		new nlobjSearchFilter('custrecord_council_category', null, 'is', 'F')
	], [
	new nlobjSearchColumn('name')
	]);
	var level1Ids = [];
	for (var i = 0; i < level1.length; i++) {
		level1Ids.push(level1[i].getId());
	}

	var level2 = nlapiSearchRecord(
		'commercecategory',
		null,
		[
			new nlobjSearchFilter('primaryparent', null, 'anyof', level1Ids),
			new nlobjSearchFilter('custrecord_council_category', null, 'is', 'F')
		], [
			new nlobjSearchColumn('name'),
	        new nlobjSearchColumn('primaryparent')
		]);

	for (var i = 0; i < level2.length; i++) {
		var parentName = nlapiLookupField('commercecategory', level2[i].getValue('primaryparent'), ['name']);
		nlapiCreateRecord('customrecord_sc_featured_categories', {
			'name': parentName.name + '-' + level2[i].getValue('name'),
			'custrecord_sc_fc_category': level2[i].getId()
		});
	}
}