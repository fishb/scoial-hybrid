<template>
	<view class="container news">
		<view class="news-cantainer">
            <view class="item" v-for="(item,index) in arra" :key="index">
                <view class="item-time">
                    <text class="iconfont icon-time"></text>
                    <text class="item-time-text">05/05 16.34</text>
                </view>
                <view class="item-detail">
                    <text class="item-detail-title">奶粉超级品类日</text>
                    <image :src="init.cdnurl+'/static/v2/img/news.png'"></image>
                    <view class="item-detail-text">
                        5月10-11号, 奶粉超级品类日,抢500元神券, 百元众汇
                        卡, a2低至190元/罐, 牛栏低至76元/罐,还有更多好...
                    </view>
                    <view class="item-detail-more">
                        <text>查看详情</text>
                        <text class="iconfont icon-qianjin"></text>
                    </view>
                </view>
            </view>
		</view>
	</view>
</template>

<script>
    import {mapState} from 'vuex'
	export default {
		data() {
			return {
				arra: [{
					title: '交易信息',msg: [],time: '2019/05/05 16:34',img: 'news1'
				},{
					title: '客服聊天',msg: [],time: '2019/05/05 16:34',img: 'news2'
				},{
					title: '我的资产',msg: [],time: '2019/05/05 16:34',img: 'news3'
				},{
					title: '系统信息',msg: [],time: '2019/05/05 16:34',img: 'news4'
				}]
			}
		},
		computed:{		
            ...mapState(['init'])	
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
.news{
    min-height: 100%;
    height: auto;
	background-color: $t-f8;
	&-cantainer{
		width: 100%;
        padding: 0 22upx;
        &>.item{
            width: 100%;
            height: 606upx;
            @include flexs(column,space-between,flex-start);
            &:last-child{
                .item-detail{
                    &:before{
                        display: none;
                    }
                }
            }
            .item-time{
                width: 100%;
                height: 90upx;
                @include flexs(row,flex-start,center);
                .iconfont{
                    width: 24upx;
                    height: 24upx;
                    font-size: 24upx;
                    margin-right: 14upx;
                }
                &-text{
                    font-size: 27upx;
                    color: #000000;
                }
            }
            .item-detail{
                width: 668upx;
                height: 516upx;
                margin-left: 38upx;
                padding: 0 22upx;
                position: relative;
                background-color: $t-f;
                @include flexs(column,flex-start,flex-start);
                &:before{
                    content: '';
                    position: absolute;
                    width: 2upx;
                    height: 516upx;
                    background-color: #EAEAEA;
                    left: -25upx;
                }
                &-title{
                    padding: 30upx 0;
                    font-size: 31upx;
                    color: #000000;
                }
                &>image{
                    width: 626upx;
                    height: 212upx;
                }
                &-text{
                    padding: 31upx 0 26upx;
                    font-size: 25upx;
                    color: #000000;
                    @include wrap(2);
                    line-height: 42upx;
                    border-bottom: 2upx solid #EAEAEA;
                }
                &-more{
                    width: 100%;
                    padding: 31upx 0 26upx;
                    font-size: 23upx;
                    color: #000000;
                    @include flexs(row,space-between,center);
                }
            }
        }
    }
}
</style>