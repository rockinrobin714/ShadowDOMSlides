!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fRealTime=t():e.fRealTime=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=655)}({11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){return"object"===("undefined"==typeof Fiverr?"undefined":o(Fiverr))&&"function"==typeof Fiverr[e]?!0:void 0};t.alias=function(e){return function(){var t;return i(e)&&(t=Fiverr)[e].apply(t,arguments)}}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolve=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(5);t.resolve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.glob;return e.split(".").reduce(function(e,t){return"object"===("undefined"==typeof e?"undefined":o(e))?e[t]:e},t)}},21:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.env=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(5),a=n(20),s=n(37),c=n(42),l=function(){function e(){o(this,e),s.memoizer(this,"node","browser","development","production","testing","plike","toString")}return r(e,[{key:"toString",value:function(){var e=this.browser?a.resolve("app.environment"):a.resolve("process.env.NODE_ENV");return(e||"").toLowerCase()}},{key:"node",get:function(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof u.glob.process?u.glob.process:0)}},{key:"browser",get:function(){return c.isBrowserLike()||!this.node&&["undefined"==typeof document?"undefined":i(document),"undefined"==typeof window?"undefined":i(window)].every(function(e){return"undefined"!==e})}},{key:"development",get:function(){return this.toString().includes("dev")}},{key:"dev",get:function(){return this.development}},{key:"production",get:function(){return this.toString().includes("prod")}},{key:"prod",get:function(){return this.production}},{key:"testing",get:function(){return this.toString().includes("test")}},{key:"test",get:function(){return this.testing}},{key:"plike",get:function(){return this.toString().includes("like")}}]),e}();t.env=new l},37:function(e,t,n){"use strict";function o(e){function t(e,t){return n[e]=e in n?n[e]:t()}for(var n={},o=arguments.length,r=Array(o>1?o-1:0),u=1;o>u;u++)r[u-1]=arguments[u];r.forEach(function(n){return i.call(e,n,t)})}function i(e,t){var n=this,o=Object.getOwnPropertyDescriptor(this.constructor.prototype,e),i=u.reduce(function(i,u){switch(r(o[u])){case"undefined":break;case"function":a.includes(u)?i[u]=function(){return t(e+"$"+u,o[u].bind(n))}:i[u]=o[u];break;default:i[u]=o[u]}return i},{});Object.defineProperty(this,e,i)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.memoizer=o;var u=["get","value","set","configurable","enumerable","writable"],a=["get","value"]},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.socketHandler=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(43),r=n(52),u=n(21),a=n(5),s=Symbol["for"]("SocketHandler"),c=Symbol["for"]("SocketSubscriptions"),l=1,f="open",d="close",g="message";a.glob[c]=a.glob[c]||new i.EventBus;var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data;if(t){try{t=JSON.parse(t)}catch(n){r.sendError("socketHandler","incomingHandler","unable to parse event: "+t)}t&&"object"===("undefined"==typeof t?"undefined":o(t))&&t.eventType&&a.glob[c].emit(t.eventType,t)}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2];"string"==typeof t&&t.split(" ").forEach(function(t){return a.glob[c][e](t,n)})},y=t.socketHandler={connect:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&!a.glob[s]&&u.env.browser?(a.glob[s]=new WebSocket(e),a.glob[s].addEventListener(f,function(){a.glob[s].addEventListener(g,p),y.send(t)}),a.glob[s].addEventListener(d,function n(){setTimeout(function(){y.connect(e,t)},1500),a.glob[s].removeEventListener(d,n),a.glob[s].removeEventListener(g,p)}),y):y},send:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.env.browser&&a.glob[s].readyState===l&&a.glob[s].send(JSON.stringify(e)),y},on:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return m.apply(void 0,["on"].concat(t))},once:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return m.apply(void 0,["once"].concat(t))},off:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return m.apply(void 0,["off"].concat(t))}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowserLike=void 0;var o=n(5);t.isBrowserLike=function(){return o.glob.document&&"function"==typeof o.glob.document.createElement}},43:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=Symbol();t.EventBus=function(){function e(){o(this,e),this[r]=new Map}return i(e,[{key:"on",value:function(e,t){var n=this[r].get(e);n||(this[r].set(e,new Set),n=this[r].get(e)),n.add(t)}},{key:"once",value:function t(e,n){var o=this,t=function i(){o.off(e,i),n.apply(void 0,arguments)};this.on(e,t)}},{key:"one",value:function(e,t){this.has(e)||this.on(e,t)}},{key:"has",value:function(e){return this[r].has(e)}},{key:"off",value:function(e,t){if(this[r].has(e)){if("undefined"==typeof t)return void this[r]["delete"](e);var n=this[r].get(e);n["delete"](t),0===n.size&&this[r]["delete"](e)}}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];var i=this[r].get(e);i&&i.forEach(function(e){e.apply(void 0,n)})}},{key:"deferred",value:function(e){for(var t=this,n=arguments.length,o=Array(n>1?n-1:0),i=1;n>i;i++)o[i-1]=arguments[i];return Promise.resolve().then(function(){t.emit.apply(t,[e].concat(o))})}}]),e}()},5:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.glob="object"===("undefined"==typeof window?"undefined":n(window))&&window.window===window&&window||"object"===("undefined"==typeof e?"undefined":n(e))&&e.global===e&&e||"object"===("undefined"==typeof self?"undefined":n(self))&&self.self===self&&self}).call(t,n(6))},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendError=void 0;var o=n(11);t.sendError=o.alias("_logErrorToServer")},6:function(e,t,n){"use strict";var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||Function("return this")()||(1,eval)("this")}catch(r){"object"===("undefined"==typeof window?"undefined":i(window))&&(o=window)}e.exports=o},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(39);!function(e){var t,n,r,u="realtime",a="emit",s="close",c="click",l="inbox",f="notifications",d="on",g="off",p="checked",m="change",y={notificationTimeout:1e4,maxStackLength:3,notificationImageFallback:"//assetsv2.fiverrcdn.com/assets/v2_realtime/notification-envelope-f94d8f7c5582fe352795c215ff544547.jpg",notificationThreshold:3e4,garbageCollectorInterval:12e4,notificationTTL:6e5,bodyLength:120,realTimeTogglePath:"/settings/live_notifications",liveEnabled:Fiverr.models.ps.liveNotificationsEnabled||!1,sondEnabled:Fiverr.models.ps.desktopAudioEnabled||!1,realtimeRestrictedPages:["checkout","payments","purchases","inbox"],conditionalDisallow:{inbox:{isPage:"conversations/show",condition:function(e){return e.username.toLowerCase()===fConvManager.models.recipient.toLowerCase()}}}},v=function(){b()||(t.isRealtimeEnabled()&&h(),n.activeNotifications={},F(),M(),Fiverr.models.inConversation&&fConversations.initLiveChat(),r.$audioToggles.on("click",t.toggleSound),r.$audioToggles.toggleClass(g,!y.sondEnabled),window.callOnFocus=window.callOnFocus||[],window.callOnFocus.push(w),Fiverr._isPage("conversation")&&t.checkPinkDots())},b=function(){return Fiverr._isPage.apply(null,y.realtimeRestrictedPages)},h=function(){i.socketHandler.on("inbox_message_realtime_notification pinned_flash_realtime_notification",t.socketAction)},w=function(){t.pullFromQueueandEmit()},S=function(e){var n=!0;return k(e)?n=!1:j()?(t.pushToQueue(e),n=!1):fTabManager.hasFocus()?T(e)?n=!1:n:(t.pushToQueue(e),n=!1)},k=function(e){var t=!1;return _.forOwn(y.conditionalDisallow,function(n,o){return e.type===o&&n.isPage&&Fiverr._isPage(n.isPage)?(t=_.isFunction(n.condition)?n.condition(e):!0,!1):void 0}),t},T=function R(e){var R=!1;return _.forOwn(n.activeNotifications,function(t,n){return n===e.id?(R=!0,!1):void 0}),R},E=function(){return!fTabManager.hasFocus()||j()?!1:!0},j=function(){return _.size(n.activeNotifications)>=y.maxStackLength},$=function(e){delete n.activeNotifications[e],t.pullFromQueueandEmit()},F=function(){r.$document=r.$document||e(document),r.$window=r.$window||e(window),r.$audioToggles=e(".js-realtime-sound"),r.$drawerAudioToggles=r.$audioToggles.filter(function(t,n){var o=e(n);return o.closest(".js-hover-drawer").length}),t.isRealtimeEnabled()&&r.$drawerAudioToggles.removeClass("hidden"),P(),r.$document.on(L(a),N),r.$liveTray.on("click",".btn-close",x),r.$liveTray.on(L(s),C)},P=function(){r.$liveTray=e('<ul id="live-tray" class="notification-drawer"></ul>'),r.$body.append(r.$liveTray)},O=function(t,n){var o=t.type===l?l:f;Fiverr._getHbTemplate({tplType:f,tplName:"live-tray-"+o+"-item",tplData:t,callback:function(t){n(e(t))}})},N=function(t,o){var i=e(o),u=i.data("id"),a=i.find(".js-main-action");r.$liveTray.prepend(i),_.delay(function(){i.addClass("shown"),fNotificationsShared.helpers.view.trimLongText(r.$liveTray),A("impression")},100),n.activeNotifications[u].timeout=setTimeout(function(){r.$liveTray.trigger(L(s),{$ele:i,id:u})},y.notificationTimeout),i.on("transitionend",function(){i.hasClass("removed")&&i.off("transitionend").remove()}),a.one("click",function(){A(c)}),i.on("mouseleave",function(e){n.activeNotifications[u]&&n.activeNotifications[u].timeout||r.$liveTray.trigger(L(s),{$ele:i,trigger:"mouseleave",id:u})})},x=function(t){t.preventDefault();var n=e(t.target).closest("li"),o={id:n.data("id"),trigger:c,$ele:n};A(s),r.$liveTray.trigger(L(s),o)},C=function(e,t){var o=0,i=t.id||t.$ele.data("id"),r=n.activeNotifications[i];t.trigger&&"mouseleave"===t.trigger?o=600:t.trigger&&(o=250),r&&(clearTimeout(r.timeout),r.timeout=null),t.$ele.length&&_.delay(function(){t.$ele.is(":hover")&&t.trigger!==c||(t.$ele.addClass("removed"),$(i))},o)},M=function(){if(Fiverr._isPage("users/update","users/edit")){var n=e(".js-realtime-wrapper"),o=n.find(".form-row.real-time"),i=o.find("input#toggle-real-time"),u=o.find("input#toggle-sound"),a=(o.find(".sound-icon"),o.find(".js-try-live"));n.addClass("shown"),r.$audioToggles.off("click").on("click",function(){u.prop(p,!u.prop(p))}),u.prop(p,y.sondEnabled),i.prop(p,t.isRealtimeEnabled()),u.on(m,t.toggleSound),i.on(m,t.toggleRealtime),a.on("click",function(){t.socketAction({id:"dummy",type:"notifications",sub_type:"try_live",is_read:!0,updated_at:Math.round(Date.now()/1e3),msg_params:{user:Fiverr.models.user.userName}})})}},L=function(e){return u+":"+e},A=function(e){if(e){var t={};t[u]=e,Fiverr._reportAuxData(t),Fiverr.pushGoogleUniversalTag(u,e)}};o={models:{ps:Fiverr.models.ps,user:Fiverr.models.user,activeNotifications:{}},selectors:Fiverr.selectors,checkPinkDots:function(){window.fNotifications&&fNotifications.updateCounter("full")},socketAction:function(e){if("fNotificationDrawer"in window){var n=fNotificationDrawer.handleRealTimeItem(e);(t.isRealtimeEnabled()||"dummy"==n.id)&&n&&fTabManager.isActiveTab()&&t.emitNotification(n)}},pushToQueue:function(e){fTabManager.queue.push(u,e,y.maxStackLength)},pullFromQueueandEmit:function(){E()&&fTabManager.queue.pull(u,t.emitNotification)},emitNotification:function(e){e&&S(e)&&(n.activeNotifications[e.id]=e,O(e,function(e){r.$document.trigger(L(a),e)}),t.pullFromQueueandEmit())},toggleSound:function(t){if(window.fNotificationSound){var n=e(t.target).closest("div"),o=n.data("source")||"drawer",i=window.fNotificationSound.toggleOn(o,!0);return r.$audioToggles.toggleClass(d,i),r.$audioToggles.toggleClass(g,!i),i}},toggleRealtime:function(){var n=!t.isRealtimeEnabled(),o="turned_";return y.liveEnabled=n,r.$drawerAudioToggles.toggleClass("hidden",!n),o+=n?d:g,e.ajax({type:"post",url:y.realTimeTogglePath,data:{value:n}}),A(o),n},isRealtimeEnabled:function(){return y.liveEnabled}},t=o,n=t.models,r=t.selectors,v()}(jQuery),t["default"]=o,e.exports=t["default"]}})});