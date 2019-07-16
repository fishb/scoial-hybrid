<template>
	<view class="container store">
        <view class="store-info">
            <view class="store-info-top">
                <image :src="shopInfo.shop_logo"></image>
                <text>{{shopInfo.shop_name}}</text>
            </view>
            <text class="store-info-bottom">{{shopInfo.summary}}</text>
        </view>

        <view class="store-item">
            <view class="store-item-text">
                <text>描述相符</text>
                <view></view>
                <text>{{shopInfo.commentScore}}</text>
            </view>
            <view class="store-item-text">
                <text>卖家服务</text>
                <view></view>
                <text>{{shopInfo.serviceScore}}</text>
            </view>
            <view class="store-item-text">
                <text>物流服务</text>
                <view></view>
                <text>{{shopInfo.logisticsScore}}</text>
            </view>
        </view>

        <view class="store-base">
            <text class="title">基础信息</text>
            <view class="store-base-item" @tap="$navTo(`/pages/store/store_natural?id=${id}`)">
                <text>工商执照</text>
                <view class="item-right">
                    <text class="iconfont icon-qianjin"></text>
                </view>
            </view>
            <view class="store-base-item">
                <text>开店时间</text>
                <view class="item-right">
                    <text>{{shopInfo.opentime}}</text>
                </view>
            </view>
        </view>

	</view>
</template>

<script>
        export default {
		data() {
			return {
                id:'',
                shopInfo: ''
			}
		},
		onLoad(options) {
            this.id = options?options.id:''
            this._ShopDetail({id:this.id})
		},
		methods: {
            async _ShopDetail(data){
                let res = await this.$apis.ShopDetail(data)
                this.shopInfo = res.result.shopInfo
            }
        }
	}
</script>

<style lang="scss" scoped>
.store{
    min-height: 100%;
    height: auto;
    background-color: $t-f8;
    &-info{
        width: 694upx;
        height: 325upx;
        margin: 28upx;
        padding: 30upx;
        background-color: $t-f;
        @include flexs(column,space-around,flex-start);
        border-radius: 4upx;
        &-top{
            width: 100%;
            @include flexs(row,flex-start,flex-start);
            image{
                width: 138upx;
                height: 138upx;
                border-radius: 1upx solid #E2E2E2;
                border-radius: 4upx;
                margin-right: 24upx;
            }
            text{
                font-size: 32upx;
                color: #1A1A1A;
            }
        }
        &-bottom{
            font-size: 25upx;
            color: #5A5A5A;
            @include wrap(2);
        }
    }

    &-item{
        width: 694upx;
        height: auto;
        margin: 0 28upx 28upx;
        padding: 30upx;
        background-color: $t-f;
        border-radius: 4upx;
        @include flexs(column,space-between,flex-start);
        &-text{
            width: 100%;
            margin: 10upx 0;
            @include flexs(row,space-between,center);
            &>view{
                flex:1;
                height: 16upx;
                margin: 0 28upx;
                background: linear-gradient(90deg,rgba(251,227,95,1),rgba(251,227,95,1),rgba(245,76,53,1),rgba(243,14,47,1));
                border-radius:8px;
            }
            text{
                font-size: 25upx;
                color: #5A5A5A;
                &:last-child{
                    font-size: 27upx;
                    color: #D00623;
                }
            }
        }
    }

    &-base{
        width: 694upx;
        height: 260upx;
        margin: 0 28upx 28upx;
        padding: 30upx;
        background-color: $t-f;
        border-radius: 4upx;
        @include flexs(column,space-between,flex-start);
        .title{
            font-size: 31upx;
            color: #333333;
        }
        &-item{
            width: 100%;
            @include flexs(row,space-between,center);
            text{
                font-size: 25upx;
                color: #333333;
            }
        }
    }
}
</style>