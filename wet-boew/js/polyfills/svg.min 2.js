/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a){"use strict";var b,c,d,e,f=a("object[data$='.svg']"),g=a("img[src$='.svg']"),h=f.length;for(b=0;b!==h;b+=1)e=f.eq(b),c=e.attr("aria-label"),d=e.attr("id"),e.replaceWith("<img src='"+e.attr("data").replace(".svg",".png")+"' alt='"+(c?c:"")+"'"+(d?"id='"+d+"'":"")+"/>");for(h=g.length,b=0;b!==h;b+=1)e=g.eq(b),e.attr("src",e.attr("src").replace(".svg",".png"))}(jQuery);
//# sourceMappingURL=svg.min.js.map