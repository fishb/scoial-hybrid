<template>
	<view class="container store">
		<!-- 头部组件  QaQ-->
        <!-- #ifndef MP-WEIXIN -->
        <hybrid-title
        class="detail-title"
        :hasTitle="true"
        :contentTitle="ifTitle?shopInfo.shop_name:''"
        :leftIcon="['icon-back']"
        @icon-back="$navTo('')"
        :rightIcon="['icon-share']"
        @icon-share="shareTo"
        >
        </hybrid-title>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN -->
        <view class="store-info" style="margin-top: 44px;" @tap="$navTo(`/pages/store/store_detail?id=${id}`)">
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="store-info" @tap="$navTo(`/pages/store/store_detail?id=${id}`)">
        <!-- #endif -->
            <image :src="shopInfo.shop_logo"></image>
            <text class="title">{{shopInfo.shop_name}}</text> 
            <text class="iconfont icon-qianjin"></text>
        </view>

        <view class="store-filter">
            <!-- #ifndef MP-WEIXIN -->
            <view class="store-filter-way" :style="[{'position':!ifTitle?'static':'fixed'},{'top':'44px'}]">
            <!-- #endif -->
            <!-- #ifdef MP-WEIXIN -->
            <view class="store-filter-way" :style="[{'position':!ifTitle?'static':'fixed'},{'top':'0rpx'}]">
            <!-- #endif -->
                <scroll-view class="filter-way" :scroll-x="true">
                    <view :class="['filter-way-item',tabindex==index?'active':'']" v-for="(filter,index) in filterList" :key="index" @tap="filterTab(index)">{{filter}}</view>
                </scroll-view>
                <view class="filter-list">
                    <view class="active">默认</view>
                    <view>销量</view>
                    <view>价格</view>
                </view>
            </view>
            <general-list :List="list" style="background: #f8f8f8;margin-top: 28rpx;">
		    </general-list>
        </view>

	</view>
</template>

<script>
	import GeneralList from '@/components/GeneralList.vue'
        export default {
        components: {
            GeneralList
        },
		data() {
			return {
                id: '',
                shopInfo: '',
                ifTitle: false,
                filterList: ['全部','满199元减100元','满199元减100元','满199元减100元'],
                tabindex: 0,
                list:[
					{id:'1',title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
                    {id:'2',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'},
                    {id:'3',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'},
                    {id:'4',title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},{id:'1',title: '【下单后7-15天发货】贵州飞天茅台53度 酱',image: '/static/timg.jpg',oldprice: '1980',newprice: '1600',label: ['爆品秒杀']},
                    {id:'2',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'},
                    {id:'3',title: '测试产品',image: '/static/timg2.png',oldprice: '199',newprice: '180'}
				]
			}
        },
		async onLoad(options) {
            let that = this
            this.id = options?options.id: ''
            await this._ShopHome({id:this.id})
            // #ifdef MP-WEIXIN
            uni.setNavigationBarTitle({
                title: that.shopInfo.shop_name
            })
            // #endif
		},
		methods: {
            shareTo(){
                uni.showModal({
                    title:'分享出去啊'
                })
            },
            filterTab(num){
                this.tabindex = num
                this.list = this.list.reverse()
            },
           async  _ShopHome(data){
                let res = await this.$apis.ShopHome(data)
                this.shopInfo = res.result.shopInfo
            }
        },
        onPageScroll(e) {
            if (e.scrollTop > uni.upx2px(250)) {
            this.ifTitle = true;
                return;
            }else{
                this.ifTitle = false;
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
        width: 100%;
        height: 250upx;
        padding: 0 28upx;
        background: $t-c;
        @include flexs(row,space-between,center);
        image{
            width: 130upx;
            height: 130upx;
            border-radius: 16upx;
        }
        text{
            font-size: 32upx;
            color: $t-f;
        }
        .title{
            margin: 0 28upx;
            flex: 1;
        }
    }
    &-filter{
        width: 100%;
        @include flexs;
        &-way{
            @include flexs(column,space-between,center);
            z-index: 999;
            .filter-way{
           width: 750upx;
            height: 86upx;
            background-color: $t-f;
            white-space: nowrap;
            .filter-way-item{
                display: inline-block;
                width: auto;
                line-height: 86upx;
                margin: 0 40upx;
                font-size: 30upx;
                color: $t-c;
                &.active{
                    font-weight:bold;
                    position:  relative;
                    &:before {
                        content: "";
                        position: absolute;
                        width: 14%;
                        height: 6upx;
                        background-color: $t-f;
                        left: 90%;
                        bottom: 0upx;
                        margin-left: -25%;
                        transform: skew(-45deg);
                        z-index: 99;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 6upx;
                        background-color: #f30;
                        left: 50%;
                        bottom: 0upx;
                        margin-left: -50%;
                        transform: skew(-45deg);
                    }
                }
            }
        }
        .filter-list{
            width: 100%;
            height: 72upx;
            background-color: $t-f;
            @include flexs(row,flex-start,center);
            &>view{
                flex: 1;
                max-width: 33.33%;
                text-align: center;
                line-height: 72upx;
                font-size: 27upx;
                color: #828282;
                &.active{
                    color: #333333;
                    font-weight: bold;
                }
            }
        }
        }
       
    }
}
</style>