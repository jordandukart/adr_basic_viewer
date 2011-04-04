/*
 * File: OverviewPanel.ui.js
 * Date: Mon Apr 04 2011 14:37:24 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

OverviewPanelUi = Ext.extend(Ext.Panel, {
    title: 'Overview',
    layout: 'border',
    border: false,
    preventBodyReset: true,
    autoHeight: true,
    defaults: '{ padding: 0px }',
    initComponent: function() {
        this.items = [
            {
                flex: 1,
                columnWidth: 0.6,
                cellId: 'adr-overview-description-cell',
                colspan: 1,
                rowspan: 1,
                region: 'center',
                xtype: 'descriptionpanel'
            },
            {
                region: 'east',
                width: 100,
                height: 200,
                xtype: 'filespanel'
            }
        ];
        OverviewPanelUi.superclass.initComponent.call(this);
    }
});
