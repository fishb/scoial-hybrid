<template>
	<view class="container order">
		<view class="order-nav">
			<view :class="['order-nav-item',item.id==current?'active':'']" @tap="select(item.id)" v-for="(item,index) in nav"
			 :key="index">
				<text>{{item.name}}</text>
			</view>
		</view>

		<swiper class="order-list" @change="change" :current="current">
			<swiper-item>
				<scroll-view class="order-list-scroll" scroll-y>
					<view class="item">
						<view class="item-title">
							<image src="/static/order_seller.png"></image>
							<text class="item-title-flex">
								元泽家用电器专营店
								<text class="iconfont icon-qianjin"></text>
							</text>
							<text class="item-title-status">待付款</text>
						</view>
						<view class="item-product">
							<image src="/static/timg.jpg"></image>
							<view class="item-product-flex">
								<text class="title">SKG颈部按摩椅脖子牵引器4059</text>
								<text class="label">白色</text>
							</view>
							<view class="item-product-price">
								<text>¥359.00</text>
								<text>X1</text>
							</view>
						</view>
						<view class="item-total">总计：¥359</view>
						<view class="item-control">
							<view class="item-control-item">查看订单</view>
							<view class="item-control-item status">评价</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="order-list-scroll" scroll-y>
					<view class="item">
						<view class="item-title">
							<image src="/static/order_seller.png"></image>
							<text class="item-title-flex">
								元泽家用电器专营店
								<text class="iconfont icon-qianjin"></text>
							</text>
							<text class="item-title-status">待付款</text>
						</view>
						<view class="item-product">
							<image src="/static/timg.jpg"></image>
							<view class="item-product-flex">
								<text class="title">SKG颈部按摩椅脖子牵引器4059</text>
								<text class="label">白色</text>
							</view>
							<view class="item-product-price">
								<text>¥359.00</text>
								<text>X1</text>
							</view>
						</view>
						<view class="item-total">总计：¥359</view>
						<view class="item-control">
							<view class="item-control-item">取消</view>
							<view class="item-control-item statusuccess">去付款</view>
						</view>
					</view>
					<view class="item">
						<view class="item-title">
							<image src="/static/order_seller.png"></image>
							<text class="item-title-flex">
								元泽家用电器专营店
								<text class="iconfont icon-qianjin"></text>
							</text>
							<text class="item-title-status">待付款</text>
						</view>
						<view class="item-product">
							<image src="/static/timg.jpg"></image>
							<view class="item-product-flex">
								<text class="title">SKG颈部按摩椅脖子牵引器4059</text>
								<text class="label">白色</text>
							</view>
							<view class="item-product-price">
								<text>¥359.00</text>
								<text>X1</text>
							</view>
						</view>
						<view class="item-total">总计：¥359</view>
						<view class="item-control">
							<view class="item-control-item">取消</view>
							<view class="item-control-item statusuccess">去付款</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="order-list-scroll" scroll-y>
					<view class="item">
						<view class="item-title">
							<image src="/static/order_seller.png"></image>
							<text class="item-title-flex">
								元泽家用电器专营店
								<text class="iconfont icon-qianjin"></text>
							</text>
							<text class="item-title-status">买家已付款</text>
						</view>
						<view class="item-product">
							<image src="/static/timg.jpg"></image>
							<view class="item-product-flex">
								<text class="title">SKG颈部按摩椅脖子牵引器4059</text>
								<text class="label">白色</text>
							</view>
							<view class="item-product-price">
								<text>¥359.00</text>
								<text>X1</text>
							</view>
						</view>
						<view class="item-total">总计：¥359</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="order-list-scroll" scroll-y>
					<view class="item">
						<view class="item-title">
							<image src="/static/order_seller.png"></image>
							<text class="item-title-flex">
								元泽家用电器专营店
								<text class="iconfont icon-qianjin"></text>
							</text>
							<text class="item-title-status">等待买家收货</text>
						</view>
						<view class="item-product">
							<image src="/static/timg.jpg"></image>
							<view class="item-product-flex">
								<text class="title">SKG颈部按摩椅脖子牵引器4059</text>
								<text class="label">白色</text>
							</view>
							<view class="item-product-price">
								<text>¥359.00</text>
								<text>X1</text>
							</view>
						</view>
						<view class="item-total">总计：¥359</view>
						<view class="item-control">
							<view class="item-control-item">查看物流</view>
							<view class="item-control-item statusuccess">确认收货</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="order-list-scroll" scroll-y>
					<view class="item">
						<view class="item-title">
							<image src="/static/order_seller.png"></image>
							<text class="item-title-flex">
								元泽家用电器专营店
								<text class="iconfont icon-qianjin"></text>
							</text>
							<text class="item-title-status">等待买家收货</text>
						</view>
						<view class="item-product">
							<image src="/static/timg.jpg"></image>
							<view class="item-product-flex">
								<text class="title">SKG颈部按摩椅脖子牵引器4059</text>
								<text class="label">白色</text>
							</view>
							<view class="item-product-price">
								<text>¥359.00</text>
								<text>X1</text>
							</view>
						</view>
						<view class="item-total">总计：¥359</view>
						<view class="item-control">
							<view class="item-control-item">查看订单</view>
							<view class="item-control-item statusuccess">评价</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					id: 0,
					name: '全部'
				}, {
					id: 1,
					name: '待付款'
				}, {
					id: 2,
					name: '待发货'
				}, {
					id: 3,
					name: '待收货'
				}, {
					id: 4,
					name: '待评价'
				}],
				current: 0
			};
		},
		methods: {
			select(num) {
				this.current = num
			},
			change(e) {
				this.current = e.detail.current
			}
		},
		onShow() {},
		onLoad(options) {
			this.current = options.num
		}
	};
</script>

<style lang="scss" scoped>
	.order {
		background-color: $t-f8;

		&-nav {
			width: 100%;
			height: 80upx;
			background-color: $t-f;
			@include flexs(row, space-between, center);

			&-item {
				flex: 1;
				height: 80upx;
				@include flexs(row, center, center);
				transition: all 0.5s;

				text {
					font-size: 27upx;
					color: #010101;
				}

				&.active {
					position: relative;
					font-weight: bold;

					&:before {
						content: "";
						position: absolute;
						width: 6upx;
						height: 6upx;
						background-color: $t-f;
						left: 60%;
						bottom: 0;
						margin-left: -3upx;
						transform: skew(-45deg);
						z-index: 999;
					}

					&:after {
						content: "";
						position: absolute;
						width: 60upx;
						height: 6upx;
						background-color: #d80006;
						left: 50%;
						bottom: 0;
						margin-left: -30upx;
						transform: skew(-45deg);
					}
				}
			}
		}

		&-list {
			width: 100%;
			height: calc(100% - 80upx);
			&-scroll{
				height: 100%;
				.item {
					width: 694upx;
					height: auto;
					border: 1upx solid $t-f8;
					border-radius: 6upx;
					background-color: $t-f;
					margin: 20upx auto;
					padding: 20upx;
					@include flexs(column, space-between, flex-start);

					&-title {
						width: 100%;
						height: 50upx;
						@include flexs(row, space-between, center);
						font-size: 30upx;
						color: #030303;

						image {
							width: 38upx;
							height: 37upx;
						}

						&-flex {
							flex: 1;
							margin-left: 17upx;
						}

						&-status {
							font-weight: bold;
						}
					}
					&-product{
						@include flexs(row,space-between,flex-start);
						padding: 30upx 0;
						border-bottom: 1upx solid #E9E9E9;
						image{
							width: 163upx;
							height: 163upx;
							border-radius: 6upx;
						}
						&-flex{
							flex: 1;
							margin: 0 60upx 0 22upx;
							@include flexs(column,flex-start,flex-start);
							.title{
								font-size: 25upx;
								color: #030303;
								@include wrap(2);
							}
							.label{
								font-size: 24upx;
								color: #676767;
							}
						}
						&-price{
							@include flexs(column,flex-start,flex-start);
							text{
								font-size: 25upx;
								color: #030303;
								&:last-child{
									color: #676767;
									font-size: 19upx;
								}
							}
						}
					}
					&-total{
						width: 100%;
						margin: 28upx 0;
						@include flexs(row,flex-end,center);
						font-size: 25upx;
						color: #030303;
					}
					&-control{
						width: 100%;
						@include flexs(row,flex-end,center);
						&-item{
							padding: 0  30upx;
							border: 1upx solid #313131;
							border-radius: 6upx;
							margin-left: 18upx;
							font-size: 25upx;
							color: #000000;
							text-align: center;
							line-height: 56upx;
							&.status{
								color: #E50008;
								border-color: #E50008;
							}
							&.statusuccess{
								color: $t-f;
								border-color: #E50008;
								background-color: #E50008;
							}
						}
					}
				}
			}	
		}
	}
</style>
