<template>
	<view class="container address">
		<!-- #ifndef MP-WEIXIN -->
		<hybrid-title class="address-title" :hasTitle="true" :hasStatus="true" :titleHeight="titleHeight" contentTitle="收货地址管理"
		 :leftIcon="['icon-back']" @icon-back="$navTo('')">
			<view slot="right" class="address-title-dot" @tap="$navTo('/pages/mine/mine_address_edit')">
				<text>新增</text>
			</view>
		</hybrid-title>
		<view class="address-list" :style="{'margin-top':contentMarin}">
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="address-edit" @tap="$navTo('/pages/mine/mine_address_edit')">
				<text class="address-edit-default">{{default_address?`默认地址:${default_address.province+default_address.city+default_address.county}`:'暂无默认地址'}}</text>
				<text class="address-edit-more">新增收货地址</text>
			</view>
			<view class="address-list">
				<!-- #endif -->
				<view class="list-item" v-for="(item,index) in list" :key="index" @tap="$navTo(`/pages/mine/mine_address_edit?id=${item.id}`)">
					<view class="list-item-main">
						<view class="list-item-main-info">
							<view class="list-name">
								<text>{{item.username}}</text><text class="default" v-if="item.is_default">默认</text>
							</view>
							<text class="list-phone">{{item.tel}}</text>
						</view>
						<text class="list-item-main-text">
							{{item.province}}{{item.city}}{{item.county}}{{item.address}}
						</text>
					</view>
					<image src="/static/user_icon/edit.png"></image>
				</view>
			</view>
		</view>
</template>

<script>
	import {
		mapState,mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				list: []
			}
		},
		computed: {
			...mapState(['systemInfo','flashAddress']),
			titleHeight() { // 搜索栏的高度
				return uni.upx2px(88) + 'px'
			},
			// #ifndef MP-WEIXIN
			contentMarin() { //滑块距离高度
				return uni.upx2px(88) + this.systemInfo.statusBarHeight + 'px'
			},
			// #endif
			default_address(){
				return this.list.find(i=>i.is_default==1)?this.list.find(i=>i.is_default==1):''
			}
		},
		watch: {
			// 监听收货地址更新
			flashAddress(newValue, oldValue) {
				if(newValue){
					this._AddressList()
				}	
			}
		},
		methods: {
			...mapMutations(['SET_FLASHADDRESS']),
			async _AddressList() {
				const res = await this.$apis.AddressList()
				if (res.code === 0) {
					this.SET_FLASHADDRESS(false)
					this.list = res.result.list
				}
			}
		},
		onLoad() {
			this._AddressList()
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		min-height: 100%;
		height: auto;
		background-color: $t-f8;

		&-title {
			&-dot {
				margin: 0 28upx;
				@include flexs(column, center, center);
				color: #ffffff;

				text {
					font-size: 29upx;
				}
			}
		}

		&-edit {
			width: 100%;
			height: 100upx;
			background: $t-f;
			margin: 0 auto 20upx;
			padding: 0 28upx;
			@include flexs(row, space-between, center);

			&-default {
				flex: 1;
				font-size: 29upx;
				color: $t-8;
				@include wrap(1);
			}

			&-more {
				margin-left: 28upx;
				font-size: 29upx;
				color: #FF0039;
			}
		}

		&-list {
			padding: 24upx 28upx;

			.list-item {
				width: 694upx;
				padding: 28upx;
				margin-bottom: 24upx;
				height: 206upx;
				background-color: $t-f;
				border-radius: 4upx;
				@include flexs(row, space-between, center);

				&-main {
					width: 100%;
					height: 100%;
					@include flexs(column, space-around, center);

					&-info {
						width: 100%;
						@include flexs(row, space-between, flex-start);
						font-size: 33upx;
						color: #000000;

						.list-name {
							.default {
								margin-left: 16upx;
								background: #FDDDE6;
								border-radius: 4px;
								font-size: 21upx;
								color: #FF0039;
								line-height: 33upx;
								text-align: center;
								padding: 5upx 6upx;
							}
						}
					}

					&-text {
						width: 100%;
						font-size: 29upx;
						color: #787878;
						@include wrap(2);
					}
				}

				image {
					margin-left: 28upx;
					width: 36upx;
					height: 36upx;
				}
			}
		}
	}
</style>
