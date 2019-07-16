<template>
    <view class="General">
			<text class="General-title" v-if="GeneralTitle">{{GeneralTitle}}</text>
			<view class="General-box">
				<view class="General-box-item" v-for="(item,index) in List" :key="index"  @tap="onClick(item.id)">
					<view class="General-box-item-img">
						<image :src="item.goods_headimg"></image>
					</view>
					<text class="General-box-item-title">
                        {{item.goods_name}}
					</text>
					<view class="General-box-item-label">
						<text v-for="(label,i) in item.goods_label" :key="i">{{label.name}}</text>
					</view>
					<view class="General-box-item-price">
						<text class="old-price">¥{{item.goods_original}}</text>
						<view class="new-price" v-if="item.goods_price">
							<text>¥{{item.goods_price}}</text>
							<text class="cgr">持股人</text>
						</view>
					</view>
				</view>
			</view>
			<slot name="footer"></slot>
		</view>
</template>

<script>
export default {
    props:{
        // 栏目标题
        GeneralTitle:{
            type: String,
            default: ''
        },
        List:{
            type: Array,
            default: []
        }
    },
    methods:{
		onClick(num){
			this.$navTo(`/pages/goods/goods_detail?id=${num}`)
		}
    }
}
</script>

<style lang="scss">
/** 为你推荐 **/
	.General{
		width: 100%;
		padding: 0 28upx;
		//background: #f8f8f8;
		@include flexs();
		overflow: hidden;
		&-title{
			margin: 36upx 0;
			font-size: 38upx;
			color: #3D3D3D;
			font-family: MicrosoftYaHei-Bold;
			font-weight: bold;
			line-height: 33upx;
			position: relative;
			&:after,&:before{
				content: '';
				position: absolute;
				right: -40upx;
				top: 12upx;
				width: 11upx;
				height: 14upx;
				transform: skew(160deg);
				background: #070707;
			}
			&:before{
				left: -40upx;
			}
		}
		&-box{
			width: 100%;
			@include flexs(row,flex-start,center);
			flex-wrap: wrap;
			&-item{
				width: 334upx;
				height: 565upx;
				@include flexs();
				background: #ffffff;
				border-radius: 4upx;
				margin-bottom: 22upx;
				&:nth-child(2n+1){
					margin-right: 22upx;
				}
				&-img{
					width: 334upx;
					height: 332upx;
					image{
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				&-title{
                    width: 100%;
					padding: 0 19upx;
					margin: 19upx 0;
					font-size: 28upx;
					font-family: MicrosoftYaHei;
					color: #3D3D3D;
					line-height: 33upx;
                    @include wrap(2);
					min-height: 62upx;
				}
				&-label{
					width: 100%;
                    padding: 0 15upx;
                    height: 32upx;
					@include flexs(row,flex-start,center);
					text{
						padding: 0 5upx;
						border: 2upx solid #FF3852;
						border-radius: 2upx;
						color: #FD223E;
						font-size: 19upx;
						font-family: MicrosoftYaHei;
						line-height: 34upx;
						text-align: center;
					}
				}
				&-price{
					width: 100%;
					padding: 0 15upx;
					@include flexs(column,flex-start,left);
					.old-price{
						font-size: 30upx;
						font-family: MicrosoftYaHei;
						color: #888888;
					}
					.new-price{
						@include flexs(row,flex-start,left);
						text{
							font-size: 28upx;
							color: #2C2C2C;
							font-weight: bold;
							&.cgr{
								padding: 0 10upx;
								margin-left: 12upx;
								background: #2C2C2C;
								font-size: 17upx;
								color: #E8C983;
								font-weight: normal;
								line-height: 36upx;
								transform: skew(160deg);
							}
						}
					}
				}
			}
		}
	}
</style>
