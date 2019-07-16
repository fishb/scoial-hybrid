<template>
	<view class="container cart">
		<!-- #ifndef MP-WEIXIN -->
		<hybrid-title 
			class="cart-title"
			:hasTitle="true" 
			:hasStatus="true" 
			:titleHeight="titleHeight"  
			contentTitle="购物车">
			<view slot="left" class="cart-title-dot">
				<text></text>
			</view>
			<view slot="right" class="cart-title-dot" @tap="TabeditStatus" v-if="cartList.length">
				<text>{{editText}}</text>
			</view>
		</hybrid-title>
		<!-- #endif -->
		<!-- #ifdef  MP-WEIXIN -->
		<view class="cart-edit" @tap="TabeditStatus" v-if="cartList.length">
			<text class="cart-edit-default">是否清空购物车</text>
			<text class="cart-edit-more">{{editText}}</text>
		</view>
		<!-- #endif -->
		<!-- 购物车 -->
		<cart-component 
			:list="cartList"  
			:editStatus="editStatus" 
			:check="allCheck" 
			:style="{'margin-top':contentMarin}" 
			@check-change="checkchange"
			@list-change="listchange"
			@seller-change="sellerChange"
			@product-change="productChange"
			>	
		</cart-component>
		<!-- 精选好货 -->
		<general-list 
			 class="gene"
			:GeneralTitle="'精选好货'" 
			:List="list">
		</general-list>
	</view>
</template>

<script>
    import { mapState } from 'vuex'
	import GeneralList from '@/components/GeneralList.vue'
	import CartComponent from '@/components/CartComponent.vue'
	export default {
		components:{
			GeneralList,
			CartComponent
		},
		data() {
			return {
				list:[
					{title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
					{title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'},{title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},{title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'}
				],
				total: 0, //总价格
				allCheck: false,
				editStatus: false, //点击编辑切换组件控制栏的状态
				cartList: [
					{
						ischeck: false,
						sellerid: 1,
						sellername: '众汇优品官方自营',
						productlist: [
							{
								ischeck: false,
								id: 10,
								name: '爱罗拉 INS冰丝针织薄款空调防晒上衣罩衫 夏',
								img: '/static/timg2.png',
								specs: ['均码','粉色'],
								oldprice: '118',
								newprice: '69',
								num: 1
							},{
								ischeck: false,
								id: 11,
								name: '测试商品',
								img: '/static/timg.jpg',
								specs: ['均码','粉色'],
								oldprice: '118',
								newprice: '69',
								num: 3
							}
						]
					},{
						ischeck: false,
						sellerid: 2,
						sellername: '测试商铺',
						productlist: [
							{
								ischeck: false,
								id: 14,
								name: '测试商品',
								img: '/static/timg.jpg',
								specs: ['均码','M码'],
								oldprice: '118',
								newprice: '69',
								num: 100
							}
						]
					}
				]
			}
		},
		computed:{
			...mapState(['systemInfo']),
			titleHeight(){  // 搜索栏的高度
				return uni.upx2px(88)+'px'
			},
			editText(){
				return this.editStatus?'完成':'编辑'
			},
			// #ifndef MP-WEIXIN
			contentMarin(){ //滑块距离高度
				return uni.upx2px(88)+this.systemInfo.statusBarHeight+'px'
			},	
			// #endif
		},
		onLoad() {
			this._CartList()
			console.log(this.list)
		},
		methods: {
			// 切换编辑状态
			TabeditStatus(){
				this.editStatus = !this.editStatus
			},
			// 选中全选或取消全选后allCheck变更
			checkchange(){
				this.allCheck = !this.allCheck
			},
			// 选中全选或取消全选后cartList变更
			listchange(){
				if(this.allCheck){
					this.cartList.map(item=>{
						item.ischeck = true
						item.productlist.map(a=>{
							a.ischeck = true
						})
					})
					return
				}
				this.cartList.map(item=>{
					item.ischeck = false
					item.productlist.map(a=>{
						a.ischeck = false
					})
				})
			},
			// 选择店铺，店铺下所有商品都要选中，如选择店铺后都为选中，改变全选
			sellerChange(item){
				item.ischeck = !item.ischeck
				item.productlist = item.productlist.map(arr=>{
					return { ...arr, ischeck: !arr.ischeck  } 
				})
				if(this.cartList.find(i=>i.ischeck==false)){
					this.allCheck = false
				}else{
					this.allCheck = true
				}
			},
			// 选择商品, 判断店铺是否选中，或全选
			productChange(value){
				let [index,key] = value
				this.cartList[index].productlist[key].ischeck =  !this.cartList[index].productlist[key].ischeck
				if(this.cartList[index].productlist.find(i=>i.ischeck==false)){
					this.cartList[index].ischeck = false
				}else{
					this.cartList[index].ischeck = true
				}
				if(this.cartList.find(i=>i.ischeck==false)){
					this.allCheck = false
				}else{
					this.allCheck = true
				}
			},
			_CartList(data){
				let result = this.$apis.CartList(data)
				console.log(result)
			}
		}
	}
</script>

<style lang="scss" scoped>
.cart{
	min-height: 100%;
	height: auto;
	/* #ifdef H5 */
	padding-bottom: 50px;
	/* #endif */
	background: #f8f8f8;
	/** 导航栏 **/
	&-title{
		&-dot{
			margin: 0 54upx;
			@include flexs(column,center,center);
			color: #ffffff;
			text{
				font-size: 29upx;
			}
		}
	}
			&-edit {
			width: 100%;
			height: 100upx;
			background: $t-f;
			margin: 0 auto 20upx;
			padding: 0 28upx;
			@include flexs(row, space-between, center);

			&-default {
				flex: 1;
				font-size: 29upx;
				color: $t-8;
				@include wrap(1);
			}

			&-more {
				margin-left: 28upx;
				font-size: 29upx;
				color: #FF0039;
			}
		}


	.gene{
		margin-bottom: 110upx; /** 为下面预留位置 **/
	}
}
</style>