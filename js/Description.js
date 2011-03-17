/*
 * File: Description.js
 * Date: Thu Mar 17 2011 08:46:14 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Description = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        Description.superclass.constructor.call(this, Ext.apply({
            storeId: 'Description',
            url: '/adrbasic/ajax/getDescription',
            autoLoad: true,
            autoSave: false,
            baseParams: {
                pid: (window.location.pathname.split('/')[
                    3
                ])
            },
            fields: [
                {
                    name: 'title'
                },
                {
                    name: 'author'
                },
                {
                    name: 'description'
                },
                {
                    name: 'date_modified'
                },
                {
                    name: 'date_created'
                },
                {
                    name: 'user'
                }
            ]
        }, cfg));
    }
});
new Description();