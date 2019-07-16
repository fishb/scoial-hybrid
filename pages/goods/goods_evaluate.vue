<template>
  <view class="container evaluate">
      <view class="evaluate-tab">
          <view :class="['evaluate-tab-item',tabindex==index?'active':'']" v-for="(item,index) in tab" :key="index" @tap="selectTab(index)">{{item.name}}{{item.num?item.num:''}}</view>
      </view>
      <view class="evaluate-item">
          <view class="evaluate-item-avatar">
              <image src="/static/timg.jpg"></image>
              <text>avatar</text>
          </view>
          <text class="evaluate-item-shop">2019-05-20产品规格:10盒装*1提</text>
          <text class="evaluate-item-info">
              听说这水牛奶很好喝心动很久, 在美食街那天终于拨草了,
            缺乏确实好, 一 箱共计10盒, 孩子早晚各一盒,已经喝完
            了,下次活动还要卖, 准备换个口味给他喝
          </text>
          <view class="evaluate-item-image">
              <image src="/static/timg2.png" mode="widthFix"></image>
          </view>
      </view>
      <view class="evaluate-item">
          <view class="evaluate-item-avatar">
              <image src="/static/timg.jpg"></image>
              <text>avatar</text>
          </view>
          <text class="evaluate-item-shop">2019-05-20产品规格:10盒装*1提</text>
          <text class="evaluate-item-info">
              听说这水牛奶很好喝心动很久, 在美食街那天终于拨草了,
            缺乏确实好, 一 箱共计10盒, 孩子早晚各一盒,已经喝完
            了,下次活动还要卖, 准备换个口味给他喝
          </text>
          <view class="evaluate-item-image">
              <image src="/static/timg2.png" mode="widthFix"></image>
              <image src="/static/timg2.png" mode="widthFix"></image>
              <image src="/static/timg2.png" mode="widthFix"></image>
          </view>
      </view>
      <view class="evaluate-item">
          <view class="evaluate-item-avatar">
              <image src="/static/timg.jpg"></image>
              <text>avatar</text>
          </view>
          <text class="evaluate-item-shop">2019-05-20产品规格:10盒装*1提</text>
          <text class="evaluate-item-info">
              听说这水牛奶很好喝心动很久, 在美食街那天终于拨草了,
            缺乏确实好, 一 箱共计10盒, 孩子早晚各一盒,已经喝完
            了,下次活动还要卖, 准备换个口味给他喝
          </text>
      </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
        tabindex: 0,
        tab: [
            {id: 0,name: '全部'},{id: 1,name: '最新'},{id: 2,num: 35,name: '追加'},{id: 3,num:3,name: '有图'}
        ]
    }
  },
  onLoad() {
  },
  methods: {
      selectTab(index){
          this.tabindex = index
      }
  }
};
</script>

<style lang="scss" scoped>
.evaluate {
  min-height: 100%;
  height: auto;
  background-color: $t-f8;
  &-tab{
      width: 100%;
      height: 124upx;
      padding: 0 28upx;
      background-color: $t-f;
      border-bottom: 2upx solid #F7F7F7;
      @include flexs(row,flex-start,center);
      &-item{
          font-size: 25upx;
          line-height: 62upx;
          border-radius: 4upx;
          padding: 0 30upx;
          background-color: #F4F4F4;
          margin-right: 21upx;
          text-align: center;
          &.active{
              color: $t-f;
              background-color: #F30131;
          }
      }
  }

  &-item{
      width: 100%;
      height: auto;
      padding: 28upx 20upx;
      margin-bottom: 8upx;
      background-color: $t-f;
      @include flexs(column,flex-start,flex-start);
      &-avatar{
          width: 100%;
          @include flexs(row,flex-start,center);
          image{
              width: 70upx;
              height: 70upx;
              border-radius: 50%;
          }
          text{
              font-size: 27upx;
              margin-left: 21upx;
              color: #303030;
          }
      }
      &-shop{
          width: 100%;
          margin: 21upx 0;
          font-size: 25upx;
          color: #646464;
      }
      &-info{
          width: 100%;
          font-size: 27upx;
          line-height: 35upx;
          color: #303030;
      }
      &-image{
          margin-top: 21upx;
          width: 100%; 
          @include flexs(row,flex-start,center);
          &>image{
              margin-right: 21upx;
              flex: 1;
              max-width: 359upx;
          }
      }
  }
}
</style>