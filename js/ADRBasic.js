/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Ugly global stuff cause of deadline...
$(document).ready(function() { 
    $('body').ajaxComplete(function(event, request, settings) {
        var el = $('#playerFLV');
        if(el.length != 0 && !$(el).hasClass('.loaded-flv-player')) {
            el.addClass('.loaded-flv-player');
            swfLoad(Ext.ns.viewerDSID);
        }
    });
});

Ext.onReady(function(){
    $('#content-fedora').empty();
    Ext.QuickTips.init();
    var adrbasic = new ADRBasicViewer({
        renderTo: 'content-fedora',
        listeners: {
            afterrender: function() {
                $('#center form').css('margin-bottom', 0);
            }
        }
    });
    adrbasic.show();
    /*/ Ugly get around for Drupal thems stuff
    var themeSheetIndex =  document.styleSheets.length -1; // Always the last one.
    var themeSheet = document.styleSheets[themeSheetIndex];
    var rules = themeSheet.cssRules? themeSheet.cssRules: themeSheet.rules
    for (i = 0; i < rules.length; i++){
        if(rules[i].selectorText.toLowerCase() == "#center form"){ // find the evil rule
            themeSheet.deleteRule? themeSheet.deleteRule(i) : themeSheet.removeRule(i);
            break;
        }
    }*/
});