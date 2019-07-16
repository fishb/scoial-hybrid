import Vue from 'vue'
import store from './store'
import App from './App'
import toast from '@/common/toast.js'
import * as $apis from '@/apis/index.js' 
import  paramsValidate from '@/common/paramsValidate.js'
import  * as Regular from '@/common/regular.js'
import navTo from '@/common/navTo.js'  
import isWeiXin from '@/common/isWechat.js' 
import Tyshare from '@/common/tyshare.js' 
import LoginUserShareBind from '@/common/LoginUserShareBind.js'

import HybridTitle from '@/components/HybridTitle.vue'
import HybridPopup from '@/components/HybridPopup.vue'
import LoadMore from '@/components/LoadMore.vue'

Vue.component('hybrid-title',HybridTitle)
Vue.component('hybrid-popup',HybridPopup)
Vue.component('load-more',LoadMore)

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

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()