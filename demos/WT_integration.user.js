// ==UserScript==
// @name         WT_Integration
// @namespace    https://wholetale.org/
// @version      0.1.3
// @description  Mock WT integration
// @author       Xarthisius
// @match        https://dataverse.harvard.edu/dataset.xhtml*
// @match        https://search.dataone.org/view/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==


$(document).ready(function() {
  var citeButton = document.getElementsByClassName("downloadCitation")[0];
  if (citeButton) {
    var title = document.getElementById('title').innerHTML;
    var myOtherUrl = "https://dashboard.local.wholetale.org/browse?uri=" + encodeURIComponent(window.location.href) + "&name=" + encodeURIComponent(title);
    var node = document.getElementsByClassName('dropdown')[1];
    var placeHolder = document.createElement("span");
    placeHolder.onclick = function() { console.log('balh'); };
    node.insertBefore(placeHolder, citeButton);
    var magic = '<button type="button" class="btn btn-default dropdown-toggle fake" data-toggle="dropdown" aria-expanded="false"><span class="glyphicon glyphicon-equalizer"></span>Explore <span class="caret"></span></button><ul class="dropdown-menu reddy" role="menu"><li><a href="' + myOtherUrl + '">Analyze in WT</a></li></ul>';
    placeHolder.innerHTML = magic;
  }

    var observer = new MutationObserver(function(mutations) {
        mutations.some(function(mutation){
            if (mutation.target.id === 'citation-container') {
                var d1Button = document.getElementsByClassName("controls btn-toolbar")[0];
                if (d1Button) {
                    var foo = `<a class="btn tooltip-this" type="button" data-toggle="dropdown" data-placement="top" data-trigger="hover" data-delay="700" data-container="body" data-title="Choose an analysis environment to interactively explore this dataset online using Whole Tale." data-original-title="" title="">
<i class="icon-bar-chart"></i>
<span class="analyze-text">Analyze</span>
<span class="caret"></span>
</a>
<ul class="analyze dropdown-menu">
  <li>
    <a href="https://girder.local.wholetale.org/api/v1/integration/dataone?uri=DOI&amp;title=TITLE&amp;environment=RStudio" target="_blank">
      <span class="tab">RStudio</span>
    </a>
  </li>
  <li>
    <a href="https://girder.local.wholetale.org/api/v1/integration/dataone?uri=DOI&amp;title=TITLE&amp;environment=Jupyter Notebook" target="_blank">
      <span class="tab">Jupyter Notebook</span>
    </a>
  </li>
</ul>`;
                    var s = document.getElementsByClassName("title")[0];
                    var doi = s.getAttribute('data-id');
                    var title = s.innerText.trim();
                    foo = foo.replace(/DOI/g, doi);
                    foo = foo.replace(/TITLE/g, title);
                    let placeHolder = document.createElement("div");
                    placeHolder.className = "analyze dropdown";
                    d1Button.appendChild(placeHolder);
                    placeHolder.innerHTML = foo;
                }
            }
        });
    });
    observer.observe(document, {subtree: true, attributes: true, childTree: true});
    window.evenEvent = false;
});
