/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a,b,c){"use strict";var d="wb-slider",e="input[type='range']",f="wb-init."+d,g="wb-update."+d,h=0,i=function(f){var g,i=c.init(f,d,e);i&&(i.id||(i.id="wb-sldr-"+h++),b.fdSlider.createSlider({inp:i,html5Shim:!0}),c.ielt9&&(g=a(i),g.on("input change",function(a){g.closest("[class^='wb-'], body").trigger(a)})),c.ready(g,d))};c.doc.on(f+" "+g,e,function(c){var e=c.target;if(c.currentTarget===e)switch(c.type){case"wb-init":i(c);break;case"wb-update":c.namespace===d&&(b.fdSlider.updateSlider(e.id),a(e).trigger("wb-updated."+d))}})}(jQuery,window,wb);
//# sourceMappingURL=slider_wrapper.min.js.map