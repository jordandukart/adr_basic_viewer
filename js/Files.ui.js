/*
 * File: Files.ui.js
 * Date: Thu Nov 17 2011 14:44:11 GMT-0400 (AST)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

FilesUi = Ext.extend(Ext.Panel, {
    title: 'Files',
    width: 305,
    autoHeight: true,
    frame: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'dataview',
                itemSelector: '.adr-file-show-view',
                store: 'OverviewDatastreams',
                tpl: '',
                emptyText: 'Not Specified...',
                loadingText: 'loading...',
                singleSelect: true,
                trackOver: true,
                overClass: 'adr-file-img-over'
            }
        ];
        this.fbar = {
            xtype: 'paging',
            store: 'OverviewDatastreams',
            pageSize: 5
        };
        FilesUi.superclass.initComponent.call(this);
    }
});
