/*
 * File: EditFilesPanel.ui.js
 * Date: Tue Apr 05 2011 10:07:34 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

EditFilesPanelUi = Ext.extend(Ext.form.FormPanel, {
    title: 'Manage Files',
    initComponent: function() {
        this.tbar = {
            xtype: 'toolbar',
            id: 'edit-files-panel-toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    cls: 'x-btn-text-icon',
                    iconCls: 'adr-add-file-icon',
                    autoWidth: true
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    cls: 'x-btn-text-icon'
                },
                {
                    xtype: 'button',
                    text: 'View',
                    disabled: true
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    disabled: true
                }
            ]
        };
        this.items = [
            {
                xtype: 'dataview',
                itemSelector: 'div .adr-edit-file-img-block',
                store: 'Datastreams',
                tpl: [
                    '<tpl for=".">',
                    '<div class="adr-edit-file-img-block">',
                    '<img src=\'{img_url}\' title=\'label\' class="adr-edit-file-img">',
                    '<div class="adr-edit-file-label">{dsid}</div></div>',
                    '</tpl>'
                ],
                overClass: 'x-view-over',
                singleSelect: true,
                trackOver: true,
                id: 'adr-manage-files-data-viewer'
            }
        ];
        this.fbar = {
            xtype: 'paging',
            store: 'Datastreams',
            pageSize: 15
        };
        EditFilesPanelUi.superclass.initComponent.call(this);
    }
});
