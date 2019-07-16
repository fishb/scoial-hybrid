<template>
	<view class="container sign">
		<view class="sign-scroll">
			<image :src="'https://cdn.tianshic.com/static/mobile/images/cardBg.png'" class="sign-scroll-backdrop"/>
			<view class="sign-scroll-user">
                <text>Y</text>
                <view class="sign-scroll-user-head" :style="'background:url(/static/timg2.png) no-repeat center;background-size:cover;'"></view>
            </view>
			<view class="item">
				<view class="item-avatar">
					<image src="/static/timg.jpg"></image>
				</view>
				<view class="item-main">
					<text class="item-main-title">琳琅</text>
					<text class="item-main-info">内容</text>
					<image src="/static/timg.jpg" mode="aspectFit" :data-src="'/static/timg.jpg'" @tap="previewImage"></image>
					<view class="item-main-box">
						<text class="comment-time">2019/06/15</text>
						<view class="comment-button" @tap="comb()">
							<text>··</text>
						</view>
						<view :class="['comment-toggle',num?'':'toggle-false']">
							<view class="comment-toggle-item">
								<image src="/static/user_icon/love_w.png" style="width: 33upx;height: 32upx;"></image>
								<text>赞</text>
							</view>
							<view class="comment-toggle-item">
								<image src="/static/user_icon/com_w.png" style="width: 32upx;height: 34upx;"></image>
								<text>评论</text>
							</view>
						</view>
					</view>
					<view class="item-comment">
						<view class="item-comment-list">
							<view class="item-comment-list-text love">
								<image src="/static/user_icon/love.png"></image>
								<text>Y,</text><text>哈利路亚,</text><text>哈利路亚</text>
							</view>
							<text class="item-comment-list-text">
								<text>Y:</text>这款面膜真心好用，价格又实惠，性价比贼高
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="item-avatar">
					<image src="/static/timg.jpg"></image>
				</view>
				<view class="item-main">
					<text class="item-main-title">琳琅</text>
					<text class="item-main-info">内容</text>
					<image src="/static/timg.jpg" mode="aspectFit" :data-src="'/static/timg.jpg'" @tap="previewImage"></image>
					<view class="item-main-box">
						<text class="comment-time">2019/06/15</text>
						<view class="comment-button" @tap="comb()">
							<text>··</text>
						</view>
						<view :class="['comment-toggle',num?'':'toggle-false']">
							<view class="comment-toggle-item">
								<image src="/static/user_icon/love_w.png" style="width: 33upx;height: 32upx;"></image>
								<text>赞</text>
							</view>
							<view class="comment-toggle-item">
								<image src="/static/user_icon/com_w.png" style="width: 32upx;height: 34upx;"></image>
								<text>评论</text>
							</view>
						</view>
					</view>
					<view class="item-comment">
						<view class="item-comment-list">
							<view class="item-comment-list-text love">
								<image src="/static/user_icon/love.png"></image>
								<text>Y,</text><text>哈利路亚,</text><text>哈利路亚</text>
							</view>
							<text class="item-comment-list-text">
								<text>Y:</text>这款面膜真心好用，价格又实惠，性价比贼高
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num: false,
				isWork: false,
				list: [],
				imgList: [], //预览图片
				formData:{
					page: 1,
					rows: 10
				},
				loading: 0,
				total: 0
			}
		},
		onLoad() {
			//this.refresh(false, true)
		},
		// 页面触底加载更多
		onReachBottom() {
			this.loadmore()
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.refresh(true)
		},
		methods:{
			comb(num){
				this.num = !this.num
			},

			// 刷新数据，fresh是否下拉刷新，onload是否初始化 
			async refresh(fresh = false, onload = false) {
				this.loading = 0
				this.formData.page = 1
				this.list = []
				this.imgList = []
				await this._WorkList()
				if (fresh) {
					uni.stopPullDownRefresh();
					this.ShowToast('刷新成功',2500,false,'success')
				}
			},
			// 打卡列表
			async _WorkList(){
				if (this.loading == 2 || this.loading == 1) {
					return
				}
				this.loading = 1
				const list = await this.$http.WorkList(this.formData)
				this.list = [...this.list,...list.data.result.list]
				this.imgList = this.list.map(item=>{
					return item.pictures
				})
				if (this.formData.page == 1) {
					this.total = list.data.result.total
				}
				this.loading = 0
				if (this.list.length == this.total) {
					this.loading = 2
					return
				}
				this.formData.page++
			},
			loadmore(){
				this._WorkList()
			},
			nowork() {
				this.isWork = !this.isWork
			},
			gobuy(){
				this.isWork = !this.isWork
				uni.navigateTo({
					url: '/pages/goods/goods_detail?id=700'
				})
			},
			previewImage(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imgList
				})
			},
			releaseBtn(){
				if(!this.fans){
					this.ShowToast('请先登录',1500,false,'none')
					setTimeout(()=>{
						uni.navigateTo({
							url: '/pages/register/login_index'
						})
					},1500)
					return
				}
				if(this.fans.punch>0){
					uni.navigateTo({
						url: '/pages/sign/puchclock_release'
					})
				}else{
					this.nowork()
				}
			}
		},
		onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url: '/pages/punchclock/puchclock_release'
				});
		}
	}
</script>

<style lang="scss" scoped>
	.sign{
		height: auto;
		min-height: 100%;
		padding-bottom: 50px;
		background-color: $t-f8;
		&-scroll{
			position: relative;
			&-backdrop{
				width: 750upx;
				height: 660upx;
			}
			&-user{
				position: absolute;
				top: 580upx;
				right: 60upx;
				height: 150upx;
				@include flexs(row,flex-end,center);
				text{
					color: #fff;
					font-size: 24upx;
					margin: 30upx;
					max-width: 50%;
					@include wrap();
					text-shadow: 6upx 6upx 6upx #000;
				}
				&-head{
					width: 134upx;
					height: 134upx;
					border-radius: 15upx;
					display: flex;
				}
			}
			.item{
				padding: 22upx;
				@include flexs(row,flex-start,flex-start);
				border-bottom: 2upx solid #f4f4f4;
				background-color: $t-f;
				&-avatar{
					width: 97upx;
					height: 97upx;
					margin: 0 16upx 0 0;
					border-radius: 10upx;
					image{
						width: 97upx;
						height: 97upx;
						border-radius: 10upx;
					}
				}
				&-main{
					flex: 1;
					@include flexs(column,flex-start,flex-start);
					&-title{
						font-size: 27upx;
						color: #57608C;
						font-weight: bold;
						margin: auto 0 23upx;
					}
					&-info{
						font-size: 23upx;
						color: #656565;
						margin: auto 0;
					}
					image{
						width: 278upx;
						height: 278upx;
						margin: 28upx 0;
					}
					&-box{
						width: 100%;
						@include flexs(row,space-between,center);
						.comment-time{
							color: #949494;
							font-size: 20upx;
						}
						.comment-button{
							width: 60upx;
							height: 38upx;
							background-color: #F7F7F7;
							@include flexs(row,center,center);
							position: relative;
							text{
								font-size: 48upx;
								color: #4F60A6;
							}
						}
						.comment-toggle{
							width: 368upx;
							height: 90upx;
							background-color: #2c2c2c;
							border-radius: 6upx;
							@include flexs(row,space-between,center);
							transition: all 0.15s;
							position: absolute;
							right: 120upx;
							&.toggle-false{
								// width: 0;
								visibility: hidden;
							}
							&-item{
								flex: 1;
								@include flexs(row,center,center);
								text{
									font-size: 25upx;
									color: $t-f;
									margin-left: 20upx;
								}
							}
							&:after{
								content: '';
								position: absolute;
								right: -20upx;
								width: 0;
								height: 0;
								border: 10upx solid #2c2c2c;
								border-color: transparent transparent transparent #2c2c2c;
							}
						}
					}
					.item-comment{
						width: 100%;
						margin-top: 27upx;
						@include flexs(column,flex-start,center);
						&-list{
							width: 100%;
							background: #F7F7F7;
							@include flexs(column,space-between,flex-start);
							position: relative;
							&:before{
								content: '';
								position: absolute;
								width: 0;
								height: 0;
								left: 20upx;
								top: -40upx;
								border: 10px solid #F7F7F7;
								border-color: transparent transparent #F7F7F7;
							}
							&-text{
								font-size: 25upx;
								color: #3E3E3E;
								margin: 10upx 0;
								padding: 0 20upx;
								&.love{
									width: 100%;
									height: 55upx;
									border-bottom: 1upx solid #E4E4E4;
									@include flexs(row,flex-start,center);
									image{
										width: 26upx;
										height: 23upx;
									}
									text{
										margin: 0 10upx;
									}
								}
								text{
									font-size: 27upx;
									color: #57608C;
									margin-right: 10upx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
