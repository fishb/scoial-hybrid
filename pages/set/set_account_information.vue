<template>
  <view class="container setaccount">
    <view class="setaccount-c">
      <view class="setaccount-c-item big">
        <text>头像</text>
         <image src="/static/timg.jpg"></image>
      </view>
      <view class="setaccount-c-item">
        <text>昵称</text>
        <view class="setaccount-c-item-more">
          NOWORNEVER
          <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
      <view class="setaccount-c-item">
        <text>关联微信</text>
        <view class="setaccount-c-item-more">
          NOWORNEVER
          <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
      <view class="setaccount-c-item">
        <text>微信号</text>
        <view class="setaccount-c-item-more">
          NOWORNEVER
          <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
      <view class="setaccount-c-item">
        <text>个性签名</text>
        <view class="setaccount-c-item-more">
          去设置
          <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
      <view class="setaccount-c-item">
        <text>手机号</text>
        <view class="setaccount-c-item-more">
          13979953453
          <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
      <view class="setaccount-c-item">
        <text>支付宝姓名</text>
        <view class="setaccount-c-item-more">
          张老板
          <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
      <view class="setaccount-c-item" @tap="navTo('/pages/set/set_alipynum')">
        <text>支付宝账号</text>
        <view class="setaccount-c-item-more">
          1053449611
          <text class="iconfont icon-qianjin"></text>
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
  methods: {
    navTo(url) {
      uni.navigateTo({
        url
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.setaccount {
  min-height: 100%;
  height: auto;
  background-color: $t-f8;
  &-c {
    width: 100%;
    padding: 0 28upx;
    background-color: $t-f;
    &-item {
      width: 100%;
      height: 110upx;
      @include flexs(row, space-between, center);
      font-size: 31upx;
      color: #333333;
      border-bottom: 2upx solid $t-f8;
      &.big{
        height: 120upx;
      }
      & > image {
        width: 86upx;
        height: 86upx;
        border-radius: 50%;
        margin-right: 28upx;
      }
      &:last-child {
        border-bottom: 0;
      }
      &-more {
        color: #828282;
      }
    }
  }
}
</style>
