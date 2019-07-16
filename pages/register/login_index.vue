<template>
	<view class="container" :style="{'min-height':Wheight}">
		<view class="login_main">
			<image :src="'https://cdn.tianshic.com/static/mobile/images/logo.png'" class="registerPassword"></image>
			<image src="/static/login_Bg.png" class="login_bg" mode="widthFix"></image>
		</view>
		<view class="mainBox">
			<!-- #ifdef MP-WEIXIN -->
			<button class="submitBtn" open-type="getUserInfo" @getuserinfo="MpWeixinLogin">微信一键登录</button>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<button class="submitBtn" open-type="getUserInfo" @tap="appWeixinLogin" v-if="installedWeixin">微信一键登录</button>
			<!-- 安装微信才显示 -->
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button class="submitBtn" @tap="_wechat" v-if="isWeiXin">微信一键登录</button>	
			<!-- #endif -->
			<button class="submitBtn phoneBtn" @tap="phoneLogin">手机号登录</button>
			<view class="more">
				<navigator url="/pages/setting/detail?type=privacy_policy" class="look">
					注册即代表您已同意
					<text>《众汇优品隐私政策》</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	let wxapp = null; //微信授权拿到的用户信息参数
	let wxapp_code = null; //微信appcode
	import { mapState,mapMutations } from "vuex";
	export default {
		name: 'Register',
		computed: {
			...mapState(['systemInfo','wechatOpenid']),
			Wheight() {
				return this.systemInfo.windowHeight + 'px'
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
			...mapMutations(["SET_WXAPP","SET_APPLOGIN"]),
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
								_this._AppLogin(loginRes.authResult.openid, loginRes.authResult.unionid, infoRes.userInfo)
							}
						});
					}
				});
			},
			// APP登录
			async _AppLogin(openid, unionid, userinfo) {
				let AppLogin = await this.$apis.LoginIndex({
					login_type: 'wechat_app',
					wechat_openid: openid,
					wechat_unionid: unionid,
					wechat_userinfo: JSON.stringify(userinfo),
					// #ifdef APP-PLUS
					client_id: plus.push.getClientInfo().clientid
					// #endif
				})
				if (AppLogin.code === 0) {
					this.LoginUserShareBind({token: AppLogin.result.fans.token,userinfo:AppLogin.result.fans})
					return
				}
				if (AppLogin.code === 8) {
					this.SET_APPLOGIN({openid,unionid,userinfo})
					uni.navigateTo({
						url: '/pages/register/phone_login'
					})
					return
				}
				this.$toast({title:AppLogin.msg,icon:'none'})
			},
			phoneLogin(){
				uni.navigateTo({
					url: '/pages/register/phone_login'
				})
			},
			// 小程序微信wechat_miniapp授权登录
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
								_this._MpWeixinbtn()
							}
						})
					}
				})
			},
			// 小程序登录
			async _MpWeixinbtn() {
				let WechatApp = await this.$apis.LoginIndex({
					login_type: 'wechat_miniapp',
					wechat_miniapp_code: wxapp_code,
					wechat_miniapp: JSON.stringify(wxapp)
				})
				// 登录成功
				if (WechatApp.code === 0) {
					this.LoginUserShareBind({token:WechatApp.result.fans.token,userinfo:WechatApp.result.fans})
					return
				}
				// 用户未注册
				if (WechatApp.code === 8) {
					this.SET_WXAPP(wxapp)
					uni.navigateTo({
						url: '/pages/register/phone_login'
					})
					return
				}
				this.$toast({title:WechatApp.msg,icon:'none'})
			},
			_wechat(){
				// #ifdef H5
				if (this.isWeiXin) {
						// 无则先授权获取openid
						this._wechatMpAuth()
					}
				// #endif
			},
			// 公众号授权
			async _wechatMpAuth() {
				// 有OPENID
				if (this.wechatOpenid) {
					this._wechatMpLogin(this.wechatOpenid)
				} else {
					// 获取授权URL
					let WechatAuth = await this.$apis.WechatAuth({
						url: window.location.href,
						scope: 'snsapi_base'
					})
					// 获取成功
					if (WechatAuth.code === 0) {
						// 跳转授权
						window.location.href = WechatAuth.result.url
						return
					}
				}
			},
			// 公众号登录
			async _wechatMpLogin(openid) {
				let WechatMp = await this.$apis.LoginIndex({
					login_type: 'wechat_mp',
					wechat_openid: openid
				})
				// 登录成功
				if (WechatMp.code === 0) {
					this.LoginUserShareBind({token:WechatMp.result.fans.token,userinfo:WechatMp.result.fans,num:2,url:true})
					return
				}
				// 用户未注册
				if (WechatMp.code === 8) {
					uni.navigateTo({
						url: '/pages/register/phone_login'
					})
					return
				}
				this.$toast({title:WechatMp.msg,icon:'none'})
			}
		}
	}
</script>

<style lang="scss">
	@import 'utils/common.scss';

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.login_more {
			margin: 20upx 0;
			display: flex;
			justify-content: space-between;

			.login_more_item {
				font-size: 24upx;
				color: #918f8f;
			}
		}

		.otherLogin {
			margin: auto 0 0;
			padding: 0 0;
			background-color: transparent;

			.otherTitle {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.iu {
					height: 2upx;
					background: #D4D4D4;
					flex: 1;
				}

				text {
					font-size: 20upx;
					color: #D4D4D4;
					margin: auto 20upx;
				}
			}

			.otherBtn {
				align-items: center;

				image {
					width: 86upx;
					height: 86upx;
				}

				text {
					font-size: 20upx;
					color: #868686;
				}
			}
		}

		.Mpbtn {
			margin: 50upx 0;
			border-radius: 45upx;
		}
	}
</style>
