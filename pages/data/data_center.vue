<template>
	<view class="container data">
		<view class="item">
			<view class="item-title">
				<text class="ic"></text>
				<text class="jf">积分</text>
			</view>
			<view class="item-list">
				<view class="item-list-item">
					<text>0元</text>
					<text>今日积分</text>
				</view>
				<view class="item-list-item">
					<text>0元</text>
					<text>本月积分</text>
				</view>
				<view class="item-list-item">
					<text>0元</text>
					<text>累计积分</text>
				</view>
			</view>
		</view>

		<view class="item">
			<view class="item-title">
				<text class="ic"></text>
				<text class="jf">红包</text>
			</view>
			<view class="item-list">
				<view class="item-list-item">
					<text>0元</text>
					<text>今日红包</text>
				</view>
				<view class="item-list-item">
					<text>0元</text>
					<text>本月红包</text>
				</view>
				<view class="item-list-item">
					<text>0元</text>
					<text>累计红包</text>
				</view>
			</view>
		</view>

		<view class="item">
			<view class="item-title">
				<text class="ic"></text>
				<text class="jf">团队</text>
			</view>
			<view class="item-list">
				<view class="item-list-item">
					<text>0个</text>
					<text>今日我的直推数</text>
				</view>
				<view class="item-list-item">
					<text>0个</text>
					<text>本月我的直推数</text>
				</view>
				<view class="item-list-item">
					<text>0个</text>
					<text>累计我的直推数</text>
				</view>
				<view class="item-list-item">
					<text>0个</text>
					<text>今日有效直推数</text>
				</view>
				<view class="item-list-item">
					<text>0个</text>
					<text>本月有效直推数</text>
				</view>
				<view class="item-list-item">
					<text>0个</text>
					<text>累计有效直推数</text>
				</view>
				<view class="item-list-item">
					<text>0个</text>
					<text>团队总人数</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		methods: {
		},
		onLoad(){
		}
	}
</script>

<style lang="scss" scoped>
	.data{
		min-height: 100%;
		height: auto;
		background-color: $t-f8;
		.item{
			width: 100%;
			background-color: $t-f;
			margin-bottom: 24upx;
			@include flexs(column,flex-start,flex-start);
			&-title{
				width: 100%;
				height: 90upx;
				padding: 0 24upx;
				border-bottom: 2upx solid $t-f8;
				@include flexs(row,flex-start,center);
				.ic{
					width: 6upx;
					height: 24upx;
					background-color: #C09442;
					margin-right: 26upx;
				}
				.jf{
					font-size: 33upx;
					color: #000000;	
				}
			}
			&-list{
				width: 100%;
				@include flexs(row,space-between,center);
				flex-wrap: wrap;
				&-item{
					width: 33.33%;
					height: 175upx;
					@include flexs(column,center,center);
					text{
						font-size: 38upx;
						color: #E7CB90;
						&:last-child{
							font-size: 25upx;
							color: #A48650;
						}
					}
				}
			}
		}
	}
</style>