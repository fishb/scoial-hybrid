<template>
	<view class="container news">
		<view class="news-cantainer">
			<view class="news-item" v-for="(item,index) in arra" :key="index" @tap="$navTo(`/pages/news/news_trade?type=${item.type}`)">
				<image :src="item.icon" mode="widthFix"></image>
				<view class="news-item-text">
					<text class="news-item-text-title">{{item.name}}</text>
					<text class="news-item-text-info">{{item.lastmsg}}</text>
				</view>
				<text class="news-item-time">{{item.createtime}}</text>
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
					title: '交易信息',msg: [],time: '05/05 16:34',img: 'news1',link: '/pages/news/news_trade'
				},{
					title: '客服聊天',msg: [],time: '05/05 16:34',img: 'news2'
				},{
					title: '我的资产',msg: [],time: '05/05 16:34',img: 'news3',link: '/pages/news/news_myassets'
				},{
					title: '系统信息',msg: [],time: '05/05 16:34',img: 'news4',link: '/pages/news/news_system'
				}]
			}
		},
		computed:{			
			...mapState(['init'])
		},
		onLoad() {
			this._MessageIndex()
		},
		methods: {
			async _MessageIndex(){
				let res = await this.$apis.MessageIndex()
				this.arra = res.result.list
			}
		}
	}
</script>

<style lang="scss" scoped>
.news{
	background-color: #ffffff;
	&-cantainer{
		width: 100%;
		padding: 0 30upx;
		.news-item{	
			height: 130upx;
			border-bottom: 2upx solid #F4F4F4;
			@include flexs(row,space-between,center);
			&:last-child{
				border: 0;
			}
			&>image{
				width: 74upx;
			}
			&-text{
				flex: 1;
				margin-left: 22upx;
				@include flexs(column,flex-start,flex-start);				
				&-title{
					color:  $t-c;
					font-size: 33upx;
				}
				&-info{
					color: $t-8;
					font-size: 25upx;
				}
			}
			&-time{
				color: $t-8;
				font-size: 20upx;
			}
		}
	}
	
}
</style>