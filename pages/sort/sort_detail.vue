<template>
	<view class="container category">
		<view class="category-filter">
			<view class="category-filter-item">热门</view>
			<view class="line"></view>
			<view class="category-filter-item" @tap="priceFilter">
				<text class="item-view" :class="ascending?'add':'reduce'">价格</text>
			</view>
		</view>
		<general-list :List="list" class="category-list"></general-list>
	</view>
</template>

<script>
import GeneralList from '@/components/GeneralList.vue'
	export default {
		components:{
			GeneralList
		},
		data() {
			return {
				ascending: true, //是否为升序
				list:[]
            }
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '美妆护肤'
			});
			this.list = [{id:'1',title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
					{id:'2',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'},{id:'1',title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
					{id:'2',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'},{id:'1',title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
					{id:'2',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'}]
		},
		methods: {
			priceFilter(){
				this.ascending = !this.ascending
			}
        }
	}
</script>

<style lang="scss" scoped>
.category{
	background: #f8f8f8;
	height: auto;
	@include flexs;
	&-filter{
		position: fixed;
		/*  #ifndef H5 */
		top: 0;
		/* #endif  */
		width: 100%;
		height: 74upx;
		@include flexs(row,space-between,center);
		background-color: $t-f;
		z-index: 999;
		.line{
			width: 1px;
			height: 40%;
			background-color: #C8C8C8;
		}
		&-item{
			flex: 1;
			text-align: center;
			color: #808080;
			font-size: 29upx;
			&.active{
				color: #000000;
				font-weight: bold;
			}
			.item-view{
				position: relative;
				&:before,&:after{
					content: '';
					position: absolute;
					right: -30upx;
					width: 0;
					height: 0;
					border: 10upx solid #959595;
				}
				&:before{
					top: -4upx;
					border-color: transparent transparent #959595;
				}
				&:after{
					bottom: -4upx;
					border-color:  #959595 transparent  transparent;
				}
				&.add{
					&:before{
						border-color: transparent transparent #000000;
					}
				}
				&.reduce{
					&:after{
						border-color: #000000 transparent transparent;
					}
				}
			}
		}
	}
	&-list{
		width: 100%;
		height: auto;
		margin-top: 96upx;
		@include flexs(row,center,center);
	}
}
</style>