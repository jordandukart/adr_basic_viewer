/*
 * File: OverviewPanel.ui.js
 * Date: Thu Mar 17 2011 08:50:12 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

OverviewPanelUi = Ext.extend(Ext.Panel, {
    title: 'Overview',
    layout: 'table',
    hideBorders: true,
    preventBodyReset: true,
    unstyled: true,
    autoHeight: true,
    initComponent: function() {
        this.layoutConfig = {
            columns: 2
        };
        this.items = [
            {
                flex: 1,
                layout: 'table',
                columnWidth: 0.6,
                cellId: 'adr-overview-description-cell',
                colspan: 1,
                rowspan: 1,
                xtype: 'descriptionpanel'
            },
            {
                columnWidth: 0.19,
                layout: 'fit',
                cellId: 'adr-overview-files-cell',
                colspan: 1,
                rowspan: 1,
                xtype: 'filespanel'
            }
        ];
        OverviewPanelUi.superclass.initComponent.call(this);
    }
});
