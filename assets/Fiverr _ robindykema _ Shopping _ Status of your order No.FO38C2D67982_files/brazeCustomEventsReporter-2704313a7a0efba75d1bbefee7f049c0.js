!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.brazeCustomEventsReporter=t():e.brazeCustomEventsReporter=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=580)}({11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){return"object"===("undefined"==typeof Fiverr?"undefined":o(Fiverr))&&"function"==typeof Fiverr[e]?!0:void 0};t.alias=function(e){return function(){var t;return r(e)&&(t=Fiverr)[e].apply(t,arguments)}}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolve=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(5);t.resolve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.glob;return e.split(".").reduce(function(e,t){return"object"===("undefined"==typeof e?"undefined":o(e))?e[t]:e},t)}},21:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.env=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(5),c=n(20),f=n(37),s=n(42),a=function(){function e(){o(this,e),f.memoizer(this,"node","browser","development","production","testing","plike","toString")}return u(e,[{key:"toString",value:function(){var e=this.browser?c.resolve("app.environment"):c.resolve("process.env.NODE_ENV");return(e||"").toLowerCase()}},{key:"node",get:function(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof i.glob.process?i.glob.process:0)}},{key:"browser",get:function(){return s.isBrowserLike()||!this.node&&["undefined"==typeof document?"undefined":r(document),"undefined"==typeof window?"undefined":r(window)].every(function(e){return"undefined"!==e})}},{key:"development",get:function(){return this.toString().includes("dev")}},{key:"dev",get:function(){return this.development}},{key:"production",get:function(){return this.toString().includes("prod")}},{key:"prod",get:function(){return this.production}},{key:"testing",get:function(){return this.toString().includes("test")}},{key:"test",get:function(){return this.testing}},{key:"plike",get:function(){return this.toString().includes("like")}}]),e}();t.env=new a},37:function(e,t,n){"use strict";function o(e){function t(e,t){return n[e]=e in n?n[e]:t()}for(var n={},o=arguments.length,u=Array(o>1?o-1:0),i=1;o>i;i++)u[i-1]=arguments[i];u.forEach(function(n){return r.call(e,n,t)})}function r(e,t){var n=this,o=Object.getOwnPropertyDescriptor(this.constructor.prototype,e),r=i.reduce(function(r,i){switch(u(o[i])){case"undefined":break;case"function":c.includes(i)?r[i]=function(){return t(e+"$"+i,o[i].bind(n))}:r[i]=o[i];break;default:r[i]=o[i]}return r},{});Object.defineProperty(this,e,r)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.memoizer=o;var i=["get","value","set","configurable","enumerable","writable"],c=["get","value"]},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.socketHandler=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(43),u=n(52),i=n(21),c=n(5),f=Symbol["for"]("SocketHandler"),s=Symbol["for"]("SocketSubscriptions"),a=1,l="open",y="close",d="message";c.glob[s]=c.glob[s]||new r.EventBus;var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data;if(t){try{t=JSON.parse(t)}catch(n){u.sendError("socketHandler","incomingHandler","unable to parse event: "+t)}t&&"object"===("undefined"==typeof t?"undefined":o(t))&&t.eventType&&c.glob[s].emit(t.eventType,t)}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2];"string"==typeof t&&t.split(" ").forEach(function(t){return c.glob[s][e](t,n)})},m=t.socketHandler={connect:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&!c.glob[f]&&i.env.browser?(c.glob[f]=new WebSocket(e),c.glob[f].addEventListener(l,function(){c.glob[f].addEventListener(d,p),m.send(t)}),c.glob[f].addEventListener(y,function n(){setTimeout(function(){m.connect(e,t)},1500),c.glob[f].removeEventListener(y,n),c.glob[f].removeEventListener(d,p)}),m):m},send:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.env.browser&&c.glob[f].readyState===a&&c.glob[f].send(JSON.stringify(e)),m},on:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return b.apply(void 0,["on"].concat(t))},once:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return b.apply(void 0,["once"].concat(t))},off:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return b.apply(void 0,["off"].concat(t))}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowserLike=void 0;var o=n(5);t.isBrowserLike=function(){return o.glob.document&&"function"==typeof o.glob.document.createElement}},43:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Symbol();t.EventBus=function(){function e(){o(this,e),this[u]=new Map}return r(e,[{key:"on",value:function(e,t){var n=this[u].get(e);n||(this[u].set(e,new Set),n=this[u].get(e)),n.add(t)}},{key:"once",value:function t(e,n){var o=this,t=function r(){o.off(e,r),n.apply(void 0,arguments)};this.on(e,t)}},{key:"one",value:function(e,t){this.has(e)||this.on(e,t)}},{key:"has",value:function(e){return this[u].has(e)}},{key:"off",value:function(e,t){if(this[u].has(e)){if("undefined"==typeof t)return void this[u]["delete"](e);var n=this[u].get(e);n["delete"](t),0===n.size&&this[u]["delete"](e)}}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];var r=this[u].get(e);r&&r.forEach(function(e){e.apply(void 0,n)})}},{key:"deferred",value:function(e){for(var t=this,n=arguments.length,o=Array(n>1?n-1:0),r=1;n>r;r++)o[r-1]=arguments[r];return Promise.resolve().then(function(){t.emit.apply(t,[e].concat(o))})}}]),e}()},5:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.glob="object"===("undefined"==typeof window?"undefined":n(window))&&window.window===window&&window||"object"===("undefined"==typeof e?"undefined":n(e))&&e.global===e&&e||"object"===("undefined"==typeof self?"undefined":n(self))&&self.self===self&&self}).call(t,n(6))},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendError=void 0;var o=n(11);t.sendError=o.alias("_logErrorToServer")},580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(39),r="braze_custom_event",u=function(e){window.appboy&&e.custom_event_name&&(document.hidden?i.reportOnFocus.push(function(){window.appboy.logCustomEvent(e.custom_event_name,e.properties)}):window.appboy.logCustomEvent(e.custom_event_name,e.properties))},i={init:function(){this.reportOnFocus=[],this.subscribeSocketHandler(),this.bindWindowFocusEvent()},bindWindowFocusEvent:function(){var e=this;$(window).on("focus",function(){for(;e.reportOnFocus.length>0;){var t=e.reportOnFocus.pop();t()}})},subscribeSocketHandler:function(){o.socketHandler.on(r,u)}};$(document).ready(function(){return i.init()}),t["default"]=i,e.exports=t["default"]},6:function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||Function("return this")()||(1,eval)("this")}catch(u){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}e.exports=o}})});