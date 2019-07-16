<template>
    <view class="loadmore">
			<image src="/static/loading.png" v-if="loading==1" mode="widthFix"></image>
			<text>{{ loadmore.find(i=>i.id==loading).text }}</text>
		</view>
</template>

<script>
export default {
    props:{
		loading:{
			type: [String,Number],
			default: ''
		}
	},
    data(){
        return{
            loadmore:[{
					id: 0,text:'上拉加载更多'
				},{
					id: 1,text: '正在努力加载中....'
				},{
					id: 2,text: '已经没有更多了'
				}]
        }
    }
}
</script>

<style lang="scss">
	.loadmore{
		margin-bottom: 20upx;
		width: 100%;
		height: 50upx;
		@include flexs(row,center,center);
		image{
			width: 50upx;		
		}
		text{
			margin: 0 10upx;
			font-size: 24upx;
			color: #999999;
		}
	}
</style>
