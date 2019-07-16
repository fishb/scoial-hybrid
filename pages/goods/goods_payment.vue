<template>
  <view class="container payment">
    <!-- 地址 -->
    <view class="payment-address">
      <view class="payment-address-flex">
        <view class="payment-address-top"><text>张建国</text><text>15979191717</text></view>
        <view class="flex-text">
          <text class="iconfont icon-map map"></text>
          <text>江西省南昌市青山湖区紫阳大道2888号巅峰财富广场A1008</text>
        </view>
      </view>
      <text class="iconfont icon-qianjin address-text"></text>
    </view>
    <!--商品-->
    <view class="payment-shop">
      <view class="payment-shop-detail">
        <view class="sales">
          <text class="sales-way">自营</text>
          <text class="sales-title">众汇优品自营休闲食品旗舰店</text>
        </view>
        <view class="detail-info">
          <image src="/static/timg2.png"></image>
          <view class="detail-info-flex">
            <text class="flex-title">【阁楼上的猫】 网红小白袋装纯牛奶</text>
            <text class="flex-label">产品规格:180ml*16袋</text>
          </view>
          <view class="detail-info-label">
            <text>¥30.90</text>
            <text>X1</text>
          </view>
        </view>
      </view>
      <view class="payment-shop-item">
        <text class="label">发货方式</text>
        <text class="right">快递(包邮):0元</text>
      </view>
      <view class="payment-shop-item">
        <text class="label">退货无忧</text>
        <text class="right"></text>
      </view>
      <view class="payment-shop-item">
        <text class="label">买家留言</text>
        <input placeholder="选填:建议填写内容钱先与买家沟通"/>
      </view>
      <view class="payment-shop-total">
        <text>共1件商品  小计: <text class="red">¥30.90</text></text>
      </view>
    </view>
    <!--way-->
    <view class="payment-way">
      <view class="payment-way-item">
        <text>会员优惠</text>
        <view class="right">
          <text>立减:0.98元</text>
          </view>
      </view>
      <view class="payment-way-item">
        <text>积分抵现</text>
         <view class="right">
           <text>暂无可用积分</text>
           <switch color="#1C1C1C"/>
          </view>
      </view>
      <view class="payment-way-item">
        <text>分红抵现</text>
         <view class="right">
           <text>9.88分红可用</text>
           <switch color="#1C1C1C" />
          </view>
      </view>
    </view>
    <!--底部-->
    <view class="payment-control">
      <view class="payment-control-price">
        总计 :
        <text class="price-text">¥</text>
        <text class="price-num">29.92</text>
      </view>
      <button class="payment-control-button success" @tap="navTo('/pages/goods/payment_detail')">去付款</button>
    </view>
  </view> 
</template>

<script>
export default {
  data() {
    return {
    }
  },
  onLoad() {
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
.payment {
  min-height: 100%;
  height: auto;
  padding-bottom: 125upx;
  background-color: $t-f8;
  &-address{
    width: 694upx;
    height: 194upx;
    margin: 20upx 28upx 0; 
    padding: 0 28upx;
    background-color: $t-f;
    border-radius: 4upx;
    @include flexs(row,space-between,center);
    &-flex{
      @include flexs(column,center,flex-start);
      text{
        font-size: 34upx;
        color: #333333;
      }
      .payment-address-top{
        text:last-child{
          margin-left: 31upx;
        }
      }
      .flex-text{
        font-size: 29upx;
        @include wrap(2);
        .map{
          margin-right: 10upx;
        }
        text{
            font-size: 29upx;
        }
      }  
    }
    .address-text{
      font-size: 34upx;
      color: #000000;
    }
  }
  &-shop{
    width: 694upx;
    height: auto;
    margin: 20upx 28upx 0;
    padding: 28upx;
    background-color: $t-f;
    border-radius: 4upx;
    @include flexs(column,space-between,center);
    &-detail{
      width: 100%;
      @include flexs(column,flex-start,flex-start);
      border-bottom:  2upx solid #f4f4f4;
      .sales{
        @include flexs(row,flex-start,center);
        margin-bottom: 34upx;
        &-way{
          padding: 0 10upx;
          height: 30upx;
          line-height: 30upx;
          background-color: #FF2A3F;
          border-radius: 15upx;
          font-size: 20upx;
          color: $t-f;
          margin-right: 10upx;
        }
        &-title{
          font-size: 29upx;
          color: #333333;
        }
      }
      .detail-info{
        margin-bottom: 50upx;
        @include flexs(row,space-between,flex-start);
        image{
          width: 126upx;
          height: 126upx;
        }
        &-flex{
          flex: 1;
          margin: 0 14upx;
          @include flexs(column,space-between,flex-start);
          .flex-title{
            font-size: 28upx;
            color: #333333;
            @include wrap(2);
          }
          .flex-label{
            font-size: 24upx;
            color: #828282;
          }
        }
        &-label{
          @include flexs(column,flex-start,flex-end);
          text{
            font-size: 30upx;
            line-height: 35upx;
            &:first-child{
              color: #333333; 
            }
            &:last-child{
              color: #6C6C6C;
            }
          }
        }
      }
    }
    &-item{
      width: 100%;
      height: 98upx;
      @include flexs(row,space-between,center);
      border-bottom: 2upx solid #f4f4f4;
      text{
        font-size: 28upx;
        color: #333333;
        &.right{
          font-size: 27upx;
          color: #828282;
        }
      }
      input{
        flex: 1;
        font-size: 27upx;
        color: #828282;
        margin-left: 10upx;
      }
    }
    &-total{
      width: 100%;
      padding-top: 28upx;
      @include flexs(row,flex-end,flex-start);
      text{
        font-size: 26upx;
        color: #333333;
       &.red{
          font-size: 30upx;
          color: #FF2A3F;
        }
      }
    }
  }
  &-way{
    width: 694upx;
    height: auto;
    margin: 20upx 28upx 0;
    padding: 0 28upx;
    background-color: $t-f;
    border-radius: 4upx;
    @include flexs(column,space-between,flex-start);
    &-item{
      width: 100%;
      height: 86upx;
      @include flexs(row,space-between,center);
      border-bottom: 2upx solid #F4F4F4;
      &:last-child{
        border-bottom: 0;
      }
      text{
        font-size: 29upx;
        color: #333333;
      }
      .right{
        text{
          font-size: 29upx;
          color: #828282;
        }
        switch{
          margin-left: 20upx;
        }
      }
    }
  }

  &-control{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 115upx;
    background-color: $t-f;
    padding: 0 32upx;
    @include flexs(row,space-between,center);
    &-price{
      font-size: 29upx;
      color: #FF2A3F;
      .price-text{
        font-weight: bold;
      }
      .price-num{
        font-size: 45upx;
        font-weight: bold;
      }
    }
    &-button{
      border-radius: 4upx;
      color: $t-f;
      font-size: 28upx;
      width: 207upx;
      line-height: 82upx;
      margin-right: 21upx;
      &:after{
        display: none;
      }
      &:last-child{
        margin-right: 0;
      }
      &.default{
        background-color: #1A1A1A;
      }
      &.success{
        background-color: #F2012E;
      }
      &.warning{
        background-color: #E8C983;
      }
    }
  }
}
</style>