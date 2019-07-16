<template>
  <view class="container serve">
    <view class="serve-item" v-for="(item,index) in serve" :key="index">
        <view class="serve-item-title">
            <text class="dot">·</text>
            <text>{{item.title}}</text>
        </view>
        <text class="serve-item-info">
            {{item.info}}
        </text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
        serve: []
    }
  },
  onLoad() {
      this.serve = [{
          title: '正品保障',info: '平台承诺所有商均来自正规渠道供货商'
      },{
          title: '7天无忧退货',info: '收到商品之内7天(含)内如有商品质量问题或溢漏损失缺发等可申请售后进行退货'
      },{
          title: '花呗付款',info: '平台所有商品都支持花呗付款'
      }]
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.serve {
  min-height: 100%;
  height: auto;
  background-color: $t-f;  
  &-item{
      width: 100%;
      padding:  0 20upx;
      margin-bottom: 30upx;
      @include flexs(column,flex-start,flex-start);
      &-title{
          font-size: 31upx;
          line-height: 88upx;
          color: #000000;
          font-weight: bold;
          .dot{
              font-family: DIN-Regular;
              font-weight: normal;
              margin-right: 8upx;
          }
      }
      &-info{
          font-size: 31upx;
          line-height: 42upx;
          color: #646464;
      }
  }
}
</style>