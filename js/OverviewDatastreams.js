/*
 * File: OverviewDatastreams.js
 * Date: Thu Mar 17 2011 16:48:12 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

OverviewDatastreams = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        OverviewDatastreams.superclass.constructor.call(this, Ext.apply({
            storeId: 'OverviewDatastreams',
            url: '/adrbasic/ajax/getOverviewDatastreams',
            autoLoad: true,
            baseParams: {
                pid: (window.location.pathname.split('/')[
                    3
                ])
            },
            fields: [
                {
                    name: 'dsid'
                },
                {
                    name: 'label'
                },
                {
                    name: 'img_url'
                },
                {
                    name: 'mime'
                },
                {
                    name: 'download_url'
                },
                {
                    name: 'overview'
                }
            ]
        }, cfg));
    }
});
new OverviewDatastreams();