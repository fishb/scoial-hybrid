<template>
	<view class="container mine">
		<hybrid-title  :hasStatus="true"  class="mine-title">
		</hybrid-title>	
		<!--内容区域-->
		<view class="mine-container" :style="[{'background':'url('+init.cdnurl+'/static/v2/img/user_bg.png) no-repeat top center'},{'background-size':'100% 445rpx'}]">
			<!-- user -->
			<view class="mine-user"> <!-- 用户头像 -->
				<view class="mine-user-avatar">
					<image :src="userinfo?userinfo.headimgurl:init.cdnurl+'/static/v2/img/timg2.png'"></image>
				</view>
				<view class="mine-user-name" @tap="$navTo('/pages/set/set_account_information',true)">
					<text>{{userinfo?userinfo.nickname:'登陆/注册'}}</text>	
				</view>
				<view class="mine-user-wallet">
					<view class="wallet-item" @tap="$navTo('/pages/record/record_redgift',true)">
						<text>{{userinfo?userinfo.wxred:0}}</text>
						<text class="wallet-item-label">红包</text>
					</view>
					<view class="wallet-item" @tap="$navTo('/pages/record/record_point',true)">
						<text>{{userinfo?userinfo.point:0}}</text>
						<text class="wallet-item-label">积分</text>
					</view>
					<view class="wallet-item" @tap="$navTo('/pages/record/record_shopgold',true)">
						<text>{{userinfo?userinfo.gwj:0}}</text>
						<text class="wallet-item-label">购物金</text>
					</view>
					<view class="wallet-item" @tap="$navTo('/pages/record/record_dividend',true)">
						<text>{{userinfo?userinfo.divid:0}}</text>
						<text class="wallet-item-label">分红</text>
					</view>
				</view>
			</view>
			<!--order--> 
			<view class="mine-order">
				<view class="mine-order-list">
					<view class="mine-order-list-item" @tap="$navTo('/pages/order/order_index?num=0',true)">
						<image :src="init.cdnurl+'/static/v2/img/user_icon/user_order_wait.png'" mode="aspectFit" style="width: 43rpx;height: 43rpx;"></image>
						<text>待付款</text>
					</view>
					<view class="mine-order-list-item" @tap="$navTo('/pages/order/order_index?num=1',true)">
						<image :src="init.cdnurl+'/static/v2/img/user_icon/user_order_waitf.png'" mode="aspectFit" style="width: 44rpx;height: 40rpx;"></image>
						<text>待发货</text>
					</view>
					<view class="mine-order-list-item" @tap="$navTo('/pages/order/order_index?num=2',true)">
						<image :src="init.cdnurl+'/static/v2/img/user_icon/user_order_waits.png'" mode="aspectFit" style="width: 55rpx;height: 44rpx;"></image>
						<text>待收货</text>
					</view>
					<view class="mine-order-list-item" @tap="$navTo('/pages/order/order_index?num=3',true)">
						<image :src="init.cdnurl+'/static/v2/img/user_icon/user_order_waitp.png'" mode="aspectFit" style="width: 45rpx;height: 40rpx;"></image>
						<text>待评价</text>
					</view>
					<view class="mine-order-list-item" @tap="$navTo('/pages/order/order_index?num=4',true)">
						<image :src="init.cdnurl+'/static/v2/img/user_icon/user_order_waitt.png'" mode="aspectFit" style="width: 44rpx;height: 44rpx;"></image>
						<text>退货退款</text>
					</view>
				</view>
				<view class="mine-order-more" @tap="$navTo('/pages/order/order_index',true)">
					<text>查看所有订单</text>
					<text class="iconfont icon-qianjin"></text>
				</view>
			</view>
			<!-- entrance - group -->
			<view class="mine-entrance">
				<view class="mine-entrance-item" @tap="userinfo.pay_password==0?togglePopup('wallet'):[userinfo.pay_password==1?togglePopup('inputPassword'):$navTo('/pages/wallet/wallet_index',true)]">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_wallet.png'" mode="aspectFit" style="width:57rpx;height:58rpx;"></image>
					<text>我的钱包</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/data/data_center',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_data.png'" mode="aspectFit" style="width:53rpx;height:54rpx;"></image>
					<text>数据中心</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/data/data_rank',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_rank.png'" mode="aspectFit" style="width:51rpx;height:53rpx;"></image>
					<text>排行榜</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/mine/mine_address_index',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_address.png'" mode="aspectFit" style="width:51rpx;height:51rpx;"></image>
					<text>收货地址</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/set/set_account_security',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_person.png'" mode="aspectFit" style="width:57rpx;height:40rpx;"></image>
					<text>账号安全</text>
				</view>
				<view class="mine-entrance-item">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_kefu.png'" mode="aspectFit" style="width:52rpx;height:58rpx;"></image>
					<text>联系客服</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/mine/mine_friend',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_friend.png'" mode="aspectFit" style="width:55rpx;height:44rpx;"></image>
					<text>好友数</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/scancode/scancode',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_share.png'" mode="aspectFit" style="width:48rpx;height:51rpx;"></image>
					<text>我要推广</text>
				</view>
				<view class="mine-entrance-item"  @tap="$navTo('/pages/set/set',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_setting.png'" mode="aspectFit" style="width:48rpx;height:56rpx;"></image>
					<text>设置</text>
				</view>
				<view class="mine-entrance-item">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_order.png'" mode="aspectFit" style="width:47rpx;height:56rpx;"></image>
					<text>历史订单</text>
				</view>
				<view class="mine-entrance-item">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_settied.png'" mode="aspectFit" style="width:47rpx;height:51rpx;"></image>
					<text>商家入驻</text>
				</view>
				<view class="mine-entrance-item" @tap="$navTo('/pages/mine/mine_collect',true)">
					<image :src="init.cdnurl+'/static/v2/img/user_icon/entrance_love.png'" mode="aspectFit" style="width:51rpx;height:44rpx;"></image>
					<text>收藏</text>
				</view>
			</view>
		</view>	
		<!-- 为你推荐 -->
		<general-list :GeneralTitle="'为你推荐'" :List="list">
		</general-list>

		<hybrid-popup boxWidth="580rpx" :boxHeight="'460rpx'" :show="type==='wallet'" @hidePopup="togglePopup('')">
			<view class="slotTip">
				<text class="slotTip-title">安全提示</text>
				<view class="slotTip-content">
					<text>为了保证您的资金安全,我们对您的钱包进行了区块链技术加密处理!您是第一次登陆请设置密码并牢记</text>
				</view>
				<view class="slotTip-button" @tap="setPassword">确定</view>
			</view>
		</hybrid-popup>

		<hybrid-popup boxWidth="580rpx" :boxHeight="'508rpx'"  :show="type === 'inputPassword'"
		 @hidePopup="togglePopup('')">
			<view class="slotTip">
				<text class="slotTip-title">请输入密码</text>
				<view class="slotTip-content slot-password">
					<text class="tips">为了保证你的资金安全,我们队您的钱包进行了区块链技术加密</text>
					<input type="password" class="inputs"  maxlength="24"  v-model="password"/>
					<view class="forget" @tap="$navTo('/pages/wallet/wallet_forget',true)">忘记密码</view>
				</view>
				<view class="slotTip-button" @tap="_MyCheckPayPwd">确定</view>
			</view>
		</hybrid-popup>
	</view>
</template>

<script>
	import { mapState,mapMutations } from 'vuex'
	import GeneralList from '@/components/GeneralList.vue'
	export default {
		components:{
			GeneralList
		},
		data() {
			return {
				type: '', //弹窗类型
				password: '', //钱包密码
				list:[
					{title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
					{title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'}
				]
			}
		},
		computed:{
			...mapState(['init','systemInfo','userInfo']),
			Marin(){ //滑块距离高度
				return this.systemInfo.statusBarHeight+'px'
			},
			userinfo(){
				return this.userInfo
			}				
		},
		onLoad() {
		},
		onShow(){
			this.type = ''
			this._MyIndex()
		},
		methods: {
			...mapMutations(['SET_USERINFO']),
			togglePopup(type){
				this.type = type
			},
			async _MyIndex(){
				let res = await this.$apis.MyIndex()
				if(res.code==0){
					this.SET_USERINFO(res.result.fans)
					return
				}
				this.$toast({title:res.msg,icon:'none'})
			},
			setPassword(){
				this.type = ''
				this.$navTo('/pages/wallet/wallet_password',true)
			},
			async _MyCheckPayPwd() { //验证钱包密码
				if (!this.password || this.password.length < 8) {
					this.$toast({title:'钱包密码不少于8位',icon:'none'})
					this.password = ''
					return
				}
				let res = await this.$apis.MyCheckPayPwd({
					pay_password: this.password
				})
				if (res.code == 0) {
					this.type = ''
					this.password = ''
					this.$navTo('/pages/wallet/wallet_index',true)
					return
				}
				this.password = ''
				this.$toast({title:res.msg,icon: 'none'})
			}
		}
	}
</script>

<style lang="scss" scoped>
.mine{
	min-height: 100%;
	height: auto;
	padding-bottom: 50px;
	background-color: #fafafa;
	&-container{
		width: 100%;
		/** user **/
		.mine-user{
			width: 694upx;
			height: 400upx;
			margin: 227upx auto 0;
			background: $t-f;
			border-radius: 20upx;
			@include flexs(column,center,center);
			position: relative;
			&-avatar{
				position: absolute;
				top: -96upx;
				left: 50%;
				margin-left: -88upx;
				width: 176upx;
				height: 176upx;
				border: 1px solid #d6d6d6;
				border-radius: 50%;
				image{
					width: 172upx;
					height: 172upx;
					border: 10upx solid #ffffff;
					border-radius: 50%;
				}
			}
			&-name{
				width: 100%;
				height: 220upx;
				@include flexs(row,flex-start,flex-start);
				text{
					margin: 135upx auto auto;
					font-size: 38upx;
					font-weight: bold;
					color: #050505;
				}
			}
			&-wallet{
				width: 100%;
				height: 180upx;
				@include flexs(row,space-between,center);
				.wallet-item{
					flex: 1;
					height: 180upx;
					@include flexs(column,center,center);
					position: relative;
					&:after{
						content: '';
						position: absolute;
						width: 1px;
						height: 75upx;
						background: #D1D1D1;
						right: 0;
					}
					&:last-child{
						&:after{
							display: none;
						}
					}
					text{
						font-size: 46upx;
						color: #050505;
						font-family: DINPro-Medium;
						&.wallet-item-label{
							font-size: 23upx;
							font-family:MicrosoftYaHei;
						}
					}
				}
			}
		}
		/** order **/
		.mine-order{
			margin: 32upx auto 0;
			width: 694upx;
			height: 280upx;
			background: $t-f;
			border-radius: 20upx;
			@include flexs(column,center,center);
			&-list{
				width: 100%;
				height: 190upx;
				@include flexs(row,space-between,center);
				&-item{
					flex: 1;
					height: 190upx;
					padding: 30upx 0;
					@include flexs(column,space-around,center);
					image{
						height: 45upx;
					}
					text{
						font-size: 28upx;
						color: #050505;
					}
				}
			}
			&-more{
				width: 100%;
				height: 90upx;
				@include  flexs(row,center,center);
				text{
					font-size: 29upx;
					color: #050505;
				}
			}
		}
		/**entrance**/
		.mine-entrance{
			margin: 32upx auto 0;
			width: 694upx;
			height: 516upx;
			background: $t-f;
			border-radius: 20upx;
			@include flexs(row,space-between,center);
			flex-wrap: wrap;
			&-item{
				width: 25%;
				height: 172upx;
				@include flexs(column,space-around,center);
				image{
					margin: auto;
				}
				text{
					font-size: 24upx;
					color: #0A0909;
					text-align: center;
					margin: 0 auto auto;
				}
			}
		}
	}
	/**  slot弹出**/
	.slotTip {
		width: 100%;
		height: 100%;
		@include flexs(column,space-between,center);
		&-title {
			width: 100%;
			height: 115upx;
			line-height: 115upx;
			border-bottom: 1upx solid #EFEFEF;
			font-size: 50upx;
			font-family: SourceHanSansCN-Regular;
			color: #000000;
			text-align: center;
		}

		&-content {
			margin: auto 48upx;
			color: #626262;
			font-size: 28upx;
			line-height: 60upx;
			font-family: FZHTJW--GB1-0;

			.tips {
				font-size: 25upx;
				color: #7F7F7F;
				line-height: 66upx;
				font-family: SourceHanSansCN-Regular;
			}

			.inputs {
				height: 73upx;
				line-height: 73upx;
				border: 1upx solid #DFDFDF;
				border-radius: 37upx;
				background-color: #F7F8FA;
				padding: 0 31upx;
			}

			.forget {
				text-align: right;
				font-size: 25upx;
				color: #383838;
				font-family: SourceHanSansCN-Regular;
				line-height: 60upx;
			}
		}

		&-button {
			width: 480upx;
			background: #000000;
			height: 68upx;
			line-height: 68upx;
			text-align: center;
			font-family: SourceHanSansCN-Regular;
			font-size: 35upx;
			color: $t-f;
			border-radius: 4upx;
			margin-bottom: 48upx;
		}
	}
}
</style>