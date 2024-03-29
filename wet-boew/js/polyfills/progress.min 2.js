/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a,b,c){"use strict";var d="wb-progress",e="progress",f="wb-init."+d,g="wb-update."+d,h=c.doc,i=function(b){var f=c.init(b,d,e);f&&(j(f),c.ready(a(f),d))},j=function(b){var c,e,f=a(b),g=f.children(".progress, .undef"),h=f.children(".wb-inv"),i=1;if(null!==b.getAttribute("value")){0===g.length&&(g=a("<div class='progress'><div class='progress-bar' role='progressbar' /></div>"),f.append(g));try{i=parseFloat(b.getAttribute("max"))}catch(j){}c=b.getAttribute("value"),c>i&&(c=i),e=g.children(".progress-bar"),e.css("width",c/i*100+"%").attr({"aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":c}),h.detach(),h.appendTo(e)}else 0===g.length&&f.append("<div class='undef'/>");f.trigger("wb-updated."+d)};h.on("timerpoke.wb "+f+" "+g,e,function(a){var b=a.target;"wb-update"===a.type?a.namespace===d&&a.currentTarget===b&&j(b):i(a)}),c.add(e)}(jQuery,window,wb);
//# sourceMappingURL=progress.min.js.map