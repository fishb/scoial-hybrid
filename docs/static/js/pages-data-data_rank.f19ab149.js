(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-data-data_rank"],{"19ce":function(t,i,a){"use strict";a.r(i);var e=a("9ac4"),s=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"3c82":function(t,i,a){"use strict";a.r(i);var e=a("eced"),s=a("19ce");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("b577");var l=a("f0c5"),r=Object(l["a"])(s["default"],e["b"],e["c"],!1,null,"51a3baa4",null,!1,e["a"],void 0);i["default"]=r.exports},"8f71":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/** flex混入器 **/\r\n/** 单行文本省略号 或多行文本**/.rank[data-v-51a3baa4]{min-height:100%;height:auto;background-color:#fff}.rank-head[data-v-51a3baa4]{width:100%;padding:0 %?36?%;height:%?250?%;background-color:#010101;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.rank-head-left[data-v-51a3baa4]{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.rank-head-left uni-text[data-v-51a3baa4]{font-size:%?77?%;color:#fff}.rank-head-left uni-text[data-v-51a3baa4]:last-child{font-size:%?30?%}.rank-head uni-image[data-v-51a3baa4]{width:%?184?%}.rank-filter[data-v-51a3baa4]{width:100%;height:%?130?%;line-height:%?130?%;background-color:#010101;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.rank-filter.filters[data-v-51a3baa4]{position:fixed;top:%?88?%;z-index:999}.rank-filter-item[data-v-51a3baa4]{flex:1;height:100%;text-align:center;font-size:%?34?%;color:hsla(0,0%,100%,.4)}.rank-filter-item.active[data-v-51a3baa4]{position:relative;color:#fff}.rank-filter-item.active[data-v-51a3baa4]:after{content:"";position:absolute;width:0;height:0;bottom:0;left:50%;margin-left:%?-8?%;border:%?16?% solid #fff;border-color:transparent transparent #fff}.rank-list[data-v-51a3baa4]{width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.rank-list-item[data-v-51a3baa4]{width:100%;height:%?150?%;padding:0 %?28?%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.rank-list-item .label[data-v-51a3baa4]{width:%?50?%;font-size:%?34?%;font-weight:700;color:#0c0c0c;margin-right:%?12?%;text-align:center}.rank-list-item .item-flex[data-v-51a3baa4]{flex:1;height:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-bottom:%?2?% solid hsla(0,0%,73.3%,.1)}.rank-list-item .item-flex-user[data-v-51a3baa4]{flex:1;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.rank-list-item .item-flex-user .area[data-v-51a3baa4]{margin:0 %?40?% 0 %?12?%;width:%?98?%;height:%?98?%;border-radius:50%}.rank-list-item .item-flex-user .title[data-v-51a3baa4]{font-size:%?34?%;font-weight:700;color:#0c0c0c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rank-list-item .item-flex .item-price[data-v-51a3baa4]{font-size:%?32?%;font-weight:700;color:red}',""]),t.exports=i},"9ac4":function(t,i,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(a("5530")),n=a("26cb"),l={data:function(){return{title:"",isFixed:!1}},computed:(0,s.default)((0,s.default)({},(0,n.mapState)(["systemInfo"])),{},{RankMarin:function(){return uni.upx2px(88)+this.systemInfo.statusBarHeight+"px"}}),methods:{},onLoad:function(){},onPageScroll:function(t){if(t.scrollTop>uni.upx2px(250))return this.title="排行榜",void(this.isFixed=!0);this.title="",this.isFixed=!1}};i.default=l},b577:function(t,i,a){"use strict";var e=a("bd7a"),s=a.n(e);s.a},bd7a:function(t,i,a){var e=a("8f71");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("9816cd98",e,!0,{sourceMap:!1,shadowMode:!1})},eced:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container rank"},[a("v-uni-view",{staticClass:"rank-head"},[a("v-uni-view",{staticClass:"rank-head-left"},[a("v-uni-text",[t._v("排行榜")]),a("v-uni-text",[t._v("汇聚各路销售精英")])],1),a("v-uni-image",{attrs:{src:"/static/user_icon/jiangbei.png",mode:"widthFix"}})],1),a("v-uni-view",{class:["rank-filter",t.isFixed?"filters":""]},[a("v-uni-view",{staticClass:"rank-filter-item active"},[t._v("积分排行")]),a("v-uni-view",{staticClass:"rank-filter-item"},[t._v("红包排行")])],1),a("v-uni-view",{staticClass:"rank-list"},[a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-image",{staticClass:"label",attrs:{src:"/static/label1.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg2.png"}}),a("v-uni-text",{staticClass:"title"},[t._v("王小三")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 9888")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-image",{staticClass:"label",attrs:{src:"/static/label2.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg2.png"}}),a("v-uni-text",{staticClass:"title"},[t._v("张小二")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 8888")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-image",{staticClass:"label",attrs:{src:"/static/label3.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg.jpg"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 5252")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-text",{staticClass:"label"},[t._v("4")]),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg2.png"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 4848")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-text",{staticClass:"label"},[t._v("5")]),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg.jpg"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 5252")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-text",{staticClass:"label"},[t._v("6")]),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg2.png"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 4848")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-text",{staticClass:"label"},[t._v("7")]),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg2.png"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 4848")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-text",{staticClass:"label"},[t._v("8")]),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg.jpg"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 4848")])],1)],1),a("v-uni-view",{staticClass:"rank-list-item"},[a("v-uni-text",{staticClass:"label"},[t._v("9")]),a("v-uni-view",{staticClass:"item-flex"},[a("v-uni-view",{staticClass:"item-flex-user"},[a("v-uni-image",{staticClass:"area",attrs:{src:"/static/timg2.png"}}),a("v-uni-text",{staticClass:"title"},[t._v("李四")])],1),a("v-uni-text",{staticClass:"item-price"},[t._v("¥ 4848")])],1)],1)],1)],1)},s=[]}}]);