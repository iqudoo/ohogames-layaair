!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n(2),a=0,r=0,u=0,s=0,l=.01;function c(){a=window.innerWidth||laya.utils.Browser.clientWidth,r=window.innerHeight||laya.utils.Browser.clientHeight;var t=1;t=a>r?a/r:r/a;var e=s/u,n=u,o=s;return Math.abs(t/e-1)>l&&(t>e?o=u*t:t<e&&(n=s/t)),{initHeight:o,initWidth:n}}function f(){return Laya.stage.width}function p(){return Laya.stage.height}function d(){return u}function h(){return s}function y(){var t=f(),e=p(),n=d(),o=h();return Math.min(t/n,e/o)}e.initScreen=function(t,e,n){for(var a=[],r=3;r<arguments.length;r++)a[r-3]=arguments[r];u=e,s=n;var l=c(),f=l.initHeight,p=l.initWidth;t?Laya3D.init.apply(this,[p,f].concat(a)):Laya.init.apply(this,[p,f].concat(a)),Laya.stage.scaleMode=Laya.Stage.SCALE_EXACTFIT,Laya.stage.screenMode=e>n?Laya.Stage.SCREEN_HORIZONTAL:Laya.Stage.SCREEN_VERTICAL,Laya.stage.alignH=Laya.Stage.ALIGN_CENTER,Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE,Laya.stage.on(Laya.Event.RESIZE,null,(function(){i.resizeUI(),o.resizeBg()})),o.initBg(),i.initUI()},e.default={getWidth:f,getHeight:p,getScale:y,getOffestX:function(){var t=y(),e=f(),n=p();return e>n?(n-s*t)/2:(e-u*t)/2},getOffestY:function(){var t=y(),e=f(),n=p();return e>n?(e-u*t)/2:(n-s*t)/2},getDesignWidth:d,getDesignHeight:h,setDeviation:function(t){l=t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=!0;var i="${env}";e.getClassName=function(t){try{if(t){var e=t.toString(),n=void 0;n="["==e.charAt(0)?e.match(/\w+\s∗(\w+)\w+\s∗(\w+)/):e.match(/function\s*(\w+)/);n&&2==n.length&&n[1]}}catch(t){}},e.default={isLayaApp:function(){return"undefined"!=typeof window&&window.hasOwnProperty("Laya")},isConchApp:function(){return"undefined"!=typeof window&&window.hasOwnProperty("conch")},getVersion:function(){return 0==="0.0.1".indexOf("${")?"1.0.0":"0.0.1"},isDebug:function(){return o},setDebug:function(t){o=t},printError:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];o&&console.error.apply(console,["OHOGame:",t].concat(e))},printDebug:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];o&&console.log.apply(console,["OHOGame:",t].concat(e))},getEnv:function(){return"${env}"==i?"dev":i},setEnv:function(t){i=t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i,a,r=n(3),u=n(7),s=n(0),l=!1,c=1,f=0,p=0;function d(){c=s.default.getScale(),f=s.default.getOffestX(),p=s.default.getOffestY(),i&&(i.x=f,i.y=p),a&&(a.x=f,a.y=p),o.scaleX=c,o.scaleY=c}function h(){l||((o=new Laya.Sprite).name="_tape_stage",(i=new Laya.Sprite).name="_tape_main_layer",(a=new Laya.Sprite).name="_tape_top_layer",o.addChild(i),o.addChild(a),Laya.stage.addChild(o),l=!0),d()}function y(){if(i.numChildren>0&&i.getChildAt(i.numChildren-1)instanceof u.default)return void r.setFocus(!0);r.setFocus(!1)}e.initUI=function(){h()},e.resizeUI=d,e.default={checkFocus:y,moveTopToMainLayer:function(t){h(),t&&t.parent==i&&(i.removeChild(t),i.addChild(t)),y()},addViewToMainLayer:function(t){h(),t&&i.addChild(t),y()},addViewTopLayer:function(t){h(),t&&a.addChild(t),y()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),i=n(2),a=[];function r(){return a}function u(){return a.length}function s(t){void 0===t&&(t=0);var e=u();return e>t?a[e-1-t]:null}function l(t,e,n){void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=null);var o=s(t);o&&o.show(e&&u()>1,n)}function c(t){l(0,!0,(function(){var e=s(1);e&&(e.hide(),t&&t())}))}function f(t){(t>=u()&&(t=u()-1),t<=0)||(a.splice(u()-t,t).forEach((function(t){t.hide(),t.exit()})),l(0))}e.setFocus=function(t){var e=s();e&&e.focus(t)},e.default={navigate:function(t,e,n,u){void 0===e&&(e=null),void 0===n&&(n=null),void 0===u&&(u=!1),e||(e={});var l,f,p=function(){new o.default({page:t,params:e,onShow:function(){c((function(){n&&n(!0)}))},onLoaded:function(t){var e;i.default.addViewToMainLayer(t),e=t,a.push(e)},onLoadProgress:function(t,e){var n=s();n&&n.nextProgress(e)}})};if(u||t.single){var d=[];r().forEach((function(e){e.filter(t)&&d.push(e)})),d.length>0?(l=d.pop(),(f=a.indexOf(l))>=0&&(a.splice(f,1),a.push(l),c(null),i.default.moveTopToMainLayer(l))):p()}else p()},pop:function(t){void 0===t&&(t=1),f(t)},popToTop:function(){f(u())},finish:function(t,e){void 0===e&&(e=null);var n=[];r().forEach((function(o){o.filter(t,e)&&n.push(o)})),function(t){if(t&&!(t.length<=0)){for(var e=0;u()>1&&e<t.length;e++){var n=t[e];a.splice(a.indexOf(n),1),n.hide(),n.exit()}l(0)}}(n)}}},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=function(t){function e(e){void 0===e&&(e=null);var n=t.call(this)||this;return n._bgSprite=null,n._bgAlpha=.5,n._bgColor="#000000",n._isTranslucent=!0,n._isShow=!1,n._handleOnTouchOutside=null,n._canceledOnTouchOutside=!1,n._mask=!1,n._onEvent=null,n._handleOnTouchOutside=e,n._onEvent=function(t){n.isShow&&n.canceledOnTouchOutside&&n._handleOnTouchOutside&&n._handleOnTouchOutside(),t.stopPropagation()},setTimeout((function(){return n.initBg()}),0),n}return i(e,t),Object.defineProperty(e.prototype,"ui",{get:function(){return this.getChildByName("_contentView")},set:function(t){this.removeChildByName("_contentView"),t.name="_contentView",this.addChild(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isShow",{get:function(){return this._isShow},set:function(t){this._isShow=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bgAlpha",{get:function(){return this._bgAlpha},set:function(t){this._bgAlpha=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bgColor",{get:function(){return this._bgColor},set:function(t){this._bgColor=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTranslucent",{get:function(){return this._isTranslucent},set:function(t){this._isTranslucent=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canceledOnTouchOutside",{get:function(){return this._canceledOnTouchOutside},set:function(t){this._canceledOnTouchOutside=t,this.refreshCanceledOnTouchOutside()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nonPenetrating",{get:function(){return this._mask},set:function(t){this._mask=t,this.refreshCanceledOnTouchOutside()},enumerable:!0,configurable:!0}),e.prototype.refreshBg=function(){this._bgSprite&&(this._bgSprite.alpha=this.bgAlpha,this._bgSprite.graphics.clear(),this.isTranslucent||this._bgSprite.graphics.drawRect(0,0,this._bgSprite.width,this._bgSprite.height,this.bgColor))},e.prototype.refreshCanceledOnTouchOutside=function(){this._bgSprite&&this._bgSprite.offAll(),(this.canceledOnTouchOutside||this.nonPenetrating)&&this.ui&&(this.ui.mouseThrough=!0,this._bgSprite&&this._bgSprite.on(Laya.Event.CLICK,this,this._onEvent))},e.prototype.initBg=function(){this._bgSprite||(this._bgSprite=new Laya.Sprite,this._bgSprite.x=-a.default.getOffestX(),this._bgSprite.y=-a.default.getOffestY(),this._bgSprite.width=a.default.getWidth(),this._bgSprite.height=a.default.getHeight(),this.addChildAt(this._bgSprite,0),this.refreshBg(),this.refreshCanceledOnTouchOutside())},e}(Laya.Component);e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=[],i=[],a=[];e.callHookInit=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];o.forEach((function(o){return o.apply(void 0,[t,e].concat(n))}))},e.callHookShow=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.forEach((function(e){return e.apply(void 0,t)}))},e.callHookHide=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];a.forEach((function(e){return e.apply(void 0,t)}))},e.default={onInit:function(t){t&&"function"==typeof t&&o.indexOf(t)<0&&o.push(t)},onShow:function(t){t&&"function"==typeof t&&i.indexOf(t)<0&&i.push(t)},onHide:function(t){t&&"function"==typeof t&&a.indexOf(t)<0&&a.push(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=null,a=null,r=null,u=null;function s(){a&&r&&(a.skin=r),a.sizeGrid=a&&u?u:""}e.resizeBg=function(){i&&(i.width=o.default.getWidth(),i.height=o.default.getHeight()),a&&(a.width=o.default.getWidth(),a.height=o.default.getHeight())},e.initBg=function(){(i=Laya.stage.getChildByName("_tape_bg_layer"))||((i=new Laya.Sprite).name="_tape_bg_layer",Laya.stage.addChild(i),(a=new Laya.Image).name="_bg_image",i.addChild(a)),i.width=o.default.getWidth(),i.height=o.default.getHeight(),a.width=o.default.getWidth(),a.height=o.default.getHeight(),s()},e.default={setBgSkin:function(t,e){void 0===e&&(e=null),r=t,u=e,s()},setBgColor:function(t){i&&(i.graphics.clear(),i.graphics.drawRect(0,0,i.width,i.height,t))},setBgTexture:function(t){i&&(i.graphics.clear(),Laya.loader.load(t,Laya.Handler.create(this,(function(t){try{i.graphics.fillTexture(t,0,0,i.width,i.height,"repeat")}catch(t){}}))))},getBgSprite:function(){return i}}},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=n(8),u=n(1),s=function(t){function e(e){var n=t.call(this)||this;n._options=null,n._activity=null,n._isShow=!1,n._isFocus=!1,n._pageName="",n.visible=!1,n._options=e,n._pageName=u.getClassName(n._options.page),u.default.printDebug("init",n._pageName);var o=n._options.page.res;return o&&o.length>0?Laya.loader.load(o,Laya.Handler.create(n,(function(){n._newActivity(),setTimeout((function(){n._onLoaded()}),100),u.default.printDebug("onLoaded",n._pageName)})),Laya.Handler.create(n,(function(t){u.default.printDebug("onLoadProgress",n._pageName,t),n._onLoadProgress(t)}),null,!1)):(n._newActivity(),n._onLoaded(),u.default.printDebug("onLoaded",n._pageName),u.default.printDebug("onLoadProgress",n._pageName,1)),n}return i(e,t),e.prototype._newActivity=function(){this._activity||(u.default.printDebug("newActivity",this._pageName),this._activity=new this._options.page({page:this._options.page,params:this._options.params}))},e.prototype._onLoaded=function(){var t=this;r.onNavigatorReady().then((function(){t._options.onLoaded&&t._options.onLoaded(t),t.addChild(t._activity),u.default.printDebug("onCreate",t._pageName),t._activity.onCreate&&t._activity.onCreate(),t._options.onShow&&t._options.onShow()}))},e.prototype._onLoadProgress=function(t){this._options.onLoadProgress&&this._options.onLoadProgress(this,t)},e.prototype.nextProgress=function(t){this._activity.onNextProgress&&this._activity.onNextProgress(t)},e.prototype.filter=function(t,e){return t===this._options.page&&(!e||e===this._activity)},e.prototype.show=function(t,e){if(!this.visible&&!this._isShow){this._isShow=!0;var n=this._activity.easeIn||Laya.Ease.linearIn,o=this._activity.duration||0,i=this._activity.fromProps||{},r=this._activity.toProps||{};t&&n&&o>0?(Object.assign(this,i),u.default.printDebug("onResume",this._pageName),this._activity.onResume&&this._activity.onResume(),this.visible=!0,Laya.Tween.to(this,r,o,n,Laya.Handler.create(this,(function(){e&&e()})))):(u.default.printDebug("onResume",this._pageName),this._activity.onResume&&this._activity.onResume(),this.visible=!0,e&&e()),a.default.checkFocus()}},e.prototype.hide=function(){this.visible&&this._isShow&&(this._isShow=!1,u.default.printDebug("onPause",this._pageName),this._activity.onPause&&this._activity.onPause(),this.visible=!1,this.focus(!1))},e.prototype.exit=function(){u.default.printDebug("onDestroy",this._pageName),this._activity.onDestroy&&this._activity.onDestroy(),this.destroy()},e.prototype.focus=function(t){this._isFocus!==t&&(this._isFocus=t,u.default.printDebug("onFocus",this._pageName,t),this._activity.onFocus&&this._activity.onFocus(t))},e}(Laya.Component);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=null,a=!1,r=!1,u=null,s=new Promise((function(t){u=t}));function l(){var t=i.commonRes||[];t.length>0?Laya.loader.load(t,Laya.Handler.create(null,(function(){c(),i.onLoaded&&i.onLoaded()})),Laya.Handler.create(this,(function(t){i.onLoadProgress&&i.onLoadProgress(t)}),null,!1)):(i.onLoadProgress&&i.onLoadProgress(100),i.onLoaded&&i.onLoaded(),c())}function c(){i.mainPage&&o.default.navigate(i.mainPage)}e.initNavigator=function(t){t&&!a&&((i=t)&&i.fileVersion?(Laya.ResourceVersion.type=Laya.ResourceVersion.FILENAME_VERSION,Laya.ResourceVersion.enable(i.fileVersion,Laya.Handler.create(null,(function(){l()})))):l(),a=!0)},e.onNavigatorReady=function(){return r?Promise.resolve():s},e.setNavigatorReady=function(){r||(r=!0,u(),u=null,s=null)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i={};function a(t){if(i[t]){var e=i[t];if(e.funcs.length<=0)return;if(e.padding)return void setTimeout((function(){a(t)}),500);var n=e.funcs.shift();n&&n(),e.padding=!0,a(t)}}e.default={put:function(t,e){t&&"function"==typeof e&&(o.default.printDebug("put pipe to : ",t),i[t]?i[t].funcs.push(e):i[t]={padding:!1,funcs:[e]},a(t))},next:function(t){i[t]&&(o.default.printDebug("next pipe as : ",t),i[t].padding=!1,a(t))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toAny=function(t,e){if(null==t)return e;var n=function(t){if("string"!=typeof t)return typeof t;try{return typeof JSON.parse(t)}catch(n){var e=parseFloat(t);return isNaN(e)||""+e!==t?"string":"number"}}(t);switch(null!=e&&(n=typeof e),n){case"number":return function(t){try{return JSON.parse(t)}catch(e){return parseFloat(t)}}(t);case"boolean":return function(t){return!!t&&"false"!=t&&"0"!=t}(t);case"object":return function(t,e){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(t){}return e}(t,e);case"string":return function(t,e){try{var n=typeof t;if("string"===n)return t;if("boolean"===n)return t?"true":"false";if("number"===n)return""+t;if("object"===n)return JSON.stringify(t)}catch(t){}return e}(t,e)}return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i={},a={alpha:0},r={alpha:1},u={alpha:0};function s(t,e){!function(t,e){var n=t.toProps||r||{},o=t.exitProps||u||{},i=t.easeOut||Laya.Ease.linearOut,a=t.duration||500;Object.assign(t,n),Laya.Tween.to(t,o,a,i,Laya.Handler.create(this,(function(){e&&e(t)})))}(t,(function(){t._onHide&&t._onHide(t.popup,e),t.isShow=!1,t.onHide&&t.onHide(t.popup,e),t.removeSelf&&t.removeSelf(),t.destroy&&t.destroy(),o.default.checkFocus()}))}function l(t){!function(t,e){var n=t.fromProps||a||{},o=t.toProps||r||{},i=t.easeIn||Laya.Ease.linearIn,u=t.duration||500;Object.assign(t,n),Laya.Tween.to(t,o,u,i,Laya.Handler.create(this,(function(){e&&e(t)})))}(t,(function(){t.isShow=!0}))}e.default={setDefaultAnim:function(t,e){a=t,r=e},showPopup:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var a=i[t],r=new t;r.popup=t,r.params=e||{},r._onHide=n,a?a.push(r):i[t]=[r],o.default.addViewToMainLayer(r),r.onShow&&r.onShow(),l(r)},hidePopup:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var o=i[t];if(e){var a=o?o.indexOf(e):-1;if(a<0)return;o.splice(a,1),s(e,n)}else o&&o.splice(0,o.length).forEach((function(t){s(t,n)}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i={};function a(t,e){if(!i[t])return[];if(e&&i[t].length>1)return i[t].splice(i[t].indexOf(e),1),[e];var n=i[t]||[];return delete i[t],n}e.default={showToast:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var r=new t;r._on_hide=n,r.toast=t,r.params=e||{},r.onShow&&r.onShow();var u=r.fromProps||{alpha:0},s=r.toProps||{alpha:1},l=r.exitProps||{alpha:0},c=r.easeIn||Laya.Ease.linearIn,f=r.easeOut||Laya.Ease.linearOut,p=r.duration,d=r.displayDuration;Object.assign(r,u),Laya.Tween.to(r,s,p,c,Laya.Handler.create(this,(function(){r.isShow=!0})),0),-1!=d&&Laya.Tween.to(r,l,p,f,Laya.Handler.create(this,(function(){r&&(a(t,r),r._on_hide&&r._on_hide(r.toast),r.isShow=!1,r.onHide&&r.onHide(),r.destroy())})),d+p),function(t,e){i[t]?i[t].push(e):i[t]=[e]}(t,r),o.default.addViewTopLayer(r)},hideToast:function(t,e){void 0===e&&(e=null),a(t,e).forEach((function(t){t._on_hide&&t._on_hide(t.toast),t.isShow=!1,t.onHide&&t.onHide(),t.destroy()}))}}},function(t,e,n){"use strict";n(14),n(16);var o=n(6),i=n(17),a=n(0),r=n(18),u=n(1),s=n(20),l=n(9),c=n(21),f=n(22),p=n(23),d=n(3),h=n(11),y=n(12),_=n(24),g=n(25),v=n(26),b=n(27),m={init:b.init,init3D:b.init3D,start:b.start,env:u.default,bg:o.default,eft:i.default,screen:a.default,audio:r.default,event:s.default,runtime:c.default,pipeline:l.default,navigator:d.default,utils:p.default,popup:h.default,toast:y.default,message:f.default,Activity:_.default,PopupView:g.default,ToastView:v.default};"undefined"!=typeof window&&(window.OHOGame=m),t.exports={OHOGame:m}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(15)},function(t,e,n){"use strict";var o,i=n(5),a=(o=i)&&o.__esModule?o:{default:o};if(Laya&&Laya.Loader){var r=Laya.Handler,u=Laya.Loader,s=Laya.HttpRequest;u.prototype.load=function(t,e,n,o,i){if(void 0===n&&(n=!0),void 0===i&&(i=!1),this._url=t,0===t.indexOf("data:image")?this._type=e="image":(this._type=e||(e=this.getTypeFromUrl(t)),t=Laya.URL.formatURL(t)),this._cache=n,this._data=null,!i&&u.loadedMap[t])return this._data=u.loadedMap[t],this.event("progress",1),void this.event("complete",this._data);if(o&&u.setGroup(t,o),null!=u.parserMap[e])return this._customParse=!0,void(u.parserMap[e]instanceof r?u.parserMap[e].runWith(this):u.parserMap[e].call(null,this));if("image"===e||"htmlimage"===e||"nativeimage"===e)return this._loadImage(t);if("sound"===e)return this._loadSound(t);if("ttf"===e)return this._loadTTF(t);try{if("undefined"!=typeof loadRuntime&&!t.startsWith("http")){var a=this;return void setTimeout((function(){var n;t.startsWith("file://")&&(t=t.substr("file://".length)),"pkm"==e||"arraybuffer"===e?n=rt.getFileSystemManager().readFileSync(t):(n=rt.getFileSystemManager().readFileSync(t,"utf8"),"atlas"!=e&&"json"!=e||void 0===n||(n=JSON.parse(n))),a.onLoaded(n)}),0)}}catch(t){}var l;switch(e){case"atlas":case"plf":l="json";break;case"font":l="xml";break;case"pkm":l="arraybuffer";break;default:l=e}u.preLoadedMap[t]?this.onLoaded(u.preLoadedMap[t]):(this._http||(this._http=new s,this._http.on("progress",this,this.onProgress),this._http.on("error",this,this.onError),this._http.on("complete",this,this.onLoaded)),this._http.send(t,null,"get",l))}}a.default.onInit((function(t,e){if(void 0!==window.getAdapterInfo){var n=Laya.stage,o=window.getAdapterInfo({width:t,height:e,scaleMode:Laya.stage.scaleMode});n.width=o.rw,n.height=o.rh}}))},function(t,e){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},writable:!0,configurable:!0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=new Laya.Dictionary,i=new Laya.Dictionary,a={};function r(t,e,n,i,u,s){for(var l=o[t].arr,c=0;c<l.length;c++)l[c][0]._url=t,l[c][0]._atlasPath=t.split(".swf")[0]+".json",l[c][0]._onLoaded(),l[c][1]?l[c][0].play(0,l[c][2]):l[c][0].stop(),l[c][3]&&l[c][3].apply(l[c][4],[l[c][0]]);n?e.play(0,i):e.stop(),u&&u.apply(s,[e]),o[t].arr=[],e.off(Laya.Event.LOADED,a,r),o[t].load=!0}e.default={create:function(t,e,n,u,s){var l;return void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===u&&(u=null),void 0===s&&(s=null),i[t]||(i[t]=[]),(l=i[t].length>0?i[t].shift():new Laya.MovieClip).path=t,o[t]?o[t].load?(l._url=t,l._atlasPath=t.split(".swf")[0]+".json",l._onLoaded(),e?l.play(0,n):l.stop(),u&&u.apply(s,[l])):o[t].arr.push([l,e,n,u,s]):(o[t]={load:!1,arr:[]},l.on(Laya.Event.LOADED,a,r,[t,l,e,n,u,s]),l.load(t,!0)),l},remove:function(t){t&&(t.scaleX=t.scaleY=1,t.pivotX=t.pivotY=0,t.anchorX=t.anchorY=0,t.alpha=1,Laya.Tween.clearAll(t),t.stop(),t.parent&&t.parent.removeChild(t),i[t.path].push(t))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(19);var a=function(){function t(t){this._auidoUrl="",this._chancel=null,this._playing=!1,this._onPlay=null,this._onPause=null,this._onStop=null,this._onError=null,this._onProgress=null,this._onComplete=null,this._position=-1,this._duration=-1,this._paused=!1,this._type="sound",this._playTime=0,this._type=t}return t.prototype._update=function(){this._chancel&&(this._position=this._chancel.position,this._duration=this._chancel.duration,!this._playing&&this._position>0&&(this._playing=!0,this._onPlay&&this._onPlay()),this._playing&&this._duration>0?this._onProgress&&this._onProgress({position:this.position,duration:this.duration}):Date.now()-this._playTime>2e3&&(this._onError&&this._onError(),this.stop()))},t.prototype.onPlay=function(t){this._onPlay=t},t.prototype.onStop=function(t){this._onStop=t},t.prototype.onPause=function(t){this._onPause=t},t.prototype.onProgress=function(t){this._onProgress=t},t.prototype.onComplete=function(t){this._onComplete=t},t.prototype.onError=function(t){this._onError=t},Object.defineProperty(t.prototype,"url",{get:function(){return this._auidoUrl},set:function(t){this._auidoUrl!=t&&(this._auidoUrl=t,this.stop())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._position},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!0,configurable:!0}),t.prototype.isPaused=function(){return this._paused},t.prototype.isPlaying=function(){return this._playing},t.prototype.play=function(t){var e=this;void 0===t&&(t=1),function(t){if(window&&window.WeixinJSBridge)try{window.WeixinJSBridge.invoke("getNetworkType",{},(function(){t&&t()}))}catch(e){t&&t()}else t&&t()}((function(){if(e._auidoUrl){e.stop();var n=(a=e._auidoUrl,r=".ogg",u=Laya.Utils.getFileExtension(a),s=u?"."+u:"",o.default.isConchApp()&&".wav"!=s&&".ogg"!=s?a.substr(0,a.length-s.length)+r:a);e._playTime=Date.now(),e._chancel=Laya.SoundManager.playSound(n,t,Laya.Handler.create(e,(function(){e._onComplete&&e._onComplete(),e.stop()})),null,0),i.default.loop(e,e._update)}var a,r,u,s}))},t.prototype.pause=function(){this._chancel&&this._playing&&(this._onPause&&this._onPause(),this._chancel.pause(),this._paused=!0,this._playing=!1,i.default.clear(this,this._update))},t.prototype.resume=function(){this._chancel&&this._paused&&(this._paused=!1,this._chancel.resume(),i.default.loop(this,this._update))},t.prototype.stop=function(){this._chancel&&(this._onStop&&this._onStop(),this._chancel.stop(),this._chancel=null,this._paused=!1,this._playing=!1,Laya.SoundManager.removeChannel(this._chancel),Laya.SoundManager.destroySound(this._auidoUrl),i.default.clear(this,this._update))},t.prototype.destroy=function(){this.stop(),this._onComplete=null,this._onProgress=null,this._onPlay=null,this._onStop=null,this._onPause=null},t}(),r=new a("music");e.default={playMusic:function(t,e){return void 0===e&&(e=1),r.url=t,r.play(e),r},playSound:function(t,e){void 0===e&&(e=1);var n=new a("sound");return n.url=t,n.play(e),n},stopAll:function(){Laya.SoundManager.stopAll()},stopMusic:function(){r.stop()},stopAllSound:function(){Laya.SoundManager.stopAllSound()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this._tasks=[],this._hasLoop=!1}return t.prototype._checkLoop=function(){var t=this;this._tasks.length>0?this._hasLoop||(Laya.timer.frameLoop(1,this,(function(){t._tasks.forEach((function(t){var e=t.caller;t.callback.apply(e)}))})),this._hasLoop=!0):this._hasLoop&&(Laya.timer.clearAll(this),this._hasLoop=!1)},t.prototype.loop=function(t,e){0==this._tasks.filter((function(n){return n.caller==t&&n.callback==e})).length&&(this._tasks.push({caller:t,callback:e}),this._checkLoop())},t.prototype.clear=function(t,e){!function(t,e){if("function"==typeof e){var n=[];t.forEach((function(t,o){e(t)&&n.push(o)})),n.reverse(),n.forEach((function(e){t.splice(e,1)}))}}(this._tasks,(function(n){return n.caller==t&&(!e||n.callback==e)})),this._checkLoop()},t}();e.default=new o},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e._dic=new Laya.Dictionary,e}return i(e,t),e.prototype.registeredEvent=function(t,e,n,o){void 0===o&&(o=1);var i=[];if(null==o&&(o=1),this._dic[t]){i=this._dic[t];for(var a=0;a<i.length;a++)if(i[a].fun==e&&i[a].thisRef==n)return void(o!=i[a].index&&(i[a].index=o,i.sort((function(t,e){return e.index-t.index})),this._dic[t]=i))}i.push({fun:e,thisRef:n,index:o}),i.sort((function(t,e){return e.index-t.index})),this._dic[t]=i},e.prototype.removeEvent=function(t,e,n){if(this._dic[t])for(var o=this._dic[t],i=0;i<o.length;i++)if(o[i].fun==e&&o[i].thisRef==n)return o[i]=null,o.splice(i,1),void(this._dic[t]=o)},e.prototype.sendEvent=function(t,e){if(void 0===e&&(e=null),this._dic[t])for(var n=this._dic[t],o=0;o<n.length;o++)n[o].fun.apply(n[o].thisRef,e)},e}(Laya.EventDispatcher);e.default=new a},function(t,e,n){"use strict";var o,i,a=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),function(t){function e(e,n){!function(t){t.x=t.x+t.width/2-t.pivotX,t.y=t.y+t.height/2-t.pivotY,t.pivot(t.width/2,t.height/2)}(e),Laya.Tween.to(e,{scaleX:n,scaleY:n},t.scaleTime)}function n(n){n.offAll(),n.on(Laya.Event.MOUSE_DOWN,n,(function(){return e(n,t.scaleSmallValue)})),n.on(Laya.Event.MOUSE_UP,n,(function(){return e(n,t.scaleBigValue)})),n.on(Laya.Event.MOUSE_OUT,n,(function(){return e(n,t.scaleBigValue)})),n.on(Laya.Event.CLICK,n,(function(){var e;(e=n.sound)?"none"!=e&&Laya.SoundManager.playSound(e,1):t.clickSound&&"none"!=t.clickSound&&Laya.SoundManager.playSound(t.clickSound,1)}))}t.clickSound=null,t.scaleTime=100,t.scaleSmallValue=.8,t.scaleBigValue=1,t.bindClick=n;var o=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Button);t.btn=o;var i=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Image);t.btn_img=i;var r=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Label);t.btn_label=r;var u=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Sprite);t.btn_sprite=u;var s=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Box);t.btn_box=s}(i||(i={})),e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(10),a=[];"undefined"!=typeof window&&(window.__dispatchMessage__=function(t){t&&a.forEach((function(e){return e(i.toAny(t,{}))}))}),window.addEventListener("message",(function(t){t&&t.data&&a.forEach((function(e){return e(i.toAny(t.data,{}))}))})),e.default={postMessage:function(t){void 0===t&&(t={}),o.default.isConchApp()?Laya.conchMarket.sendMessageToPlatform(i.toAny(t,"{}"),(function(t){o.default.printDebug("conch message callback: ",t)})):window.parent.postMessage(i.toAny(t,{}),"*")},onMessage:function(t){t&&"function"==typeof t&&a.indexOf(t)<0&&a.push(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10);function i(t){if(t.length>0)return t[Math.floor(Math.random()*t.length)]}e.default={randomUUID:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},randomInteger:function(t,e){switch(arguments.length){case 1:return Math.floor(Math.random()*t+1);case 2:return Math.floor(Math.random()*(e-t+1)+t);default:return 0}},randomNumber:function(t,e){switch(arguments.length){case 1:return Math.random()*t+1;case 2:return Math.random()*(e-t+1)+t;default:return 0}},randomArray:function(t,e){void 0===e&&(e=-1);var n=-1==e?t.length:e;n=Math.min(n,t.length);for(var o=t.concat([]),a=[];a.length<n;){var r=i(o);a.push(r),o.splice(o.indexOf(n),1)}return a},randomArrayItem:i,toAny:o.toAny}},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),r=n(4),u=n(0),s=function(t){function e(e){var n=t.call(this,(function(){n.back()}))||this;return n.ui=new Laya.Component,n.page=null,n.params={},n.duration=0,n.easeIn=null,n.easeOut=null,n.fromProps=null,n.toProps=null,n.width=u.default.getDesignWidth(),n.height=u.default.getDesignHeight(),n.params=Object.assign({},e.params||{}),n.page=e.page,n}return i(e,t),e.create=function(t){return function(e){function n(o){var i=e.call(this,o)||this;return i.opts=null,i.opts=t||{},Object.assign(i,i.opts),n.single=i.opts.single,n.res=i.opts.res,i}return i(n,e),n.prototype.onCreate=function(){this.opts.onCreate&&this.opts.onCreate()},n.prototype.onPause=function(){this.opts.onPause&&this.opts.onPause()},n.prototype.onResume=function(){this.opts.onResume&&this.opts.onResume()},n.prototype.onDestroy=function(){this.opts.onDestroy&&this.opts.onDestroy()},n.prototype.onFocus=function(t){this.opts.onFocus&&this.opts.onFocus(t)},n.prototype.onNextProgress=function(t){this.opts.onNextProgress&&this.opts.onNextProgress(t)},n}(e)},e.open=function(t,e){a.default.navigate(this,t,e)},e.finish=function(){a.default.finish(this)},e.prototype.redirectTo=function(t,e,n,o){var i=this;void 0===e&&(e={}),void 0===n&&(n=null),void 0===o&&(o=!1),this.navigate(t,e,(function(){i.back(),n&&n()}),o)},e.prototype.navigate=function(t,e,n,o){void 0===e&&(e={}),void 0===n&&(n=null),void 0===o&&(o=!1),a.default.navigate(t,e,n,o)},e.prototype.back=function(){a.default.finish(this.page,this)},e.prototype.finish=function(t,e){void 0===t&&(t=this.page),void 0===e&&(e=null),a.default.finish(t,e)},e.prototype.pop=function(t){void 0===t&&(t=1),a.default.pop(t)},e.prototype.popToTop=function(){a.default.popToTop()},e.res=[],e.single=!1,e}(r.default);e.default=s},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),r=n(0),u=n(9),s=function(t){function e(){var e=t.call(this,(function(){e.hide()}))||this;return e.duration=500,e.easeIn=null,e.easeOut=null,e.fromProps=null,e.toProps=null,e.exitProps=null,e.isTranslucent=!1,e.canceledOnTouchOutside=!1,e.nonPenetrating=!0,e.width=r.default.getDesignWidth(),e.height=r.default.getDesignHeight(),e}return i(e,t),e.show=function(t,e){a.default.showPopup(this,t,e)},e.pipeShow=function(t,e){var n=this;u.default.put("popup",(function(){a.default.showPopup(n,t,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e&&e.apply(void 0,t),u.default.next("popup")}))}))},e.hide=function(t){a.default.hidePopup(this,null,t)},e.prototype.hide=function(t){void 0===t&&(t=null),a.default.hidePopup(this.popup,this,t)},e}(n(4).default);e.default=s},function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),r=n(0),u=function(t){function e(){var e=t.call(this,(function(){e.hide()}))||this;return e.duration=200,e.displayDuration=1e3,e.easeIn=null,e.easeOut=null,e.fromProps=null,e.toProps=null,e.exitProps=null,e.width=r.default.getDesignWidth(),e.height=r.default.getDesignHeight(),e}return i(e,t),e.show=function(t,e){a.default.showToast(this,t,e)},e.hide=function(){a.default.hideToast(this)},e.prototype.hide=function(){a.default.hideToast(this.toast,this)},e}(n(4).default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(0),a=n(8),r=n(5),u=!1;e.init=function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];u||(o.default.isLayaApp()?(o.default.printDebug("init..."),o.default.printDebug("version: "+o.default.getVersion()),o.default.printDebug("debug: "+o.default.isDebug()),o.default.printDebug("env: "+o.default.getEnv()),i.initScreen.apply(void 0,[!1,t,e].concat(n)),r.callHookInit.apply(void 0,[t,e].concat(n)),u=!0):o.default.printError("Please ensure that the 'Laya' library has been introduced."))},e.init3D=function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];u||(o.default.isLayaApp()?(o.default.printDebug("init3D..."),o.default.printDebug("version: "+o.default.getVersion()),o.default.printDebug("debug: "+o.default.isDebug()),o.default.printDebug("env: "+o.default.getEnv()),i.initScreen.apply(void 0,[!0,t,e].concat(n)),r.callHookInit.apply(void 0,[t,e].concat(n)),u=!0):o.default.printError("Please ensure that the 'Laya' library has been introduced."))},e.start=function(t,e,n){if(void 0===e&&(e=null),void 0===n&&(n=null),u){t||(t={});var i={mainPage:t.mainPage||null,commonRes:t.commonRes||[],fileVersion:t.fileVersion,onLoadProgress:function(e){t.onLoadProgress&&t.onLoadProgress(e),n&&n(e)},onLoaded:function(){e&&e(),t.onLoaded&&t.onLoaded()}};a.initNavigator(i),a.setNavigatorReady()}else o.default.printError("Please complete the initialization of Tape first.")}}])}));
//# sourceMappingURL=index.js.map