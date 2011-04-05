/*
 * File: ADRBasicViewer.ui.js
 * Date: Tue Apr 05 2011 10:07:34 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ADRBasicViewerUi = Ext.extend(Ext.TabPanel, {
    activeTab: 1,
    width: 960,
    height: 900,
    border: false,
    initComponent: function() {
        this.items = [
            {
                xtype: 'panel',
                title: 'Overview',
                width: 400,
                layout: 'border',
                defaults: {
                    split: true,
                    
                },
                items: [
                    {
                        xtype: 'panel',
                        title: 'Description',
                        region: 'center',
                        autoLoad: {
                            url: '/adrbasic/ajax/getDescription',
                            params: {
                                pid: (window.location.pathname.split('/')[
                                    3
                                ])
                            }
                        },
                        bodyStyle: '{\npadding: 15px\n}'
                    },
                    {
                        region: 'east',
                        collapseMode: 'standard',
                        collapsible: true,
                        xtype: 'filePanel'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Viewer',
                layout: 'border',
                defaults: {
                    split: true,
                    
                },
                id: 'adr-viewer-tab',
                items: [
                    {
                        xtype: 'panel',
                        title: 'Viewer',
                        region: 'center',
                        id: 'adr-viewer-panel',
                        items: [
                            {
                                xtype: 'panel',
                                autoLoad: {
                                    url: "/adrbasic/ajax/getViewer",
                                    params: {
                                        pid: window.location.pathname.split('/')[
                                            3
                                        ]
                                    }
                                },
                                id: 'adr-viewer'
                            }
                        ]
                    },
                    {
                        region: 'east',
                        collapsible: true,
                        collapseMode: 'standard',
                        xtype: 'filePanel'
                    }
                ]
            }
        ];
        ADRBasicViewerUi.superclass.initComponent.call(this);
    }
});
