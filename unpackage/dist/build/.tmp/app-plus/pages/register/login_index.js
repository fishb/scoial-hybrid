(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/login_index"],{"0c08":function(e,n,t){"use strict";var i=t("7341"),r=t.n(i);r.a},"3eac":function(e,n,t){"use strict";t.r(n);var i=t("dee3"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);n["default"]=r.a},7341:function(e,n,t){},c271:function(e,n,t){"use strict";t.r(n);var i=t("d65a"),r=t("3eac");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("0c08");var u=t("2877"),o=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},d65a:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r})},dee3:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("a34a")),r=t("2f62");function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function o(e){return function(){var n=this,t=arguments;return new Promise(function(i,r){var a=e.apply(n,t);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)})}}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=null,p=null,l={name:"Register",computed:s({},(0,r.mapState)(["systemInfo","wechatOpenid"]),{Wheight:function(){return this.systemInfo.windowHeight+"px"},installedWeixin:function(){return plus.runtime.isApplicationExist({pname:"com.tencent.mm",action:"weixin://"})}}),data:function(){return{infoRes:""}},methods:s({},(0,r.mapMutations)(["SET_WXAPP","SET_APPLOGIN"]),{appWeixinLogin:function(){var n=this;e.login({provider:"weixin",success:function(t){e.getUserInfo({provider:"weixin",success:function(e){n._AppLogin(t.authResult.openid,t.authResult.unionid,e.userInfo)}})}})},_AppLogin:function(){var n=o(i.default.mark(function n(t,r,a){var u;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$apis.LoginIndex({login_type:"wechat_app",wechat_openid:t,wechat_unionid:r,wechat_userinfo:JSON.stringify(a),client_id:plus.push.getClientInfo().clientid});case 2:if(u=n.sent,0!==u.code){n.next=6;break}return this.LoginUserShareBind({token:u.result.fans.token,userinfo:u.result.fans}),n.abrupt("return");case 6:if(8!==u.code){n.next=10;break}return this.SET_APPLOGIN({openid:t,unionid:r,userinfo:a}),e.navigateTo({url:"/pages/register/phone_login"}),n.abrupt("return");case 10:this.$toast({title:u.msg,icon:"none"});case 11:case"end":return n.stop()}},n,this)}));function t(e,t,i){return n.apply(this,arguments)}return t}(),phoneLogin:function(){e.navigateTo({url:"/pages/register/phone_login"})},MpWeixinLogin:function(){var n=this;e.getUserInfo({provider:"weixin",success:function(t){f=t,e.login({provider:"weixin",success:function(e){p=e.code,n._MpWeixinbtn()}})}})},_MpWeixinbtn:function(){var n=o(i.default.mark(function n(){var t;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$apis.LoginIndex({login_type:"wechat_miniapp",wechat_miniapp_code:p,wechat_miniapp:JSON.stringify(f)});case 2:if(t=n.sent,0!==t.code){n.next=6;break}return this.LoginUserShareBind({token:t.result.fans.token,userinfo:t.result.fans}),n.abrupt("return");case 6:if(8!==t.code){n.next=10;break}return this.SET_WXAPP(f),e.navigateTo({url:"/pages/register/phone_login"}),n.abrupt("return");case 10:this.$toast({title:t.msg,icon:"none"});case 11:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),_wechat:function(){},_wechatMpAuth:function(){var e=o(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.wechatOpenid){e.next=4;break}this._wechatMpLogin(this.wechatOpenid),e.next=10;break;case 4:return e.next=6,this.$apis.WechatAuth({url:window.location.href,scope:"snsapi_base"});case 6:if(n=e.sent,0!==n.code){e.next=10;break}return window.location.href=n.result.url,e.abrupt("return");case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),_wechatMpLogin:function(){var n=o(i.default.mark(function n(t){var r;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$apis.LoginIndex({login_type:"wechat_mp",wechat_openid:t});case 2:if(r=n.sent,0!==r.code){n.next=6;break}return this.LoginUserShareBind({token:r.result.fans.token,userinfo:r.result.fans,num:2,url:!0}),n.abrupt("return");case 6:if(8!==r.code){n.next=9;break}return e.navigateTo({url:"/pages/register/phone_login"}),n.abrupt("return");case 9:this.$toast({title:r.msg,icon:"none"});case 10:case"end":return n.stop()}},n,this)}));function t(e){return n.apply(this,arguments)}return t}()})};n.default=l}).call(this,t("6e42")["default"])}},[["6731","common/runtime","common/vendor"]]]);