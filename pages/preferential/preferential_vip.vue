<template>
	<view class="container preferential">
		<image src="http://ceshi.weakwater.com/static/vipbg.png" mode="widthFix" class="preferential-bg"></image>
		<image src="/static/vipcard.png" mode="widthFix" class="preferential-card"></image>
		<general-list :List="list" class="preferential-list"></general-list>
	</view>
</template>

<script>
import GeneralList from '@/components/GeneralList.vue'
	export default {
		components:{
			GeneralList
		},
		data() {
			return {
				loading: 0,
				page: 1,
				list:[]
            }
		},
		onLoad() {
			this._shopList()
		},
		methods: {
			priceFilter(){
				this.ascending = !this.ascending
			},
			async _shopList(){
				this.loading = 1
				let data = await this.$apis.shopList({page:this.page})
				this.list = [...this.list,...data.result.list]
				if (this.page == 1) {
					this.total = data.result.total
				}
				this.loading = 0
				if (this.list.length == this.total) {
					this.loading = 2
				}
				this.page++
			}
		},
		onReachBottom(){
			this._shopList()
		}
	}
</script>

<style lang="scss" scoped>
.preferential{
	background:linear-gradient(90deg,rgba(199,170,130,1) 0%,rgba(254,231,199,1) 35%);
	height: auto;
	@include flexs;
	&-bg{
		width: 100%;
	}
	&-card{
		width: 712upx;
	}
	&-list{
		width: 100%;
		height: auto;
		margin-top: 34upx;
		@include flexs(row,center,center);
	}
}
</style>