!function(a){function b(a){function b(a,b,e){var g=null;if(c(b))if(l(b),d(a),f(a),k(b),s>=2){var h=m(b),i=0,j=n();i=o(h)?-1*p(r,h-1,Math.floor(s/2)-1)-j:p(r,Math.ceil(s/2),h-2)+j+2*u,g=q(e,b,i),e.points=g}else if(1==s){var j=-1*n();g=q(e,b,j),e.points=g}return g}function c(a){return null!=a.bars&&a.bars.show&&null!=a.bars.order}function d(a){var b=y?a.getPlaceholder().innerHeight():a.getPlaceholder().innerWidth(),c=y?e(a.getData(),1):e(a.getData(),0),d=c[1]-c[0];x=d/b}function e(a,b){for(var c=new Array,d=0;d<a.length;d++)c[0]=a[d].data[0][b],c[1]=a[d].data[a[d].data.length-1][b];return"string"==typeof c[0]&&(c[0]=0,c[1]=a[0].data.length-1),c}function f(a){r=g(a.getData()),s=r.length}function g(a){for(var b=new Array,c=0;c<a.length;c++)null!=a[c].bars.order&&a[c].bars.show&&b.push(a[c]);return h(b)}function h(a){var b=a.length;do{for(var c=0;b-1>c;c++)if(a[c].bars.order>a[c+1].bars.order){var d=a[c];a[c]=a[c+1],a[c+1]=d}else if(a[c].bars.order==a[c+1].bars.order){var e;a[c].sameSeriesArrayIndex?void 0!==a[c+1].sameSeriesArrayIndex&&(e=a[c].sameSeriesArrayIndex,a[c+1].sameSeriesArrayIndex=e,w[e].push(a[c+1]),w[e].sort(i),a[c]=w[e][0],j(a,c+1)):a[c+1].sameSeriesArrayIndex?void 0!==a[c].sameSeriesArrayIndex&&(e=a[c+1].sameSeriesArrayIndex,a[c].sameSeriesArrayIndex=e,w[e].push(a[c]),w[e].sort(i),a[c]=w[e][0],j(a,c+1)):(e=w.length,w[e]=new Array,a[c].sameSeriesArrayIndex=e,a[c+1].sameSeriesArrayIndex=e,w[e].push(a[c]),w[e].push(a[c+1]),w[e].sort(i),a[c]=w[e][0],j(a,c+1)),c--,b--}b-=1}while(b>1);for(var c=0;c<a.length;c++)a[c].sameSeriesArrayIndex&&(v[a[c].sameSeriesArrayIndex]=c);return a}function i(a,b){var c=a.bars.barWidth?a.bars.barWidth:1,d=b.bars.barWidth?b.bars.barWidth:1;return d>c?-1:c>d?1:0}function j(a,b,c){var d=a.slice((c||b)+1||a.length);return a.length=0>b?a.length+b:b,a.push.apply(a,d),a}function k(a){t="number"==typeof a.bars.lineWidth?a.bars.lineWidth:2,u=t*x}function l(a){a.bars.horizontal&&(y=!0)}function m(a){var b=0;if(a.sameSeriesArrayIndex)b=v[a.sameSeriesArrayIndex];else for(var c=0;c<r.length;++c)if(a==r[c]){b=c;break}return b+1}function n(){var a=0;return s%2!=0&&(a=r[Math.floor(s/2)].bars.barWidth/2),a}function o(a){return a<=Math.ceil(s/2)}function p(a,b,c){for(var d=0,e=b;c>=e;e++)d+=a[e].bars.barWidth+2*u;return d}function q(a,b,c){for(var d=a.pointsize,e=a.points,f=0,g=y?1:0;g<e.length;g+=d)e[g]+=c,b.data[f][3]=e[g],f++;return e}var r,s,t,u,v=new Array,w=new Array,x=1,y=!1;a.hooks.processDatapoints.push(b)}var c={series:{bars:{order:null}}};a.plot.plugins.push({init:b,options:c,name:"orderBars",version:"0.2"})}(jQuery);