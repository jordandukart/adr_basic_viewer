/*
 * File: EditFilesPanel.ui.js
 * Date: Mon Apr 11 2011 06:35:53 GMT-0300 (ADT)
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
    height: 700,
    layout: 'border',
    initComponent: function() {
        this.tbar = {
            xtype: 'toolbar',
            id: 'edit-files-panel-toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    width: 50,
                    cls: 'x-btn-text-icon',
                    iconCls: 'adr-add-file-icon',
                    id: 'adr-edit-file-add'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    cls: 'x-btn-text-icon',
                    iconCls: 'adr-edit-file-icon',
                    width: 50,
                    id: 'adr-edit-file-edit'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    text: 'View',
                    disabled: true,
                    cls: 'x-btn-text-icon',
                    iconCls: 'adr-view-file-icon',
                    width: 50,
                    id: 'adr-edit-file-view'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    text: 'Download',
                    disabled: true,
                    cls: 'x-btn-text-icon',
                    iconCls: 'adr-download-file-icon',
                    width: 50,
                    id: 'adr-edit-file-download'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    width: 50,
                    disabled: true,
                    cls: 'x-btn-text-icon',
                    iconCls: 'adr-delete-file-icon',
                    id: 'adr-edit-file-delete'
                }
            ]
        };
        this.items = [
            {
                xtype: 'listview',
                store: 'Datastreams',
                singleSelect: true,
                columnWidth: 0.8,
                width: 760,
                region: 'center',
                id: 'adr-edit-file-list',
                columns: [
                    {
                        xtype: 'lvcolumn',
                        header: 'Label',
                        width: 0.25,
                        dataIndex: 'label'
                    },
                    {
                        xtype: 'lvcolumn',
                        header: 'Datastream ID',
                        dataIndex: 'dsid'
                    },
                    {
                        xtype: 'lvcolumn',
                        header: 'Mime Type',
                        dataIndex: 'mime'
                    }
                ]
            }
        ];
        this.bbar = {
            xtype: 'paging',
            store: 'Datastreams',
            pageSize: 33
        };
        EditFilesPanelUi.superclass.initComponent.call(this);
    }
});
