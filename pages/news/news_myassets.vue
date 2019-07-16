<template>
	<view class="container news">
		<view class="news-cantainer">
			<view class="news-item" v-for="(item,index) in arra" :key="index">
				<text class="news-item-time">{{item.time}}</text>
                <view class="news-item-detail">
                    <text class="news-item-detail-title">会员升级通知</text>
                    <text class="news-item-detail-time">05/05</text>
                    <view class="news-item-detail-info">
                        <text class="info-t">恭喜您!会员等级已升级</text>
                        <text class="label">商户昵称:<text>NOWORNEVER</text></text>
                        <text class="label">升级为:<text>持股人</text></text>
                        <text class="label">升级时间:<text>2019-01-07 15:57</text></text>
                    </view>
                </view>
			</view>
		</view>
	</view>
</template>

<script>
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
		padding: 0 30upx;
		.news-item{	
			@include flexs(column,flex-start,center);
			&-time{
				color: $t-8;
                font-size: 25upx;
                height: 100upx;
                line-height: 100upx;
            }
            &-detail{
                width: 100%;
                height: 290upx;
                background: $t-f;
                @include flexs(column,space-around,flex-start);
                padding: 26upx;
                &-title{
                    font-size: 31upx;
                    color: $t-c;
                }
                &-time{
                    font-size: 23upx;
                    color: $t-8;
                }
                &-info{
                    flex: 1;
                    @include flexs(column,space-between,flex-start);
                    .info-t{
                        font-size: 25upx;
                        color: #13396F;
                    }
                    .label{
                        font-size: 25upx;
                        color: #000000;
                        &>text{
                            color: #13396F;
                        }
                    }
                }
            }
		}
	}
	
}
</style>