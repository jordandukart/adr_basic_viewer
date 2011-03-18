/*
 * File: FilesPanel.ui.js
 * Date: Thu Mar 17 2011 23:12:09 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

FilesPanelUi = Ext.extend(Ext.Panel, {
    title: 'Files',
    autoScroll: true,
    border: false,
    footer: true,
    initComponent: function() {
        this.items = [
            {
                xtype: 'dataview',
                itemSelector: 'table .adr-file-img-block',
                store: 'OverviewDatastreams',
                tpl: [
                    '<tpl for=".">',
                    '<table width="100%" border="0" class="adr-file-img-block">',
                    '  <tr>',
                    '    <td style="vertical-align: middle;"><img src=\'{img_url}\' title="{label}" class="adr-file-img"/></td>',
                    '   </tr>',
                    '   </tr>',
                    '    <td>',
                    '       <div class="adr-file-label">{dsid}</div>',
                    '       <div class="adr-file-download">',
                    '          <form method="GET" action="{download_url}">',
                    '             <input type="submit" value="Download" style="display:block;"></input>',
                    '          </form>',
                    '       </div>',
                    '    </td>',
                    '  </tr>',
                    '</tpl>'
                ],
                singleSelect: true,
                trackOver: true,
                overClass: 'x-view-over',
                autoShow: true,
                id: 'adr-files'
            }
        ];
        FilesPanelUi.superclass.initComponent.call(this);
    }
});
