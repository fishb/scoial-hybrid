(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store-store_detail"],{"0aeb":function(t,e,i){"use strict";i.r(e);var n=i("71e2"),a=i("68ef");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("6b46");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"bf407698",null,!1,n["a"],void 0);e["default"]=r.exports},"2d61":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/** flex混入器 **/\r\n/** 单行文本省略号 或多行文本**/.store[data-v-bf407698]{min-height:100%;height:auto;background-color:#f8f8f8}.store-info[data-v-bf407698]{width:%?694?%;height:%?325?%;margin:%?28?%;padding:%?30?%;background-color:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start;border-radius:%?4?%}.store-info-top[data-v-bf407698]{width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.store-info-top uni-image[data-v-bf407698]{width:%?138?%;height:%?138?%;border-radius:%?1?% solid #e2e2e2;border-radius:%?4?%;margin-right:%?24?%}.store-info-top uni-text[data-v-bf407698]{font-size:%?32?%;color:#1a1a1a}.store-info-bottom[data-v-bf407698]{font-size:%?25?%;color:#5a5a5a;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis}.store-item[data-v-bf407698]{width:%?694?%;height:auto;margin:0 %?28?% %?28?%;padding:%?30?%;background-color:#fff;border-radius:%?4?%;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.store-item-text[data-v-bf407698]{width:100%;margin:%?10?% 0;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.store-item-text > uni-view[data-v-bf407698]{flex:1;height:%?16?%;margin:0 %?28?%;background:linear-gradient(90deg,#fbe35f,#fbe35f,#f54c35,#f30e2f);border-radius:8px}.store-item-text uni-text[data-v-bf407698]{font-size:%?25?%;color:#5a5a5a}.store-item-text uni-text[data-v-bf407698]:last-child{font-size:%?27?%;color:#d00623}.store-base[data-v-bf407698]{width:%?694?%;height:%?260?%;margin:0 %?28?% %?28?%;padding:%?30?%;background-color:#fff;border-radius:%?4?%;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.store-base .title[data-v-bf407698]{font-size:%?31?%;color:#333}.store-base-item[data-v-bf407698]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.store-base-item uni-text[data-v-bf407698]{font-size:%?25?%;color:#333}',""]),t.exports=e},"68ef":function(t,e,i){"use strict";i.r(e);var n=i("b08d"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"6b46":function(t,e,i){"use strict";var n=i("e819"),a=i.n(n);a.a},"71e2":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container store"},[i("v-uni-view",{staticClass:"store-info"},[i("v-uni-view",{staticClass:"store-info-top"},[i("v-uni-image",{attrs:{src:t.shopInfo.shop_logo}}),i("v-uni-text",[t._v(t._s(t.shopInfo.shop_name))])],1),i("v-uni-text",{staticClass:"store-info-bottom"},[t._v(t._s(t.shopInfo.summary))])],1),i("v-uni-view",{staticClass:"store-item"},[i("v-uni-view",{staticClass:"store-item-text"},[i("v-uni-text",[t._v("描述相符")]),i("v-uni-view"),i("v-uni-text",[t._v(t._s(t.shopInfo.commentScore))])],1),i("v-uni-view",{staticClass:"store-item-text"},[i("v-uni-text",[t._v("卖家服务")]),i("v-uni-view"),i("v-uni-text",[t._v(t._s(t.shopInfo.serviceScore))])],1),i("v-uni-view",{staticClass:"store-item-text"},[i("v-uni-text",[t._v("物流服务")]),i("v-uni-view"),i("v-uni-text",[t._v(t._s(t.shopInfo.logisticsScore))])],1)],1),i("v-uni-view",{staticClass:"store-base"},[i("v-uni-text",{staticClass:"title"},[t._v("基础信息")]),i("v-uni-view",{staticClass:"store-base-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navTo("/pages/store/store_natural?id="+t.id)}}},[i("v-uni-text",[t._v("工商执照")]),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-text",{staticClass:"iconfont icon-qianjin"})],1)],1),i("v-uni-view",{staticClass:"store-base-item"},[i("v-uni-text",[t._v("开店时间")]),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-text",[t._v(t._s(t.shopInfo.opentime))])],1)],1)],1)],1)},a=[]},b08d:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("c7eb")),s=n(i("1da1")),o={data:function(){return{id:"",shopInfo:""}},onLoad:function(t){this.id=t?t.id:"",this._ShopDetail({id:this.id})},methods:{_ShopDetail:function(t){var e=this;return(0,s.default)((0,a.default)().mark((function i(){var n;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$apis.ShopDetail(t);case 2:n=i.sent,e.shopInfo=n.result.shopInfo;case 4:case"end":return i.stop()}}),i)})))()}}};e.default=o},e819:function(t,e,i){var n=i("2d61");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("23abc29a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);