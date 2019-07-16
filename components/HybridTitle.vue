<template>
    <view :class="['hybrid-title',hasFixed?'hybrid-title-fixed':'']">
        <!-- 状态栏显示 -->
        <!-- #ifndef  H5 -->
        <view class="hybrid-title-status" v-if="hasStatus" :style="{'height':systemInfo.statusBarHeight+'px'}" ></view>
        <!-- #endif -->
        <!-- 头部自定义高度、自定义图标、标题slot插槽 、-->
        <view class="hybrid-title-header" :style="'height:'+titleHeight+';background:'+backgroundColor" v-if="hasTitle">
            <slot name="left"></slot>
            <block v-if="leftIcon.length">
            <view class="hybrid-title-header-btns" @tap="onClickLeft(item)" v-for="(item,index) in leftIcon" :key="index">
                <view v-if="item">
                    <view :class="['iconfont',item]"></view>
                </view>
            </view>
            </block>
            <view class="hybrid-title-header-container" :style="'opcity:'+opcity">
                {{contentTitle}}
                <slot name="title"></slot>
            </view>
            
            <!-- #ifndef MP-WEIXIN -->
            <block v-if="rightIcon.length">
                <!-- #ifdef H5 -->
                <view class="hybrid-title-header-btns" @tap="onClickRight(item)" v-for="(item,key) in rightIcon" :key="'s_'+key">
                <!-- #endif -->
                <!-- #ifndef H5 -->
                <view class="hybrid-title-header-btns" @tap="onClickRight(item)" v-for="(item,key) in rightIcon" :key="key">
                <!-- #endif -->
                <view v-if="item">
                    <view :class="['iconfont',item]"></view>
                </view>
            </view>
            </block>
            <!-- #endif -->
             <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['systemInfo'])
    },
    props:{
        // 是否固定在顶部，默认固定
        hasFixed:{
            type: [String,Boolean],
            default: true
        },
        // 是否显示状态栏，默认显示
        hasStatus:{
            type: [String,Boolean],
            default: true
        },
        // 是否显示标题栏，默认不显示
        hasTitle:{
            type: [String,Boolean],
            default: false
        },
        // 标题的背景颜色
        backgroundColor:{
            type: String,
            default: '#010101'
        },
        // container 
        opcity:{
            type: [String,Number],
            default: 0
        },
        // 自定义导航栏的高度，默认44px
        titleHeight:{
            type: [String,Number],
            default: '44px'
        },
        //左侧图标
        leftIcon: {
			type: [String,Array],
			default: ''
        },
        //标题
        contentTitle: {
            type: String,
			default: ''
        },
        //右侧图标
        rightIcon:{
            type: [String,Array],
            default: ''
        }
    },
    methods:{
        // 左侧点击事件
        onClickLeft(item){
            this.$emit(item)
        },
        // 右侧点击事件
        onClickRight(item){
            this.$emit(item)
        }
    }
}
</script>

<style lang="scss">
/** hybrid-title组件样式 **/
.hybrid-title {
  display: block;
  box-sizing: border-box;
  width: 100%;
  &-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  &-status {
    width: 100%;
    background: #101010;
  }
  &-header {
    @include flexs(row, center, center);
    width: 100%;
    height: 88upx;
    &-btns {
      margin: 10upx;
      width: 70upx;
      height: 70upx;
      color: #ffffff;
      @include flexs(row, center, center);
      & > view {
        width: 70upx;
        height: 70upx;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        @include flexs(row, center, center);
      }
    }
    &-container {
      flex: 1;
      /* #ifndef MP */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* #endif */
      /* #ifdef MP */
      text-align: left;
      /* #endif */
      font-size: 36upx;
      color: #ffffff;
    }
  }
}
</style>