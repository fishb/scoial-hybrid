(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{"0430":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("c7eb")),r=n(i("1da1")),s=n(i("5530")),o=i("26cb"),c=n(i("67ba")),l={components:{GeneralList:c.default},data:function(){return{type:"",password:"",list:[{title:"【下单后7-15天发货】贵州飞天茅台53度 酱",image:"/static/timg.jpg",oldprice:"1980",newprice:"1600",label:["爆品秒杀"]},{title:"测试产品",image:"/static/timg2.png",oldprice:"199",newprice:"180"}]}},computed:(0,s.default)((0,s.default)({},(0,o.mapState)(["init","systemInfo","userInfo"])),{},{Marin:function(){return this.systemInfo.statusBarHeight+"px"},userinfo:function(){return this.userInfo}}),onLoad:function(){},onShow:function(){this.type="",this._MyIndex()},methods:(0,s.default)((0,s.default)({},(0,o.mapMutations)(["SET_USERINFO"])),{},{togglePopup:function(t){this.type=t},_MyIndex:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apis.MyIndex();case 2:if(i=e.sent,0!=i.code){e.next=6;break}return t.SET_USERINFO(i.result.fans),e.abrupt("return");case 6:t.$toast({title:i.msg,icon:"none"});case 7:case"end":return e.stop()}}),e)})))()},setPassword:function(){this.type="",this.$navTo("/pages/wallet/wallet_password",!0)},_MyCheckPayPwd:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.password&&!(t.password.length<8)){e.next=4;break}return t.$toast({title:"钱包密码不少于8位",icon:"none"}),t.password="",e.abrupt("return");case 4:return e.next=6,t.$apis.MyCheckPayPwd({pay_password:t.password});case 6:if(i=e.sent,0!=i.code){e.next=12;break}return t.type="",t.password="",t.$navTo("/pages/wallet/wallet_index",!0),e.abrupt("return");case 12:t.password="",t.$toast({title:i.msg,icon:"none"});case 14:case"end":return e.stop()}}),e)})))()}})};e.default=l},"15bb":function(t,e,i){"use strict";i.r(e);var n=i("0430"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"2c3c":function(t,e,i){var n=i("8381");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4a1291c9",n,!0,{sourceMap:!1,shadowMode:!1})},"568d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"General"},[t.GeneralTitle?i("v-uni-text",{staticClass:"General-title"},[t._v(t._s(t.GeneralTitle))]):t._e(),i("v-uni-view",{staticClass:"General-box"},t._l(t.List,(function(e,n){return i("v-uni-view",{key:n,staticClass:"General-box-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(e.id)}}},[i("v-uni-view",{staticClass:"General-box-item-img"},[i("v-uni-image",{attrs:{src:e.goods_headimg}})],1),i("v-uni-text",{staticClass:"General-box-item-title"},[t._v(t._s(e.goods_name))]),i("v-uni-view",{staticClass:"General-box-item-label"},t._l(e.goods_label,(function(e,n){return i("v-uni-text",{key:n},[t._v(t._s(e.name))])})),1),i("v-uni-view",{staticClass:"General-box-item-price"},[i("v-uni-text",{staticClass:"old-price"},[t._v("¥"+t._s(e.goods_original))]),e.goods_price?i("v-uni-view",{staticClass:"new-price"},[i("v-uni-text",[t._v("¥"+t._s(e.goods_price))]),i("v-uni-text",{staticClass:"cgr"},[t._v("持股人")])],1):t._e()],1)],1)})),1),t._t("footer")],2)},a=[]},"67ba":function(t,e,i){"use strict";i.r(e);var n=i("568d"),a=i("a7cc");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("718f");var s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"53843c63",null,!1,n["a"],void 0);e["default"]=o.exports},"718f":function(t,e,i){"use strict";var n=i("f072"),a=i.n(n);a.a},"7b2a":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container mine"},[i("hybrid-title",{staticClass:"mine-title",attrs:{hasStatus:!0}}),i("v-uni-view",{staticClass:"mine-container",style:[{background:"url("+t.init.cdnurl+"/static/v2/img/user_bg.png) no-repeat top center"},{"background-size":"100% 445rpx"}]},[i("v-uni-view",{staticClass:"mine-user"},[i("v-uni-view",{staticClass:"mine-user-avatar"},[i("v-uni-image",{attrs:{src:t.userinfo?t.userinfo.headimgurl:t.init.cdnurl+"/static/v2/img/timg2.png"}})],1),i("v-uni-view",{staticClass:"mine-user-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/set/set_account_information",!0)}}},[i("v-uni-text",[t._v(t._s(t.userinfo?t.userinfo.nickname:"登陆/注册"))])],1),i("v-uni-view",{staticClass:"mine-user-wallet"},[i("v-uni-view",{staticClass:"wallet-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/record/record_redgift",!0)}}},[i("v-uni-text",[t._v(t._s(t.userinfo?t.userinfo.wxred:0))]),i("v-uni-text",{staticClass:"wallet-item-label"},[t._v("红包")])],1),i("v-uni-view",{staticClass:"wallet-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/record/record_point",!0)}}},[i("v-uni-text",[t._v(t._s(t.userinfo?t.userinfo.point:0))]),i("v-uni-text",{staticClass:"wallet-item-label"},[t._v("积分")])],1),i("v-uni-view",{staticClass:"wallet-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/record/record_shopgold",!0)}}},[i("v-uni-text",[t._v(t._s(t.userinfo?t.userinfo.gwj:0))]),i("v-uni-text",{staticClass:"wallet-item-label"},[t._v("购物金")])],1),i("v-uni-view",{staticClass:"wallet-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/record/record_dividend",!0)}}},[i("v-uni-text",[t._v(t._s(t.userinfo?t.userinfo.divid:0))]),i("v-uni-text",{staticClass:"wallet-item-label"},[t._v("分红")])],1)],1)],1),i("v-uni-view",{staticClass:"mine-order"},[i("v-uni-view",{staticClass:"mine-order-list"},[i("v-uni-view",{staticClass:"mine-order-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/order/order_index?num=0",!0)}}},[i("v-uni-image",{staticStyle:{width:"43rpx",height:"43rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/user_order_wait.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("待付款")])],1),i("v-uni-view",{staticClass:"mine-order-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/order/order_index?num=1",!0)}}},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"40rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/user_order_waitf.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("待发货")])],1),i("v-uni-view",{staticClass:"mine-order-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/order/order_index?num=2",!0)}}},[i("v-uni-image",{staticStyle:{width:"55rpx",height:"44rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/user_order_waits.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("待收货")])],1),i("v-uni-view",{staticClass:"mine-order-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/order/order_index?num=3",!0)}}},[i("v-uni-image",{staticStyle:{width:"45rpx",height:"40rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/user_order_waitp.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("待评价")])],1),i("v-uni-view",{staticClass:"mine-order-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/order/order_index?num=4",!0)}}},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"44rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/user_order_waitt.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("退货退款")])],1)],1),i("v-uni-view",{staticClass:"mine-order-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/order/order_index",!0)}}},[i("v-uni-text",[t._v("查看所有订单")]),i("v-uni-text",{staticClass:"iconfont icon-qianjin"})],1)],1),i("v-uni-view",{staticClass:"mine-entrance"},[i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),0==t.userinfo.pay_password?t.togglePopup("wallet"):1==t.userinfo.pay_password?t.togglePopup("inputPassword"):t.$navTo("/pages/wallet/wallet_index",!0)}}},[i("v-uni-image",{staticStyle:{width:"57rpx",height:"58rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_wallet.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("我的钱包")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/data/data_center",!0)}}},[i("v-uni-image",{staticStyle:{width:"53rpx",height:"54rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_data.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("数据中心")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/data/data_rank",!0)}}},[i("v-uni-image",{staticStyle:{width:"51rpx",height:"53rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_rank.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("排行榜")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/mine/mine_address_index",!0)}}},[i("v-uni-image",{staticStyle:{width:"51rpx",height:"51rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_address.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("收货地址")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/set/set_account_security",!0)}}},[i("v-uni-image",{staticStyle:{width:"57rpx",height:"40rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_person.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("账号安全")])],1),i("v-uni-view",{staticClass:"mine-entrance-item"},[i("v-uni-image",{staticStyle:{width:"52rpx",height:"58rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_kefu.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("联系客服")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/mine/mine_friend",!0)}}},[i("v-uni-image",{staticStyle:{width:"55rpx",height:"44rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_friend.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("好友数")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/scancode/scancode",!0)}}},[i("v-uni-image",{staticStyle:{width:"48rpx",height:"51rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_share.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("我要推广")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/set/set",!0)}}},[i("v-uni-image",{staticStyle:{width:"48rpx",height:"56rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_setting.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("设置")])],1),i("v-uni-view",{staticClass:"mine-entrance-item"},[i("v-uni-image",{staticStyle:{width:"47rpx",height:"56rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_order.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("历史订单")])],1),i("v-uni-view",{staticClass:"mine-entrance-item"},[i("v-uni-image",{staticStyle:{width:"47rpx",height:"51rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_settied.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("商家入驻")])],1),i("v-uni-view",{staticClass:"mine-entrance-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/mine/mine_collect",!0)}}},[i("v-uni-image",{staticStyle:{width:"51rpx",height:"44rpx"},attrs:{src:t.init.cdnurl+"/static/v2/img/user_icon/entrance_love.png",mode:"aspectFit"}}),i("v-uni-text",[t._v("收藏")])],1)],1)],1),i("general-list",{attrs:{GeneralTitle:"为你推荐",List:t.list}}),i("hybrid-popup",{attrs:{boxWidth:"580rpx",boxHeight:"460rpx",show:"wallet"===t.type},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[i("v-uni-view",{staticClass:"slotTip"},[i("v-uni-text",{staticClass:"slotTip-title"},[t._v("安全提示")]),i("v-uni-view",{staticClass:"slotTip-content"},[i("v-uni-text",[t._v("为了保证您的资金安全,我们对您的钱包进行了区块链技术加密处理!您是第一次登陆请设置密码并牢记")])],1),i("v-uni-view",{staticClass:"slotTip-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setPassword.apply(void 0,arguments)}}},[t._v("确定")])],1)],1),i("hybrid-popup",{attrs:{boxWidth:"580rpx",boxHeight:"508rpx",show:"inputPassword"===t.type},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[i("v-uni-view",{staticClass:"slotTip"},[i("v-uni-text",{staticClass:"slotTip-title"},[t._v("请输入密码")]),i("v-uni-view",{staticClass:"slotTip-content slot-password"},[i("v-uni-text",{staticClass:"tips"},[t._v("为了保证你的资金安全,我们队您的钱包进行了区块链技术加密")]),i("v-uni-input",{staticClass:"inputs",attrs:{type:"password",maxlength:"24"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-uni-view",{staticClass:"forget",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/wallet/wallet_forget",!0)}}},[t._v("忘记密码")])],1),i("v-uni-view",{staticClass:"slotTip-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._MyCheckPayPwd.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},a=[]},8381:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/** flex混入器 **/\r\n/** 单行文本省略号 或多行文本**/.mine[data-v-4a41d05a]{min-height:100%;height:auto;padding-bottom:50px;background-color:#fafafa\r\n  /**  slot弹出**/}.mine-container[data-v-4a41d05a]{width:100%\r\n  /** user **/\r\n  /** order **/\r\n  /**entrance**/}.mine-container .mine-user[data-v-4a41d05a]{width:%?694?%;height:%?400?%;margin:%?227?% auto 0;background:#fff;border-radius:%?20?%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.mine-container .mine-user-avatar[data-v-4a41d05a]{position:absolute;top:%?-96?%;left:50%;margin-left:%?-88?%;width:%?176?%;height:%?176?%;border:1px solid #d6d6d6;border-radius:50%}.mine-container .mine-user-avatar uni-image[data-v-4a41d05a]{width:%?172?%;height:%?172?%;border:%?10?% solid #fff;border-radius:50%}.mine-container .mine-user-name[data-v-4a41d05a]{width:100%;height:%?220?%;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.mine-container .mine-user-name uni-text[data-v-4a41d05a]{margin:%?135?% auto auto;font-size:%?38?%;font-weight:700;color:#050505}.mine-container .mine-user-wallet[data-v-4a41d05a]{width:100%;height:%?180?%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mine-container .mine-user-wallet .wallet-item[data-v-4a41d05a]{flex:1;height:%?180?%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.mine-container .mine-user-wallet .wallet-item[data-v-4a41d05a]:after{content:"";position:absolute;width:1px;height:%?75?%;background:#d1d1d1;right:0}.mine-container .mine-user-wallet .wallet-item[data-v-4a41d05a]:last-child:after{display:none}.mine-container .mine-user-wallet .wallet-item uni-text[data-v-4a41d05a]{font-size:%?46?%;color:#050505;font-family:DINPro-Medium}.mine-container .mine-user-wallet .wallet-item uni-text.wallet-item-label[data-v-4a41d05a]{font-size:%?23?%;font-family:MicrosoftYaHei}.mine-container .mine-order[data-v-4a41d05a]{margin:%?32?% auto 0;width:%?694?%;height:%?280?%;background:#fff;border-radius:%?20?%;display:flex;flex-direction:column;justify-content:center;align-items:center}.mine-container .mine-order-list[data-v-4a41d05a]{width:100%;height:%?190?%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mine-container .mine-order-list-item[data-v-4a41d05a]{flex:1;height:%?190?%;padding:%?30?% 0;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.mine-container .mine-order-list-item uni-image[data-v-4a41d05a]{height:%?45?%}.mine-container .mine-order-list-item uni-text[data-v-4a41d05a]{font-size:%?28?%;color:#050505}.mine-container .mine-order-more[data-v-4a41d05a]{width:100%;height:%?90?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.mine-container .mine-order-more uni-text[data-v-4a41d05a]{font-size:%?29?%;color:#050505}.mine-container .mine-entrance[data-v-4a41d05a]{margin:%?32?% auto 0;width:%?694?%;height:%?516?%;background:#fff;border-radius:%?20?%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:wrap}.mine-container .mine-entrance-item[data-v-4a41d05a]{width:25%;height:%?172?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.mine-container .mine-entrance-item uni-image[data-v-4a41d05a]{margin:auto}.mine-container .mine-entrance-item uni-text[data-v-4a41d05a]{font-size:%?24?%;color:#0a0909;text-align:center;margin:0 auto auto}.mine .slotTip[data-v-4a41d05a]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.mine .slotTip-title[data-v-4a41d05a]{width:100%;height:%?115?%;line-height:%?115?%;border-bottom:%?1?% solid #efefef;font-size:%?50?%;font-family:SourceHanSansCN-Regular;color:#000;text-align:center}.mine .slotTip-content[data-v-4a41d05a]{margin:auto %?48?%;color:#626262;font-size:%?28?%;line-height:%?60?%;font-family:FZHTJW--GB1-0}.mine .slotTip-content .tips[data-v-4a41d05a]{font-size:%?25?%;color:#7f7f7f;line-height:%?66?%;font-family:SourceHanSansCN-Regular}.mine .slotTip-content .inputs[data-v-4a41d05a]{height:%?73?%;line-height:%?73?%;border:%?1?% solid #dfdfdf;border-radius:%?37?%;background-color:#f7f8fa;padding:0 %?31?%}.mine .slotTip-content .forget[data-v-4a41d05a]{text-align:right;font-size:%?25?%;color:#383838;font-family:SourceHanSansCN-Regular;line-height:%?60?%}.mine .slotTip-button[data-v-4a41d05a]{width:%?480?%;background:#000;height:%?68?%;line-height:%?68?%;text-align:center;font-family:SourceHanSansCN-Regular;font-size:%?35?%;color:#fff;border-radius:%?4?%;margin-bottom:%?48?%}',""]),t.exports=e},a72f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/** flex混入器 **/\r\n/** 单行文本省略号 或多行文本**/\r\n/** 为你推荐 **/.General[data-v-53843c63]{width:100%;padding:0 %?28?%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;overflow:hidden}.General-title[data-v-53843c63]{margin:%?36?% 0;font-size:%?38?%;color:#3d3d3d;font-family:MicrosoftYaHei-Bold;font-weight:700;line-height:%?33?%;position:relative}.General-title[data-v-53843c63]:after, .General-title[data-v-53843c63]:before{content:"";position:absolute;right:%?-40?%;top:%?12?%;width:%?11?%;height:%?14?%;-webkit-transform:skew(160deg);transform:skew(160deg);background:#070707}.General-title[data-v-53843c63]:before{left:%?-40?%}.General-box[data-v-53843c63]{width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.General-box-item[data-v-53843c63]{width:%?334?%;height:%?565?%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:#fff;border-radius:%?4?%;margin-bottom:%?22?%}.General-box-item[data-v-53843c63]:nth-child(2n+1){margin-right:%?22?%}.General-box-item-img[data-v-53843c63]{width:%?334?%;height:%?332?%}.General-box-item-img uni-image[data-v-53843c63]{display:block;width:100%;height:100%}.General-box-item-title[data-v-53843c63]{width:100%;padding:0 %?19?%;margin:%?19?% 0;font-size:%?28?%;font-family:MicrosoftYaHei;color:#3d3d3d;line-height:%?33?%;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis;min-height:%?62?%}.General-box-item-label[data-v-53843c63]{width:100%;padding:0 %?15?%;height:%?32?%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.General-box-item-label uni-text[data-v-53843c63]{padding:0 %?5?%;border:%?2?% solid #ff3852;border-radius:%?2?%;color:#fd223e;font-size:%?19?%;font-family:MicrosoftYaHei;line-height:%?34?%;text-align:center}.General-box-item-price[data-v-53843c63]{width:100%;padding:0 %?15?%;display:flex;flex-direction:column;justify-content:flex-start;align-items:left}.General-box-item-price .old-price[data-v-53843c63]{font-size:%?30?%;font-family:MicrosoftYaHei;color:#888}.General-box-item-price .new-price[data-v-53843c63]{display:flex;flex-direction:row;justify-content:flex-start;align-items:left}.General-box-item-price .new-price uni-text[data-v-53843c63]{font-size:%?28?%;color:#2c2c2c;font-weight:700}.General-box-item-price .new-price uni-text.cgr[data-v-53843c63]{padding:0 %?10?%;margin-left:%?12?%;background:#2c2c2c;font-size:%?17?%;color:#e8c983;font-weight:400;line-height:%?36?%;-webkit-transform:skew(160deg);transform:skew(160deg)}',""]),t.exports=e},a7cc:function(t,e,i){"use strict";i.r(e);var n=i("d9a8"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c620:function(t,e,i){"use strict";var n=i("2c3c"),a=i.n(n);a.a},d9a8:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{GeneralTitle:{type:String,default:""},List:{type:Array,default:[]}},methods:{onClick:function(t){this.$navTo("/pages/goods/goods_detail?id=".concat(t))}}};e.default=n},f072:function(t,e,i){var n=i("a72f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("06c04eab",n,!0,{sourceMap:!1,shadowMode:!1})},f228:function(t,e,i){"use strict";i.r(e);var n=i("7b2a"),a=i("15bb");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c620");var s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4a41d05a",null,!1,n["a"],void 0);e["default"]=o.exports}}]);