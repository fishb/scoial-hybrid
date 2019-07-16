<template>
  <view class="container wallet">
    <view class="wallet-main">
		<view class="wallet-main-item" @tap="$navTo('/pages/wallet/wallet_withdraw?type=1')" :style="'background: url('+init.cdnurl+'/static/v2/img/wallet_bg.png) no-repeat center;background-size: cover;'">
			<text class="title">{{init.point}}（元）</text>
			<view class="wallet-main-item-em">
				<text>{{userInfo.point}}</text>
				<view class="em-button">
					提现
					<text class="iconfont icon-qianjin"></text>
				</view>
			</view>
		</view>
		<view class="wallet-main-item" @tap="$navTo('/pages/wallet/wallet_withdraw?type=2')" :style="'background: url('+init.cdnurl+'/static/v2/img/wallet_bg.png) no-repeat center;background-size: cover;'">
			<text class="title">{{init.divid}}（元）</text>
			<view class="wallet-main-item-em">
				<text>{{userInfo.divid}}</text>
				<view class="em-button">
					提现
					<text class="iconfont icon-qianjin"></text>
				</view>
			</view>
		</view>
    </view>
  </view>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
	  ...mapState(['init','userInfo']),
  },
  methods: {
  },
  onLoad() {}
};
</script>

<style lang="scss" scoped>
.wallet {
	min-height: 100%;
	height: auto;
	background-color: #ffffff;
	&-main {
	  width: 100%;
	  padding: 20upx 28upx 0;
	 &-item{
		 width: 100%;
		 height: 340upx;
		 border-radius: 10upx;
		 padding: 70upx 32upx;
		 @include flexs(column,space-around,flex-start);
		 margin-bottom: 32upx;
		 .title{
			 font-size: 47upx;
			 color: $t-f;
		 }
		 &-em{
			 width: 100%;
			 font-size: 79upx;
			 color: $t-f;
			 @include flexs(row,space-between,center);
			 .em-button{
				 padding: 0 30upx;
				 background-color: $t-f;
				 font-size: 39upx;
				 font-weight: bold;
				 color: #1F1D1C;
				 line-height: 75upx;
				 border-radius: 4upx;
			 }
		 }
	 }
	}
  }
</style>