<template>
	<view class="container reset" :style="{'min-height':systemInfo.windowHeight+'px'}">
		<view class="reset-box">
			<view class="reset-box-item">
				<input placeholder="设置密码" v-model="formData.password"/>
			</view>
			<view class="reset-box-item">
				<input placeholder="确认密码" v-model="formData.set_password"/>
			</view>	
			<text class="tips">*8-24位数字、字母</text>
		</view>
		<button class="social-button" :disabled="disabled" @tap="_MySetPayPwd" >确定</button>
	</view>
</template>

<script>
	import { mapState,mapMutations } from "vuex"
	export default {
		data() {
			return {
				formData:{
					password: '',
					set_password: ''
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
			async _MySetPayPwd(){
				if(this.formData.password!==this.formData.set_password){
					this.$toast({title:'密码不一致',icon:'none'})
					return
				}
				if(this.formData.password.length<8||this.formData.set_password<8){
					this.$toast({title:'密码长度必须在八位以上',icon:'none'})
					return
				}
				let set = await this.$apis.MySetPayPwd({pay_password:this.formData.password})
				if(set.code===0){
					await this.SET_USERINFO({...this.userInfo,pay_password:1})
					await this.$toast({title:set.msg,icon:'success'})
					uni.redirectTo({
						url: '/pages/wallet/wallet_index'
					})
				}
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