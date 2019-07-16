<template>
	<view class="container wallet">
		<view class="wallet-box">
			<image src="/static/user_icon/wallet_success.png"></image>
			<text>提现成功</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
.wallet{
	min-height: 100%;
	background-color: $t-f;
	&-box{
		width: 100%;
		height: 100%;
		@include flexs(column,center,center);
		image{
			width: 105upx;
			height: 105upx;
		}
		text{
			margin-top: 34upx;
			font-size: 39upx;
			font-weight: bold;
			color: #282828;
		}
	}
}
</style>
