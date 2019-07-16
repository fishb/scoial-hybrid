<template>
		<view class="cart-content">
			<!-- 购物车为空 -->
			<view class="cart-content-void" v-if="!cartList.length">
				<image src="/static/cartvoid.png"></image>
				<text class="cart-content-void-title">购物车居然是空的</text>
				<text class="cart-content-void-text">再忙,也要买点什么东西犒劳自己</text>
			</view>

			<!-- 商品列表 -->
			<view class="cart-content-list" v-if="cartList.length">
				<view class="cart-content-list-item" v-for="(item,index) in cartList" :key="index">
					<!-- 商铺 选择 -->
					<view class="item-seller">
						<view class="cart-checkbox" :style="[{'transform':'scale(0.9)'},{'background-color':item.ischeck?'#000000':'#ffffff'}]" @tap="sellerChange(item)">
							<text  :class="['cart-checkbox-input iconfont',item.ischeck?'icon-gou':'']">
							</text>
						</view>
						<view class="item-seller-more">
							<image src="/static/seller.png" mode="widthFix"></image>
							<view class="seller-text">
								<text>{{item.sellername}}</text>
								<text style="transform:rotate(7deg);">
									<text class="iconfont icon-qianjin"></text>
								</text>
							</view>
						</view>
					</view>
					<!-- 商铺的商品 -->
					<view class="item-product" v-for="(product,productKey) in item.productlist" :key="productKey">
						<view class="cart-checkbox" :style="[{'transform':'scale(0.9)'},{'background-color':product.ischeck?'#000000':'#ffffff'}]" @tap="productChange(index,productKey)">
							<text :class="['cart-checkbox-input iconfont',product.ischeck?'icon-gou':'']">
							</text>
						</view>
						<view class="item-product-control">
							<image :src="product.img"></image>
							<view class="control-box">
								<text class="control-box-title">{{product.name}}</text>
								<text class="control-box-specs">
                                    <block v-for="(label,l) in product.specs" :key="l">{{label}}{{l==(product.specs.length-1)?'':'-'}}</block>
                                </text>
								<view class="control-box-num">
									<view class="control-box-num-price">
										<text>¥{{product.newprice}}</text>
										<text>¥{{product.oldprice}}</text>
									</view>
									<view class="control-box-num-m">
										<text @tap="add(index,productKey,'-1')" class="iconfont icon-reduce"></text>
										<input class="inputs" v-model="product.num"/>
										<text @tap="add(index,productKey,'1')" class="iconfont icon-jia"></text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 购物车操作面板 -->
			<view class="cart-content-control" v-if="cartList.length">
                <view class="cart-content-control-select">
					<view class="cart-checkbox" :style="[{'transform':'scale(0.9)'},{'background-color':check?'#000000':'#ffffff'}]" @tap="checkChange">
							<text :class="['cart-checkbox-input iconfont',check?'icon-gou':'']">
							</text>
					</view>
                    <text>全选</text>
                </view>
                <block v-if="!editStatus">
                    <view class="cart-content-control-price">
                        <text>合计:</text><text class="next">¥{{total}}</text>
                    </view>
                    <button class="cart-content-control-button">
                        去结算(3)
                    </button>
                </block>
                <block v-if="editStatus">
                    <button class="cart-content-control-button">
                        删除商品
                    </button>
                </block>
			</view>
		</view>
</template>

<script>
export default {
    computed:{
        total(){
            return 1300
		},
		cartList(){
			return this.list
		}
    },
    props:{
        // 商品列表信息
        list: {
            type:  [Array,Object],
            default: []
        }, 
        // 点击编辑传入一个状态
        editStatus: {
            type: [String,Boolean],
            default: false
		},
		// 是否全选
		check: {
			type: [String,Boolean],
            default: false
		}
    },
    methods:{
        checkChange(){
			this.$emit('check-change')
			this.$emit('list-change')
        },
		sellerChange(item){  //选中商铺 ，所有商品选中
			this.$emit('seller-change',item)
        },
		productChange(index,key){  //选中商品 , 判断商铺是否选中
			this.$emit('product-change',[index,key])
        },
        add(index,key,num){ //商品数量加减，如果为0就弹出询问是否从购物车删除
            if(this.cartList[index].productlist[key].num==1&&num=='-1'){
                uni.showModal({
                    title: '是否将此商品从购物车移除'
                })
                return
            }
            this.cartList[index].productlist[key].num = Number(this.cartList[index].productlist[key].num)+Number(num)
        }
    }
}
</script>

<style lang="scss">
 .cart-checkbox{
	margin-right: 5px;
	width: 45upx;
	height: 45upx;
	border: 1px solid #d1d1d1;
	background-color: #fff;
	border-radius: 50%;
	color: #ffffff;
	@include flexs(row,center,center);
	&-input{
		font-size: 20upx;
		transform: scale(0.8);
	}
 }
/** 内容区域 **/
	.cart-content{
		width: 100%;
		/** 购物车为空 **/
		&-void{
			width: 100%;
			margin: 78upx auto;
			@include flexs();
			image{
				width: 208upx;
				height: 208upx;
			}
			&-title{
				margin-top: 21upx;
				font-size: 33upx;
				color: #3d3d3d;
				line-height: 33upx;
			}
			&-text{
				margin-top: 24upx;
				font-size: 25upx;
				color: #707070;
				line-height: 33upx;
			}
		}

		/** 列表 **/

		&-list{
			width: 100%;
			padding: 0 30upx;
			@include flexs(column,center,center);
			width: 100%;
			&-item{
				width: 100%;
				margin: 20upx 0;
				background: #ffffff;
				@include flexs(column,center,center);
				.item-seller{
					width: 100%;
					padding: 27upx 20upx 0;
					@include flexs(row,flex-start,flex-start);
					&>checkbox{
						width: 41upx;
						height: 41upx;
					}
					&-more{
						margin-left: 26upx;
						@include flexs(row,flex-start,center);
						flex: 1;
						image{
							width: 38upx;
							margin-right: 20upx;
						}
						text{
							font-size: 23upx;
							color: #000000;
						}
					}
				}
				.item-product{
					width: 100%;
					padding: 40upx 20upx;
					@include flexs(row,space-between,center);
					&-control{
						flex: 1;
						@include flexs(row,space-between,center);
						image{
							width: 187upx;
							height: 187upx;
							border-radius: 10upx;
						}
						.control-box{
							flex: 1;
							margin-left: 21upx;
							@include flexs(column,center,flex-start);
							align-content: center;
							&-title{
								color: #000000;
								font-size: 27upx;
								line-height: 29upx;
								@include wrap(2);
							}
							&-specs{
								margin: auto 0;
								color: #b1b1b1;
								font-size: 23upx;
							}
							&-num{
								width: 100%;
								@include flexs(row,space-between,center);
								&-price{
									@include flexs(column,flex-start,center);
									text{
										font-size: 33upx;
										color: #F8002C;
										&:last-child{
											font-size: 23upx;
											color: #939393;
											text-decoration: line-through;
										}
									}
								}
								&-m{
									width: 180upx;
									@include flexs(row,flex-start,center);
									border: 1upx solid #939393;
									border-radius: 4upx;
									text,input{
										width: 60upx;	
										height: 48upx;
										line-height: 48upx;
										text-align: center;
										font-size: 25upx;
										color: #4d4d4d;
									}
									.inputs{
										border-left: 1upx solid #939393;
										border-right: 1upx solid #939393;
									}
								}
							}
						}
					}
				}
			}
		}

		/** 购物车操作面板 **/
		&-control{
			position: fixed;
			bottom: 50px;
			/* #ifdef MP-WEIXIN | APP-PLUS */
			bottom: 0px;
			/* #endif */
			width: 100%;
			height: 110upx;
			padding: 0 40upx;
			background: #ffffff;
			z-index: 999;
			@include flexs(row,space-between,center);
			&-select{
				font-size: 29upx;
				color: #000000;
				@include flexs(row,center,center);
				margin-right: 26upx;
				text{
					font-size: 29upx;
					line-height: 29upx;
				}
			}
			&-price{
				font-size: 33upx;
				color: #000000;
				line-height: 29upx;
				.next{
					margin-left: 25upx;
					font-weight: bold;
				}
			}
			&-button{
				background: #F8002C;
				width: 195upx;
				height: 70upx;
				line-height: 70upx;
				border-radius: 8upx;
				text-align: center;
				font-size: 29upx;
				color: #ffffff;
				padding: 0;
				margin: 0 0 0 auto;
			}
		}
	}
</style>
