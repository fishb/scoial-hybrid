<template>
	<view class="container collect">
        <view class="collect-item">
            <image src="/static/timg2.png"></image>
            <view class="collect-item-main">
                <text class="collect-item-main-title">【抖音爆款】笛爱儿红酒睡眠面膜免洗补水
                    保湿抗皱纹抗氧化紧致肌肤提亮...</text>
                <view class="collect-item-main-flex">
                    <text>¥69.9</text>
                    <view class="xs">找相似</view>
                </view>
            </view>
        </view>
        <view class="collect-item">
            <image src="/static/timg2.png"></image>
            <view class="collect-item-main">
                <text class="collect-item-main-title">【抖音爆款】笛爱儿红酒睡眠面膜免洗补水
                    保湿抗皱纹抗氧化紧致肌肤提亮...</text>
                <view class="collect-item-main-flex">
                    <text>¥69.9</text>
                    <view class="xs">找相似</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                list: []
            }
        },
        methods:{
            async _GoodsCollectList(){
                let list = await this.$apis.GoodsCollectList()
                if(list.code == 0){
                    this.list = list.result
                    return
                }
                this.$toast({title: list.msg,icon: 'none'})
            }
        },
        onLoad(){
            this._GoodsCollectList()
        }
    }
</script>

<style lang="scss" scoped>
    .collect{
        min-height: 100%;
        height: auto;
        background-color: $t-f8;
        &-item{
            width: 100%;
            height: 244upx;
            padding: 30upx;
            background-color: $t-f;
            @include flexs(row,space-between,center);
            border-bottom: 2upx solid $t-f8;
            image{
                width: 184upx;
                height: 184upx;
                border-radius: 10upx;
                margin-right: 20upx;
            }
            &-main{
                flex: 1;
                height: 184upx;
                @include flexs(column,space-between,flex-start);
                &-title{
                    font-size: 25upx;
                    color: #0f0f0f;
                    @include wrap(2);
                    line-height: 33upx;
                }
                &-flex{
                    width: 100%;
                    @include flexs(row,space-between,center);
                    font-size: 33upx;
                    color: #0f0f0f;
                    text{
                        font-weight: bold;
                    }
                    .xs{
                        width: 132upx;
                        height: 50upx;
                        border: 1upx solid #333333;
                        border-radius: 4upx;
                        @include flexs(row,center,center);
                        text{
                            font-size: 27upx;
                            color: #333333;
                        }
                    }
                }
            }
        }
    }
</style>