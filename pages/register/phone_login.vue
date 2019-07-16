<template>
	<view class="container" :style="{'min-height':Wheight}">
		<view class="view_box">
			<view class="view_item">
				<input type="number" placeholder="请输入手机号" v-model="mobile" />
			</view>
			<view class="view_item">
				<view class="view_sms">
					<input type="number" placeholder="请输入验证码" v-model="smscode" />
					<button class="view_item_btn" type="default" @click="_SmsSend" :disabled="disabled" :style="'color:'+disable?'#999999':'#FF724F'">{{count === 120 ? '获取验证码' : count+'s'}}</button>
				</view>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<button class="submitBtn blueBtn" open-type="getUserInfo" @getuserinfo="MpWexinBtn">登录</button>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<button class="submitBtn blueBtn" @tap="_Register(!appLogin?'password':'wechat_app')">登录</button>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button class="submitBtn blueBtn" @tap="_Register(isWeiXin?'wechat_mp':'password')">登录</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	let wxapp = null; //微信授权拿到的用户信息参数
	let wxapp_code = null; //微信appcode
	import { mapState }  from "vuex";
	export default {
		name: 'Register',
		computed: {
			...mapState(['wxapp','appLogin']),
			Wheight() {
				return uni.getSystemInfoSync().windowHeight + 'px'
			}
		},
		data() {
			return {
				disabled: false,
				mobile: '',
				smscode: '',
				password: '',
				count: 120
			}
		},
		onLoad() {},
		methods: {
			// 微信小程序授权
			MpWexinBtn() {
				let _this = this
				if (this.wxapp) {
					uni.getUserInfo({
						provider: 'weixin',
						success(infoRes) {
							wxapp = infoRes
							uni.login({
								provider: 'weixin',
								success(loginRes) {
									wxapp_code = loginRes.code
									_this._Register('wechat_miniapp', wxapp_code, wxapp)
								}
							})
						}
					})
				}
				if (!this.wxapp) {
					uni.login({
						provider: 'weixin',
						success(loginRes) {
							wxapp_code = loginRes.code
							_this._Register('wechat_miniapp', wxapp_code)
						}
					})
				}
			},
			// 短信倒计时
			_timer() {
				let timer = setInterval(() => {
					this.disabled = true
					this.count--
					if (this.count == 0) {
						clearInterval(timer)
						this.count = 120
						this.disabled = false
					}
				}, 1000)
			},
			// 发送短信
			async _SmsSend() {
				if (!this.Regular.phone_regular.test(this.mobile)) {
					this.$toast({title:'手机号格式错误',icon: 'none'})
					return
				}
				let res = await this.$apis.SmsSend({
						tel: this.mobile,
						event: 'register'
					})
					if(res.code==0){
						this._timer()
						this.$toast({title:res.msg,icon: 'success'})
						return
					}
					this.$toast({title:res.msg,icon: 'none'})
			},
			// 注册封装包含类型判断是否从登录页传值到此页
			async _Register(type, wxapp_code, wxapp) {
				if (!this.Regular.phone_regular.test(this.mobile)) {
					this.$toast({title:'手机号格式错误',icon: 'none'})
					return
				}
				if (!this.smscode) {
					this.$toast({title:'请输入验证码',icon: 'none'})
					return
				}
				// 公共参数 手机号验证码设备类型
				let commonData = {
					mobile: this.mobile,
					smscode: this.smscode,
					register_type: type,
					// #ifdef APP-PLUS
					client_id: plus.push.getClientInfo().clientid
					// #endif
				}
				let h5Data = {}
				// #ifdef MP-WEIXIN
				if (!this.wxapp) {
					h5Data = { //小程序获取的微信code
						...commonData,
						wechat_miniapp_code: wxapp_code
					}
				}
				if (this.wxapp) {
					h5Data = { //小程序获取的微信code
						...commonData,
						wechat_miniapp_code: wxapp_code,
						wechat_miniapp: JSON.stringify(wxapp)
					}
				}
				// #endif
				// #ifndef MP-WEIXIN 
				h5Data = !this.appLogin ? { // 公众号拿到的openid
					wechat_openid: this.$store.state.openid,
					...commonData
				} : { // app拿到的信息
					wechat_openid: this.appLogin.openid,
					wechat_unionid: this.appLogin.unionid,
					wechat_userinfo: JSON.stringify(this.appLogin.userinfo),
					...commonData
				}
				// #endif
				let wxminiH5 = await this.$apis.Register(h5Data)
				if (wxminiH5.code == 0) {
					this.LoginUserShareBind({token:wxminiH5.result.fans.token,userinfo:wxminiH5.result.fans,num:2})
					return
				}
				this.$toast({title:wxminiH5.msg,icon: 'none'})
			}
		}
	}
</script>

<style lang="scss">
	@import 'utils/common.scss';

	.blueBtn {
		background-color: #48BEFE;
	}

	.submitBtn {
		width: 664upx;
		height: 100upx;
		margin-top: 100upx;
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;

		.view_box {
			width: 100%;
			background: #fff;
			border-top: 1upx solid #f4f4f4;
			padding: 10upx 40upx 30upx;
			@include flexs(column,flex-start,flex-start);
			.view_item {
				width: 100%;
				padding: 40upx 0 30upx;
				@include flexs(row,space-between,center);
				border-bottom: 1upx solid #F5F5F5;

				text {
					font-size: 30upx;
					margin: auto 0;
				}

				uni-input,
				input {
					flex: 1;
					height: 85upx;
					margin: 0 0upx;
					padding: 0 10upx;
					font-size: 30upx;
					color: #181818;
				}
			}

			.view_sms {
				flex: 1;
				margin: 0;
				display: flex;
				justify-content: space-between;

				uni-input,
				input {
					margin: 0;
					border: none;

				}

				.view_item_btn {
					margin: 10upx 0;
					background: transparent;
					color: #48BEFE;
					line-height: 60upx;
					font-size: 30upx;
					text-align: center;
					border-radius: 0;
					border-left: 2upx solid #48BEFE;
					&:after{
						display: none;
					}
				}
			}

			.line {
				height: 46upx;
				background: #FF8668;
			}

			.view_button {
				height: 84upx;
				width: 690upx;
				background: #FF724F;
				margin: auto;
				font-size: 40upx;
				color: #FFFFFF;
				text-align: center;
				line-height: 84upx;
				border-radius: 70upx;
			}
		}

	}
</style>
