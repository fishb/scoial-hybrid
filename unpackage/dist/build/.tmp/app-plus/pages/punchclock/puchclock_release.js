(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/punchclock/puchclock_release"],{"0b82":function(t,e,n){},1139:function(t,e,n){"use strict";n.r(e);var r=n("44fe"),a=n("93c0");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("761e");var i=n("2877"),c=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"3dda90ca",null);e["default"]=c.exports},"44fe":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"761e":function(t,e,n){"use strict";var r=n("0b82"),a=n.n(r);a.a},"93c0":function(t,e,n){"use strict";n.r(e);var r=n("ad15"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},ad15:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(t){c(o,r,a,i,u,"next",t)}function u(t){c(o,r,a,i,u,"throw",t)}i(void 0)})}}var s={data:function(){return{formData:Object,imageList:[],isWork:!1,result:Object}},computed:{Wheight:function(){return t.getSystemInfoSync().windowHeight+"px"},fans:function(){return this.$store.state.fans}},methods:{_WorkAdd:function(){var t=u(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.formData.content&&this.formData.pictures){t.next=3;break}return this.ShowToast("请填写内容",1e3,!1,"none"),t.abrupt("return");case 3:return t.next=5,this.$http.WorkAdd({content:this.formData.content,pictures:this.formData.pictures});case 5:if(e=t.sent,this.result=e.data.result.info,0!=e.data.code){t.next=11;break}return t.next=10,this.$store.commit("getFans",o({},this.fans,{punch:this.fans.punch-1}));case 10:this.isWork=!this.isWork;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),chooseImage:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){t.showLoading({title:"上传中,请稍后...",mask:!0});var r=n.tempFilePaths[0];t.uploadFile({url:_config.url+"/v1/upload/images",filePath:r,fileType:"image",name:"file[0]",formData:{type:"work"},success:function(n){var a=JSON.parse(n.data);0==a.code&&t.hideLoading(),e.imageList.push(r),e.formData.pictures=a.result.list.map(function(t){return t.file})},fail:function(e){t.hideLoading(),t.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(t){console.log("chooseImage fail",t," at pages\\punchclock\\puchclock_release.vue:94")}})},previewImage:function(e){var n=e.target.dataset.src;t.previewImage({current:n,urls:this.imageList})},close:function(){this.imageList=[]},goconfirm:function(){this.isWork=!this.isWork,t.navigateBack()}}};e.default=s}).call(this,n("6e42")["default"])}},[["ee6b","common/runtime","common/vendor"]]]);