<template>
	<view class="container release" :style="{'min-height':Wheight}">
		<view class="release-box">
			<textarea v-model="formData.content" placeholder="说出你真实的感受"></textarea>
			<view class="release-box-choose">
					<block v-if="imageList.length===0">
						<view class="addBox" id="addBtn" @tap="chooseImage">
							<text class="iconfont icon-jia"></text>
						</view>
					</block>
					<view class="addBox" v-for="(image,index) in imageList" :key="index">
						<image :src="image" :data-src="image" @tap="previewImage"></image>
						<view class="closeBtn" @click="close">
							<text class="iconfont icon-guanbi"></text>
						</view>
					</view>
			</view>
		</view>
		<view class="release-detail">( 打卡赚红包，每购买一套面膜即可有10次打卡机会，每天可以打卡一次。只要点上面的“+”自拍一张在敷面膜的照片即可，系统会立即发一个现金红包到您微信上。最高88元。打卡后平台全部可见，目前没有删除功能。)</view>
				<view class="release-detail redbox">
					提示:只可以拍摄使用面膜时的照片。不可以发带有反动、政治、暴力、色情等所有违反国家法律法规的一切语言和图片，一经发现永久封号。平台有权根据情节严重程度报送公部门,并且推荐人也会有连带责任。
				</view>
			<button :disabled="disabled" :loading="ifloading" @tap="setbutton" class="social-button">发布</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				formData: Object,
				imageList: [],
				isWork: false,
				result: Object,
			}
		},
		computed:{
			Wheight(){
				return uni.getSystemInfoSync().windowHeight+'px'
			},
			fans() {
				return this.$store.state.fans
			}
		},
		methods:{
			async _WorkAdd(){
				if(!this.formData.content || !this.formData.pictures){
					this.ShowToast('请填写内容',1000,false,'none')
					return
				}
				const work = await this.$http.WorkAdd({content:this.formData.content,pictures:this.formData.pictures})
				this.result = work.data.result.info
				if(work.data.code==0){
					await this.$store.commit('getFans', {...this.fans, punch:this.fans.punch-1})
					this.isWork = !this.isWork
				}
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original','compressed'],
					sourceType: ['album','camera'],
					success: (res) => {
						uni.showLoading({title:'上传中,请稍后...',mask:true})
						var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: _config.url+'/v1/upload/images',
							filePath: imageSrc,
							fileType: 'image',
							name: 'file[0]',
							formData: {
								'type': 'work'
							},
							success: (res) => {
								let data = JSON.parse(res.data)
								if(data.code==0){
									uni.hideLoading()
								}
								this.imageList.push(imageSrc)
								this.formData.pictures = data.result.list.map(item=>{
									return item.file
								})
							},
							fail: (err) => {
								uni.hideLoading()
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			previewImage(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			close() {
				this.imageList = []
			},
			goconfirm() {
				this.isWork = !this.isWork
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.release{
		height: auto;
		min-height: 100%;
		background: $t-f8;
		&-box{
			width: 100%;
			height: 480upx;
			padding: 28upx;
			background-color: $t-f;
			@include flexs(column,space-between,center);
			textarea{
				width: 100%;
				max-height: 200upx;
			}
			&-choose{
				width: 100%;
				height: 220upx;
				@include flexs(row,space-between,center);		
					.addBox{
							width: 220upx;
							height: 220upx;
							cursor: pointer;
							display: flex;
							position: relative;
							.closeBtn{
								position: absolute;
								top: -20upx;
								right: -20upx;
							}
							image{
								width: 100%;
								height: 100%;
							}
							&#addBtn{
								background: #f2f2f2;
								justify-content: center;
								align-items: center;
								text{
									font-size: 80upx;
									color: #e5e5e5;
								}
								image{
									width: 52upx;
									height: 52upx;
									margin: auto;
								}
							}
						}
					}
				
		}
		&-detail{
			padding: 21upx 28upx  0;
			font-size: 20upx;
			color: #323232;
			&.redbox{
						font-size: 18upx;
						color: #FE4A4A;
					}
		}
		.social-button{
			margin-top: 336upx;
		}
	}
	
</style>