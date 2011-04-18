/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var filesXTemplate = new Ext.XTemplate(
    '<tpl for=".">',
    '<div class="adr-file">',
    '<div class="adr-file-label">{[fm.ellipsis(values.label, 30, true)]}</div>',
    '<img class="adr-file-img adr-file-show-view" src="{img_url}"></img>',
    '<div class="adr-file-dsid">{[fm.ellipsis(values.dsid, 30, true)]}</div>',
    '<div class="adr-file-controls">',
    '<span class="adr-file-view">',
    '<tpl if="this.showView(mime)">',
    '<button type="button" onClick="ADRBasic.viewer.show(\'{label}\', \'{dsid}\');">View</button>',
    '</tpl>',
    '<tpl if="this.showPlay(mime)">',
    '<button type="button" onClick="ADRBasic.viewer.show(\'{label}\', \'{dsid}\');">Play</button>',
    '</tpl>',
    '</span>',
    '<span class="adr-file-download">',
    '<form method="GET" action="{download_url}" style="display:inline;">',
    '<input type="submit" value="Download"></input>',
    '</form>',
    '</span>',
    '</div>',
    '</div>',
    '</tpl>',
    {
        // XTemplate configuration:
        compiled: true,
        disableFormats: true,
        // member functions:
        showView: function(mime){
            return mime.indexOf("audio") == -1 && mime.indexOf("video") == -1;
        },
        showPlay: function(mime){
            return mime.indexOf("audio") != -1 || mime.indexOf("video") != -1;
        }
    }
    );