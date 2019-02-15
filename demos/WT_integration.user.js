// ==UserScript==
// @name         WT_Integration
// @namespace    https://wholetale.org/
// @version      0.1.0
// @description  Mock WT integration
// @author       Xarthisius
// @match        https://dataverse.harvard.edu/dataset.xhtml*
// @grant        none
// ==/UserScript==


$(document).ready(function() {
  var citeButton = document.getElementsByClassName("downloadCitation")[0];
  if (citeButton) {
    var myOtherUrl = "https://dashboard.stage.wholetale.org/compose?uri=" + encodeURIComponent(window.location.href);
    var node = document.getElementsByClassName('dropdown')[1];
    var placeHolder = document.createElement("span");
    placeHolder.onclick = function() { console.log('balh'); };
    node.insertBefore(placeHolder, citeButton);
    var magic = '<button type="button" class="btn btn-default dropdown-toggle fake" data-toggle="dropdown" aria-expanded="false"><span class="glyphicon glyphicon-equalizer"></span>Explore <span class="caret"></span></button><ul class="dropdown-menu reddy" role="menu"><li><a href="' + myOtherUrl + '">Analyze in WT</a></li></ul>';
    placeHolder.innerHTML = magic;
  }
});
