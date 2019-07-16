<template>
	<view class="container rank">
		<view class="rank-head">
			<view class="rank-head-left">
				<text>排行榜</text>
				<text>汇聚各路销售精英</text>
			</view>
			<image src="/static/user_icon/jiangbei.png" mode="widthFix"></image>
		</view>
		<view :class="['rank-filter',isFixed?'filters':'']"> <!--筛选-->
			<view class="rank-filter-item active">积分排行</view>
			<view class="rank-filter-item">红包排行</view>
		</view>

		<view class="rank-list">
			<view class="rank-list-item">
				<image src="/static/label1.png" class="label"  mode="widthFix"></image>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg2.png" class="area"></image>
						<text class="title">王小三</text>
					</view>
					<text class="item-price">¥ 9888</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<image src="/static/label2.png" class="label"  mode="widthFix"></image>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg2.png" class="area"></image>
						<text class="title">张小二</text>
					</view>
					<text class="item-price">¥ 8888</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<image src="/static/label3.png" class="label"  mode="widthFix"></image>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg.jpg" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 5252</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<text class="label">4</text>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg2.png" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 4848</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<text class="label">5</text>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg.jpg" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 5252</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<text class="label">6</text>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg2.png" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 4848</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<text class="label">7</text>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg2.png" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 4848</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<text class="label">8</text>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg.jpg" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 4848</text>
				</view>	
			</view>
			<view class="rank-list-item">
				<text class="label">9</text>
				<view class="item-flex">	
					<view class="item-flex-user">
						<image src="/static/timg2.png" class="area"></image>
						<text class="title">李四</text>
					</view>
					<text class="item-price">¥ 4848</text>
				</view>	
			</view>
		</view>

	</view>
</template>

<script>
	import {  mapState } from 'vuex'
	export default {
		data(){
			return{
				title: '',
				isFixed: false
			}
		},
		computed:{
			...mapState(['systemInfo']),
			RankMarin(){ 
				return uni.upx2px(88)+this.systemInfo.statusBarHeight+'px'
			}
		},
		methods: {
		},
		onLoad(){
		},
		onPageScroll(e){
			if(e.scrollTop>uni.upx2px(250)){
				// #ifndef MP-WEIXIN
				this.title = '排行榜'
				// #endif 
				this.isFixed = true
				return
			}
			// #ifndef MP-WEIXIN
			this.title = ''
			// #endif 
			this.isFixed = false
			
		}
	}
</script>

<style lang="scss" scoped>
	.rank{
		min-height: 100%;
		height: auto;
		background-color: $t-f;
		&-head{
			width: 100%;
			padding: 0 36upx;
			height: 250upx;
			background-color: #010101;
			@include flexs(row,space-between,center);
			&-left{
				height: 100%;
				@include flexs(column,center,flex-start);
				text{
					font-size: 77upx;
					color: $t-f;
					&:last-child{
						font-size: 30upx;
					}
				}
			}
			image{
				width: 184upx;
			}
		}
		&-filter{
			width: 100%;
			height: 130upx;
			line-height: 130upx;
			background-color: #010101;
			@include flexs(row,space-between,center);
			&.filters{
				position: fixed;
				/*  #ifndef MP-WEIXIN */
				top: 88upx;
				/* #endif */
				/* #ifdef MP-WEIXIN */
				top: 0;
				/* #endif */
				z-index: 999;
			}
			&-item{
				flex: 1;
				height: 100%;
				text-align: center;
				font-size: 34upx;
				color: rgba(255,255,255,0.4);
				&.active{
					position: relative;
					color: $t-f;
					&:after{
						content: '';
						position: absolute;
						width: 0;
						height: 0;
						bottom: 0;
						left: 50%;
						margin-left: -8upx;
						border: 16upx solid $t-f;
						border-color: transparent transparent $t-f;
					}
				}
			}
		}
		&-list{
			width: 100%;
			@include flexs(column,flex-start,flex-start);
			&-item{
				width: 100%;
				height: 150upx;
				padding: 0  28upx;
				@include flexs(row,space-between,center);
				.label{
					width: 50upx;
					font-size: 34upx;
					font-weight:bold;
					color: #0C0C0C;
					margin-right: 12upx;
					text-align: center;
				}
				.item-flex{
					flex: 1;
					height: 100%;
					@include flexs(row,space-between,center);
					border-bottom: 2upx solid rgba(187,187,187,0.1);
					&-user{
						flex: 1;
						@include flexs(row,flex-start,center);
						.area{
							margin: 0 40upx 0 12upx ;
							width: 98upx;
							height: 98upx;
							border-radius: 50%;
						}
						.title{
							font-size: 34upx;
							font-weight:bold;
							color: #0C0C0C;
							@include wrap();
						}
					}
					.item-price{
						font-size: 32upx;
						font-weight:bold;
						color: #FF0000;
					}
				}
			}
		}
	}
</style>