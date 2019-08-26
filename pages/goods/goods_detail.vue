<template>
	<view class="container detail">
		<!-- 头部组件  QaQ-->
		<hybrid-title class="detail-title" :hasTitle="true" :hasStatus="hasStatus" :backgroundColor="colorOpacity"
			:titleHeight="titleHeight" :leftIcon="['icon-back','']" @icon-back="$navTo('')"
			:rightIcon="['icon-favorate','icon-share']" @icon-favorate="storeUp" @icon-share="shareTo">
			<!-- #ifdef MP-WEIXIN -->
			<block slot="title" style="margin-right: 200upx;" v-show="opcity">
				<view class="detail-title-container">
					<!-- #endif -->
					<!-- #ifdef APP-PLUS -->
					<block slot="title" style="width: 100%;" v-show="opcity">
						<view class="detail-title-container">
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<block slot="title" style="width: 100%;">
								<view class="detail-title-container" v-show="opcity">
									<!-- #endif -->
									<view :class="['detail-title-container-item',tabIndex==index?'active':'']"
										v-for="(en,index) in title" :key="index" @tap="anchor(index)">{{en}}</view>
								</view>
							</block>
		</hybrid-title>

		<view class="media" id="media" >
			<swiper circular="true" :current="current" @change="mediaChange" class="media-swiper">
				<swiper-item v-for="(media,index) in result.goodsInfo.images" :key="index">
					<image :src="media"></image>
				</swiper-item>
				<swiper-item v-if="result.goodsInfo.video">
					<!-- #ifndef APP-PLUS -->
					<video :src="result.goodsInfo.video" :poster="result.goodsInfo.goods_index_image">
					</video>
					<!-- #endif -->
				</swiper-item>
			</swiper>
			<view class="media-step">
				<text class="num">{{current+1}}</text>
				<text class="dot">/</text>
				<text
					class="num">{{result.goodsInfo.video?result.goodsInfo.images.length+1:result.goodsInfo.images.length}}</text>
			</view>
			<!-- <view class="media-sales">
				近期销量25685笔
			</view> -->
		</view>

		<view class="detail-info" v-if="result">
			<view class="detail-info-price">
				<text class="normal">¥45</text>
				<text class="line-through">¥85</text>
				<text class="skew"><text>持股人</text></text>
			</view>
			<text class="detail-info-title">{{result.goodsInfo.goods_name}}</text>
			<view class="detail-info-sales">
				<text>{{result.goodsInfo.goods_sale_text}}</text>
				<text>{{result.goodsInfo.stock_text}}</text>
			</view>
		</view>

		<view class="detail-specs">
			<view class="detail-specs-item big" @tap="togglePopup('yhj')">
				<text>优惠</text>
				<view class="specs-item-box">
					<text class="yh">[买2件]至少可优惠<text>¥5</text></text>
					<view class="yh-box">
						<view class="yh-box-item"><text>满299减30</text></view>
						<view class="yh-box-item"><text>满299减30</text></view>
						<view class="yh-box-item"><text>满299减30</text></view>
					</view>
				</view>
				<text class="iconfont icon-qianjin"></text>
			</view>
			<view class="detail-specs-item big" @tap="togglePopup('address')">
				<text>配送</text>
				<view class="specs-item-box">
					<text class="title">全国多仓就近发货 至 江西省南昌市青山湖区...</text>
					<text class="label">免运费</text>
				</view>
				<text class="iconfont icon-qianjin"></text>
			</view>
			<view class="detail-specs-item">
				<text>选择</text>
				<view class="specs-item-box">
					<text class="title">尺码 , 颜色</text>
				</view>
				<text class="iconfont icon-qianjin"></text>
			</view>
			<view class="detail-specs-item" @tap="navTo('/pages/goods/goods_serve')">
				<text>服务</text>
				<view class="specs-item-box">
					<text class="title">破损包赔.无忧质保...</text>
				</view>
				<text class="iconfont icon-qianjin"></text>
			</view>
		</view>

		<view class="detail-entry" id="entry" @tap="navTo('/pages/goods/goods_evaluate')">
			<text>商品评价(7897)</text>
			<text>查看全部<text class="iconfont icon-qianjin"></text></text>
		</view>
		<!-- 店铺入口 -->
		<view class="detail-sales" @tap="$navTo(`/pages/store/store?id=${result.shopInfo.id}`)" v-if="result">
			<image src="/static/timg.jpg"></image>
			<text>{{result.shopInfo.shop_name}}</text>
			<button class="detail-sales-button">进店看看</button>
		</view>
		<!-- 商品信息 -->
		<view class="detail-init" id="init">
			<text class="detail-init-title">商品信息</text>
			<view class="detail-init-main">
				<view class="init-main-item" v-for="(item,index) in initlist" :key="index"
					:style="{'display':initStatus?(index>3?'flex':''):(index<3?'flex':'flex')}">
					<view>{{item.name}}</view>
					<view>{{item.item}}</view>
				</view>
			</view>
			<view class="init-main-control" @tap="initControl" v-if="initlist.length>3">
				<text>{{initStatus?'收起':'展开'}}</text>
				<text class="iconfont icon-qianjin"
					:style="{'transform':initStatus?'rotate(270deg)':'rotate(90deg)'}"></text>
			</view>
		</view>

		<rich-text class="richtext" :nodes="result.goodsInfo.goods_detail"></rich-text>

		<!-- 为你推荐 -->
		<general-list :GeneralTitle="'本店好货'" :List="list" style="background: #f8f8f8;" id="general">
		</general-list>

		<!--底部-->
		<view class="detail-control">
			<view class="detail-control-flex">
				<view class="detail-control-flex-item">
					<image src="/static/cart.png"></image>
					<text>购物车</text>
					<view class="bagenum">
						<uni-badge text="3" type="primary" :inverted="false"></uni-badge>
					</view>
				</view>
				<view class="detail-control-flex-item">
					<image src="/static/de.png"></image>
					<text>客服</text>
				</view>
			</view>
			<button class="detail-control-button default" @tap="token?togglePopup('cart'):$navTo('/page',true)">加入购物车</button>
			<button class="detail-control-button success" @tap="togglePopup('gopay')">立即购买</button>
		</view>
		<!-- 优惠券弹出 -->
		<hybrid-popup boxWidth="100%" type="bottom" :show="type==='yhj'" @hidePopup="togglePopup('')">
			<view class="yhj">
				<view class="yhj-title">优惠券</view>
				<view class="yhj-content">
					<text class="title">可领店铺券</text>
					<view class="list">
						<view class="list-item">
							<view class="list-item-face">
								<text class="facevalue">20<text>元</text></text>
								<text class="faceway">满188使用</text>
							</view>
							<view class="line"></view>
							<view class="list-item-right">
								<view class="item-flex">
									<text class="flex-title">蓝帽子滋补保健专营店</text>
									<text>2019.05.31.23:59过期</text>
								</view>
								<button>立即领取</button>
							</view>
						</view>
						<view class="list-item">
							<view class="list-item-face">
								<text class="facevalue">20<text>元</text></text>
								<text class="faceway">满188使用</text>
							</view>
							<view class="line"></view>
							<view class="list-item-right">
								<view class="item-flex">
									<text class="flex-title">蓝帽子滋补保健专营店</text>
									<text>2019.05.31.23:59过期</text>
								</view>
								<button>立即领取</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</hybrid-popup>
		<!--配送弹出-->
		<hybrid-popup boxWidth="100%" type="bottom" :show="type==='address'" @hidePopup="togglePopup('')">
			<view class="address">
				<view class="address-title">配送信息</view>
				<radio-group class="address-list">
					<view class="list-item">
						<text class="iconfont icon-map"></text>
						<text class="map">江西省南昌市青山湖区紫阳大道2888...</text>
						<radio color="#000000"></radio>
					</view>
					<view class="list-item">
						<text class="iconfont icon-map"></text>
						<text class="map">江西省南昌市青山湖区紫阳大道2888号 所噶</text>
						<radio color="#000000"></radio>
					</view>
				</radio-group>
			</view>
		</hybrid-popup>
		<!--加入购物车-->
		<hybrid-popup boxWidth="100%" type="bottom" :show="type==='cart'" @hidePopup="togglePopup('')"> 
			<hybrid-spec type="CartSpec" :defaultImg="result.goodsInfo.goods_index_image" :defaultPrice="result.goodsInfo.goods_price" :spec="spec" :skuList="skuList" @CartSpec="_CartAdd"></hybrid-spec>
		</hybrid-popup>
		<!--立即购买确认-->
		<hybrid-popup boxWidth="100%" type="bottom" :show="type==='gopay'" @hidePopup="togglePopup('')">
			<hybrid-spec type="GoBuy" :defaultImg="result.goodsInfo.goods_index_image" :defaultPrice="result.goodsInfo.goods_price" :spec="spec" :skuList="skuList" @GoBuy="_Gobuy"></hybrid-spec>
		</hybrid-popup>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import {
		mapState,mapMutations
	} from "vuex";
	import GeneralList from '@/components/GeneralList.vue'
	import HybridSpec from '@/components/HybridSpec.vue'
	import Specs from './specs.js'
	export default {
		components: {
			uniBadge,
			GeneralList,HybridSpec
		},
		data() {
			return {
				goods_id: '',
				collect: false,
				type: '', // 弹窗类型
				tabIndex: 0,
				hasStatus: true,
				opcity: 0, //搜索栏透明度
				current: 0, // 滑块索引
				result: {
					goodsInfo:{	
						images:[],
						goods_index_image: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
						goods_price: 1000
					},
					shopInfo:{
						shop_name: '官方自营',
					}
				}, //商品详情
				title: ['商品', '评价', '详情', '推荐'],
				titleScroll: [], //头部点击滚动的锚点高度
				initlist: [{
					name: '计价单位',
					item: '促销组合包装'
				}, {
					name: '毛重',
					item: '6KG'
				}, {
					name: '是否含磷',
					item: '不含磷'
				}, {
					name: '是否伤手',
					item: '不伤手'
				}],
				initStatus: false,
				list: [{
						id: '1',
						title: '【下单后7-15天发货】贵州飞天茅台53度 酱',
						image: '/static/timg.jpg',
						oldprice: '1980',
						newprice: '1600',
						label: ['爆品秒杀']
					},
					{
						id: '2',
						title: '测试产品',
						image: '/static/timg2.png',
						oldprice: '199',
						newprice: '180'
					}
				],
				spec: Specs.spec,
				skuList: Specs.skuList
			}
		},
		computed: {
			...mapState(["token","systemInfo"]),
			colorOpacity() {
				return `rgba(1,1,1,${this.opcity})`;
			},
			titleHeight() {
				// 搜索栏的高度
				return uni.upx2px(96) + "px";
			},
			swiperMarin() {
				return this.hasStatus ?
					uni.upx2px(96) + this.systemInfo.statusBarHeight + "px" :
					this.titleHeight;
			}
		},
		onReady() {
			this.Scrollinit()
		},
		onLoad(options) {
			this.goods_id = options.id
			this._GoodsInfo(this.goods_id)
		},
		methods: {
			async _GoodsInfo(id) {
				let init = await this.$apis.GoodsInfo({
					id
				})
				this.result = init.result
				this.skuList = this.result.goodsInfo.skuList
				this.spec = await this.result.goodsInfo.spec
			},
			async Scrollinit() { // 获取锚点scrollTop
				let mediaScroll = null;
				let query = ['entry', 'init', 'general'];
				this.titleScroll = [0]
				await uni.createSelectorQuery().selectViewport('#media').scrollOffset(res => {
					mediaScroll = res.scrollTop
				}).exec();
				for (let i = 0; i < query.length; i++) {
					await uni.createSelectorQuery().select(`#${query[i]}`).boundingClientRect((rects) => {
						this.titleScroll.push(rects.top + mediaScroll - uni.upx2px(96) - this.systemInfo
							.statusBarHeight)
					}).exec();
				}
			},
			mediaChange(e) {
				this.current = e.detail.current;
			},
			async storeUp() {
				let collect = await this.$apis[this.collect ? 'GoodsCollectDel' : 'GoodsCollectAdd']({
					goods_id: this.goods_id
				})
				if (collect.code == 0) {
					this.$toast({
						title: this.collect ? '取消收藏成功' : '收藏成功',
						icon: 'success'
					})
					this.collect = !this.collect
					return
				}
				this.$toast({
					title: collect.msg,
					icon: 'none'
				})
			},
			shareTo() {
				console.log("分享出去");
			},
			initControl() {
				this.initStatus = !this.initStatus
			},
			anchor(x) { // 锚点
				this.tabIndex = x
				uni.pageScrollTo({
					scrollTop: this.titleScroll[x],
					duration: 0
				})
			},
			togglePopup(type) {
				this.type = type
			},
			//加入购物车请求
			async _CartAdd(data) {
				let cartadd = await this.$apis.CartAdd(data)
				if (cartadd.code == 0) {
					this.togglePopup('')
					this.$toast({
						title: '加入购物车成功',
						icon: 'success'
					})
					return
				}
				this.togglePopup('')
				this.$toast({
					title: cartadd.msg,
					icon: 'none'
				})
			},
			// 购买逻辑
			_Gobuy(data){
				console.log(data)
			}
		},
		onPageScroll(e) {
			if (e.scrollTop > 150) {
				this.opcity = 1;
				return;
			}
			this.opcity = e.scrollTop / 150;
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { //来自页面内分享按钮
				console.log(res.target)
			}
			this.$Tyshare.share(this.shareInfo)
		}
	};
</script>

<style lang="scss" scoped>
	.detail {
		min-height: 100%;
		padding-bottom: 120upx;
		height: auto;
		background-color: $t-f8;

		&-title {
			&-container {
				flex: 1;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #ffffff;

				&-item {
					font-size: 30upx;
					flex: 1;
					text-align: center;

					&.active {
						position: relative;

						&:before {
							content: "";
							position: absolute;
							width: 10%;
							height: 6upx;
							background-color: #000000;
							left: 90%;
							bottom: -20upx;
							margin-left: -25%;
							transform: skew(-45deg);
							z-index: 999;
						}

						&:after {
							content: "";
							position: absolute;
							width: 60%;
							height: 6upx;
							background-color: #f30;
							left: 50%;
							bottom: -20upx;
							margin-left: -30%;
							transform: skew(-45deg);
						}
					}
				}
			}
		}

		.media {
			width: 100%;
			height: 750upx;
			position: relative;

			&-swiper {
				width: 100%;
				height: 750upx;

				image,
				video {
					width: 100%;
					height: 750upx;
				}

			}

			&-step {
				width: 100upx;
				padding: 10upx 0;
				position: absolute;
				left: 50%;
				margin-left: -50upx;
				bottom: 20upx;
				z-index: 997;
				background-color: $t-f;
				border-radius: 6upx;
				@include flexs(row, center, center);

				.num {
					font-size: 22upx;
					color: #000000;
				}

				.dot {
					font-size: 12upx;
					color: #999999;
					margin: 0 10upx;
				}
			}

			&-sales {
				padding: 10upx 20upx;
				position: absolute;
				right: 30upx;
				bottom: 20upx;
				background-color: $t-f;
				border-radius: 6upx;
				font-size: 22upx;
				color: #000000;
			}
		}

		&-info {
			width: 100%;
			height: 270upx;
			padding: 26upx;
			background-color: $t-f;
			@include flexs(column, space-between, flex-start);

			&-price {
				width: 100%;
				@include flexs(row, flex-start, center);

				.normal {
					font-size: 42upx;
					color: #2B2B32;
					font-weight: bold;
				}

				.line-through {
					font-size: 25upx;
					color: #808080;
					text-decoration: line-through;
					margin: 0 14upx;
				}

				.skew {
					padding: 0 10upx;
					margin-left: 12upx;
					background: #2C2C2C;
					font-size: 22upx;
					color: #E8C983;
					font-weight: normal;
					line-height: 36upx;
					transform: skew(160deg);
					border-radius: 4upx;
				}
			}

			&-title {
				width: 100%;
				font-size: 33upx;
				font-weight: bold;
				color: #2B2B32;
				@include wrap(2);
			}

			&-sales {
				width: 100%;
				@include flexs(row, space-between, center);

				text {
					font-size: 25upx;
					color: #808080;
				}
			}
		}

		&-specs {
			width: 100%;
			padding: 28upx 28upx 0;
			background-color: $t-f;
			margin: 20upx auto;
			@include flexs(column, space-between, flex-start);

			&-item {
				width: 100%;
				padding: 32upx 0;
				border-bottom: 2upx solid $t-f8;
				@include flexs(row, space-between, flex-start);

				&:last-child {
					border-bottom: 0;
				}

				&.big {
					padding-bottom: 52upx;
				}

				text {
					font-size: 25upx;
					color: #808080;
				}

				.specs-item-box {
					flex: 1;
					margin: 0 37upx;
					@include flexs(column, center, flex-start);

					.yh {
						font-size: 27upx;
						color: #808080;

						text {
							color: #F8002C;
						}
					}

					.yh-box {
						width: 100%;
						margin-top: 20upx;
						@include flexs(row, flex-start, center);
						flex-wrap: wrap;

						&-item {
							overflow: hidden;
							position: relative;
							display: flex;
							margin-right: 15upx;

							text {
								border: 1upx solid #F8002C;
								padding: 0 16upx;
								line-height: 44upx;
								font-size: 23upx;
								color: #F8002C;
								box-sizing: border-box;
							}

							&:before,
							&:after {
								position: absolute;
								content: '';
								width: 20upx;
								height: 20upx;
								background-color: $t-f;
								border: 2upx solid #F8002C;
								border-radius: 50%;
								top: 50%;
								margin-top: -14upx;
							}

							&:before {
								left: -10upx
							}

							&:after {
								right: -10upx;
							}
						}
					}

					.title {
						font-size: 25upx;
						color: #000000;
						@include wrap;
					}

					.label {
						font-size: 21upx;
						color: #808080;
					}
				}
			}
		}

		&-entry {
			width: 100%;
			height: 100upx;
			background-color: $t-f;
			margin: 20upx auto;
			padding: 0 28upx;
			@include flexs(row, space-between, center);
			font-size: 25upx;
			color: #000000;

			text:last-child {
				font-size: 23upx;
				color: #808080;
			}
		}

		&-sales {
			width: 100%;
			height: 125upx;
			background-color: $t-f;
			margin: 20upx auto;
			padding: 0 28upx;
			@include flexs(row, space-between, center);

			image {
				width: 100upx;
				height: 100upx;
			}

			text {
				flex: 1;
				margin: 0 25upx;
				@include wrap;
				font-size: 29upx;
				color: #000000;
			}

			&-button {
				color: #000000;
				font-size: 23upx;
				line-height: 50upx;
				border: 1upx solid #000000;
				background: transparent;

				&:after {
					display: none;
				}
			}
		}

		&-init {
			width: 100%;
			background-color: $t-f;
			margin: 20upx auto;
			padding: 0 28upx;
			@include flexs(column, space-between, flex-start);

			&-title {
				font-size: 30upx;
				color: #333333;
				line-height: 110upx;
			}

			&-main {
				width: 100%;
				@include flexs(column, space-between, flex-start);
				overflow: hidden;

				.init-main-item {
					width: 100%;
					height: 70upx;
					line-height: 66upx;
					@include flexs(row, space-between, center);

					view {
						font-size: 23upx;
						color: #888888;
						width: 156upx;
						padding: 0 20upx;
						border-top: 2upx solid #EAEAEA;
						border-left: 2upx solid #EAEAEA;

						&:last-child {
							color: #333333;
							flex: 1;
							border-right: 2upx solid #EAEAEA;
						}
					}

					&:last-child {
						view {
							border-bottom: 2upx solid #EAEAEA;
						}
					}
				}
			}

			.init-main-control {
				width: 100%;
				padding: 30upx 0;
				@include flexs(row, center, center);
				font-size: 24upx;
				color: #333333;

				text {
					font-size: 24upx;
				}
			}
		}

		.richtext {
			width: 100%;
		}

		&-control {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 120upx;
			background-color: $t-f;
			@include flexs(row, space-between, center);

			&-flex {
				flex: 1;
				@include flexs(row, space-around, center);

				&-item {
					position: relative;
					@include flexs(column, space-between, center);
					.bagenum{
						position: absolute;
						right: -20upx;
						top: -20upx;
					}

					image {
						width: 60upx;
						height: 60upx;
					}

					text {
						font-size: 21upx;
						color: #1A1A1A;
					}
				}
			}

			&-button {
				border-radius: 4upx;
				color: $t-f;
				font-size: 28upx;
				width: 227upx;
				line-height: 83upx;
				margin: 0 20upx 0 0;

				&:after {
					display: none;
				}

				&.default {
					background-color: #1A1A1A;
				}

				&.success {
					background-color: #F2012E;
				}

				&.warning {
					background-color: #E8C983;
				}
			}
		}

		.yhj {
			width: 100%;
			padding-bottom: 188upx;
			@include flexs(column, space-between, center);

			&-title {
				font-size: 36upx;
				color: #232323;
				margin: 36upx 0;
			}

			&-content {
				width: 100%;
				padding: 30upx;
				@include flexs(column, space-between, flex-start);

				.title {
					font-size: 29upx;
					color: #232323;
					line-height: 29upx;
				}

				.list {
					margin-top: 29upx;
					width: 100%;
					@include flexs(column, flex-start, center);

					&-item {
						width: 100%;
						height: 178upx;
						margin-bottom: 19upx;
						background-color: #FAFAFA;
						border: 1upx solid #E7E7E7;
						border-radius: 8upx;
						@include flexs(row, space-between, center);

						&-face {
							width: 188upx;
							height: 100%;
							@include flexs(column, center, center);

							.facevalue {
								font-size: 58upx;
								color: #232323;

								text {
									font-size: 29upx;
								}
							}

							.faceway {
								font-size: 23upx;
								color: #8C8C8C;
							}
						}

						.line {
							width: 2upx;
							height: 100%;
							border-right: 1upx dashed #E7E7E7;
							position: relative;

							&:before,
							&:after {
								content: '';
								position: absolute;
								width: 20upx;
								height: 20upx;
								left: -10upx;
								border-radius: 50%;
								background-color: $t-f;
								z-index: 999;
							}

							&:before {
								top: -16upx;
							}

							&:after {
								bottom: -16upx;
							}
						}

						&-right {
							flex: 1;
							height: 100%;
							padding: 0 24upx;
							@include flexs(row, space-between, center);

							.item-flex {
								flex: 1;
								@include flexs(column, center, flex-start);

								.flex-title {
									font-size: 27upx;
									font-weight: bold;
									color: #181818;
								}

								text {
									font-size: 23upx;
									color: #6F6F6F;
								}
							}

							button {
								color: $t-f;
								font-size: 25upx;
								border-radius: 4upx;
								background: #F2012E;

								&:after {
									display: none;
								}
							}
						}
					}
				}
			}
		}

		.address {
			width: 100%;
			padding-bottom: 188upx;
			@include flexs(column, space-between, center);

			&-title {
				font-size: 36upx;
				color: #232323;
				padding: 36upx 0;
				width: 100%;
				border-bottom: 2upx solid #F5F5F5;
				text-align: center;
			}

			&-list {
				width: 690upx;
				padding: 0 30upx;
				@include flexs(column, space-between, center);

				.list-item {
					width: 100%;
					height: 95upx;
					border-bottom: 2upx solid #f5f5f5;
					@include flexs(row, space-between, center);

					text {
						font-size: 33upx;
						color: #1D1D1D;
					}

					.map {
						flex: 1;
						margin: 0 12upx;
						@include wrap;
						max-width: 560upx;
					}
				}
			}
		}
	}
</style>