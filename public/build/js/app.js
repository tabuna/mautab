if(!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e="length"in t&&t.length,n=Z.type(t);return"function"===n||Z.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function i(t,e,n){if(Z.isFunction(e))return Z.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return Z.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(at.test(e))return Z.filter(e,t,n);e=Z.filter(e,t)}return Z.grep(t,function(t){return V.call(e,t)>=0!==n})}function o(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function r(t){var e=ht[t]={};return Z.each(t.match(ft)||[],function(t,n){e[n]=!0}),e}function s(){J.removeEventListener("DOMContentLoaded",s,!1),t.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function l(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(wt,"-$1").toLowerCase(),n=t.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:bt.test(n)?Z.parseJSON(n):n}catch(o){}yt.set(t,e,n)}else n=void 0;return n}function u(){return!0}function c(){return!1}function p(){try{return J.activeElement}catch(t){}}function d(t,e){return Z.nodeName(t,"table")&&Z.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function f(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function h(t){var e=_t.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function m(t,e){for(var n=0,i=t.length;i>n;n++)vt.set(t[n],"globalEval",!e||vt.get(e[n],"globalEval"))}function g(t,e){var n,i,o,r,s,a,l,u;if(1===e.nodeType){if(vt.hasData(t)&&(r=vt.access(t),s=vt.set(e,r),u=r.events)){delete s.handle,s.events={};for(o in u)for(n=0,i=u[o].length;i>n;n++)Z.event.add(e,o,u[o][n])}yt.hasData(t)&&(a=yt.access(t),l=Z.extend({},a),yt.set(e,l))}}function v(t,e){var n=t.getElementsByTagName?t.getElementsByTagName(e||"*"):t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&Z.nodeName(t,e)?Z.merge([t],n):n}function y(t,e){var n=e.nodeName.toLowerCase();"input"===n&&jt.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}function b(e,n){var i,o=Z(n.createElement(e)).appendTo(n.body),r=t.getDefaultComputedStyle&&(i=t.getDefaultComputedStyle(o[0]))?i.display:Z.css(o[0],"display");return o.detach(),r}function w(t){var e=J,n=Ft[t];return n||(n=b(t,e),"none"!==n&&n||(Ht=(Ht||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=Ht[0].contentDocument,e.write(),e.close(),n=b(t,e),Ht.detach()),Ft[t]=n),n}function x(t,e,n){var i,o,r,s,a=t.style;return n=n||Bt(t),n&&(s=n.getPropertyValue(e)||n[e]),n&&(""!==s||Z.contains(t.ownerDocument,t)||(s=Z.style(t,e)),Mt.test(s)&&Wt.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function T(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function C(t,e){if(e in t)return e;for(var n=e[0].toUpperCase()+e.slice(1),i=e,o=Yt.length;o--;)if(e=Yt[o]+n,e in t)return e;return i}function j(t,e,n){var i=zt.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function k(t,e,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===e?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=Z.css(t,n+Tt[r],!0,o)),i?("content"===n&&(s-=Z.css(t,"padding"+Tt[r],!0,o)),"margin"!==n&&(s-=Z.css(t,"border"+Tt[r]+"Width",!0,o))):(s+=Z.css(t,"padding"+Tt[r],!0,o),"padding"!==n&&(s+=Z.css(t,"border"+Tt[r]+"Width",!0,o)));return s}function E(t,e,n){var i=!0,o="width"===e?t.offsetWidth:t.offsetHeight,r=Bt(t),s="border-box"===Z.css(t,"boxSizing",!1,r);if(0>=o||null==o){if(o=x(t,e,r),(0>o||null==o)&&(o=t.style[e]),Mt.test(o))return o;i=s&&(G.boxSizingReliable()||o===t.style[e]),o=parseFloat(o)||0}return o+k(t,e,n||(s?"border":"content"),i,r)+"px"}function $(t,e){for(var n,i,o,r=[],s=0,a=t.length;a>s;s++)i=t[s],i.style&&(r[s]=vt.get(i,"olddisplay"),n=i.style.display,e?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Ct(i)&&(r[s]=vt.access(i,"olddisplay",w(i.nodeName)))):(o=Ct(i),"none"===n&&o||vt.set(i,"olddisplay",o?n:Z.css(i,"display"))));for(s=0;a>s;s++)i=t[s],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?r[s]||"":"none"));return t}function S(t,e,n,i,o){return new S.prototype.init(t,e,n,i,o)}function N(){return setTimeout(function(){Gt=void 0}),Gt=Z.now()}function D(t,e){var n,i=0,o={height:t};for(e=e?1:0;4>i;i+=2-e)n=Tt[i],o["margin"+n]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function A(t,e,n){for(var i,o=(ne[e]||[]).concat(ne["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,e,t))return i}function O(t,e,n){var i,o,r,s,a,l,u,c,p=this,d={},f=t.style,h=t.nodeType&&Ct(t),m=vt.get(t,"fxshow");n.queue||(a=Z._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,Z.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],u=Z.css(t,"display"),c="none"===u?vt.get(t,"olddisplay")||w(t.nodeName):u,"inline"===c&&"none"===Z.css(t,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",p.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(i in e)if(o=e[i],Kt.exec(o)){if(delete e[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue;h=!0}d[i]=m&&m[i]||Z.style(t,i)}else u=void 0;if(Z.isEmptyObject(d))"inline"===("none"===u?w(t.nodeName):u)&&(f.display=u);else{m?"hidden"in m&&(h=m.hidden):m=vt.access(t,"fxshow",{}),r&&(m.hidden=!h),h?Z(t).show():p.done(function(){Z(t).hide()}),p.done(function(){var e;vt.remove(t,"fxshow");for(e in d)Z.style(t,e,d[e])});for(i in d)s=A(h?m[i]:0,i,p),i in m||(m[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function q(t,e){var n,i,o,r,s;for(n in t)if(i=Z.camelCase(n),o=e[i],r=t[n],Z.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),s=Z.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function I(t,e,n){var i,o,r=0,s=ee.length,a=Z.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=Gt||N(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;l>s;s++)u.tweens[s].run(r);return a.notifyWith(t,[u,r,n]),1>r&&l?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:Z.extend({},e),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Gt||N(),duration:n.duration,tweens:[],createTween:function(e,n){var i=Z.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)u.tweens[n].run(1);return e?a.resolveWith(t,[u,e]):a.rejectWith(t,[u,e]),this}}),c=u.props;for(q(c,u.opts.specialEasing);s>r;r++)if(i=ee[r].call(u,t,c,u.opts))return i;return Z.map(c,A,u),Z.isFunction(u.opts.start)&&u.opts.start.call(t,u),Z.fx.timer(Z.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function L(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(ft)||[];if(Z.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function _(t,e,n,i){function o(a){var l;return r[a]=!0,Z.each(t[a]||[],function(t,a){var u=a(e,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=t===be;return o(e.dataTypes[0])||!r["*"]&&o("*")}function R(t,e){var n,i,o=Z.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&Z.extend(!0,t,i),t}function P(t,e,n){for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function H(t,e,n,i){var o,r,s,a,l,u={},c=t.dataTypes.slice();if(c[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];for(r=c.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=u[l+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&t["throws"])e=s(e);else try{e=s(e)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}function F(t,e,n,i){var o;if(Z.isArray(e))Z.each(e,function(e,o){n||je.test(t)?i(t,o):F(t+"["+("object"==typeof o?e:"")+"]",o,n,i)});else if(n||"object"!==Z.type(e))i(t,e);else for(o in e)F(t+"["+o+"]",e[o],n,i)}function W(t){return Z.isWindow(t)?t:9===t.nodeType&&t.defaultView}var M=[],B=M.slice,U=M.concat,z=M.push,V=M.indexOf,Q={},X=Q.toString,Y=Q.hasOwnProperty,G={},J=t.document,K="2.1.4",Z=function(t,e){return new Z.fn.init(t,e)},tt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,et=/^-ms-/,nt=/-([\da-z])/gi,it=function(t,e){return e.toUpperCase()};Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return B.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:B.call(this)},pushStack:function(t){var e=Z.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return Z.each(this,t,e)},map:function(t){return this.pushStack(Z.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(B.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:z,sort:M.sort,splice:M.splice},Z.extend=Z.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(u&&i&&(Z.isPlainObject(i)||(o=Z.isArray(i)))?(o?(o=!1,r=n&&Z.isArray(n)?n:[]):r=n&&Z.isPlainObject(n)?n:{},s[e]=Z.extend(u,r,i)):void 0!==i&&(s[e]=i));return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===Z.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return!Z.isArray(t)&&t-parseFloat(t)+1>=0},isPlainObject:function(t){return"object"!==Z.type(t)||t.nodeType||Z.isWindow(t)?!1:t.constructor&&!Y.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?Q[X.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval;t=Z.trim(t),t&&(1===t.indexOf("use strict")?(e=J.createElement("script"),e.text=t,J.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(et,"ms-").replace(nt,it)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var o,r=0,s=t.length,a=n(t);if(i){if(a)for(;s>r&&(o=e.apply(t[r],i),o!==!1);r++);else for(r in t)if(o=e.apply(t[r],i),o===!1)break}else if(a)for(;s>r&&(o=e.call(t[r],r,t[r]),o!==!1);r++);else for(r in t)if(o=e.call(t[r],r,t[r]),o===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(tt,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?Z.merge(i,"string"==typeof t?[t]:t):z.call(i,t)),i},inArray:function(t,e,n){return null==e?-1:V.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){for(var i,o=[],r=0,s=t.length,a=!n;s>r;r++)i=!e(t[r],r),i!==a&&o.push(t[r]);return o},map:function(t,e,i){var o,r=0,s=t.length,a=n(t),l=[];if(a)for(;s>r;r++)o=e(t[r],r,i),null!=o&&l.push(o);else for(r in t)o=e(t[r],r,i),null!=o&&l.push(o);return U.apply([],l)},guid:1,proxy:function(t,e){var n,i,o;return"string"==typeof e&&(n=t[e],e=t,t=n),Z.isFunction(t)?(i=B.call(arguments,2),o=function(){return t.apply(e||this,i.concat(B.call(arguments)))},o.guid=t.guid=t.guid||Z.guid++,o):void 0},now:Date.now,support:G}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Q["[object "+e+"]"]=e.toLowerCase()});var ot=function(t){function e(t,e,n,i){var o,r,s,a,l,u,p,f,h,m;if((e?e.ownerDocument||e:F)!==O&&A(e),e=e||O,n=n||[],a=e.nodeType,"string"!=typeof t||!t||1!==a&&9!==a&&11!==a)return n;if(!i&&I){if(11!==a&&(o=yt.exec(t)))if(s=o[1]){if(9===a){if(r=e.getElementById(s),!r||!r.parentNode)return n;if(r.id===s)return n.push(r),n}else if(e.ownerDocument&&(r=e.ownerDocument.getElementById(s))&&P(e,r)&&r.id===s)return n.push(r),n}else{if(o[2])return K.apply(n,e.getElementsByTagName(t)),n;if((s=o[3])&&x.getElementsByClassName)return K.apply(n,e.getElementsByClassName(s)),n}if(x.qsa&&(!L||!L.test(t))){if(f=p=H,h=e,m=1!==a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(u=k(t),(p=e.getAttribute("id"))?f=p.replace(wt,"\\$&"):e.setAttribute("id",f),f="[id='"+f+"'] ",l=u.length;l--;)u[l]=f+d(u[l]);h=bt.test(t)&&c(e.parentNode)||e,m=u.join(",")}if(m)try{return K.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{p||e.removeAttribute("id")}}}return $(t.replace(lt,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>T.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[H]=!0,t}function o(t){var e=O.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function r(t,e){for(var n=t.split("|"),i=t.length;i--;)T.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||Q)-(~t.sourceIndex||Q);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function u(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function c(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function p(){}function d(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function f(t,e,n){var i=e.dir,o=n&&"parentNode"===i,r=M++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,r)}:function(e,n,s){var a,l,u=[W,r];if(s){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,s))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(l=e[H]||(e[H]={}),(a=l[i])&&a[0]===W&&a[1]===r)return u[2]=a[2];if(l[i]=u,u[2]=t(e,n,s))return!0}}}function h(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function m(t,n,i){for(var o=0,r=n.length;r>o;o++)e(t,n[o],i);return i}function g(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,u=null!=e;l>a;a++)(r=t[a])&&(!n||n(r,i,o))&&(s.push(r),u&&e.push(a));return s}function v(t,e,n,o,r,s){return o&&!o[H]&&(o=v(o)),r&&!r[H]&&(r=v(r,s)),i(function(i,s,a,l){var u,c,p,d=[],f=[],h=s.length,v=i||m(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:g(v,d,t,a,l),b=n?r||(i?t:h||o)?[]:s:y;if(n&&n(y,b,a,l),o)for(u=g(b,f),o(u,[],a,l),c=u.length;c--;)(p=u[c])&&(b[f[c]]=!(y[f[c]]=p));if(i){if(r||t){if(r){for(u=[],c=b.length;c--;)(p=b[c])&&u.push(y[c]=p);r(null,b=[],u,l)}for(c=b.length;c--;)(p=b[c])&&(u=r?tt(i,p):d[c])>-1&&(i[u]=!(s[u]=p))}}else b=g(b===s?b.splice(h,b.length):b),r?r(null,s,b,l):K.apply(s,b)})}function y(t){for(var e,n,i,o=t.length,r=T.relative[t[0].type],s=r||T.relative[" "],a=r?1:0,l=f(function(t){return t===e},s,!0),u=f(function(t){return tt(e,t)>-1},s,!0),c=[function(t,n,i){var o=!r&&(i||n!==S)||((e=n).nodeType?l(t,n,i):u(t,n,i));return e=null,o}];o>a;a++)if(n=T.relative[t[a].type])c=[f(h(c),n)];else{if(n=T.filter[t[a].type].apply(null,t[a].matches),n[H]){for(i=++a;o>i&&!T.relative[t[i].type];i++);return v(a>1&&h(c),a>1&&d(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(lt,"$1"),n,i>a&&y(t.slice(a,i)),o>i&&y(t=t.slice(i)),o>i&&d(t))}c.push(n)}return h(c)}function b(t,n){var o=n.length>0,r=t.length>0,s=function(i,s,a,l,u){var c,p,d,f=0,h="0",m=i&&[],v=[],y=S,b=i||r&&T.find.TAG("*",u),w=W+=null==y?1:Math.random()||.1,x=b.length;for(u&&(S=s!==O&&s);h!==x&&null!=(c=b[h]);h++){if(r&&c){for(p=0;d=t[p++];)if(d(c,s,a)){l.push(c);break}u&&(W=w)}o&&((c=!d&&c)&&f--,i&&m.push(c))}if(f+=h,o&&h!==f){for(p=0;d=n[p++];)d(m,v,s,a);if(i){if(f>0)for(;h--;)m[h]||v[h]||(v[h]=G.call(l));v=g(v)}K.apply(l,v),u&&!i&&v.length>0&&f+n.length>1&&e.uniqueSort(l)}return u&&(W=w,S=y),m};return o?i(s):s}var w,x,T,C,j,k,E,$,S,N,D,A,O,q,I,L,_,R,P,H="sizzle"+1*new Date,F=t.document,W=0,M=0,B=n(),U=n(),z=n(),V=function(t,e){return t===e&&(D=!0),0},Q=1<<31,X={}.hasOwnProperty,Y=[],G=Y.pop,J=Y.push,K=Y.push,Z=Y.slice,tt=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),rt="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+nt+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+rt+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),lt=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ut=new RegExp("^"+nt+"*,"+nt+"*"),ct=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),pt=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(st),ft=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+rt),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,wt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),Tt=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Ct=function(){A()};try{K.apply(Y=Z.call(F.childNodes),F.childNodes),Y[F.childNodes.length].nodeType}catch(jt){K={apply:Y.length?function(t,e){J.apply(t,Z.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}x=e.support={},j=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},A=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:F;return i!==O&&9===i.nodeType&&i.documentElement?(O=i,q=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ct,!1):n.attachEvent&&n.attachEvent("onunload",Ct)),I=!j(i),x.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),x.getElementsByTagName=o(function(t){return t.appendChild(i.createComment("")),!t.getElementsByTagName("*").length}),x.getElementsByClassName=vt.test(i.getElementsByClassName),x.getById=o(function(t){return q.appendChild(t).id=H,!i.getElementsByName||!i.getElementsByName(H).length}),x.getById?(T.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&I){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(t){var e=t.replace(xt,Tt);return function(t){return t.getAttribute("id")===e}}):(delete T.find.ID,T.filter.ID=function(t){var e=t.replace(xt,Tt);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),T.find.TAG=x.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):x.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},T.find.CLASS=x.getElementsByClassName&&function(t,e){return I?e.getElementsByClassName(t):void 0},_=[],L=[],(x.qsa=vt.test(i.querySelectorAll))&&(o(function(t){q.appendChild(t).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||L.push("\\["+nt+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+H+"-]").length||L.push("~="),t.querySelectorAll(":checked").length||L.push(":checked"),t.querySelectorAll("a#"+H+"+*").length||L.push(".#.+[+~]")}),o(function(t){var e=i.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&L.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),L.push(",.*:")})),(x.matchesSelector=vt.test(R=q.matches||q.webkitMatchesSelector||q.mozMatchesSelector||q.oMatchesSelector||q.msMatchesSelector))&&o(function(t){x.disconnectedMatch=R.call(t,"div"),R.call(t,"[s!='']:x"),_.push("!=",st)}),L=L.length&&new RegExp(L.join("|")),_=_.length&&new RegExp(_.join("|")),e=vt.test(q.compareDocumentPosition),P=e||vt.test(q.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},V=e?function(t,e){if(t===e)return D=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!x.sortDetached&&e.compareDocumentPosition(t)===n?t===i||t.ownerDocument===F&&P(F,t)?-1:e===i||e.ownerDocument===F&&P(F,e)?1:N?tt(N,t)-tt(N,e):0:4&n?-1:1)}:function(t,e){if(t===e)return D=!0,0;var n,o=0,r=t.parentNode,a=e.parentNode,l=[t],u=[e];if(!r||!a)return t===i?-1:e===i?1:r?-1:a?1:N?tt(N,t)-tt(N,e):0;if(r===a)return s(t,e);for(n=t;n=n.parentNode;)l.unshift(n);for(n=e;n=n.parentNode;)u.unshift(n);for(;l[o]===u[o];)o++;return o?s(l[o],u[o]):l[o]===F?-1:u[o]===F?1:0},i):O},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==O&&A(t),n=n.replace(pt,"='$1']"),!(!x.matchesSelector||!I||_&&_.test(n)||L&&L.test(n)))try{var i=R.call(t,n);if(i||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(o){}return e(n,O,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==O&&A(t),P(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==O&&A(t);var n=T.attrHandle[e.toLowerCase()],i=n&&X.call(T.attrHandle,e.toLowerCase())?n(t,e,!I):void 0;return void 0!==i?i:x.attributes||!I?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(D=!x.detectDuplicates,N=!x.sortStable&&t.slice(0),t.sort(V),D){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return N=null,t},C=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=C(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=C(e);return n},T=e.selectors={cacheLength:50,createPseudo:i,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(xt,Tt),t[3]=(t[3]||t[4]||t[5]||"").replace(xt,Tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ht.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&dt.test(n)&&(e=k(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(xt,Tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&B(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var r=e.attr(o,t);return null==r?"!="===n:n?(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(at," ")+" ").indexOf(i)>-1:"|="===n?r===i||r.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var u,c,p,d,f,h,m=r!==s?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a;if(g){if(r){for(;m;){for(p=e;p=p[m];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=m="only"===t&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(c=g[H]||(g[H]={}),u=c[t]||[],f=u[0]===W&&u[1],d=u[0]===W&&u[2],p=f&&g.childNodes[f];p=++f&&p&&p[m]||(d=f=0)||h.pop();)if(1===p.nodeType&&++d&&p===e){c[t]=[W,f,d];break}}else if(y&&(u=(e[H]||(e[H]={}))[t])&&u[0]===W)d=u[1];else for(;(p=++f&&p&&p[m]||(d=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++d||(y&&((p[H]||(p[H]={}))[t]=[W,d]),p!==e)););return d-=o,d===i||d%i===0&&d/i>=0}}},PSEUDO:function(t,n){var o,r=T.pseudos[t]||T.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return r[H]?r(n):r.length>1?(o=[t,t,"",n],T.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=tt(t,o[s]),t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=E(t.replace(lt,"$1"));return o[H]?i(function(t,e,n,i){for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(xt,Tt),function(e){return(e.textContent||e.innerText||C(e)).indexOf(t)>-1}}),lang:i(function(t){return ft.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(xt,Tt).toLowerCase(),function(e){var n;do if(n=I?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===q},focus:function(t){return t===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!T.pseudos.empty(t)},header:function(t){return gt.test(t.nodeName)},input:function(t){return mt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[0>n?n+e:n]}),even:u(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:u(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:u(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},T.pseudos.nth=T.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})T.pseudos[w]=l(w);return p.prototype=T.filters=T.pseudos,T.setFilters=new p,k=e.tokenize=function(t,n){var i,o,r,s,a,l,u,c=U[t+" "];if(c)return n?0:c.slice(0);for(a=t,l=[],u=T.preFilter;a;){(!i||(o=ut.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ct.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(lt," ")}),a=a.slice(i.length));for(s in T.filter)!(o=ht[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):U(t,l).slice(0)},E=e.compile=function(t,e){var n,i=[],o=[],r=z[t+" "];if(!r){for(e||(e=k(t)),n=e.length;n--;)r=y(e[n]),r[H]?i.push(r):o.push(r);r=z(t,b(o,i)),r.selector=t}return r},$=e.select=function(t,e,n,i){var o,r,s,a,l,u="function"==typeof t&&t,p=!i&&k(t=u.selector||t);if(n=n||[],1===p.length){if(r=p[0]=p[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&x.getById&&9===e.nodeType&&I&&T.relative[r[1].type]){if(e=(T.find.ID(s.matches[0].replace(xt,Tt),e)||[])[0],!e)return n;u&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=ht.needsContext.test(t)?0:r.length;o--&&(s=r[o],!T.relative[a=s.type]);)if((l=T.find[a])&&(i=l(s.matches[0].replace(xt,Tt),bt.test(r[0].type)&&c(e.parentNode)||e))){if(r.splice(o,1),t=i.length&&d(r),!t)return K.apply(n,i),n;break}}return(u||E(t,p))(i,e,!I,n,bt.test(t)&&c(e.parentNode)||e),n},x.sortStable=H.split("").sort(V).join("")===H,x.detectDuplicates=!!D,A(),x.sortDetached=o(function(t){return 1&t.compareDocumentPosition(O.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),x.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||r("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||r(et,function(t,e,n){var i;return n?void 0:t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);Z.find=ot,Z.expr=ot.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=ot.uniqueSort,Z.text=ot.getText,Z.isXMLDoc=ot.isXML,Z.contains=ot.contains;var rt=Z.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;Z.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?Z.find.matchesSelector(i,t)?[i]:[]:Z.find.matches(t,Z.grep(e,function(t){return 1===t.nodeType}))},Z.fn.extend({find:function(t){var e,n=this.length,i=[],o=this;
if("string"!=typeof t)return this.pushStack(Z(t).filter(function(){for(e=0;n>e;e++)if(Z.contains(o[e],this))return!0}));for(e=0;n>e;e++)Z.find(t,o[e],i);return i=this.pushStack(n>1?Z.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&rt.test(t)?Z(t):t||[],!1).length}});var lt,ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ct=Z.fn.init=function(t,e){var n,i;if(!t)return this;if("string"==typeof t){if(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:ut.exec(t),!n||!n[1]&&e)return!e||e.jquery?(e||lt).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof Z?e[0]:e,Z.merge(this,Z.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:J,!0)),st.test(n[1])&&Z.isPlainObject(e))for(n in e)Z.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):Z.isFunction(t)?"undefined"!=typeof lt.ready?lt.ready(t):t(Z):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),Z.makeArray(t,this))};ct.prototype=Z.fn,lt=Z(J);var pt=/^(?:parents|prev(?:Until|All))/,dt={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&Z(t).is(n))break;i.push(t)}return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),Z.fn.extend({has:function(t){var e=Z(t,this),n=e.length;return this.filter(function(){for(var t=0;n>t;t++)if(Z.contains(this,e[t]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=rt.test(t)||"string"!=typeof t?Z(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(r.length>1?Z.unique(r):r)},index:function(t){return t?"string"==typeof t?V.call(Z(t),this[0]):V.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(Z.unique(Z.merge(this.get(),Z(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),Z.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return Z.dir(t,"parentNode")},parentsUntil:function(t,e,n){return Z.dir(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return Z.dir(t,"nextSibling")},prevAll:function(t){return Z.dir(t,"previousSibling")},nextUntil:function(t,e,n){return Z.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return Z.dir(t,"previousSibling",n)},siblings:function(t){return Z.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return Z.sibling(t.firstChild)},contents:function(t){return t.contentDocument||Z.merge([],t.childNodes)}},function(t,e){Z.fn[t]=function(n,i){var o=Z.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=Z.filter(i,o)),this.length>1&&(dt[t]||Z.unique(o),pt.test(t)&&o.reverse()),this.pushStack(o)}});var ft=/\S+/g,ht={};Z.Callbacks=function(t){t="string"==typeof t?ht[t]||r(t):Z.extend({},t);var e,n,i,o,s,a,l=[],u=!t.once&&[],c=function(r){for(e=t.memory&&r,n=!0,a=o||0,o=0,s=l.length,i=!0;l&&s>a;a++)if(l[a].apply(r[0],r[1])===!1&&t.stopOnFalse){e=!1;break}i=!1,l&&(u?u.length&&c(u.shift()):e?l=[]:p.disable())},p={add:function(){if(l){var n=l.length;!function r(e){Z.each(e,function(e,n){var i=Z.type(n);"function"===i?t.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})}(arguments),i?s=l.length:e&&(o=n,c(e))}return this},remove:function(){return l&&Z.each(arguments,function(t,e){for(var n;(n=Z.inArray(e,l,n))>-1;)l.splice(n,1),i&&(s>=n&&s--,a>=n&&a--)}),this},has:function(t){return t?Z.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],s=0,this},disable:function(){return l=u=e=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,e||p.disable(),this},locked:function(){return!u},fireWith:function(t,e){return!l||n&&!u||(e=e||[],e=[t,e.slice?e.slice():e],i?u.push(e):c(e)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!n}};return p},Z.extend({Deferred:function(t){var e=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return Z.Deferred(function(n){Z.each(e,function(e,r){var s=Z.isFunction(t[e])&&t[e];o[r[1]](function(){var t=s&&s.apply(this,arguments);t&&Z.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r[0]+"With"](this===i?n.promise():this,s?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?Z.extend(t,i):i}},o={};return i.pipe=i.then,Z.each(e,function(t,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=B.call(arguments),s=r.length,a=1!==s||t&&Z.isFunction(t.promise)?s:0,l=1===a?t:Z.Deferred(),u=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?B.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(e=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&Z.isFunction(r[o].promise)?r[o].promise().done(u(o,i,r)).fail(l.reject).progress(u(o,n,e)):--a;return a||l.resolveWith(i,r),l.promise()}});var mt;Z.fn.ready=function(t){return Z.ready.promise().done(t),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(t){t?Z.readyWait++:Z.ready(!0)},ready:function(t){(t===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,t!==!0&&--Z.readyWait>0||(mt.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(e){return mt||(mt=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",s,!1),t.addEventListener("load",s,!1))),mt.promise(e)},Z.ready.promise();var gt=Z.access=function(t,e,n,i,o,r,s){var a=0,l=t.length,u=null==n;if("object"===Z.type(n)){o=!0;for(a in n)Z.access(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,Z.isFunction(i)||(s=!0),u&&(s?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(Z(t),n)})),e))for(;l>a;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:u?e.call(t):l?e(t[0],n):r};Z.acceptData=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(t){if(!a.accepts(t))return 0;var e={},n=t[this.expando];if(!n){n=a.uid++;try{e[this.expando]={value:n},Object.defineProperties(t,e)}catch(i){e[this.expando]=n,Z.extend(t,e)}}return this.cache[n]||(this.cache[n]={}),n},set:function(t,e,n){var i,o=this.key(t),r=this.cache[o];if("string"==typeof e)r[e]=n;else if(Z.isEmptyObject(r))Z.extend(this.cache[o],e);else for(i in e)r[i]=e[i];return r},get:function(t,e){var n=this.cache[this.key(t)];return void 0===e?n:n[e]},access:function(t,e,n){var i;return void 0===e||e&&"string"==typeof e&&void 0===n?(i=this.get(t,e),void 0!==i?i:this.get(t,Z.camelCase(e))):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i,o,r=this.key(t),s=this.cache[r];if(void 0===e)this.cache[r]={};else{Z.isArray(e)?i=e.concat(e.map(Z.camelCase)):(o=Z.camelCase(e),e in s?i=[e,o]:(i=o,i=i in s?[i]:i.match(ft)||[])),n=i.length;for(;n--;)delete s[i[n]]}},hasData:function(t){return!Z.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}};var vt=new a,yt=new a,bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,wt=/([A-Z])/g;Z.extend({hasData:function(t){return yt.hasData(t)||vt.hasData(t)},data:function(t,e,n){return yt.access(t,e,n)},removeData:function(t,e){yt.remove(t,e)},_data:function(t,e,n){return vt.access(t,e,n)},_removeData:function(t,e){vt.remove(t,e)}}),Z.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){if(this.length&&(o=yt.get(r),1===r.nodeType&&!vt.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=Z.camelCase(i.slice(5)),l(r,i,o[i])));vt.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each(function(){yt.set(this,t)}):gt(this,function(e){var n,i=Z.camelCase(t);if(r&&void 0===e){if(n=yt.get(r,t),void 0!==n)return n;if(n=yt.get(r,i),void 0!==n)return n;if(n=l(r,i,void 0),void 0!==n)return n}else this.each(function(){var n=yt.get(this,i);yt.set(this,i,e),-1!==t.indexOf("-")&&void 0!==n&&yt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){yt.remove(this,t)})}}),Z.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=vt.get(t,e),n&&(!i||Z.isArray(n)?i=vt.access(t,e,Z.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=Z.queue(t,e),i=n.length,o=n.shift(),r=Z._queueHooks(t,e),s=function(){Z.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return vt.get(t,n)||vt.access(t,n,{empty:Z.Callbacks("once memory").add(function(){vt.remove(t,[e+"queue",n])})})}}),Z.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?Z.queue(this[0],t):void 0===e?this:this.each(function(){var n=Z.queue(this,t,e);Z._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&Z.dequeue(this,t)})},dequeue:function(t){return this.each(function(){Z.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=Z.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)n=vt.get(r[s],t+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var xt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Tt=["Top","Right","Bottom","Left"],Ct=function(t,e){return t=e||t,"none"===Z.css(t,"display")||!Z.contains(t.ownerDocument,t)},jt=/^(?:checkbox|radio)$/i;!function(){var t=J.createDocumentFragment(),e=t.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),G.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",G.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var kt="undefined";G.focusinBubbles="onfocusin"in t;var Et=/^key/,$t=/^(?:mouse|pointer|contextmenu)|click/,St=/^(?:focusinfocus|focusoutblur)$/,Nt=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,u,c,p,d,f,h,m,g=vt.get(t);if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=Z.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(e){return typeof Z!==kt&&Z.event.triggered!==e.type?Z.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(ft)||[""],u=e.length;u--;)a=Nt.exec(e[u])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f&&(p=Z.event.special[f]||{},f=(o?p.delegateType:p.bindType)||f,p=Z.event.special[f]||{},c=Z.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&Z.expr.match.needsContext.test(o),namespace:h.join(".")},r),(d=l[f])||(d=l[f]=[],d.delegateCount=0,p.setup&&p.setup.call(t,i,h,s)!==!1||t.addEventListener&&t.addEventListener(f,s,!1)),p.add&&(p.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,c):d.push(c),Z.event.global[f]=!0)},remove:function(t,e,n,i,o){var r,s,a,l,u,c,p,d,f,h,m,g=vt.hasData(t)&&vt.get(t);if(g&&(l=g.events)){for(e=(e||"").match(ft)||[""],u=e.length;u--;)if(a=Nt.exec(e[u])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f){for(p=Z.event.special[f]||{},f=(i?p.delegateType:p.bindType)||f,d=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=d.length;r--;)c=d[r],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(r,1),c.selector&&d.delegateCount--,p.remove&&p.remove.call(t,c));s&&!d.length&&(p.teardown&&p.teardown.call(t,h,g.handle)!==!1||Z.removeEvent(t,f,g.handle),delete l[f])}else for(f in l)Z.event.remove(t,f+e[u],n,i,!0);Z.isEmptyObject(l)&&(delete g.handle,vt.remove(t,"events"))}},trigger:function(e,n,i,o){var r,s,a,l,u,c,p,d=[i||J],f=Y.call(e,"type")?e.type:e,h=Y.call(e,"namespace")?e.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!St.test(f+Z.event.triggered)&&(f.indexOf(".")>=0&&(h=f.split("."),f=h.shift(),h.sort()),u=f.indexOf(":")<0&&"on"+f,e=e[Z.expando]?e:new Z.Event(f,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=h.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:Z.makeArray(n,[e]),p=Z.event.special[f]||{},o||!p.trigger||p.trigger.apply(i,n)!==!1)){if(!o&&!p.noBubble&&!Z.isWindow(i)){for(l=p.delegateType||f,St.test(l+f)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||J)&&d.push(a.defaultView||a.parentWindow||t)}for(r=0;(s=d[r++])&&!e.isPropagationStopped();)e.type=r>1?l:p.bindType||f,c=(vt.get(s,"events")||{})[e.type]&&vt.get(s,"handle"),c&&c.apply(s,n),c=u&&s[u],c&&c.apply&&Z.acceptData(s)&&(e.result=c.apply(s,n),e.result===!1&&e.preventDefault());return e.type=f,o||e.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),n)!==!1||!Z.acceptData(i)||u&&Z.isFunction(i[f])&&!Z.isWindow(i)&&(a=i[u],a&&(i[u]=null),Z.event.triggered=f,i[f](),Z.event.triggered=void 0,a&&(i[u]=a)),e.result}},dispatch:function(t){t=Z.event.fix(t);var e,n,i,o,r,s=[],a=B.call(arguments),l=(vt.get(this,"events")||{})[t.type]||[],u=Z.event.special[t.type]||{};if(a[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(s=Z.event.handlers.call(this,t,l),e=0;(o=s[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(r.namespace))&&(t.handleObj=r,t.data=r.data,i=((Z.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,r,s=[],a=e.delegateCount,l=t.target;if(a&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==t.type){for(i=[],n=0;a>n;n++)r=e[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?Z(o,this).index(l)>=0:Z.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<e.length&&s.push({elem:this,handlers:e.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,r=e.button;return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||J,i=n.documentElement,o=n.body,t.pageX=e.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),t.which||void 0===r||(t.which=1&r?1:2&r?3:4&r?2:0),t}},fix:function(t){if(t[Z.expando])return t;var e,n,i,o=t.type,r=t,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=$t.test(o)?this.mouseHooks:Et.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,t=new Z.Event(r),e=i.length;e--;)n=i[e],t[n]=r[n];return t.target||(t.target=J),3===t.target.nodeType&&(t.target=t.target.parentNode),s.filter?s.filter(t,r):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==p()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return Z.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,i){var o=Z.extend(new Z.Event,n,{type:t,isSimulated:!0,originalEvent:{}});i?Z.event.trigger(o,null,e):Z.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)},Z.Event=function(t,e){return this instanceof Z.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?u:c):this.type=t,e&&Z.extend(this,e),this.timeStamp=t&&t.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(t,e)},Z.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=u,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=u,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=u,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){Z.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return(!o||o!==i&&!Z.contains(i,o))&&(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),G.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){Z.event.simulate(e,t.target,Z.event.fix(t),!0)};Z.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=vt.access(i,e);o||i.addEventListener(t,n,!0),vt.access(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=vt.access(i,e)-1;o?vt.access(i,e,o):(i.removeEventListener(t,n,!0),vt.remove(i,e))}}}),Z.fn.extend({on:function(t,e,n,i,o){var r,s;if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0);for(s in t)this.on(s,e,n,t[s],o);return this}if(null==n&&null==i?(i=e,n=e=void 0):null==i&&("string"==typeof e?(i=n,n=void 0):(i=n,n=e,e=void 0)),i===!1)i=c;else if(!i)return this;return 1===o&&(r=i,i=function(t){return Z().off(t),r.apply(this,arguments)},i.guid=r.guid||(r.guid=Z.guid++)),this.each(function(){Z.event.add(this,t,i,n,e)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,Z(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=c),this.each(function(){Z.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){Z.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?Z.event.trigger(t,e,n,!0):void 0}});var Dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,At=/<([\w:]+)/,Ot=/<|&#?\w+;/,qt=/<(?:script|style|link)/i,It=/checked\s*(?:[^=]|=\s*.checked.)/i,Lt=/^$|\/(?:java|ecma)script/i,_t=/^true\/(.*)/,Rt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Pt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pt.optgroup=Pt.option,Pt.tbody=Pt.tfoot=Pt.colgroup=Pt.caption=Pt.thead,Pt.th=Pt.td,Z.extend({clone:function(t,e,n){var i,o,r,s,a=t.cloneNode(!0),l=Z.contains(t.ownerDocument,t);if(!(G.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||Z.isXMLDoc(t)))for(s=v(a),r=v(t),i=0,o=r.length;o>i;i++)y(r[i],s[i]);if(e)if(n)for(r=r||v(t),s=s||v(a),i=0,o=r.length;o>i;i++)g(r[i],s[i]);else g(t,a);return s=v(a,"script"),s.length>0&&m(s,!l&&v(t,"script")),a},buildFragment:function(t,e,n,i){for(var o,r,s,a,l,u,c=e.createDocumentFragment(),p=[],d=0,f=t.length;f>d;d++)if(o=t[d],o||0===o)if("object"===Z.type(o))Z.merge(p,o.nodeType?[o]:o);else if(Ot.test(o)){for(r=r||c.appendChild(e.createElement("div")),s=(At.exec(o)||["",""])[1].toLowerCase(),a=Pt[s]||Pt._default,r.innerHTML=a[1]+o.replace(Dt,"<$1></$2>")+a[2],u=a[0];u--;)r=r.lastChild;Z.merge(p,r.childNodes),r=c.firstChild,r.textContent=""}else p.push(e.createTextNode(o));for(c.textContent="",d=0;o=p[d++];)if((!i||-1===Z.inArray(o,i))&&(l=Z.contains(o.ownerDocument,o),r=v(c.appendChild(o),"script"),l&&m(r),n))for(u=0;o=r[u++];)Lt.test(o.type||"")&&n.push(o);return c},cleanData:function(t){for(var e,n,i,o,r=Z.event.special,s=0;void 0!==(n=t[s]);s++){if(Z.acceptData(n)&&(o=n[vt.expando],o&&(e=vt.cache[o]))){if(e.events)for(i in e.events)r[i]?Z.event.remove(n,i):Z.removeEvent(n,i,e.handle);vt.cache[o]&&delete vt.cache[o]}delete yt.cache[n[yt.expando]]}}}),Z.fn.extend({text:function(t){return gt(this,function(t){return void 0===t?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=d(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=d(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,i=t?Z.filter(t,this):this,o=0;null!=(n=i[o]);o++)e||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(e&&Z.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(Z.cleanData(v(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return Z.clone(this,t,e)})},html:function(t){return gt(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!qt.test(t)&&!Pt[(At.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(Dt,"<$1></$2>");try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(Z.cleanData(v(e,!1)),e.innerHTML=t);e=0}catch(o){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,Z.cleanData(v(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=U.apply([],t);var n,i,o,r,s,a,l=0,u=this.length,c=this,p=u-1,d=t[0],m=Z.isFunction(d);if(m||u>1&&"string"==typeof d&&!G.checkClone&&It.test(d))return this.each(function(n){var i=c.eq(n);m&&(t[0]=d.call(this,n,i.html())),i.domManip(t,e)});if(u&&(n=Z.buildFragment(t,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(o=Z.map(v(n,"script"),f),r=o.length;u>l;l++)s=n,l!==p&&(s=Z.clone(s,!0,!0),r&&Z.merge(o,v(s,"script"))),e.call(this[l],s,l);if(r)for(a=o[o.length-1].ownerDocument,Z.map(o,h),l=0;r>l;l++)s=o[l],Lt.test(s.type||"")&&!vt.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Rt,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){Z.fn[t]=function(t){for(var n,i=[],o=Z(t),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),Z(o[s])[e](n),z.apply(i,n.get());return this.pushStack(i)}});var Ht,Ft={},Wt=/^margin/,Mt=new RegExp("^("+xt+")(?!px)[a-z%]+$","i"),Bt=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):t.getComputedStyle(e,null)};!function(){function e(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",o.appendChild(r);var e=t.getComputedStyle(s,null);n="1%"!==e.top,i="4px"===e.width,o.removeChild(r)}var n,i,o=J.documentElement,r=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",G.clearCloneStyle="content-box"===s.style.backgroundClip,r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",r.appendChild(s),t.getComputedStyle&&Z.extend(G,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return null==i&&e(),i},reliableMarginRight:function(){var e,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",o.appendChild(r),e=!parseFloat(t.getComputedStyle(n,null).marginRight),o.removeChild(r),s.removeChild(n),e}}))}(),Z.swap=function(t,e,n,i){var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];o=n.apply(t,i||[]);for(r in e)t.style[r]=s[r];return o};var Ut=/^(none|table(?!-c[ea]).+)/,zt=new RegExp("^("+xt+")(.*)$","i"),Vt=new RegExp("^([+-])=("+xt+")","i"),Qt={position:"absolute",visibility:"hidden",display:"block"},Xt={letterSpacing:"0",fontWeight:"400"},Yt=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=x(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=Z.camelCase(e),l=t.style;return e=Z.cssProps[a]||(Z.cssProps[a]=C(l,a)),s=Z.cssHooks[e]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:l[e]:(r=typeof n,"string"===r&&(o=Vt.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(Z.css(t,e)),r="number"),void(null!=n&&n===n&&("number"!==r||Z.cssNumber[a]||(n+="px"),G.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(l[e]=n))))}},css:function(t,e,n,i){var o,r,s,a=Z.camelCase(e);return e=Z.cssProps[a]||(Z.cssProps[a]=C(t.style,a)),s=Z.cssHooks[e]||Z.cssHooks[a],s&&"get"in s&&(o=s.get(t,!0,n)),void 0===o&&(o=x(t,e,i)),"normal"===o&&e in Xt&&(o=Xt[e]),""===n||n?(r=parseFloat(o),n===!0||Z.isNumeric(r)?r||0:o):o}}),Z.each(["height","width"],function(t,e){Z.cssHooks[e]={get:function(t,n,i){return n?Ut.test(Z.css(t,"display"))&&0===t.offsetWidth?Z.swap(t,Qt,function(){return E(t,e,i)}):E(t,e,i):void 0},set:function(t,n,i){var o=i&&Bt(t);return j(t,n,i?k(t,e,i,"border-box"===Z.css(t,"boxSizing",!1,o),o):0)}}}),Z.cssHooks.marginRight=T(G.reliableMarginRight,function(t,e){return e?Z.swap(t,{display:"inline-block"},x,[t,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(t,e){Z.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+Tt[i]+e]=r[i]||r[i-2]||r[0];return o}},Wt.test(t)||(Z.cssHooks[t+e].set=j)}),Z.fn.extend({css:function(t,e){return gt(this,function(t,e,n){var i,o,r={},s=0;if(Z.isArray(e)){for(i=Bt(t),o=e.length;o>s;s++)r[e[s]]=Z.css(t,e[s],!1,i);return r}return void 0!==n?Z.style(t,e,n):Z.css(t,e)},t,e,arguments.length>1)},show:function(){return $(this,!0)},hide:function(){return $(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Ct(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=S,S.prototype={constructor:S,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(Z.cssNumber[n]?"":"px")},cur:function(){var t=S.propHooks[this.prop];return t&&t.get?t.get(this):S.propHooks._default.get(this)},run:function(t){var e,n=S.propHooks[this.prop];return this.options.duration?this.pos=e=Z.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):S.propHooks._default.set(this),this}},S.prototype.init.prototype=S.prototype,S.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=Z.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){Z.fx.step[t.prop]?Z.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[Z.cssProps[t.prop]]||Z.cssHooks[t.prop])?Z.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},S.propHooks.scrollTop=S.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},Z.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},Z.fx=S.prototype.init,Z.fx.step={};var Gt,Jt,Kt=/^(?:toggle|show|hide)$/,Zt=new RegExp("^(?:([+-])=|)("+xt+")([a-z%]*)$","i"),te=/queueHooks$/,ee=[O],ne={"*":[function(t,e){var n=this.createTween(t,e),i=n.cur(),o=Zt.exec(e),r=o&&o[3]||(Z.cssNumber[t]?"":"px"),s=(Z.cssNumber[t]||"px"!==r&&+i)&&Zt.exec(Z.css(n.elem,t)),a=1,l=20;if(s&&s[3]!==r){r=r||s[3],o=o||[],s=+i||1;do a=a||".5",s/=a,Z.style(n.elem,t,s+r);while(a!==(a=n.cur()/i)&&1!==a&&--l)}return o&&(s=n.start=+s||+i||0,n.unit=r,n.end=o[1]?s+(o[1]+1)*o[2]:+o[2]),n}]};Z.Animation=Z.extend(I,{tweener:function(t,e){Z.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,i=0,o=t.length;o>i;i++)n=t[i],ne[n]=ne[n]||[],ne[n].unshift(e)},prefilter:function(t,e){e?ee.unshift(t):ee.push(t)}}),Z.speed=function(t,e,n){var i=t&&"object"==typeof t?Z.extend({},t):{complete:n||!n&&e||Z.isFunction(t)&&t,duration:t,easing:n&&e||e&&!Z.isFunction(e)&&e};return i.duration=Z.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in Z.fx.speeds?Z.fx.speeds[i.duration]:Z.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){Z.isFunction(i.old)&&i.old.call(this),i.queue&&Z.dequeue(this,i.queue)},i},Z.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Ct).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=Z.isEmptyObject(t),r=Z.speed(e,n,i),s=function(){var e=I(this,Z.extend({},t),r);(o||vt.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=Z.timers,s=vt.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&te.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));(e||!n)&&Z.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=vt.get(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=Z.timers,s=i?i.length:0;for(n.finish=!0,Z.queue(this,t,[]),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
        for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
        delete n.finish
    })
    }
    }), Z.each(["toggle", "show", "hide"], function (t, e) {
        var n = Z.fn[e];
        Z.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, i, o)
        }
    }), Z.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        Z.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var t, e = 0, n = Z.timers;
        for (Gt = Z.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || Z.fx.stop(), Gt = void 0
    }, Z.fx.timer = function (t) {
        Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Jt), Jt = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (t, e) {
        return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var t = J.createElement("input"), e = J.createElement("select"), n = e.appendChild(J.createElement("option"));
        t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled = !0, G.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
    }();
        var ie, oe, re = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function (t, e) {
                return gt(this, Z.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    Z.removeAttr(this, t)
                })
            }
        }), Z.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === kt ? Z.prop(t, e, n) : (1 === r && Z.isXMLDoc(t) || (e = e.toLowerCase(), i = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? oe : ie)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = Z.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e)) : void 0
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match(ft);
                if (r && 1 === t.nodeType)for (; n = r[o++];)i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!G.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), oe = {
            set: function (t, e, n) {
                return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = re[e] || Z.find.attr;
            re[e] = function (t, e, i) {
                var o, r;
                return i || (r = re[e], re[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, re[e] = r), o
            }
        });
        var se = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function (t, e) {
                return gt(this, Z.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[Z.propFix[t] || t]
                })
            }
        }), Z.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, o, r, s = t.nodeType;
                return t && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !Z.isXMLDoc(t), r && (e = Z.propFix[e] || e, o = Z.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]) : void 0
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (Z.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            Z.propFix[this.toLowerCase()] = this
        });
        var ae = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, s, a = "string" == typeof t && t, l = 0, u = this.length;
                if (Z.isFunction(t))return this.each(function (e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (a)for (e = (t || "").match(ft) || []; u > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                    for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    s = Z.trim(i), n.className !== s && (n.className = s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, u = this.length;
                if (Z.isFunction(t))return this.each(function (e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (a)for (e = (t || "").match(ft) || []; u > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                    for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    s = t ? Z.trim(i) : "", n.className !== s && (n.className = s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function (n) {
                    Z(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function () {
                    if ("string" === n)for (var e, i = 0, o = Z(this), r = t.match(ft) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0)return !0;
                return !1
            }
        });
        var le = /\r/g;
        Z.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = Z.isFunction(t), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, Z(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)) : void 0
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = Z.find.attr(t, "value");
                        return null != e ? e : Z.trim(Z.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== o || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (e = Z(n).val(), r)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = Z.makeArray(e), s = o.length; s--;)i = o[s], (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function () {
            Z.valHooks[this] = {
                set: function (t, e) {
                    return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (Z.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            Z.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), Z.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var ue = Z.now(), ce = /\?/;
        Z.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, Z.parseXML = function (t) {
            var e, n;
            if (!t || "string" != typeof t)return null;
            try {
                n = new DOMParser, e = n.parseFromString(t, "text/xml")
            } catch (i) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
        };
        var pe = /#.*$/, de = /([?&])_=[^&]*/, fe = /^(.*?):[ \t]*([^\r\n]*)$/gm, he = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, me = /^(?:GET|HEAD)$/, ge = /^\/\//, ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ye = {}, be = {}, we = "*/".concat("*"), xe = t.location.href, Te = ve.exec(xe.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe,
                type: "GET",
                isLocal: he.test(Te[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": we,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? R(R(t, Z.ajaxSettings), e) : R(Z.ajaxSettings, t)
            },
            ajaxPrefilter: L(ye),
            ajaxTransport: L(be),
            ajax: function (t, e) {
                function n(t, e, n, s) {
                    var l, c, v, y, w, T = e;
                    2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = P(p, x, n)), y = H(p, y, x, l), l ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Z.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (Z.etag[o] = w)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, l = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", l ? h.resolveWith(d, [c, T, x]) : h.rejectWith(d, [x, T, v]), x.statusCode(g), g = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? c : v]), m.fireWith(d, [x, T]), u && (f.trigger("ajaxComplete", [x, p]), --Z.active || Z.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, u, c, p = Z.ajaxSetup({}, e), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? Z(d) : Z.event, h = Z.Deferred(), m = Z.Callbacks("once memory"), g = p.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!s)for (s = {}; e = fe.exec(r);)s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (2 > b)for (e in t)g[e] = [g[e], t[e]]; else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return i && i.abort(e), n(0, e), this
                    }
                };
                if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || xe) + "").replace(pe, "").replace(ge, Te[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(ft) || [""], null == p.crossDomain && (l = ve.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Te[1] && l[2] === Te[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Te[3] || ("http:" === Te[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)), _(ye, p, e, x), 2 === b)return x;
                u = Z.event && p.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !me.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ce.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = de.test(o) ? o.replace(de, "$1_=" + ue++) : o + (ce.test(o) ? "&" : "?") + "_=" + ue++)), p.ifModified && (Z.lastModified[o] && x.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + we + "; q=0.01" : "") : p.accepts["*"]);
                for (c in p.headers)x.setRequestHeader(c, p.headers[c]);
                if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === b))return x.abort();
                w = "abort";
                for (c in{success: 1, error: 1, complete: 1})x[c](p[c]);
                if (i = _(be, p, e, x)) {
                    x.readyState = 1, u && f.trigger("ajaxSend", [x, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (T) {
                        if (!(2 > b))throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (t, e, n) {
                return Z.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return Z.get(t, void 0, e, "script")
            }
        }), Z.each(["get", "post"], function (t, e) {
            Z[e] = function (t, n, i, o) {
                return Z.isFunction(n) && (o = o || i, i = n, n = void 0), Z.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), Z._evalUrl = function (t) {
            return Z.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, Z.fn.extend({
            wrapAll: function (t) {
                var e;
                return Z.isFunction(t) ? this.each(function (e) {
                    Z(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                    return t
                }).append(this)), this)
            }, wrapInner: function (t) {
                return this.each(Z.isFunction(t) ? function (e) {
                    Z(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = Z(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = Z.isFunction(t);
                return this.each(function (n) {
                    Z(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, Z.expr.filters.visible = function (t) {
            return !Z.expr.filters.hidden(t)
        };
        var Ce = /%20/g, je = /\[\]$/, ke = /\r?\n/g, Ee = /^(?:submit|button|image|reset|file)$/i, $e = /^(?:input|select|textarea|keygen)/i;
        Z.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t))Z.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t)F(n, t[n], e, o);
            return i.join("&").replace(Ce, "+")
        }, Z.fn.extend({
            serialize: function () {
                return Z.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = Z.prop(this, "elements");
                    return t ? Z.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !Z(this).is(":disabled") && $e.test(this.nodeName) && !Ee.test(t) && (this.checked || !jt.test(t))
                }).map(function (t, e) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function (t) {
                        return {name: e.name, value: t.replace(ke, "\r\n")}
                    }) : {name: e.name, value: n.replace(ke, "\r\n")}
                }).get()
            }
        }), Z.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (t) {
            }
        };
        var Se = 0, Ne = {}, De = {0: 200, 1223: 204}, Ae = Z.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Ne)Ne[t]()
        }), G.cors = !!Ae && "withCredentials" in Ae, G.ajax = Ae = !!Ae, Z.ajaxTransport(function (t) {
            var e;
            return G.cors || Ae && !t.crossDomain ? {
                send: function (n, i) {
                    var o, r = t.xhr(), s = ++Se;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n)r.setRequestHeader(o, n[o]);
                    e = function (t) {
                        return function () {
                            e && (delete Ne[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(De[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {text: r.responseText} : void 0, r.getAllResponseHeaders()))
                        }
                    }, r.onload = e(), r.onerror = e("error"), e = Ne[s] = e("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (a) {
                        if (e)throw a
                    }
                }, abort: function () {
                    e && e()
                }
            } : void 0
        }), Z.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return Z.globalEval(t), t
                }
            }
        }), Z.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), Z.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, o) {
                        e = Z("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), J.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Oe = [], qe = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Oe.pop() || Z.expando + "_" + ue++;
                return this[t] = !0, t
            }
        }), Z.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (qe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qe, "$1" + o) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return s || Z.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                s = arguments
            }, i.always(function () {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Oe.push(o)), s && Z.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), Z.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || J;
            var i = st.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = Z.buildFragment([t], e, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
        };
        var Ie = Z.fn.load;
        Z.fn.load = function (t, e, n) {
            if ("string" != typeof t && Ie)return Ie.apply(this, arguments);
            var i, o, r, s = this, a = t.indexOf(" ");
            return a >= 0 && (i = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && Z.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                    s.each(n, r || [t.responseText, e, t])
                }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            Z.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), Z.expr.filters.animated = function (t) {
            return Z.grep(Z.timers, function (e) {
                return t === e.elem
            }).length
        };
        var Le = t.document.documentElement;
        Z.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, s, a, l, u, c = Z.css(t, "position"), p = Z(t), d = {};
                "static" === c && (t.style.position = "relative"), a = p.offset(), r = Z.css(t, "top"), l = Z.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = p.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : p.css(d)
            }
        }, Z.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    Z.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
                return r ? (e = r.documentElement, Z.contains(e, i) ? (typeof i.getBoundingClientRect !== kt && (o = i.getBoundingClientRect()), n = W(r), {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }) : o) : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (i = t.offset()), i.top += Z.css(t[0], "borderTopWidth", !0), i.left += Z.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - Z.css(n, "marginTop", !0),
                        left: e.left - i.left - Z.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || Le; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");)t = t.offsetParent;
                    return t || Le
                })
            }
        }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
            var i = "pageYOffset" === n;
            Z.fn[e] = function (o) {
                return gt(this, function (e, o, r) {
                    var s = W(e);
                    return void 0 === r ? s ? s[n] : e[o] : void(s ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r)
                }, e, o, arguments.length, null)
            }
        }), Z.each(["top", "left"], function (t, e) {
            Z.cssHooks[e] = T(G.pixelPosition, function (t, n) {
                return n ? (n = x(t, e), Mt.test(n) ? Z(t).position()[e] + "px" : n) : void 0
            })
        }), Z.each({Height: "height", Width: "width"}, function (t, e) {
            Z.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                Z.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return gt(this, function (e, n, i) {
                        var o;
                        return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? Z.css(e, n, s) : Z.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), Z.fn.size = function () {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return Z
        });
        var _e = t.jQuery, Re = t.$;
        return Z.noConflict = function (e) {
            return t.$ === Z && (t.$ = Re), e && t.jQuery === Z && (t.jQuery = _e), Z
        }, typeof e === kt && (t.jQuery = t.$ = Z), Z
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.carousel"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)return e;
        var o = "prev" == t ? -1 : 1, r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(e, o), s = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (r.hasClass("active"))return this.sliding = !1;
        var u = r[0], c = t.Event("slide.bs.carousel", {relatedTarget: u, direction: a});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(r)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: u, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.collapse"), r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function () {
            var i = t(this), o = e(i), r = {relatedTarget: this};
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
                o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.6", s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o), s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {relatedTarget: this};
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i), s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a", l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var o = t(this), r = o.data("bs.modal"), s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), s = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var o = this, r = this.tip(), s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, u = l.test(a);
            u && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), p = r[0].offsetWidth, d = r[0].offsetHeight;
            if (u) {
                var f = a, h = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > h.bottom ? "top" : "top" == a && c.top - d < h.top ? "bottom" : "right" == a && c.right + p > h.width ? "left" : "left" == a && c.left - p < h.left ? "right" : a, r.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, p, d);
            this.applyPlacement(m, a);
            var g = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var p = /top|bottom/.test(n), d = p ? 2 * c.left - o + l : 2 * c.top - r + u, f = p ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], p)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }

        var o = this, r = t(this.$tip), s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var r = i ? {
            top: 0,
            left: 0
        } : e.offset(), s = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, s, a, r)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r, c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }

    e.VERSION = "3.3.6", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0])return this.activeTarget = null, this.clear();
        for (t = o.length; t--;)s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"), r = t.Event("hide.bs.tab", {relatedTarget: e[0]}), s = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var s = i.find("> .active"), a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return n > o ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + s ? !1 : "bottom";
        var a = null == this.affixed, l = a ? o : r.top, u = a ? s : e;
        return null != n && n >= o ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom, s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - e - r})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery);
var uiLoad = uiLoad || {};
!function (t, e, n) {
    "use strict";
    var i = [], o = !1, r = t.Deferred();
    n.load = function (e) {
        return e = t.isArray(e) ? e : e.split(/\s+/), o || (o = r.promise()), t.each(e, function (t, e) {
            o = o.then(function () {
                return e.indexOf(".css") >= 0 ? a(e) : s(e)
            })
        }), r.resolve(), o
    };
    var s = function (n) {
        if (i[n])return i[n].promise();
        var o = t.Deferred(), r = e.createElement("script");
        return r.src = n, r.onload = function (t) {
            o.resolve(t)
        }, r.onerror = function (t) {
            o.reject(t)
        }, e.body.appendChild(r), i[n] = o, o.promise()
    }, a = function (n) {
        if (i[n])return i[n].promise();
        var o = t.Deferred(), r = e.createElement("link");
        return r.rel = "stylesheet", r.type = "text/css", r.href = n, r.onload = function (t) {
            o.resolve(t)
        }, r.onerror = function (t) {
            o.reject(t)
        }, e.head.appendChild(r), i[n] = o, o.promise()
    }
}(jQuery, document, uiLoad);
var jp_config = {
    easyPieChart: ["/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"],
    sparkline: ["/bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js"],
    plot: ["/bower_components/flot/jquery.flot.js", "/bower_components/flot/jquery.flot.pie.js", "/bower_components/flot/jquery.flot.resize.js", "/bower_components/flot.tooltip/js/jquery.flot.tooltip.js", "/bower_components/flot.orderbars/js/jquery.flot.orderBars.js", "/bower_components/flot-spline/js/jquery.flot.spline.js"],
    moment: ["/bower_components/moment/moment.js"],
    screenfull: ["/bower_components/screenfull/dist/screenfull.min.js"],
    slimScroll: ["/bower_components/slimscroll/jquery.slimscroll.min.js"],
    sortable: ["/bower_components/html5sortable/jquery.sortable.js"],
    nestable: ["/bower_components/nestable/jquery.nestable.js", "/bower_components/nestable/jquery.nestable.css"],
    filestyle: ["/bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js"],
    slider: ["/bower_components/bootstrap-slider/bootstrap-slider.js", "/bower_components/bootstrap-slider/bootstrap-slider.css"],
    chosen: ["/bower_components/chosen/chosen.jquery.min.js", "/build/js/plugins/chosen/bootstrap-chosen.css", "/build/js/plugins/chosen/chosen.js"],
    TouchSpin: ["/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js", "/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"],
    wysiwyg: ["/bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js", "/bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js"],
    dataTable: ["/bower_components/datatables/media/js/jquery.dataTables.min.js", "/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js", "/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css"],
    vectorMap: ["/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js", "/bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js", "/bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js", "/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css"],
    footable: ["/bower_components/footable/dist/footable.all.min.js", "/bower_components/footable/css/footable.core.css"],
    fullcalendar: ["/bower_components/moment/moment.js", "/bower_components/fullcalendar/dist/fullcalendar.min.js", "/bower_components/fullcalendar/dist/fullcalendar.css", "/bower_components/fullcalendar/dist/fullcalendar.theme.css"],
    daterangepicker: ["/bower_components/moment/moment.js", "/bower_components/bootstrap-daterangepicker/daterangepicker.js", "/bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css"],
    tagsinput: ["/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js", "/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"],
    prism: ["/bower_components/prism/prism.js"],
    tinymce: ["/bower_components/tinymce/tinymce.min.js", "/build/js/plugins/tinymce/tinymce.js"],
    dropzone: ["/bower_components/dropzone/dist/min/dropzone.min.css", "/bower_components/dropzone/dist/min/basic.min.css", "/bower_components/dropzone/dist/min/dropzone.min.js", "/build/js/plugins/dropzone/dropzone.js"],
    datetimepicker: ["/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css", "/bower_components/moment/min/moment.min.js", "/bower_components/moment/min/locales.min.js", "/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js", "/build/js/plugins/datetimepicker/datetimepicker.js"],
    fileuploadz: ["/bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js", "/bower_components/blueimp-tmpl/js/tmpl.min.js", "/bower_components/blueimp-load-image/js/load-image.all.min.js", "/bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.min.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload.js", "/bower_components/blueimp-file-upload/js/cors/jquery.postmessage-transport.js", "/bower_components/blueimp-file-upload/js/jquery.iframe-transport.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload-process.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload-image.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload-audio.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload-video.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js", "/bower_components/blueimp-file-upload/js/jquery.fileupload-ui.js", "/bower_components/blueimp-file-upload/js/cors/jquery.xdr-transport.js", "/bower_components/blueimp-file-upload/css/jquery.fileupload.css", "/bower_components/blueimp-file-upload/css/jquery.fileupload-ui.css", "/bower_components/blueimp-file-upload/css/jquery.fileupload-noscript.css", "/bower_components/blueimp-file-upload/css/jquery.fileupload-ui-noscript.css", "/build/js/controller/admin/media/index.js"],
    webAdd: ["/build/js/controller/user/web/index.js"],
    tiketSocketConn: ["/build/js/controller/user/tikets/index.js"],
    adminTiketIndex: ["/build/js/controller/admin/tikets/index.js"],
    adminTiketView: ["/build/js/controller/admin/tikets/viewer.js", "/bower_components/jquery-ui/jquery-ui.js"],
    userTiketView: ["/build/js/controller/user/tikets/viewer.js", "/bower_components/jquery-ui/jquery-ui.js"],
    wizard: ["/build/js/controller/components/wizard.js"],
    dnsIndex: ["/build/js/controller/user/dns/index.js"],
    ibdexBd: ["/build/js/controller/user/bd/index.js"],
    ibdexMedia: ["/build/js/controller/admin/media/index.js"]
};
+function ($) {
    $(function () {
        $("[ui-jq]").each(function () {
            var self = $(this), options = eval("[" + self.attr("ui-options") + "]");
            $.isPlainObject(options[0]) && (options[0] = $.extend({}, options[0])), uiLoad.load(jp_config[self.attr("ui-jq")])
        })
    })
}(jQuery), +function (t) {
    t(function () {
        t(document).on("click", "[ui-nav] a", function (e) {
            var n, i = t(e.target);
            i.is("a") || (i = i.closest("a")), n = i.parent().siblings(".active"), n && n.toggleClass("active").find("> ul:visible").slideUp(200), i.parent().hasClass("active") && i.next().slideUp(200) || i.next().slideDown(200), i.parent().toggleClass("active"), i.next().is("ul") && e.preventDefault()
        })
    })
}(jQuery), +function (t) {
    t(function () {
        t(document).on("click", "[ui-toggle]", function (e) {
            e.preventDefault();
            var n = t(e.target);
            n.attr("ui-toggle") || (n = n.closest("[ui-toggle]"));
            var i = t(n.attr("target")) || n;
            i.toggleClass(n.attr("ui-toggle"))
        })
    })
}(jQuery);
//# sourceMappingURL=app.js.map