!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Code=t():e.Code=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1).toString();
/**
 * Raw HTML Tool for CodeX Editor
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var o=function(){function e(t){var n=t.data,r=t.config,o=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.placeholder=r.placeholder||e.DEFAULT_PLACEHOLDER,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.data={code:n.code||""},this.element=this.drawView()}return r(e,null,[{key:"displayInToolbox",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}}]),r(e,[{key:"drawView",value:function(){var e=document.createElement("div"),t=document.createElement("textarea");return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),t.textContent=this.data.code,t.placeholder=this.placeholder,e.appendChild(t),e}},{key:"render",value:function(){return this.element}},{key:"save",value:function(e){return{code:e.querySelector("textarea").value}}}],[{key:"toolboxIcon",get:function(){return'<svg width="14" height="14"><path d="M2.886 6.879c.187.254.316.574.388.958.071.374.106.847.106 1.422 0 .42.01.729.028.924.018.182.051.315.097.398.041.075.084.117.128.134.067.027.197.056.38.084a.758.758 0 0 1 .51.298c.13.167.195.382.195.638 0 .615-.393.938-1.105.938a2.35 2.35 0 0 1-1.12-.263 1.885 1.885 0 0 1-.775-.754 2.266 2.266 0 0 1-.277-1.101c-.013-.651-.026-1.173-.039-1.567-.013-.384-.031-.633-.054-.736-.06-.263-.144-.456-.251-.58a1.995 1.995 0 0 0-.459-.377 2.036 2.036 0 0 1-.471-.373C.052 6.788 0 6.592 0 6.34c0-.371.151-.66.448-.85.299-.186.51-.343.63-.467a.97.97 0 0 0 .236-.45c.05-.2.08-.42.088-.66.009-.25.021-.853.039-1.808.013-.632.217-1.145.61-1.53C2.445.193 2.97 0 3.613 0c.712 0 1.105.318 1.105.925 0 .265-.063.482-.192.645a.758.758 0 0 1-.512.29c-.226.032-.378.077-.451.128-.057.04-.103.134-.127.292-.028.188-.047.564-.056 1.123a9.774 9.774 0 0 1-.102 1.384 2.379 2.379 0 0 1-.366.967c-.145.213-.34.407-.582.585.227.164.412.344.556.54zm7.212-.888a2.11 2.11 0 0 1-.39-.626c-.1-.241-.17-.524-.21-.848-.04-.318-.06-.69-.06-1.116 0-.404-.008-.712-.025-.923-.015-.197-.046-.336-.085-.412a.253.253 0 0 0-.133-.128 1.655 1.655 0 0 0-.384-.077.773.773 0 0 1-.503-.288c-.135-.164-.2-.382-.2-.648C8.107.319 8.495 0 9.198 0c.424 0 .8.086 1.127.26.328.175.588.425.776.748.188.323.284.69.289 1.097.025 1.396.056 2.19.085 2.313.063.259.153.451.266.577.122.136.27.257.446.362.203.122.357.246.462.373.12.144.175.349.175.61 0 .375-.15.663-.443.843-.29.178-.497.333-.621.46a.983.983 0 0 0-.243.45c-.05.194-.081.495-.092.9-.01.416-.022.936-.035 1.562-.014.632-.22 1.147-.617 1.535-.398.389-.926.583-1.575.583-.334 0-.6-.077-.793-.236-.2-.165-.299-.404-.299-.702 0-.163.03-.314.09-.453a.835.835 0 0 1 .252-.336.73.73 0 0 1 .363-.147 1.74 1.74 0 0 0 .391-.086.248.248 0 0 0 .131-.138 1.29 1.29 0 0 0 .082-.417c.015-.204.022-.504.022-.901.01-.6.044-1.07.106-1.415a2.31 2.31 0 0 1 .367-.925 2.47 2.47 0 0 1 .585-.577 2.644 2.644 0 0 1-.398-.35z"/></svg>'}},{key:"DEFAULT_PLACEHOLDER",get:function(){return"Enter code"}}]),e}();e.exports=o},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".ce-code__textarea {\n    min-height: 200px;\n    font-size: 15px;\n    resize: vertical;\n    border-radius: 3px;\n    border: 1px solid #ededed;\n    padding: 20px;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],u=n(5);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=h(t)),r=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return f(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&f(l(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});