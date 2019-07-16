<template>
	<view class="container set">
        <view class="set-item" @tap="navTo('/pages/set/set_account_information')">
            <text>账号信息</text>
            <text class="iconfont icon-qianjin"></text>
        </view>
        <view class="set-item">
            <text>清除缓存</text>
            <text>7.11M</text>
        </view>
        <view class="set-item">
            <text>关于我们</text>
            <text class="iconfont icon-qianjin"></text>
        </view>

        <button class="set-button" @tap="_LoginOut">退出账号</button>
    </view>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default{
        data(){
            return{}
        },
        methods:{
            ...mapMutations(['SET_USERINFO','SET_TOKEN']),
            async _LoginOut(){
                let res = await this.$apis.LoginOut(
					// #ifdef APP-PLUS
					{
						client_id: plus.push.getClientInfo().clientid
					}
					// #endif
				)
				if (res.code == 0) {
                    this.SET_USERINFO('')
                    this.SET_TOKEN('')
					// this.$store.commit('getFans', '')
					// this.$store.commit('getToken', '')
					// this.$store.commit('getAddress', '')
					this.$navTo('/pages/mine/mine',false,'switchTab')
				}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .set{
        min-height: 100%;
        height: auto;
        background-color: $t-f8;
        &-item{
            width: 100%;
            height: 90upx;
            padding: 0 28upx;
            margin-bottom: 20upx;
            background-color: $t-f;
            @include flexs(row,space-between,center);
            font-size: 31upx;
            color: #333333;
            text{
                &:last-child{
                    color: #B8B8B8;
                }
            }
        }
        &-button{
            margin-top: 60upx;
            width: 684upx;
            height: 88upx;
            background: transparent;
            border: 2upx solid #000000;
            font-size: 33upx;
            color: #333333;
            text-align: center;
            line-height: 88upx;
            border-radius: 4upx;
        }
    }
</style>