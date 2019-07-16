<template>
	<view class="container scancode" style="background: url(http://ceshi.weakwater.com/static/ubg.png) no-repeat center;background-size:cover;">
	<view class="scancode-box">
		<view class="scancode-box-user">
			<view class="user-image">
				<image src="http://ceshi.weakwater.com/static/title.png" mode="widthFix" class="title"></image>
				<image src="/static/timg2.png"  class="area"></image>
			</view>
			<view class="user-flex">
				<text>姚宇</text>
				<view class="user-flex-qy">
					<image src="http://ceshi.weakwater.com/static/qy.png"></image>
					<text>持股人</text>
				</view>
				<text class="phone">139****3453</text>
			</view>
		</view>
		<view class="scancode-box-ewm">
			<image src="http://ceshi.weakwater.com/static/mmm.png" mode="widthFix"></image>
		</view>
		<view class="scancode-box-span">
			<image src="http://ceshi.weakwater.com/static/span1.png" mode="widthFix"></image>
			<image src="http://ceshi.weakwater.com/static/span2.png" mode="widthFix"></image>
		</view>
	</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {},
		onLoad() {}
	}
</script>

<style lang="scss" scoped>
	.scancode {
		min-height: 100%;
		background-color: $t-f8;
		justify-content: center;
		&-box{
			width: 600upx;
			height: 950upx;
			@include flexs(column,center,center);
			&-user{
				width: 100%;
				@include flexs(row,center,center);
				.user-image{
					@include flexs(column,space-between,center);
					margin-right: 40upx;
					.title{
						width: 99upx;
					}
					.area{
						border: 6upx solid #bf9e5b;
						width: 170upx;
						height: 170upx;
						border-radius: 50%;
						margin-top: -20upx;
					}
				}
				.user-flex{ 
					height: 200upx;
					@include flexs(column,space-between,flex-start);
					text{
						font-size: 53upx;
						color: #A08559;
						&.phone{
							font-size: 35upx;
						}
					}
					&-qy{
						padding: 12upx 24upx;
						background: #3e3f3e;
						border-radius: 20upx;
						@include flexs(row,flex-start,flex-start);
						image{
							width: 30upx;
							height: 34upx;
							margin-right: 22upx;
						}
						text{
							font-size: 24upx;
						}
					}
				}
			}
			&-ewm{
				margin: 104upx 0 80upx;
				border: 20upx solid $t-f;
				border-radius: 10upx;
				image{
					width: 250upx;
				}
			}
			&-span{
				@include flexs(row,center,flex-end);
				image{
					margin: 0 10upx;
				}
				image:first-child{
					width: 219upx;
				}
				image:last-child{
					width: 208upx;
				}
			}
		}
	}
</style>
