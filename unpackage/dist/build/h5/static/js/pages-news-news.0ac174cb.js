(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"098e":function(e,t,n){"use strict";n.r(t);var s=n("ce6f"),a=n("eebd");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("63cd");var r=n("f0c5"),c=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"3c3554d9",null,!1,s["a"],void 0);t["default"]=c.exports},"3f6e":function(e,t,n){"use strict";n("7a82");var s=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("c7eb")),i=s(n("1da1")),r=s(n("5530")),c=n("26cb"),d={data:function(){return{arra:[{title:"交易信息",msg:[],time:"05/05 16:34",img:"news1",link:"/pages/news/news_trade"},{title:"客服聊天",msg:[],time:"05/05 16:34",img:"news2"},{title:"我的资产",msg:[],time:"05/05 16:34",img:"news3",link:"/pages/news/news_myassets"},{title:"系统信息",msg:[],time:"05/05 16:34",img:"news4",link:"/pages/news/news_system"}]}},computed:(0,r.default)({},(0,c.mapState)(["init"])),onLoad:function(){this._MessageIndex()},methods:{_MessageIndex:function(){var e=this;return(0,i.default)((0,a.default)().mark((function t(){var n;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.MessageIndex();case 2:n=t.sent,e.arra=n.result.list;case 4:case"end":return t.stop()}}),t)})))()}}};t.default=d},"63cd":function(e,t,n){"use strict";var s=n("82e5"),a=n.n(s);a.a},"82e5":function(e,t,n){var s=n("fc25");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=n("4f06").default;a("56d6a56d",s,!0,{sourceMap:!1,shadowMode:!1})},ce6f:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container news"},[n("v-uni-view",{staticClass:"news-cantainer"},e._l(e.arra,(function(t,s){return n("v-uni-view",{key:s,staticClass:"news-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.$navTo("/pages/news/news_trade?type="+t.type)}}},[n("v-uni-image",{attrs:{src:t.icon,mode:"widthFix"}}),n("v-uni-view",{staticClass:"news-item-text"},[n("v-uni-text",{staticClass:"news-item-text-title"},[e._v(e._s(t.name))]),n("v-uni-text",{staticClass:"news-item-text-info"},[e._v(e._s(t.lastmsg))])],1),n("v-uni-text",{staticClass:"news-item-time"},[e._v(e._s(t.createtime))])],1)})),1)],1)},a=[]},eebd:function(e,t,n){"use strict";n.r(t);var s=n("3f6e"),a=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a},fc25:function(e,t,n){var s=n("24fb");t=s(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/** flex混入器 **/\r\n/** 单行文本省略号 或多行文本**/.news[data-v-3c3554d9]{background-color:#fff}.news-cantainer[data-v-3c3554d9]{width:100%;padding:0 %?30?%}.news-cantainer .news-item[data-v-3c3554d9]{height:%?130?%;border-bottom:%?2?% solid #f4f4f4;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.news-cantainer .news-item[data-v-3c3554d9]:last-child{border:0}.news-cantainer .news-item > uni-image[data-v-3c3554d9]{width:%?74?%}.news-cantainer .news-item-text[data-v-3c3554d9]{flex:1;margin-left:%?22?%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.news-cantainer .news-item-text-title[data-v-3c3554d9]{color:#010101;font-size:%?33?%}.news-cantainer .news-item-text-info[data-v-3c3554d9]{color:#888;font-size:%?25?%}.news-cantainer .news-item-time[data-v-3c3554d9]{color:#888;font-size:%?20?%}',""]),e.exports=t}}]);