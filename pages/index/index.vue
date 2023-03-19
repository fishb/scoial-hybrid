<template>
	<view class="container index">
		<!-- 搜索栏 -->
		<!-- #ifndef MP-WEIXIN -->
		<hybrid-title hasTitle="true" :hasStatus="hasStatus" :backgroundColor="colorOpacity" :titleHeight="titleHeight" class="index-scan">
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<hybrid-title :hasTitle="true" :hasStatus="hasStatus" :backgroundColor="colorOpacity" :titleHeight="titleHeight"  class="index-scan">
		<!-- #endif -->
			<view slot="left" class="index-scan-icon" @tap="$navTo('/pages/sort/sort')">
				<view class="iconfont icon-scan"></view>
				<text>扫一扫</text>
			</view>
			<view slot="title" class="index-scan-search">
				<view class="iconfont icon-search"></view>
				<text>爱芙美套装</text>
			</view>
			<view slot="right" class="index-scan-icon" @tap="$navTo('/pages/goods/goods_detail?id=700')">
				<view class="iconfont icon-xiaoxi"></view>
				<text>消息</text>
			</view>
		</hybrid-title>
		<!-- 幻灯片 -->
		<view class="index-carousel">
			<view class="index-carousel-background" :style="[{'background-color':titleColor},{'top':hasStatus?systemInfo.statusBarHeight+'px':'0'}]"></view>
			<swiper autoplay circular="true" interval="5000" class="index-carousel-swiper" :current="current" @change="swiperChange" :style="{'margin-top':swiperMarin}">
				<swiper-item class="index-carousel-swiper-item" v-for="(item,index) in swiperList" :key="index">
					<image :src="item.img"></image>
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="index-carousel-dots" style="background:url(/static/dots.png) no-repeat center;background-size: cover;">
				<text class="num">{{current+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperList.length}}</text>
			</view>
		</view>
		<!-- 版块入口 -->
		<view class="index-entry">
			<view class="index-entry-item" v-for="(item,i) in [1,2,3,4,5,6,7,8,9,10]" :key="i">
				<image src="http://www.ay1.cc/img?w=200&h=200&c=666666"></image>
				<text>美妆个户</text>
			</view>
		</view>
		
		<!-- 为你推荐 -->
		<general-list :GeneralTitle="'为你推荐'" :List="list" style="background: #f8f8f8;">
			<load-more :loading.sync="loading" slot="footer"></load-more>
		</general-list>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import GeneralList from '@/components/GeneralList.vue'
	import request from '@/common/request.js'
	export default {
		components:{
			GeneralList
		},
		data() {
			return {
				page: 1,
				loading: 0,
				total: 0,
				// #ifdef MP-WEIXIN
				hasStatus: false, //如果为false swiper距离顶部的高度为  120rpx+status反之为120
				// #endif
				// #ifndef MP-WEIXIN
				hasStatus: true,
				// #endif
				opcity: 0, //搜索栏透明度
				current: 0, // 滑块索引
				swiperList: [{ //滑块列表
					img: 'https://placekitten.com/500/300',
					color: '#cb573c'
				},{
					img: 'https://placekitten.com/300/300',
					color: '#cdd7da'
				},{
					img: 'https://placekitten.com/400/300',
					color: '#b74945'
				},{
					img: 'https://placekitten.com/600/300',
					color: '#b74945'
				}],
				list:[
					{   id:'1',
						goods_name:'宠物猫',
						goods_headimg:'https://placekitten.com/300/300',
						goods_label: [
							{name: '宠物级'},{name:'血统级'}
						],
						goods_original:'9999',
						goods_price: '6999'
					},
					{   id:'1',
						goods_name:'田园猫',
						goods_headimg:'https://placekitten.com/400/300',
						goods_label: [
							{name: '宠物级'},{name:'血统级'}
						],
						goods_original:'9999',
						goods_price: '6999'
					},
					{   id:'1',
						goods_name:'布偶猫',
						goods_headimg:'https://placekitten.com/300/300',
						goods_label: [
							{name: '宠物级'},{name:'血统级'}
						],
						goods_original:'9999',
						goods_price: '6999'
					}
				]
			}
		},
		computed:{
			...mapState(['systemInfo']),
			colorOpacity(){
				return `rgba(1,1,1,${this.opcity})`
			},
			titleColor(){  // 滑块背景颜色
				return this.swiperList[this.current].color
			},
			titleHeight(){  // 搜索栏的高度
				return uni.upx2px(120)+'px'
			},
			swiperMarin(){ //滑块距离高度
				return this.hasStatus? uni.upx2px(120)+this.systemInfo.statusBarHeight+'px' : this.titleHeight
			}			
		},
		async onLoad() {
			this._shopList()
			console.log(this.swiperMarin)
		},
		methods: {
			// 滑块颜色变更
			swiperChange(e){
				this.current = e.detail.current
			},
			async _shopList(){
				//this.list = [...this.list,{name:'123'},{name:'245'}]
				// this.loading = 1
				// let data = await this.$apis.shopList({page:this.page})
				// this.list = [...this.list,...data.result.list]
				// if (this.page == 1) {
				// 	this.total = data.result.total
				// }
				// this.loading = 0
				// if (this.list.length == this.total) {
				// 	this.loading = 2
				// }
				// this.page++
			}
		},
		onPageScroll(e) {
			if(e.scrollTop>150){
				this.opcity = 1
				return
			}
			this.opcity = e.scrollTop / 150
		},
		onReachBottom(){
			this._shopList()
		}
	}
</script>

<style lang="scss" scoped>
.index{
	min-height: 100%;
	height: auto;
	background-color: $t-f8;
	/* #ifdef H5 */
	padding-bottom: 50px;
	/* #endif */
	&-scan{
		&-icon{
			margin: 0 28upx;
			@include flexs(column,center,center);
			color: #ffffff;
			&>view{
				font-size: 36upx;
			}
			text{
				font-size: 15upx;
			}
		}
		&-search{
			flex: 1;
			background: #ffffff;
			color: #999999;
			height: 64upx;
			border-radius: 32upx;
			padding: 0 23upx;
			@include flexs(row,flex-start,center);
			&>view{
				font-size: 32upx;
				margin-right: 13upx; 
			}
			text{
				font-size: 23upx;
				color: #464646;
			}
		}
	}
	/** 幻灯片 **/
	&-carousel{
		width: 100%;
		position: relative;
		background-color: $t-f;
		&-background{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 400upx;
			transition: .4s;
			background: #686D81;
		}
		&-swiper {
			width: 100%;
			height: 348upx;
			margin-top: 120upx;
			&-item{
				width: 100%;
				height: 100%;
				padding: 0 28upx;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
					border-radius: 10upx;
				}
			}
		}
		&-dots{
			display: flex;
			position: absolute;
			left: 48upx;
			bottom: 25upx;
			width: 74upx;
			height: 36upx;
			.num{
				width: 36upx;
				height: 36upx;
				border-radius: 100upx;
   				font-size: 24upx;
				color: #ffffff;
				text-align: center;
				line-height: 36upx;
			}
			.sign{
				position: absolute;
				top: 0;
				left: 50%;
				line-height: 36upx;
				font-size: 12upx;
				color: #ffffff;
				transform: translateX(-50%);
			}
		}
	}
	/** 分类入口 **/
	&-entry{
		padding: 14upx 28upx 0;
		background-color: $t-f;
		@include flexs(row,space-between,center);
		flex-wrap: wrap;
		&-item{
			width: 20%;
			padding: 28upx 0 26upx;
			@include flexs();
			image{
				width: 94upx;
				height: 94upx;
				border-radius: 50%;
				margin-bottom: 14upx;
			}
			text{
				font-size: 22upx;
				color: #292929;
			}
		}
	}
	/** 通用版块 **/
	&-general{
		background-color: $t-f;
		padding: 25upx;
		@include flexs();
		&-ty{
			width: 700upx;
			margin-bottom: 12upx;
			image{
				display: block;
				width: 100%;
			}
		}
		&-common{
			width: 700upx;
			@include flexs(row,space-between,center);
			&-left{
				width: 345upx;
				height: 342upx;
				image{
					display: block;
					width: 100%;
				}
			}
			&-right{
				width: 349upx;
				height: 342upx;
				@include flexs();
				image{
					width: 349upx;
					height: 170upx;
				}
			}
		}
	}
}
</style>
