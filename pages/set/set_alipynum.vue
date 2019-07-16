<template>
	<view class="container alipy">
		<view class="alipy-item">
			<text>支付宝账号</text>
			<input placeholder="请输入你的支付宝账号" v-model="alipynum">
		</view>
		<button class="alipy-button">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				alipynum: ''
            }
		},
		onLoad() {
		},
		methods: {
        }
	}
</script>

<style lang="scss" scoped>
.alipy{
	background: #f8f8f8;
	@include flexs;
	&-item{
		width: 100%;
		height: 100upx;
		padding: 0  21upx;
		background-color: $t-f;
		margin: 23upx 0 46upx;
		@include flexs(row,space-between,center);
		text{
			font-size: 29upx;
			color: #000000;
		}
		input{
			flex: 1;
			margin-left: 32upx;
			font-size: 29upx;
			color: #000000;
		}
	}
	&-button{
		width: 694upx;
		margin: 0 28upx;
		line-height: 100upx;
		background-color: #000000;
		border-radius: 4upx;
		color: $t-f;
		font-size: 29upx;
	}
}
</style>