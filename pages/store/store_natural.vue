<template>
	<view class="container store">
        <view class="store-info">
            <image :src="shopInfo.business_license" mode="widthFix" v-if="shopInfo.business_license"></image>
            <image :src="shopInfo.food_license" mode="widthFix" v-if="shopInfo.food_license"></image>
        </view>
	</view>
</template>

<script>
        export default {
		data() {
			return {
                id: '',
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
        margin: 28upx;
        padding: 30upx;
        background-color: $t-f;
        @include flexs(column,space-around,flex-start);
        border-radius: 4upx;
        image{
            width: 100%;
        }
    }
}
</style>