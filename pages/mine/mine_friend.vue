<template>
	<view class="container friend">
		<view class="friend-tab">
			<view class="friend-tab-item active"><text>全部好友</text></view>
			<view class="friend-tab-item"><text>直推好友</text></view>
			<view class="friend-tab-item"><text>间推好友</text></view>
		</view>

		<scroll-view scroll-y  class="friend-scroll">
			<view class="friend-scroll-item">
				<image src="/static/timg.jpg" class="area"></image>
				<view class="friend-scroll-item-info">
					<view class="info-top">
						<text>众汇优品官方</text>
						<view class="info-label">
							<image src="/static/gd.png"></image>
						</view>
					</view>
					<view class="info-bott">
						<text>139****3453</text><text>2018-12-20</text>
					</view>
				</view>
				<view class="friend-scroll-item-more">
					<text>25</text>
					<text class="iconfont icon-qianjin"></text>
				</view>
			</view>
		</scroll-view>

		<view class="friend-button">
			<text>合计：3</text>
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
				tab(event){
					this.level = event
				}
			},
			onLoad(){
		    }
			
		}
</script>

<style lang="scss" scoped>
	.friend{
		height: 100%;
		background-color: $t-f;

		&-tab{
			width: 100%;
			height: 82upx;
			border-bottom: 1upx solid $t-f8;
			@include flexs(row,space-between,center);
			&-item{
				flex: 1;
				font-size: 28upx;
				color: #000000;
				text-align: center;
				&.active{
					font-weight: bold;
				}
			}
		}

		&-scroll{
			height: calc(100% - 172upx);
			@include flexs(column,flex-start,flex-start);
			&-item{
				width: 100%;
				height: 145upx;
				padding: 0 30upx;
				border-bottom: 1upx solid $t-f8;
				@include flexs(row,space-between,center);
				image.area{
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
				}

				&-info{
					flex: 1;
					margin-left: 36upx;
					height: 100%;
					@include flexs(column,center,flex-start);
					.info-top{
						width: 100%;
						@include flexs(row,flex-start,center);
						text{
							font-size: 26upx;
							color: #000000;
						}
						.info-label{
							margin-left: 14upx;
							image{
								width: 113upx;
								height: 32upx;
							}
						}
					}
					.info-bott{	
						width: 100%;
						text{
							font-size: 23upx;
							color: #828282;
							&:last-child{
								margin-left: 23upx;
							}
						}
					}
				}

				&-more{
					@include flexs(row,flex-start,center);
					text:first-child{
						width: 41upx;
						height: 41upx;
						line-height: 41upx;
						background: #000000;
						border-radius: 50%;
						font-size: 18upx;
						color: $t-f;
						text-align: center;
					}
				}
			}
		}

		&-button{
			width: 100%;
			height: 90upx;
			background-color: #000000;
			font-size: 40upx;
			color: $t-f;
			text-align: center;
			line-height: 90upx;
		}
	}
</style>
