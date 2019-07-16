<template>
  <view class="container payment">
    <view class="payment-con">
      <text class="title">用户取消  </text>
      <view class="payment-con-item">
        <text>订单编号：302225887896167</text>
        <view class="payment-con-item-copy">复制</view>
      </view>
      <view class="payment-con-item">
        <text>订单时间：2019-05-17 17:47:29</text>
      </view>
    </view>
    <view class="payment-address">
      <view class="payment-address-top">
        <text>张建国</text><text class="phone">15979191717</text>
      </view>
      <view class="payment-address-flex">
        <text class="iconfont icon-map map"></text>
        <text>江西省南昌市青山湖区紫阳大道2888号巅峰财富广场A1008</text>
      </view>
    </view>
    <view class="payment-shop">
      <view class="payment-shop-detail">
        <view class="sales">
          <image src="/static/order_seller.png"></image>
          <text class="sales-title">众汇优品自营休闲食品旗舰店</text>
          <text class="iconfont icon-qianjin"></text>
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
        <text>运费</text><text>0.00</text>
      </view>
      <view class="payment-shop-item">
        <text>订单总计</text><text>¥39.80</text>
      </view>
      <view class="payment-shop-item">
        <text>会员优惠</text><text>-¥1.26</text>
      </view>
      <view class="payment-shop-item">
        <text>实付金额</text><text>¥38.54</text>
      </view>
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
  }
};
</script>

<style lang="scss" scoped>
@mixin common(){
    width: 694upx;
    padding: 20upx;
    margin: 20upx 28upx 0;
    background-color: $t-f;
    border-radius: 4upx;
}
.payment {
  min-height: 100%;
  height: auto;
  background-color: $t-f8;
  &-con{
    height: 212upx;
    @include common;
    @include flexs(column,space-around,flex-start);
    .title{
      font-size: 35upx;
      font-weight: bold;
      color: #000000;
      line-height: 31upx;
    }
    &-item{
      width: 100%;
      @include flexs(row,flex-start,center);
      font-size: 25upx;
      text{
         color: #131313;
         line-height: 31upx;
      }
      &-copy{
        font-size: 21upx;
        color: #FF3C43;
        margin-left: 24upx;
      }
    }
  }
  &-address{
    height: 212upx;
    @include common;
    @include flexs(column,space-around,flex-start);
    &-top{
      width: 100%;
      line-height: 79upx;
      text{
        font-size: 33upx;
        color: #131313;
        font-weight: bold;
        &.phone{
          margin-left: 20upx;
          font-size: 29upx;
        color: #000000;
        font-weight: normal;
        }
      }
    }
    &-flex{
      width: 100%;
      line-height: 42upx;
      @include wrap(2);
      text{
        font-size: 29upx;
        color: #333333;
        &.map{
          color: #FF2A3F;
          margin-right: 10upx;
        }
      }
    }
  }
  &-shop{
    width: 694upx;
    height: auto;
    @include common;
    @include flexs(column,space-between,center);
    &-detail{
      width: 100%;
      @include flexs(column,flex-start,flex-start);
      .sales{
        @include flexs(row,flex-start,center);
        margin-bottom: 34upx;
        image{
          width: 38upx;
          height: 37upx;
          margin-right: 20upx;
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
      line-height: 66upx;
      @include flexs(row,space-between,center);
      text{
        font-size: 25upx;
        color: #828282;
      }
    }
  }
}
</style>