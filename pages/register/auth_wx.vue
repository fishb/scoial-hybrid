<template>
	<view class="container" :style="{'min-height':Wheight}">
		<view class="main">
			<!-- #ifdef MP-WEIXIN -->
			<button class="submitBtn" open-type="getUserInfo" @getuserinfo="MpWeixinLogin">微信一键登录</button>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<button class="submitBtn" open-type="getUserInfo" @tap="appWeixinLogin" v-if="installedWeixin">微信一键登录</button>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button class="submitBtn" v-if="isWechat">微信一键登录</button>
			<!-- #endif -->
			<!-- 安装微信才显示 -->
			<view class="more">
				<text>*需先授权才能提现到微信</text>
			</view>
		</view>
	</view>
</template>

<script>
	let wxapp = null; //微信授权拿到的用户信息参数
	let wxapp_code = null; //微信appcode
	import {
		PHONE_REGULAR
	} from '@/common/REGULAR.js'
	export default {
		name: 'Register',
		computed: {
			Wheight() {
				return uni.getSystemInfoSync().windowHeight + 'px'
			},
			isWechat() {
				return this.isWeiXin
			},
			// 是否安装微信
			// #ifdef APP-PLUS
			installedWeixin() {
				return plus.runtime.isApplicationExist({
					pname: 'com.tencent.mm',
					action: 'weixin://'
				})
			}
			// #endif
		},
		data() {
			return {
				infoRes: ''
			}
		},
		methods: {
			// APP微信授权
			appWeixinLogin() {
				let _this = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(JSON.stringify(infoRes.userInfo))
								_this._MyBindWechat('wechat_app',{wechat_userinfo: JSON.stringify(infoRes.userInfo)})
							}
						});
					}
				});
			},
			// wechat_miniapp授权
			MpWeixinLogin() {
				let _this = this
				uni.getUserInfo({
					provider: 'weixin',
					success(infoRes) {
						wxapp = infoRes
						uni.login({
							provider: 'weixin',
							success(loginRes) {
								wxapp_code = loginRes.code
								_this._MyBindWechat('wechat_miniapp',{wechat_miniapp_code: wxapp_code,wechat_miniapp: JSON.stringify(wxapp)} )
							}
						})
					}
				})
			},
			// 公众号授权
			async _wechatMpAuth() {
				// 有OPENID
				if (this.$store.state.openid) {
					this._wechatMpLogin(this.$store.state.openid)
				} else {
					// 获取授权URL
					const WechatAuth = await this.$http.WechatAuth({
						url: window.location.href,
						scope: 'snsapi_base'
					})
					// 获取成功
					if (WechatAuth.data.code === 0) {
						// 跳转授权
						// this.$store.commit('getUrl', window.location.href)
						window.location.href = WechatAuth.data.result.url
						return
					}
				}
			},
			// 绑定封装包含类型判断  参数不确定为对象传进去 
			async _MyBindWechat(type, params) {
				let h5Data = {}
				// #ifdef MP-WEIXIN || APP-PLUS
				h5Data = { //小程序获取的微信code
					type,
					bind: 0,
					...params
				}
				// #endif
				// #ifndef MP-WEIXIN || APP-PLUS
				h5Data = { // 公众号拿到的openid
					bind: 0,
					wechat_openid: this.$store.state.openid
				} 
				// #endif
				const wxminiH5 = await this.$http.MyBindWechat(h5Data)
				if (wxminiH5.data.code == 0) {
					this.ShowToast(wxminiH5.data.msg)
					this.$store.commit('getFans',{...this.$store.state.fans,withdraw_wechat:1})
					uni.navigateBack()
					return
				}
				this.ShowToast(wxminiH5.data.msg, 1500, false, 'none')
			}
		},
		onLoad() {
		}
	}
</script>

<style lang="scss" scoped>
	@import 'utils/common.scss';

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.main {
			margin: auto;
		}

		.more text {
			color: #C3C3C3;
			font-size: 25upx;
		}
	}
</style>
