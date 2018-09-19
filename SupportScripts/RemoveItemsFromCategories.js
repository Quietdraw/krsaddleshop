/**
 *@NApiVersion 2.x
 *@NScriptType MapReduceScript
 *@NScriptName SNP Portal | Merge Customers
 *@NScriptId _snpp_merge_customers
 */
define([
        'N/search',
        'N/task',
        'N/record',
        'N/runtime',
        'N/currency',
        './underscore.js'
    ], function (
        n_search,
        n_task,
        n_record,
        n_runtime,
        n_currency,
        _) {

        var count = 0;

        return {

            config: {
                exitOnError: false //default
            },

            getInputData: function ()
            {

                log.error('--- Starting Remove Process ---');

                var returnauthorizationSearchObj = n_search.create({
                    type: "returnauthorization",
                    filters: [
                        ["type","anyof","RtnAuth"],
                        "AND",
                        ["mainline","is","T"],
                        "AND",
                        ["custbody_snpp_is_from_shopify","is","T"],
                        "AND",
                        ["customermain.custentity_snpp_processed_customer","is","F"],
                        "AND",
                        ["formulanumeric: CASE WHEN {customermain.internalid} <> {custbody_snpp_cs_customer.id} THEN 1 ELSE 0 END","equalto","1"]
                    ],
                    columns: [
                        n_search.createColumn({
                            name: "email",
                            join: "customerMain"
                        }),
                        n_search.createColumn({
                            name: "internalid",
                            join: "customerMain"
                        }),
                        "custbody_snpp_cs_customer",
                        n_search.createColumn({
                            name: "formulatext",
                            formula: "{custbody_snpp_cs_customer.id}"
                        })
                    ]
                });

                return returnauthorizationSearchObj
            },

            map: function(context) {
                try {

                    log.error('context.value', context.value);

                    var rawData = JSON.parse(context.value);
                    var cashSaleCustomer = parseInt(rawData.values['formulatext'], 10);
                    var returnCustomer = parseInt(rawData.values['internalid.customerMain'].value, 10);

                    log.error('----- Flagging customer ' + returnCustomer + ' as processed -----');

                    n_record.submitFields({
                        type: n_record.Type.CUSTOMER,
                        id: returnCustomer,
                        values: {
                            custentity_snpp_processed_customer: true
                        },
                        options: {
                            enableSourcing: false,
                            ignoreMandatoryFields: true
                        }
                    });

                    if(!!cashSaleCustomer && !!returnCustomer && cashSaleCustomer !== returnCustomer) {
                        log.error('----- About to Merge customer ' + returnCustomer + ' into ' + cashSaleCustomer + ' -----');
                        var manager = n_task.create({taskType: n_task.TaskType.ENTITY_DEDUPLICATION});
                        manager.entityType = n_task.DedupeEntityType.CUSTOMER;
                        manager.dedupeMode = n_task.DedupeMode.MERGE;
                        manager.masterSelectionMode = n_task.MasterSelectionMode.SELECT_BY_ID;
                        manager.masterRecordId = cashSaleCustomer;

                        manager.recordIds = [returnCustomer];
                        // Submit a job to process asynchronously. Submitting the job does not execute the job.
                        // Submitting the job places the job in the queue.
                        manager.submit(manager);
                    }

                }
                catch(e) {
                    log.error('map e', e);
                }

            },

            reduce: function (context) {

            }
        }
    }
);