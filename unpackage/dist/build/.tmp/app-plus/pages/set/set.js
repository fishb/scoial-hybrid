(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{1370:function(t,n,e){"use strict";e.r(n);var r=e("4d2d"),u=e("427d");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("4593");var i=e("2877"),c=Object(i["a"])(u["default"],r["a"],r["b"],!1,null,"c2cf828c",null);n["default"]=c.exports},3614:function(t,n,e){},"427d":function(t,n,e){"use strict";e.r(n);var r=e("dca4"),u=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);n["default"]=u.a},4593:function(t,n,e){"use strict";var r=e("3614"),u=e.n(r);u.a},"4d2d":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u})},dca4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e("a34a")),u=e("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,u,o,i){try{var c=t[o](i),a=c.value}catch(f){return void e(f)}c.done?n(a):Promise.resolve(a).then(r,u)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(r,u){var o=t.apply(n,e);function c(t){i(o,r,u,c,a,"next",t)}function a(t){i(o,r,u,c,a,"throw",t)}c(void 0)})}}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){f(t,n,e[n])})}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s={data:function(){return{}},methods:a({},(0,u.mapMutations)(["SET_USERINFO","SET_TOKEN"]),{_LoginOut:function(){var t=c(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apis.LoginOut({client_id:plus.push.getClientInfo().clientid});case 2:n=t.sent,0==n.code&&(this.SET_USERINFO(""),this.SET_TOKEN(""),this.$navTo("/pages/mine/mine",!1,"switchTab"));case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()})};n.default=s}},[["55f1","common/runtime","common/vendor"]]]);