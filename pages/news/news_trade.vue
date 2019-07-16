<template>
	<view class="container news">
		<view class="news-cantainer">
			<view class="news-item" v-for="(item,index) in arra" :key="index">
				<text class="news-item-time">{{item.time}}</text>
                <view class="news-item-detail">
                    <text class="news-item-detail-title">待发货</text>
                    <view class="news-item-detail-info">
                        <image src="/static/timg.jpg"></image>
                        <view class="info">
                            <text class="info-title">你购买的蓝漂竹浆本色抽取式面巾纸3层288张*15包即将为您发货</text>
                            <text class="info-way">运货单号：0791-8316800</text>
                        </view>
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
			}
		},
		computed:{			
		},
		onLoad(options) {
            this.options = options?options.type:''
            this._MessageList({type:this.options})
		},
		methods: {
            async _MessageList(data){
                let res = await this.$apis.MessageList(data)
                console.log(res)
            }
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
                height: 230upx;
                background: $t-f;
                @include flexs(column,space-around,flex-start);
                padding: 26upx;
                &-title{
                    font-size: 31upx;
                    color: $t-c;
                }
                &-info{
                    height: 132upx;
                    @include flexs(row,space-between,flex-start);
                    &>image{
                        width: 132upx;
                        height: 132upx;
                    }
                    .info{
                        flex: 1;
                        height: 132upx;
                        margin-left: 15upx;
                        font-size: 27upx;
                        color: #000000;
                        @include flexs(column,space-between,flex-start);
                        &-title{
                            @include wrap(2);
                        }
                        &-way{
                            font-size: 27upx;
                            color: $t-8;
                        }
                    }
                }
            }
		}
	}
	
}
</style>