/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a,b,c){"use strict";var d="wb-details",e="summary",f="wb-init."+d,g=c.doc,h=function(b){var f,g=c.init(b,d,e);g&&(f=g.parentNode,Object.defineProperty(f,"open",{get:i,set:l}),f.summary=g,g.setAttribute("aria-expanded",null!==f.getAttribute("open")),g.getAttribute("role")||g.setAttribute("role","button"),g.getAttribute("tabindex")||g.setAttribute("tabindex","0"),c.ready(a(g),d))},i=function(){return null!==this.getAttribute("open")},j=function(){this.setAttribute("open","open"),this.className+=" open",m.call(this)},k=function(){this.removeAttribute("open"),this.className=this.className.replace(" open",""),m.call(this)},l=function(b){"boolean"==typeof b&&(b?j.call(this):k.call(this)),this.summary.setAttribute("aria-expanded",b),a(this).trigger("toggle")},m=function(){var a;if(-1!==this.className.indexOf("alert")&&(a="alert-collapsible-state-"+this.getAttribute("id")),a)try{localStorage.setItem(a,this.open?"open":"closed")}catch(b){}};g.on("timerpoke.wb "+f,e,h),g.on("click keydown toggle."+d,e,function(b){var c,e=b.which,f=b.currentTarget;return e&&1!==e||-1!==f.className.indexOf("wb-toggle")&&("toggle"!==b.type||b.namespace!==d)?(13===e||32===e)&&(b.preventDefault(),a(f).trigger("click")):(c=f.parentNode,c.open=!c.open),!0}),c.add(e)}(jQuery,window,wb);
//# sourceMappingURL=details.min.js.map