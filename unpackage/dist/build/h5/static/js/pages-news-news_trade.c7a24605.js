(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news_trade"],{"222e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/** flex混入器 **/\r\n/** 单行文本省略号 或多行文本**/.news[data-v-dd3986f2]{min-height:100%;height:auto;background-color:#f8f8f8}.news-cantainer[data-v-dd3986f2]{width:100%;padding:0 %?30?%}.news-cantainer .news-item[data-v-dd3986f2]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.news-cantainer .news-item-time[data-v-dd3986f2]{color:#888;font-size:%?25?%;height:%?100?%;line-height:%?100?%}.news-cantainer .news-item-detail[data-v-dd3986f2]{width:100%;height:%?230?%;background:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start;padding:%?26?%}.news-cantainer .news-item-detail-title[data-v-dd3986f2]{font-size:%?31?%;color:#010101}.news-cantainer .news-item-detail-info[data-v-dd3986f2]{height:%?132?%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.news-cantainer .news-item-detail-info > uni-image[data-v-dd3986f2]{width:%?132?%;height:%?132?%}.news-cantainer .news-item-detail-info .info[data-v-dd3986f2]{flex:1;height:%?132?%;margin-left:%?15?%;font-size:%?27?%;color:#000;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.news-cantainer .news-item-detail-info .info-title[data-v-dd3986f2]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis}.news-cantainer .news-item-detail-info .info-way[data-v-dd3986f2]{font-size:%?27?%;color:#888}',""]),t.exports=e},5496:function(t,e,n){var i=n("222e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b259f5d2",i,!0,{sourceMap:!1,shadowMode:!1})},"61f7":function(t,e,n){"use strict";n.r(e);var i=n("a2b3"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},6443:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container news"},[n("v-uni-view",{staticClass:"news-cantainer"},t._l(t.arra,(function(e,i){return n("v-uni-view",{key:i,staticClass:"news-item"},[n("v-uni-text",{staticClass:"news-item-time"},[t._v(t._s(e.time))]),n("v-uni-view",{staticClass:"news-item-detail"},[n("v-uni-text",{staticClass:"news-item-detail-title"},[t._v("待发货")]),n("v-uni-view",{staticClass:"news-item-detail-info"},[n("v-uni-image",{attrs:{src:"/static/timg.jpg"}}),n("v-uni-view",{staticClass:"info"},[n("v-uni-text",{staticClass:"info-title"},[t._v("你购买的蓝漂竹浆本色抽取式面巾纸3层288张*15包即将为您发货")]),n("v-uni-text",{staticClass:"info-way"},[t._v("运货单号：0791-8316800")])],1)],1)],1)],1)})),1)],1)},a=[]},"661e":function(t,e,n){"use strict";n.r(e);var i=n("6443"),a=n("61f7");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("a5c3");var r=n("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"dd3986f2",null,!1,i["a"],void 0);e["default"]=d.exports},a2b3:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c7eb")),s=i(n("1da1")),r={data:function(){return{}},computed:{},onLoad:function(t){this.options=t?t.type:"",this._MessageList({type:this.options})},methods:{_MessageList:function(t){var e=this;return(0,s.default)((0,a.default)().mark((function n(){var i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$apis.MessageList(t);case 2:i=n.sent,console.log(i);case 4:case"end":return n.stop()}}),n)})))()}}};e.default=r},a5c3:function(t,e,n){"use strict";var i=n("5496"),a=n.n(i);a.a}}]);