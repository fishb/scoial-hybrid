<template>
  <view class="container record">
    <view class="record-main">
      <view class="record-main-area">
        <view class="record-main-area-count">
          <text class="record-title">剩余积分</text>
          <text class="record-info">(推广收益1积分=1元)</text>
        </view>
        <view class="record-main-out-count">
          <text class="record-price">9.99</text>
        </view>
      </view>
	  <view class="record-main-tab">
		  <view class="record-main-tab-item active">
			  <text>账单</text>
			  <text>0.00</text>
		  </view>
		  <view class="record-main-tab-item">
			  <text>收入</text>
			  <text>0.00</text>
		  </view>
		  <view class="record-main-tab-item">
			  <text>支出</text>
			  <text>0.00</text>
		  </view>
		  <view class="record-main-tab-item">
			  <text>提现</text>
			  <text>0.00</text>
		  </view>
	  </view>
      <view class="record-main-list">
        <view class="list-item">
          <view class="list-item-left">
            <text>剩余积分</text>
            <text>2019-05-25 17:26</text>
          </view>
          <view class="list-item-text">
            <text>+20</text>
            <text>10800.5</text>
          </view>
        </view>
		<view class="list-item">
          <view class="list-item-left">
            <text>购物金奖励</text>
            <text>2019-05-25 17:26</text>
          </view>
          <view class="list-item-text">
            <text>+20</text>
            <text>10800.5</text>
          </view>
        </view>
		<view class="list-item">
          <view class="list-item-left">
            <text>积分奖励</text>
            <text>2019-05-25 17:26</text>
          </view>
          <view class="list-item-text">
            <text>+20</text>
            <text>10800.5</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  onLoad() {}
};
</script>

<style lang="scss" scoped>
@import "utils/common.scss";
</style>