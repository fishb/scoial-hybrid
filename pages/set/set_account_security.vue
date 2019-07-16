<template>
	<view class="container set">
      <view class="set-c">
        <view class="set-c-item" @tap="navTo('/pages/set/set_account_information')">
            <text>账号信息</text>
            <text class="iconfont icon-qianjin"></text>
        </view>
        <view class="set-c-item" @tap="navTo('/pages/set/set_resetpassword')">
            <text>钱包密码设置</text>
            <text class="iconfont icon-qianjin"></text>
        </view>
      </view>
        
    </view>
</template>

<script>
    export default{
        data(){
            return{}
        },
        methods:{
            navTo(url){
                uni.navigateTo({
					url
				})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .set{
        min-height: 100%;
        height: auto;
        background-color: $t-f8;
        &-c{
          width: 100%;
          padding: 0 28upx;
          background-color: $t-f;
          &-item{
              width: 100%;
              height: 110upx;
              @include flexs(row,space-between,center);
              font-size: 31upx;
              color: #333333;
              border-bottom: 2upx solid $t-f8;
              &:last-child{
                border-bottom: 0;
              }
              text{
                  &:last-child{
                      color: #B8B8B8;
                  }
              }
          }
        }
        
        &-button{
            margin-top: 60upx;
            width: 684upx;
            height: 88upx;
            background: transparent;
            border: 2upx solid #000000;
            font-size: 33upx;
            color: #333333;
            text-align: center;
            line-height: 88upx;
            border-radius: 4upx;
        }
    }
</style>