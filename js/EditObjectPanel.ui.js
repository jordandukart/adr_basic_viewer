/*
 * File: EditObjectPanel.ui.js
 * Date: Thu Mar 17 2011 23:12:09 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

EditObjectPanelUi = Ext.extend(Ext.form.FormPanel, {
    title: 'Edit Object',
    frame: true,
    hideBorders: true,
    footer: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'container',
                html: 'Will markup some info about permissions ect here.'
            }
        ];
        this.fbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Edit'
                },
                {
                    xtype: 'button',
                    text: 'Delete'
                }
            ]
        };
        EditObjectPanelUi.superclass.initComponent.call(this);
    }
});
