/*! vhp v0.0.5 (https://github.com/zhaomenghuan/vue-html5plus) */
!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return new C(t,e)}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(2),c=r(a),l=n(3),f=r(l),p=n(4),d=r(p),h=n(5),v=r(h),y=n(6),m=r(y),b=n(7),w=r(b),_=n(8),g=n(9),O=n(10),T=/<(.+?)>/g,j=/^#([\w-]+)$/,k=/^\.([\w-]+)$/,S=/^[\w-]+$/,E=function(t,e){var e=e||document;return Array.prototype.slice.call(k.test(t)?e.getElementsByClassName(RegExp.$1):S.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},C=function(){function t(e,n){if(o(this,t),n=n||document,!e)return this;if("string"==typeof e){if(T.test(e)){var r=T.exec(e);this._els=[document.createElement(r[1])]}if(j.test(e)){var i=document.getElementById(RegExp.$1);this._els=i?[i]:[]}this._els=E(e,n)}else"object"===("undefined"==typeof e?"undefined":s(e))&&(c.isArrayLike(e)?this._els=[].slice.call(e):this._els=[e]);return this.$el=this._els[0],this}return u(t,[{key:"empty",value:function(){for(var t in this._els)this._els.hasOwnProperty(t)&&(this._els[t].innerHTML="");return this}},{key:"html",value:function(t){if("undefined"!=typeof t){for(var e in this._els)this._els.hasOwnProperty(e)&&(this._els[e].innerHTML=t);return this}return this.$el.innerHTML}},{key:"text",value:function(t){if("undefined"!=typeof t){for(var e in this._els)this._els.hasOwnProperty(e)&&(this._els[e].textContent=t);return this}return this.$el.textContent}},{key:"val",value:function(t){return"undefined"!=typeof t?(this.$el.value=t,this):this.value}},{key:"attr",value:function t(e,n){for(var r in this._els){var o=this._els[r];if("undefined"!=typeof n)o.setAttribute(e,n);else{if("string"==typeof e)return o.getAttribute(e);if("object"===("undefined"==typeof e?"undefined":s(e)))for(var t in e)o.setAttribute(t,e[t])}}return this}},{key:"prepend",value:function(t){for(var e in this._els)this._els[e].insertAdjacentHTML("afterbegin",t);return this}},{key:"append",value:function(t){for(var e in this._els)this._els[e].insertAdjacentHTML("beforeend",t);return this}},{key:"before",value:function(t){for(var e in this._els)this._els[e].insertAdjacentHTML("beforebegin",t);return this}},{key:"after",value:function(t){for(var e in this._els)this._els[e].insertAdjacentHTML("afterend",t);return this}},{key:"remove",value:function(){for(var t in this._els){var e=this._els[t];e.parentNode.removeChild(e)}return this}},{key:"hasClass",value:function(t){return this.$el.classList.contains(t)}},{key:"addClass",value:function(t){var e=this,n=function(){var n=e._els[r];t.split(" ").forEach(function(t){this.hasClass(t)||n.classList.add(t)})};for(var r in this._els)n();return this}},{key:"removeClass",value:function(t){var e=this,n=function(){var n=e._els[r];t.split(" ").forEach(function(t){this.hasClass(t)&&n.classList.remove(t)})};for(var r in this._els)n();return this}},{key:"toggleClass",value:function(t){var e=this,n=function(){var n=e._els[r];t.split(" ").forEach(function(t){n.classList.toggle(t)})};for(var r in this._els)n();return this}},{key:"css",value:function(t,e){for(var n in this._els){var r=this._els[n];if("undefined"!=typeof e)"function"==typeof e?r.style[t]=e():r.style[t]=e;else{if("string"==typeof t)return getComputedStyle(r,null)[t];if("object"===("undefined"==typeof t?"undefined":s(t)))for(var o in t)r.style[o]=t[o]}}return this}},{key:"show",value:function(){return this.css("display","block"),this}},{key:"hide",value:function(){return this.css("display","none"),this}},{key:"find",value:function(e){return new t(e,this.$el)}},{key:"first",value:function(){return new t(this.$el)}},{key:"last",value:function(){return new t(this._els[this._els.length-1])}},{key:"next",value:function(){return new t(this.$el.nextElementSibling)}},{key:"prev",value:function(){return new t(this.$el.previousElementSibling)}},{key:"eq",value:function(e){return new t(this._els[e])}},{key:"parent",value:function(){return new t(this.$el.parentNode)}}]),t}();i.fn=C.prototype,i.os=_.os,i.url=m,i.extend=c.extend,i.domReady=f.domReady,i.plusReady=f.plusReady,i.getCurrentPosition=v.getCurrentPosition,i.currentWebview=w.currentWebview,i.openView=w.openView,i.back=w.back,i.storage=g.storage,i.get=O.get,i.post=O.post,i.getJSON=O.getJSON,i.getCurrentNetworkType=d.getCurrentNetworkType,"undefined"!=typeof window&&(window.vhp=i),e.default=i},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r={},o=function(t){return u(r)&&["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"].forEach(function(t){r["[object "+t+"]"]=t.toLowerCase()}),null==t?String(t):r[{}.toString.call(t)]||"object"},i=function(t){return null!=t&&t===t.window},s=function(t){return"object"===o(t)},u=function(t){for(var e in t)return!1;return!0},a=function(t){return s(t)&&!i(t)&&Object.getPrototypeOf(t)===Object.prototype},c=function(t){return"function"===o(t)},l=Array.isArray||function(t){return t instanceof Array},f=function(t){var e=!!t&&"length"in t&&t.length,n=o(t);return"function"!==n&&!i(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)},p=function(){var t,e,r,o,i,s,u=arguments[0]||{},a=1,c=arguments.length,l=!1;for("boolean"==typeof u&&(l=u,u=arguments[a]||{},a++),"object"===("undefined"==typeof u?"undefined":n(u))||$.isFunction(u)||(u={}),a===c&&(u=this,a--);a<c;a++)if(null!=(t=arguments[a]))for(e in t)r=u[e],o=t[e],u!==o&&(l&&o&&($.isPlainObject(o)||(i=$.isArray(o)))?(i?(i=!1,s=r&&$.isArray(r)?r:[]):s=r&&$.isPlainObject(r)?r:{},u[e]=$.extend(l,s,o)):void 0!==o&&(u[e]=o));return u};e.isWindow=i,e.isObject=s,e.isEmptyObject=u,e.isPlainObject=a,e.isFunction=c,e.isArray=l,e.isArrayLike=f,e.extend=p},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){var e=/complete|loaded|interactive/;return e.test(document.readyState)?setTimeout(t,0):document.addEventListener("DOMContentLoaded",t),this},r=function(t){return window.plus?t():document.addEventListener("plusready",t,!1),this};e.domReady=n,e.plusReady=r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t={};return t[plus.networkinfo.CONNECTION_UNKNOW]="UNKNOW",t[plus.networkinfo.CONNECTION_NONE]="NONE",t[plus.networkinfo.CONNECTION_ETHERNET]="ETHERNET",t[plus.networkinfo.CONNECTION_WIFI]="WIFI",t[plus.networkinfo.CONNECTION_CELL2G]="2G",t[plus.networkinfo.CONNECTION_CELL3G]="3G",t[plus.networkinfo.CONNECTION_CELL4G]="4G",t[plus.networkinfo.getCurrentType()]};e.getCurrentNetworkType=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=null;plus.geolocation.getCurrentPosition(function(r){n={type:"success",message:r},e?t.call(e,n):t(n)},function(r){n={type:"error",message:r},e?t.call(e,n):t(n)})};e.getCurrentPosition=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t){var e=/\+/g;return _decodeURIComponent(t.replace(e," "))},o=function(t,e){var n=[];for(var r in e)n.push(r+"="+encodeURIComponent(e[r]));return t+(t.indexOf("?")>-1?"&":"?")+n.join("&")},i=function(t,e){var r=["hash","host","hostname","href","origin","pathname","port","protocol","search"],o=document.createElement("a");o.href=t;for(var i={},u=0,a=r.length;u<a;u++){var c=r[u];i[c]=o[c]}return e&&("undefined"==typeof e?"undefined":n(e))&&(i.search=s(i.search)),i},s=function(t){var e=/([^&=]+)=?([^&]*)/g,n={};if(t=t&&(0===t.indexOf("?")?t.replace("?",""):t))for(var o;o=e.exec(t);)n[r(o[1])]=r(o[2]);return n},u=function(t,e){var n=s(e||location.search);return n.hasOwnProperty(t)?n[t]:""};e.convertUrl=o,e.urlParse=i,e.parseParams=s,e.getUrlParam=u},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.openView=e.back=e.currentWebview=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(8),u=(n(3),n(6),function(){function t(e,n,o){r(this,t);var i=o.styles||{top:"0px",left:"0px",height:"100%",width:"100%"},s=plus.webview.getWebviewById(n);return s?s:(this.webview=plus.webview.create(e,n,i,o.extras),this.view=new plus.nativeObj.View("_VHP_VIEW"),this.bitmap=new plus.nativeObj.Bitmap("_VHP_DRAWBITMAP"),this.webview)}return i(t,[{key:"show",value:function(t,e,n,r){var t=t||"pop-in",e=e||200,o=this.webview,i=this.view,s=this.bitmap;o.draw(s,function(){console.log("截屏绘制图片成功"),i.drawBitmap(s),i.show(),console.log(JSON.stringify(i)),plus.nativeObj.View.startAnimation({type:t,duration:e},i,{bitmap:s},function(){console.log("动画结束"),o.show("pop-in",0,function(){console.log("show"),plus.nativeObj.View.clearAnimation(),i.clear()})})},function(t){console.log("截屏绘制图片失败："+JSON.stringify(t))})}}]),t}()),a=function(){return plus.webview.currentWebview()},c=null,l=function(){var t=a(),e=t.parent(),n=t.children();if(e)e.evalJS("vhp&&vhp.back();");else if(t.id===plus.runtime.appid)c?(new Date).getTime()-c<1e3&&plus.runtime.quit():(c=(new Date).getTime(),plus.nativeUI.toast("再按一次退出应用"),setTimeout(function(){c=null},1e3));else if(n)for(var r in n)n[r].browser===!0&&n[r].canBack(function(e){e.canBack?n[r].back():t.close()});else t.canBack(function(e){e.canBack?t.back():t.close()})},f=function(t){var e=!0;"function"==typeof t&&(e=t(),void 0===e&&(e=!0)),e&&l()},p=function(t){var e=document.querySelector(".mui-action-back");e&&e.addEventListener("click",function(){f(t)}),window.plus&&plus.key.addEventListener("backbutton",function(){f(t)})},d=function(t,e,n){if("object"===("undefined"==typeof t?"undefined":o(t))?(n=t,t=n.url,e=n.id||t):"object"===("undefined"==typeof e?"undefined":o(e))?(n=e,e=t):e=e||t,!s.os.plus)return void(s.os.ios||s.os.android?window.top.location.href=t:window.parent.location.href=t);var r=new u(t,e,n);r.addEventListener("titleUpdate",function(){r.show()}),r.addEventListener("loaded",function(){r.show()})};e.currentWebview=a,e.back=p,e.openView=d},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={plus:!1,stream:!1,wechat:!1,android:!1,iphone:!1,ipad:!1,version:""},r=navigator.userAgent,o=r.match(/Html5Plus/i),i=r.match(/Html5Plus/i),s=r.match(/(MicroMessenger)\/([\d\.]+)/i),u=r.match(/(Android);?[\s\/]+([\d.]+)?/),a=r.match(/(iPhone\sOS)\s([\d_]+)/),c=r.match(/(iPad).*OS\s([\d_]+)/);o&&(n.plus=!0),i&&(n.stream=!0),s&&(n.wechat=!0),u&&(n.android=!0,n.version=u[2],n.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion)),a&&(n.ios=n.iphone=!0,n.version=a[2].replace(/_/g,".")),c&&(n.ios=n.ipad=!0,n.version=c[2].replace(/_/g,".")),e.os=n},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.storage=void 0;var o=n(8),i=n(3),s=r(i),u={};s.plusReady(function(){var t=o.os.plus?plus.storage:localStorage;u.isEmpty=function(e){var n=t.getItem(e);return null===n},u.set=function(e,n){t.setItem(e,JSON.stringify(n))},u.get=function(e,n){var r=t.getItem(e);return n=n||"json",r&&"json"===n?JSON.parse(r):r},u.remove=function(e){t.removeItem(e)},u.clear=function(){t.clear()}}),e.storage=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getJSON=e.post=e.get=e.request=e.appendQuery=e.serializeData=void 0;var r=n(8);n(11).polyfill();var o="application/json",i="text/html",s=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,a=/^\s*$/,c={method:"GET",accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"}},l=function(t){var e=[];if(t)for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.length?e.join("&"):""},f=function(t,e){return"string"!=typeof e&&(e=l(e)),(t+"&"+e).replace(/[&?]{1,2}/,"?")},p=function(t){return t&&(t=t.split(";",2)[0]),t&&(t===i?"html":t===o?"json":s.test(t)?"script":u.test(t)&&"xml")||"text"},d=function(t,e){var n;n=r.os.plus?new plus.net.XMLHttpRequest:new window.XMLHttpRequest;var e=e||{},o=e.method||c.method,i=e.data||{},s=e.dataType;return new Promise(function(r,u){var d=l(i);d&&"GET"===o.toUpperCase()&&(t=f(t,d));var h=c.accepts[s&&s.toLowerCase()];n.overrideMimeType&&n.overrideMimeType(h);var v={},y=function(t,e){v[t.toLowerCase()]=[t,e]};if(d&&"POST"===o.toUpperCase()&&y("Content-Type","application/x-www-form-urlencoded"),y("Accept",h||"*/*"),e.headers)for(var m in e.headers)y(m,e.headers[m]);n.setRequestHeader=y,n.onload=function(){var t,e={status:n.status,statusText:n.statusText},o=!1;if(200==n.status){var i=p(h||n.getResponseHeader("content-type"));t=n.responseText;try{"script"===i?(0,eval)(t):"xml"===i?t=n.responseXML:"json"===i&&(t=a.test(t)?null:JSON.parse(t))}catch(t){o=t}o?u(o):(e.body=t,r(e))}else u(e)},n.onerror=function(){u({status:n.status,statusText:n.statusText})},n.open(o,t),n.send("POST"===o&&d)})},h=function(t,e){return d(t,e)},v=function(t,e){var e=e||{};return e.method="POST",d(t,e)},y=function(t,e){var e=e||{};return e.method="GET",e.dataType="json",d(t,e)};e.serializeData=l,e.appendQuery=f,e.request=d,e.get=h,e.post=v,e.getJSON=y},function(t,e,n){var r,o;(function(i,s){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */
!function(i,s){"object"===u(e)&&"undefined"!=typeof t?t.exports=s():(r=s,o="function"==typeof r?r.call(e,n,e,t):r,!(void 0!==o&&(t.exports=o)))}(void 0,function(){function t(t){return"function"==typeof t||"object"===("undefined"==typeof t?"undefined":u(t))&&null!==t}function e(t){return"function"==typeof t}function r(t){Y=t}function o(t){z=t}function a(){return function(){return i.nextTick(d)}}function c(){return"undefined"!=typeof X?function(){X(d)}:p()}function l(){var t=0,e=new tt(d),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function f(){var t=new MessageChannel;return t.port1.onmessage=d,function(){return t.port2.postMessage(0)}}function p(){var t=setTimeout;return function(){return t(d,1)}}function d(){for(var t=0;t<K;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}K=0}function h(){try{var t=n(13);return X=t.runOnLoop||t.runOnContext,c()}catch(t){return p()}}function v(t,e){var n=arguments,r=this,o=new this.constructor(m);void 0===o[it]&&$(o);var i=r._state;return i?!function(){var t=n[i-1];z(function(){return L(i,o,t,r._result)})}():x(r,o,t,e),o}function y(t){var e=this;if(t&&"object"===("undefined"==typeof t?"undefined":u(t))&&t.constructor===e)return t;var n=new e(m);return k(n,t),n}function m(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(t){return ct.error=t,ct}}function g(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function O(t,e,n){z(function(t){var r=!1,o=g(n,e,function(n){r||(r=!0,e!==n?k(t,n):E(t,n))},function(e){r||(r=!0,C(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,C(t,o))},t)}function T(t,e){e._state===ut?E(t,e._result):e._state===at?C(t,e._result):x(e,void 0,function(e){return k(t,e)},function(e){return C(t,e)})}function j(t,n,r){n.constructor===t.constructor&&r===v&&n.constructor.resolve===y?T(t,n):r===ct?C(t,ct.error):void 0===r?E(t,n):e(r)?O(t,n,r):E(t,n)}function k(e,n){e===n?C(e,b()):t(n)?j(e,n,_(n)):E(e,n)}function S(t){t._onerror&&t._onerror(t._result),N(t)}function E(t,e){t._state===st&&(t._result=e,t._state=ut,0!==t._subscribers.length&&z(N,t))}function C(t,e){t._state===st&&(t._state=at,t._result=e,z(S,t))}function x(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+ut]=n,o[i+at]=r,0===i&&t._state&&z(N,t)}function N(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?L(n,r,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function P(t,e){try{return t(e)}catch(t){return lt.error=t,lt}}function L(t,n,r,o){var i=e(r),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if(s=P(r,o),s===lt?(c=!0,u=s.error,s=null):a=!0,n===s)return void C(n,w())}else s=o,a=!0;n._state!==st||(i&&a?k(n,s):c?C(n,u):t===ut?E(n,s):t===at&&C(n,s))}function M(t,e){try{e(function(e){k(t,e)},function(e){C(t,e)})}catch(e){C(t,e)}}function I(){return ft++}function $(t){t[it]=ft++,t._state=void 0,t._result=void 0,t._subscribers=[]}function R(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[it]||$(this.promise),F(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?E(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&E(this.promise,this._result))):C(this.promise,H())}function H(){return new Error("Array Methods must be provided an Array")}function W(t){return new R(this,t).promise}function B(t){var e=this;return new e(F(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function U(t){var e=this,n=new e(m);return C(n,t),n}function V(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function J(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function q(t){this[it]=I(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&V(),this instanceof q?M(this,t):J())}function G(){var t=void 0;if("undefined"!=typeof s)t=s;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=q}var D=void 0;D=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var F=D,K=0,X=void 0,Y=void 0,z=function(t,e){rt[K]=t,rt[K+1]=e,K+=2,2===K&&(Y?Y(d):ot())},Q="undefined"!=typeof window?window:void 0,Z=Q||{},tt=Z.MutationObserver||Z.WebKitMutationObserver,et="undefined"==typeof self&&"undefined"!=typeof i&&"[object process]"==={}.toString.call(i),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3),ot=void 0;ot=et?a():tt?l():nt?f():void 0===Q?h():p();var it=Math.random().toString(36).substring(16),st=void 0,ut=1,at=2,ct=new A,lt=new A,ft=0;return R.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===st&&n<t;n++)this._eachEntry(e[n],n)},R.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===y){var o=_(t);if(o===v&&t._state!==st)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===q){var i=new n(m);j(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},R.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===st&&(this._remaining--,t===at?C(r,n):this._result[e]=n),0===this._remaining&&E(r,this._result)},R.prototype._willSettleAt=function(t,e){var n=this;x(t,void 0,function(t){return n._settledAt(ut,e,t)},function(t){return n._settledAt(at,e,t)})},q.all=W,q.race=B,q.resolve=y,q.reject=U,q._setScheduler=r,q._setAsap=o,q._asap=z,q.prototype={constructor:q,then:v,catch:function(t){return this.then(null,t)}},q.polyfill=G,q.Promise=q,q})}).call(e,n(12),function(){return this}())},function(t,e){"use strict";function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){v&&d&&(v=!1,d.length?h=d.concat(h):y=-1,h.length&&u())}function u(){if(!v){var t=o(s);v=!0;for(var e=h.length;e;){for(d=h,h=[];++y<e;)d&&d[y].run();y=-1,e=h.length}d=null,v=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var d,h=[],v=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new a(t,e)),1!==h.length||v||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){}]);