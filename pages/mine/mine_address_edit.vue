<template>
	<view class="container address">
		<!-- #ifndef MP-WEIXIN -->
		<hybrid-title 
			class="address-title"
			:hasTitle="true" 
			:hasStatus="true" 
			:titleHeight="titleHeight"  
			:contentTitle="contentTitle" :leftIcon="['icon-back']" @icon-back="$navTo('')">
			<view slot="right" class="address-title-dot">
				<text @tap="_AddressDelete(options)" v-if="options">删除</text>
			</view>
		</hybrid-title>
		<view class="address-detail" :style="{'margin-top':contentMarin}">
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="address-edit"  @tap="_AddressDelete(options)" v-if="options">
			<text class="address-edit-default">删除当前地址</text>
			<text class="address-edit-more">删除</text>
		</view>
		<view class="address-detail">
		<!-- #endif -->
			<view class="address-detail-item">
				<text>收货人:</text>
				<input type="text" placeholder="请使用真实姓名" v-model="formData.username"/>
			</view>
			<view class="address-detail-item">
				<text>手机号码:</text>
				<input type="number" placeholder="请输入手机号码" v-model="formData.tel"/>
			</view>
			<view class="address-detail-item" @tap="showMulLinkageThreePicker">
				<text>所在地区:</text>
				<view>{{pickerText}}</view>
			</view>
			<view class="address-detail-item big">
				<text>详细地址:</text>
				<textarea type="text" placeholder="请输入详细地址" v-model="formData.address"/>
			</view>
		</view>

		<view class="address-switch">
			<text>设置为默认地址<text class="switch-text">(注:每次下单时都会使用该地址)</text></text>
			<switch color="#010101" :checked="formData.is_default" @change="switchChange"/>
		</view>

		<button :disabled="disabled" @tap="_AddressSave()" class="social-button">保存</button>

		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
         @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import { mapState,mapMutations } from 'vuex'
    import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
    import cityData from '@/common/city.data.js';
	export default {
		components: {
            mpvueCityPicker
        },
		data(){
			return{
				formData: {
					username: '',
					tel: '',
					city: '',
					county: '',
					province: '',
					address: '',
					is_default: 0
				},
				options: '',
				ifloading: false,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF'
			}
		},
		computed:{
			...mapState(['systemInfo']),
			contentTitle(){
				return this.options?'修改收货地址':'新增收货地址'
			},
			titleHeight(){  // 搜索栏的高度
				return uni.upx2px(88)+'px'
			},
			// #ifndef MP-WEIXIN
			contentMarin(){ //滑块距离高度
				return uni.upx2px(88)+this.systemInfo.statusBarHeight+'px'
			},	
			// #endif
			disabled(){  //是否让button处于禁用状态
				return this.paramsValidate(this.formData)
			},
			pickerText(){
				if (this.formData.province) {
					return this.formData.province + '-' + this.formData.city + '-' + this.formData.county
				} else {
					return '请选择所在地区'
				}
			}
		},
		methods: {
			...mapMutations(['SET_FLASHADDRESS']),
			switchChange(e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
				this.formData.is_default = e.target.value ?  1 : 0
			},
			// 三级联动选择
            showMulLinkageThreePicker() {
                this.$refs.mpvueCityPicker.show()
            },
            onConfirm(e) {
				let pickers = e.label.split('-');
				this.formData = { ...this.formData, province: pickers[0], city: pickers[1], county: pickers[2]}
			},
			async _AddressInfo(id) {
				let res = await this.$apis.AddressInfo({id})
				if(res.code===0){
					this.formData = res.result.info
					return
				}
				this.$toast({title:res.msg,icon:'none'})
			},
			async _AddressSave(){
				if(!this.formData.username){
					this.$toast({title:'姓名不能为空',icon:'none'})
					return
				}
				if(!this.Regular.phone_regular.test(this.formData.tel)){
					this.$toast({title:'手机格式错误',icon:'none'})
					return
				}
				if(!this.formData.province || !this.formData.city || !this.formData.county || !this.formData.address){
					this.$toast({title:'请填写详细地址',icon:'none'})
					return
				}
				let res = await this.$apis.AddressSave(this.formData)
				if (res.code === 0) {
					this.SET_FLASHADDRESS(true)
					// this.$store.commit('getAddress','default')
					// this.$store.commit('getUpdateaddress', true)
					await this.$toast({title:res.msg,icon: 'success'})
					uni.navigateBack()
					return
				}
				this.$toast({title:res.msg,icon:'none'})
			},
			_AddressDelete(id) {
				let that = this
				uni.showModal({
					title: '',
					content: '是否删除该地址',
					success:((resg)=>{
						if (resg.confirm) {
							deletes(id)
						} 
					})
				})
				async function deletes(id){
					console.log(this)
					let deleteS = await that.$apis.AddressDelete({id})
					if (deleteS.code === 0) {
						that.SET_FLASHADDRESS(true)
						if(!deleteS.result.list.length){
							console.log('没了地址了')
							// this.$store.commit('getAddress','none')
						}
						uni.navigateBack()
						return
					}
					that.$toast({title:deleteS.msg,icon:'none'})
				}
			}
		},
		onLoad(options){
			this.options = options.id ? options.id : ''
			// #ifdef MP-WEIXIN
			uni.setNavigationBarTitle({
				title: this.options?'修改收货地址':'新增收货地址'
			});
			// #endif	
			if(!this.options){
				return
			}
			this._AddressInfo(this.options)
		}
	}
</script>

<style lang="scss" scoped>
	$text-color: #010101;  // 字体烟色 
	.address{
		min-height: 100%;
		height: auto;
		background-color: $t-f8;
		&-title{
			&-dot{
				margin: 0 28upx;
				@include flexs(column,center,center);
				color: #ffffff;
				text{
					font-size: 29upx;
				}
			}
		}
		&-edit{
				width: 100%;
				height: 100upx;
				background: $t-f;
				margin: 0  auto 20upx;
				padding: 0 28upx;
				@include flexs(row,space-between,center);
				&-default{
					flex: 1;
					font-size: 29upx;
					color: $t-8;
					@include wrap(1);
				}
				&-more{
					margin-left: 28upx;
					font-size: 29upx;
					color: #FF0039;
				}
		}
		&-detail{
			width: 100%;
			height: 480upx;
			background-color: #ffffff;
			padding: 0 28upx;
			@include flexs(column,space-between,flex-start);
			&-item{
				width: 100%;
				height: 110upx;
				border-bottom: 2upx solid $t-f8;
				@include flexs(row,flex-start,center);
				font-size: 29upx;
				color: $text-color;
				&.big{
					height: 150upx;
					border-bottom: 0;
				}
				text{	
					width: 160upx;
				}
				input{
					flex: 1;
				}
				textarea{
					width: 100%;
					height: 150upx;
					padding: 56upx 0;
				}
			}
		}
		&-switch{
			width: 100%;
			margin: 26upx 0 42upx;
			background-color: $t-f;
			height: 110upx;
			padding: 0 28upx;
			@include flexs(row,space-between,center);
			font-size: 29upx;
			color: $text-color;
			.switch-text{
				margin-left: 15upx;
				font-size: 25upx;
				color: #D6D6D6;
			}
		}
	}
</style>