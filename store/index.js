import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const INIT = uni.getStorageSync('init'); //初始化信息
const TOKEN = uni.getStorageSync('token'); //token信息
const SYSTEMINFO = uni.getStorageSync('systemInfo'); //系统信息
const USERINFO = uni.getStorageSync('userInfo') || {}; //用户信息
const OPTIONS = uni.getStorageSync('options') || ''; 
const WXAPP = uni.getStorageSync('wxapp') || '';//微信注册code
const APPLOGIN = uni.getStorageSync('appLogin') || ''; //app登陆注册是否为授权
const WECHATOPENID = uni.getStorageSync('wechatOpenid') ||''; //公众号的openid
const FLASHADDRESS = uni.getStorageSync('flashAddress'); //刷新收货地址列表 

const store = new Vuex.Store({
	state: {
		init: INIT,
		token: TOKEN ,
		userInfo: USERINFO,
		systemInfo: SYSTEMINFO,
		options: OPTIONS,
		wxapp: WXAPP,
		appLogin: APPLOGIN,
		wechatOpenid: WECHATOPENID,
		flashAddress: FLASHADDRESS
	},
	getters:{
		// 用户是否登录
		hasLogin: state => {
			if(state.token){
				return true
			}else{
				return false
			}
		}
	},
	mutations: {
		SET_INIT(state,v){
			state.init = v
			uni.setStorageSync('init',v)
		},
		SET_SYSTEMINFO(state,v){
			state.systemInfo = v
			uni.setStorageSync('systemInfo',v)
		},
		SET_TOKEN(state,v){
			state.token = v,
			uni.setStorageSync('token',v)
		},
		SET_USERINFO(state,v){
			state.userInfo = v
			uni.setStorageSync('userInfo',v)
		},
		SET_WXAPP(state,v){
			state.wxapp = v
			uni.setStorageSync('wxapp',v)
		},
		SET_APPLOGIN(state,v){
			state.appLogin = v
			uni.setStorageSync('appLogin',v)
		},
		SET_WECHATOPENID(state,v){
			state.wechatOpenid = v
			uni.setStorageSync('wechatOpenid',v)
		},
		SET_FLASHADDRESS(state,v){
			state.flashAddress = v
			uni.setStorageSync('flashAddress',v)
		}
	},
	actions: {
		// 登录过期 重新登录
		reLogin({commit}, info) {
			commit("SET_TOKEN","");
			uni.navigateTo({
				url: '/pages/register/login_index'
			})
		}
		
	}
})

export default store