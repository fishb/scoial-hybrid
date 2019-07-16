<template>
	<view class="container reset" :style="{'min-height':systemInfo.windowHeight+'px'}">
		<view class="reset-box">
			<view class="reset-box-item">
				<input placeholder="请输入手机号" v-model="formData.mobile"/>
			</view>
			<view class="reset-box-item">
				<input placeholder="请输入验证码" v-model="formData.smscode"/>
				<button @tap="_SmsSend()" :disabled="count!==120">{{count === 120 ? '获取验证码' : count+'s'}}</button>
			</view>
			<view class="reset-box-item">
				<input placeholder="新密码" v-model="formData.password"/>
			</view>	
			<text class="tips">*8-24位数字、字母</text>
		</view>
		<button class="social-button" :disabled="disabled" @tap="ResetBtn()" >确定</button>
	</view>
</template>

<script>
	import { mapState,mapMutations } from "vuex"
	export default {
		data() {
			return {
				count: 120,
				formData:{
					mobile: '',
					smscode: '',
					password: ''
				}
            }
		},
		computed:{
			...mapState(['userInfo','systemInfo']),
			disabled(){ //是否让button处于禁用状态
				return this.paramsValidate(this.formData)
			}
		},
		onLoad() {
		},
		methods: {
			...mapMutations(['SET_USERINFO']),
			async _SmsSend(){
				if(!this.Regular.phone_regular.test(this.formData.mobile)){
					this.$toast({title:'必须填写正确的手机号！',icon:'none'})
					return
				}
				const sms = await this.$apis.SmsSend({tel:this.formData.mobile,event:'resetpaypwd'})
				if(sms.code==0){
					this.codeRequest()
					this.$toast({title:sms.msg,icon:'success'})
					return
				}
				this.$toast({title:sms.msg,icon:'none'})
			},
			async ResetBtn(){
				if(!this.Regular.phone_regular.test(this.formData.mobile)){
					this.$toast({title:'必须填写正确的手机号！',icon:'none'})
					return
				}
				if(!this.formData.smscode){
					this.$toast({title:'请先获取验证码！',icon:'none'})
					return
				}
				if(this.formData.pay_password<8){
					this.$toast({title:'密码必须大于8位',icon:'none'})
					return
				}
				let reset = await this.$apis.ResetPayPwd(this.formData)
				if(reset.code==0){
					await this.$toast({title:reset.msg,icon:'success'})
					uni.redirectTo({
						url: '/pages/wallet/wallet_index'
					})
					return
				}
				this.$toast({title:reset.msg,icon:'none'})
			},
			codeRequest(){
				let timer = setInterval(()=>{
					this.count--
					if(this.count==0){
						clearInterval(timer)
						this.count = 120
					}
				},1000)
			}
        }
	}
</script>

<style lang="scss" scoped>
.reset{
	background: $t-f;
	@include flexs;
	&-box{
		width: 100%;
		padding: 38upx 28upx;
		@include flexs(column,flex-start,flex-start);
		&-item{
			width: 100%;
			height: 120upx;
			border-bottom: 2upx solid #F5F5F5;
			@include flexs(row,space-between,center);
			input{
				flex: 1;
				height: 120upx;
				padding: 0 10upx;
				font-size: 29upx;
				color: #181818;
			}
			button{
				font-size: 29upx;
				color: #181818;
				padding: 0 32upx;
				background: transparent;
				border-left: 2upx solid #181818;
				border-radius: 0;
				line-height: 35upx;
				&:after{
					display: none;
				}
			}
		}
		.tips{
				font-size: 24upx;
				color: #181818;
				padding: 20upx;
		}
	}
	&-button{
		width: 694upx;
		margin: 0 28upx;
		line-height: 100upx;
		background-color: #000000;
		border-radius: 4upx;
		color: $t-f;
		font-size: 38upx;
	}
}
</style>