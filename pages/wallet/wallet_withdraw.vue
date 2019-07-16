<template>
	<view class="container withdraw" :style="{'min-height':systemInfo.windowHeight+'px'}">
		<view class="withdraw-area">
			<view class="withdraw-area-box">
				<text>账户余额将提现到微信</text>
				<input type="number" placeholder="请输入提现金额" placeholder-style="color:D4D6D8;font-size:33rpx;" v-model="formData.amount"
				 :maxlength="price.length" />
				<view class="tips">
					<text>账户余额：￥{{price}}</text>
					<text>需{{info.withdraw_multiple}}的整数倍</text>
				</view>
			</view>
			<radio-group class="withdraw-area-way" @change="paymentChange">
				<view class="withdraw-area-way-item">
					<image :src="init.cdnurl+'/static/v2/img/wallet_wx.png'"></image>
					<text>微信</text>
					<radio :value="'1'" color="#000000" :checked="pay_way" />
				</view>
				<view class="withdraw-area-way-item">
					<image :src="init.cdnurl+'/static/v2/img/wallet_alipy.png'"></image>
					<text>支付宝</text>
					<radio :value="'2'" color="#000000" :checked="!pay_way" />
				</view>
			</radio-group>
		</view>
		<text class="withdraw-info">
			<text v-for="(item,index) in info.rule" :key="index">
				{{item}}<br />
			</text>
		</text>
		<button class="social-button" :disabled="disabled" @tap="toggleConfirm">确定</button>
		<!--确认信息弹出-->
		<hybrid-popup boxWidth="100%" type="bottom" :show="type==='confirm'" @hidePopup="togglePopup('')">
			<view class="confirm">
				<view class="confirm-title">确认提现信息</view>
				<view class="confirm-item"><text>提现金额</text><text>{{formData.amount ? formData.amount : 0}} 元</text></view>
				<button class="social-button" @tap="_WithdrawAdd()">确认信息</button>
			</view>
		</hybrid-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				type: '',
				formData: {
					amount: ''
				},
				info: {},
				pay_way: true,
				payment: 1
			};
		},
		computed: {
			...mapState(['init', 'systemInfo', 'userInfo']),
			disabled() {
				return this.paramsValidate(this.formData)
			},
			price() {
				if (this.options.type == 1) return this.info.point
				if (this.options.type == 2) return this.info.divid
			}
		},
		methods: {
			...mapMutations(['SET_USERINFO']),
			togglePopup(type) {
				this.type = type
			},
			toggleConfirm() {
				if (this.formData.amount == 0) {
					this.$toast({
						title: '请输入提现金额',
						icon: 'none'
					})
					return
				}
				if (this.formData.amount % this.info.withdraw_multiple !== 0) {
					this.$toast({
						title: '最低' + this.info.withdraw_multiple + '的整数倍提现',
						icon: 'none'
					})
					return
				}
				if (this.payment == 1) {
					// 绑定微信
					if (this.userInfo.withdraw_wechat == 0) {
						// #ifdef H5 
						if (!this.isWeiXin) {
							this.$toast({
								title: '请下载app或微信小程序中提现',
								icon: 'none'
							})
							return
						}
						// #endif
						this.$navTo('/pages/register/auth_wx')
						this.$toast({
							title: '请先绑定微信',
							icon: 'none'
						})
						return
					}
				}
				// 支付宝提现
				if (this.payment == 2) {
					// 完善信息
					if (!this.userInfo.alipay_account || !this.userInfo.alipay_name) {
						this.$navTo('/pages/set/set_alipynum')
						this.$toast({
							title: '请先完善支付宝信息',
							icon: 'none'
						})
						return
					}
				}
				// 确认信息
				this.togglePopup('confirm')
			},
			async _WithdrawInfo() {
				let info = await this.$apis.WithdrawInfo(this.options)
				if (info.code == 0) {
					this.info = info.result.info
					return
				}
				this.$toast({
					title: info.msg,
					icon: 'none'
				})
			},
			async _WithdrawAdd() {
				if (this.formData.amount == 0) {
					this.$toast({
						title: '请输入提现金额',
						icon: 'none'
					})
					return
				}
				if (this.formData.amount % this.info.withdraw_multiple !== 0) {
					this.$toast({
						title: '最低' + this.info.withdraw_multiple + '的整数倍提现',
						icon: 'none'
					})
					return
				}
				let add = await this.$apis.WithdrawAdd({ ...this.options,
					amount: Number(this.formData.amount),
					payment: this.payment
				})
				if (add.code == 9) {
					this.$navTo('/pages/set/set_alipynum')
					return
				}
				if (add.code == 0) {
					//修改剩余的金额
					let way = this.options.type == 1 ? 'point' : (this.options.type == 2 ? 'divid' : '')
					let give = this.options.type == 1 ? this.info.point : (this.options.type == 2 ? this.info.divid : '')
					this.SET_USERINFO({ ...this.userInfo,
						[way]: Number(give) - Number(this.formData.amount)
					})
					await this.$toast({
						title: add.msg,
						icon: 'success'
					})
					this.togglePopup('')
					uni.showModal({
						title: '申请成功',
						content: '您的申请已经提交，我们会尽快为您审核，在24小时内会审核完毕。谢您对众汇优品的信任。',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								this.$navTo('/pages/mine/mine', false, 'switchTab')
							}
						}
					})
					return
				}
				this.$toast({
					title: add.msg,
					icon: 'none'
				})
			},
			paymentChange(e) {
				this.payment = e.detail.value
				console.log(e.detail.value)
			}
		},
		onLoad(options) {
			this.options = options
			this._WithdrawInfo()
		},
		onShow() {}
	};
</script>

<style lang="scss" scoped>
	.withdraw {
		min-height: 100%;
		height: auto;
		background-color: $t-f8;

		&-area {
			width: 100%;
			height: 710upx;
			background-color: $t-f;
			padding: 0 30upx;
			@include flexs(column, flex-start, center);

			&-box {
				width: 100%;
				height: 388upx;
				box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.11);
				border-radius: 4px;
				margin: auto auto 12upx;
				padding: 40upx;
				@include flexs(column, space-between, flex-start);

				text {
					font-size: 28upx;
					color: #7C838D;
				}

				input {
					width: 100%;
					height: 120upx;
					line-height: 120upx;
					border-bottom: 1upx solid #E4E4EE;
					color: #121922;
					font-size: 72upx;
				}

				.tips {
					width: 100%;
					@include flexs(row, space-between, center);

					text:last-child {
						color: #4492FF;
					}
				}
			}

			&-way {
				width: 100%;
				height: 220upx;
				box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.11);
				border-radius: 4px;
				margin: 12upx auto auto;
				@include flexs(column, space-between, flex-start);

				&-item {
					flex: 1;
					width: calc(100% - 80upx);
					margin: 0 40upx;
					@include flexs(row, space-between, center);
					border-bottom: 1upx solid #E4E4EE;

					&:last-child {
						border: none;
					}

					image {
						width: 50upx;
						height: 50upx;
					}

					text {
						flex: 1;
						margin-left: 30upx;
						font-size: 28upx;
						color: #7C838D;
					}
				}
			}

		}


		&-info {
			padding: 40upx 52upx;
			font-size: 30upx;
			color: #808080;
			line-height: 50upx;
		}

		.confirm {
			width: 100%;
			padding-bottom: 18upx;
			@include flexs(column, space-between, center);

			&-title {
				font-size: 36upx;
				color: #232323;
				padding: 36upx 0;
				width: 100%;
				border-bottom: 2upx solid #F5F5F5;
				text-align: center;
			}

			&-item {
				width: 100%;
				border-bottom: 1upx solid #dddddd;
				height: 88upx;
				line-height: 88upx;
				padding: 0 20upx;
				@include flexs(row, space-between, center);
				margin: 20upx 0;

				text {
					font-size: 30upx;
				}
			}
		}
	}
</style>
