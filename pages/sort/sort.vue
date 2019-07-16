<template>
	<view class="container category">
		<hybrid-title 
			class="category-title"
			:hasTitle="true" 
			:hasStatus="true" 
			:titleHeight="titleHeight"
            :leftIcon="['icon-back']"
            @icon-back="navTo()"  
			>
            <view slot="title" class="category-title-search">
				<view class="iconfont icon-search"></view>
				<text>请输入商品名称</text>
			</view>
		</hybrid-title>
		
		<view class="category-main" :style="{'margin-top':contentMarin}">
			<view class="category-main-nav">
				<view :class="['category-main-nav-item',index==tab?'active':'']" v-for="(item,index) in categoryList" :key="index" @tap="navitem(index)">{{item.title}}</view>
			</view>

			<view class="category-main-list">
				<view class="list-item" @tap="navTo('/pages/sort/sort_detail')">
					<image src="//gtms01.alicdn.com/tps/i1/TB1RIfkJpXXXXadXFXXOyPdGpXX-140-140.jpg_140x140.jpg_.webp"></image>
					<text>牛奶乳品</text>
				</view>
				<view class="list-item" @tap="navTo('/pages/sort/sort_detail')">
					<image src="//gtms01.alicdn.com/tps/i1/TB1RIfkJpXXXXadXFXXOyPdGpXX-140-140.jpg_140x140.jpg_.webp"></image>
					<text>牛奶乳品</text>
				</view>
				<view class="list-item" @tap="navTo('/pages/sort/sort_detail')">
					<image src="//gtms01.alicdn.com/tps/i1/TB1RIfkJpXXXXadXFXXOyPdGpXX-140-140.jpg_140x140.jpg_.webp"></image>
					<text>牛奶乳品</text>
				</view>
				<view class="list-item" @tap="navTo('/pages/sort/sort_detail')">
					<image src="//gtms01.alicdn.com/tps/i1/TB1RIfkJpXXXXadXFXXOyPdGpXX-140-140.jpg_140x140.jpg_.webp"></image>
					<text>牛奶乳品</text>
				</view>
				<view class="list-item" @tap="navTo('/pages/sort/sort_detail')">
					<image src="//gtms01.alicdn.com/tps/i1/TB1RIfkJpXXXXadXFXXOyPdGpXX-140-140.jpg_140x140.jpg_.webp"></image>
					<text>牛奶乳品</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
		components:{
		},
		data() {
			return {
				tab: 0,
				categoryList:[{
					title: '精选食材'
				},{
					title: '手机数码'
				},{
					title: '美妆护肤'
				},{
					title: '内衣配饰'
				},{
					title: '户外运动'
				},{
					title: '鲜花宠物'
				},{
					title: '汽车生活'
				},{
					title: '滋补保健'
				},{
					title: '母婴童装'
				}]
            }
		},
		computed:{
			...mapState(['systemInfo']),
			titleHeight(){  // 搜索栏的高度
				return uni.upx2px(90)+'px'
			},
			contentMarin(){ 
				return uni.upx2px(90)+this.systemInfo.statusBarHeight+'px'
			}
		},
		onLoad() {
		},
		methods: {
			navitem(index){
				this.tab = index
			},
            navTo(nav) {
				if (nav) {
					uni.navigateTo({
						url: nav
					});
					return;
				}
				uni.navigateBack();
			}
        }
	}
</script>

<style lang="scss" scoped>
.category{
	background: #f8f8f8;
	/** 导航栏 **/
	&-title{
		&-search{
			flex: 1;
			background: #F5F5F5;
			color: #888888;
			height: 64upx;
			border-radius: 32upx;
            padding: 0 23upx;
			margin: 0 28upx;
			@include flexs(row,flex-start,center);
			/* #ifdef MP-WEIXIN */
			margin-right: 200upx;
			/* #endif */
			&>view{
				font-size: 32upx;
				margin-right: 13upx; 
			}
			text{
				font-size: 23upx;
				color: #c2c2c2;
			}
		}
	}
	/** 内容区域 **/
	&-main{
		width: 100%;
		height: 100%;
		@include flexs(row,space-between,center);
		&-nav{
			width: 166upx;
			height: 100%;
			&-item{
				width: 166upx;
				height: 100upx;
				font-size: 29upx;
				color: #888888;
				text-align: center;
				line-height: 100upx;
				&.active{
					background-color: #ffffff;
					color: #010101;
					font-weight: bold;
				}
			}
		}
		&-list{
			flex: 1;
			height: 100%;
			@include flexs(row,flex-start,flex-start);
			flex-wrap: wrap;
			align-content: flex-start;
			background: #ffffff;
			.list-item{
				width: 33.33%;
				height: 212upx;
				@include flexs(column,center,center);
				margin: 20upx 0 0;
				image{
					width: 80%;
				}
				text{
					font-size: 21upx;
					color: #888888;
				}
			}
		}
	}
}
</style>