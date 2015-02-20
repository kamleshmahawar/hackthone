window.Modernizr=function(e,a,E){var c={},m=a.documentElement,s=a.createElement("modernizr"),s=s.style,A={},n=[],B=n.slice,x,z=function(y,g,c,k){var d,e,i,n,b=a.createElement("div"),p=a.body,f=p||a.createElement("body");if(parseInt(c,10))for(;c--;)i=a.createElement("div"),i.id=k?k[c]:"modernizr"+(c+1),b.appendChild(i);return d=['&#173;<style id="smodernizr">',y,"</style>"].join(""),b.id="modernizr",(p?b:f).innerHTML+=d,f.appendChild(b),p||(f.style.background="",f.style.overflow="hidden",n=m.style.overflow,
m.style.overflow="hidden",m.appendChild(f)),e=g(b,y),p?b.parentNode.removeChild(b):(f.parentNode.removeChild(f),m.style.overflow=n),!!e},q={}.hasOwnProperty,t;typeof q!=="undefined"&&typeof q.call!=="undefined"?t=function(a,g){return q.call(a,g)}:t=function(a,g){return g in a&&typeof a.constructor.prototype[g]==="undefined"};Function.prototype.bind||(Function.prototype.bind=function(a){var g=this;if(typeof g!="function")throw new TypeError;var c=B.call(arguments,1),k=function(){if(this instanceof
k){var d=function(){};d.prototype=g.prototype;var d=new d,e=g.apply(d,c.concat(B.call(arguments)));return Object(e)===e?e:d}return g.apply(a,c.concat(B.call(arguments)))};return k});for(var i in A)t(A,i)&&(x=i.toLowerCase(),c[x]=A[i](),n.push((c[x]?"":"no-")+x));c.addTest=function(a,g){if(typeof a=="object")for(var e in a)t(a,e)&&c.addTest(e,a[e]);else{a=a.toLowerCase();if(c[a]!==E)return c;g=typeof g=="function"?g():g;typeof!0!="undefined"&&(m.className+=" "+(g?"":"no-")+a);c[a]=g}return c};s.cssText=
"";return s=null,c._version="2.6.2",c.mq=function(a){var c=e.matchMedia||e.msMatchMedia;if(c)return c(a).matches;var i;return z("@media "+a+" { #modernizr { position: absolute; } }",function(a){i=(e.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position=="absolute"}),i},c.testStyles=z,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+n.join(" ")),c}(this,this.document);
(function(e,a){function E(b,a){var f=b.createElement("p"),c=b.getElementsByTagName("head")[0]||b.documentElement;return f.innerHTML="x<style>"+a+"</style>",c.insertBefore(f.lastChild,c.firstChild)}function c(){var b=d.elements;return typeof b=="string"?b.split(" "):b}function m(b){var a=C[b[y]];return a||(a={},g++,b[y]=g,C[g]=a),a}function s(b,p,f){p||(p=a);if(k)return p.createElement(b);f||(f=m(p));var c;return f.cache[b]?c=f.cache[b].cloneNode():t.test(b)?c=(f.cache[b]=f.createElem(b)).cloneNode():
c=f.createElem(b),c.canHaveChildren&&!q.test(b)?f.frag.appendChild(c):c}function A(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag());b.createElement=function(f){return d.shivMethods?s(f,b,a):a.createElem(f)};b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(b){return a.createElem(b),a.frag.createElement(b),'c("'+b+'")'})+");return n}")(d,
a.frag)}function n(b){b||(b=a);var c=m(b);return d.shivCSS&&!i&&!c.hasCSS&&(c.hasCSS=!!E(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),k||A(b,c),b}function B(b){for(var a,f=b.attributes,c=f.length,g=b.ownerDocument.createElement(D+":"+b.nodeName);c--;)a=f[c],a.specified&&g.setAttribute(a.nodeName,a.nodeValue);return g.style.cssText=b.style.cssText,g}function x(a){function g(){clearTimeout(i._removeSheetTimer);f&&f.removeNode(!0);
f=null}var f,e,i=m(a),d=a.namespaces,l=a.parentWindow;return!G||a.printShived?a:(typeof d[D]=="undefined"&&d.add(D),l.attachEvent("onbeforeprint",function(){g();var l,i,r;r=a.styleSheets;for(var u=[],j=r.length,h=Array(j);j--;)h[j]=r[j];for(;r=h.pop();)if(!r.disabled&&F.test(r.media)){try{l=r.imports,i=l.length}catch(H){i=0}for(j=0;j<i;j++)h.push(l[j]);try{u.push(r.cssText)}catch(o){}}var v,u=u.reverse().join("").split("{");l=u.length;i=RegExp("(^|[\\s,>+~])("+c().join("|")+")(?=[[\\s,>+~#.:]|$)",
"gi");for(j="$1"+D+"\\:$2";l--;)v=u[l]=u[l].split("}"),v[v.length-1]=v[v.length-1].replace(i,j),u[l]=v.join("}");var u=u.join("{"),d;v=a.getElementsByTagName("*");l=v.length;i=RegExp("^(?:"+c().join("|")+")$","i");for(j=[];l--;)d=v[l],i.test(d.nodeName)&&j.push(d.applyElement(B(d)));e=j;f=E(a,u)}),l.attachEvent("onafterprint",function(){for(var a=e,l=a.length;l--;)a[l].removeNode();clearTimeout(i._removeSheetTimer);i._removeSheetTimer=setTimeout(g,500)}),a.printShived=!0,a)}var z=e.html5||{},q=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
t=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,i,y="_html5shiv",g=0,C={},k;(function(){try{var b=a.createElement("a");b.innerHTML="<xyz></xyz>";i="hidden"in b;k=b.childNodes.length==1||function(){a.createElement("a");var b=a.createDocumentFragment();return typeof b.cloneNode=="undefined"||typeof b.createDocumentFragment=="undefined"||typeof b.createElement==
"undefined"}()}catch(c){i=!0,k=!0}})();var d={elements:z.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:z.shivCSS!==!1,supportsUnknownElements:k,shivMethods:z.shivMethods!==!1,type:"default",shivDocument:n,createElement:s,createDocumentFragment:function(b,g){b||(b=a);if(k)return b.createDocumentFragment();for(var g=g||m(b),f=g.frag.cloneNode(),i=0,e=c(),d=e.length;i<d;i++)f.createElement(e[i]);
return f}};e.html5=d;n(a);var F=/^$|\b(?:all|print)\b/,D="html5shiv",G=!k&&function(){var b=a.documentElement;return typeof a.namespaces!="undefined"&&typeof a.parentWindow!="undefined"&&typeof b.applyElement!="undefined"&&typeof b.removeNode!="undefined"&&typeof e.attachEvent!="undefined"}();d.type+=" print";d.shivPrint=x;x(a)})(this,document);
(function(e,a,E){function c(a){return"[object Function]"==y.call(a)}function m(a){return"string"==typeof a}function s(){}function A(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function n(){var a=g.shift();C=1;a?a.t?t(function(){("c"==a.t?w.injectCss:w.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),n()):C=0}function B(b,c,e,r,u,j,h){function H(a){if(!v&&A(o.readyState)&&(k.r=v=1,!C&&n(),o.onload=o.onreadystatechange=null,a)){"img"!=b&&t(function(){F.removeChild(o)},50);for(var g in f[c])f[c].hasOwnProperty(g)&&
f[c][g].onload()}}var h=h||w.errorTimeout,o=a.createElement(b),v=0,m=0,k={t:e,s:c,e:u,a:j,x:h};1===f[c]&&(m=1,f[c]=[]);"object"==b?o.data=c:(o.src=c,o.type=b);o.width=o.height="0";o.onerror=o.onload=o.onreadystatechange=function(){H.call(this,m)};g.splice(r,0,k);"img"!=b&&(m||2===f[c]?(F.insertBefore(o,d?null:i),t(H,h)):f[c].push(o))}function x(a,b,c,f,i){return C=0,b=b||"j",m(a)?B("c"==b?G:D,a,b,this.i++,c,f,i):(g.splice(this.i++,0,a),1==g.length&&n()),this}function z(){var a=w;return a.loader={load:x,
i:0},a}var q=a.documentElement,t=e.setTimeout,i=a.getElementsByTagName("script")[0],y={}.toString,g=[],C=0,k="MozAppearance"in q.style,d=k&&!!a.createRange().compareNode,F=d?q:i.parentNode,q=e.opera&&"[object Opera]"==y.call(e.opera),q=!!a.attachEvent&&!q,D=k?"object":q?"script":"img",G=q?"script":D,b=Array.isArray||function(a){return"[object Array]"==y.call(a)},p=[],f={},I={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},J,w;w=function(a){function g(a){var a=a.split("!"),b=p.length,c=
a.pop(),f=a.length,c={url:c,origUrl:c,prefixes:a},i,e,d;for(e=0;e<f;e++)d=a[e].split("="),(i=I[d.shift()])&&(c=i(c,d));for(e=0;e<b;e++)c=p[e](c);return c}function i(a,b,e,d,j){var h=g(a),l=h.autoCallback;h.url.split(".").pop().split("?").shift();h.bypass||(b&&(b=c(b)?b:b[a]||b[d]||b[a.split("/").pop().split("?")[0]]),h.instead?h.instead(a,b,e,d,j):(f[h.url]?h.noexec=!0:f[h.url]=1,e.load(h.url,h.forceCSS||!h.forceJS&&"css"==h.url.split(".").pop().split("?").shift()?"c":E,h.noexec,h.attrs,h.timeout),
(c(b)||c(l))&&e.load(function(){z();b&&b(h.origUrl,j,d);l&&l(h.origUrl,j,d);f[h.url]=2})))}function e(a,b){function f(a,e){if(a)if(m(a))e||(d=function(){var a=[].slice.call(arguments);j.apply(this,a);l()}),i(a,d,b,0,h);else{if(Object(a)===a)for(k in r=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(k)&&(!e&&!--r&&(c(d)?d=function(){var a=[].slice.call(arguments);j.apply(this,a);l()}:d[k]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,
b);l()}}(j[k])),i(a[k],d,b,k,h))}else!e&&l()}var h=!!a.test,g=a.load||a.both,d=a.callback||s,j=d,l=a.complete||s,r,k;f(h?a.yep:a.nope,!!g);g&&f(g)}var d,j,h=this.yepnope.loader;if(m(a))i(a,0,h,0);else if(b(a))for(d=0;d<a.length;d++)j=a[d],m(j)?i(j,0,h,0):b(j)?w(j):Object(j)===j&&e(j,h);else Object(a)===a&&e(a,h)};w.addPrefix=function(a,b){I[a]=b};w.addFilter=function(a){p.push(a)};w.errorTimeout=1E4;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",
J=function(){a.removeEventListener("DOMContentLoaded",J,0);a.readyState="complete"},0));e.yepnope=z();e.yepnope.executeStack=n;e.yepnope.injectJs=function(b,c,e,d,f,g){var h=a.createElement("script"),k,m,d=d||w.errorTimeout;h.src=b;for(m in e)h.setAttribute(m,e[m]);c=g?n:c||s;h.onreadystatechange=h.onload=function(){!k&&A(h.readyState)&&(k=1,c(),h.onload=h.onreadystatechange=null)};t(function(){k||(k=1,c(1))},d);f?h.onload():i.parentNode.insertBefore(h,i)};e.yepnope.injectCss=function(b,c,e,d,f,g){var d=
a.createElement("link"),h,c=g?n:c||s;d.href=b;d.rel="stylesheet";d.type="text/css";for(h in e)d.setAttribute(h,e[h]);f||(i.parentNode.insertBefore(d,i),t(c,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
