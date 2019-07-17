##scoial-hybrid
####uni-app开发的一个移动商城
---
##### *componet: hybrid-popup hybrid-title hybrid-spec 等公共组件 弹出层 头部封装 规格组件*
##### *common: navTo.js 结合vuex实现路由拦截 paramsValidate.js 非空验证 toast.js 提示封装*

```javascript
    Vue.config.productionTip = false
    Vue.prototype.$store = store
    Vue.prototype.$toast = toast
    Vue.prototype.$apis = $apis
    Vue.prototype.paramsValidate = paramsValidate //表单非空验证
    Vue.prototype.Regular = Regular //规则
    Vue.prototype.$navTo = navTo //路由跳转
    Vue.prototype.isWeiXin = isWeiXin //判断h5平台是否是微信公众号
    Vue.prototype.$Tyshare = Tyshare  //公用分享类
    Vue.prototype.LoginUserShareBind = LoginUserShareBind  //登录账号及id绑定  
```

欢迎使用
