/*
 * File: EditFilesPanel.ui.js
 * Date: Wed Apr 06 2011 10:53:09 GMT-0300 (ADT)
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
                itemSelector: 'div .adr-edit-file',
                store: 'Datastreams',
                tpl: [
                    '<tpl for=".">',
                    '<div class="adr-edit-file">',
                    '<div class="adr-edit-file-label">{[fm.ellipsis(values.label, 20, true)]}</div>',
                    '<img src=\'{img_url}\' title=\'{label} ({dsid})\' class="adr-edit-file-img">',
                    '<div class="adr-edit-file-label">{[fm.ellipsis(values.dsid, 20, true)]}</div>',
                    '</div>',
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
            pageSize: 12
        };
        EditFilesPanelUi.superclass.initComponent.call(this);
    }
});
