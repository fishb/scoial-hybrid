<template>
    <view class="hybrid-popup" :class="[type==='center'?'popup-center':'popup-bottom',bounce]"  @touchmove.stop.prevent="moveHandle">
        <view class="hybrid-popup-mask" @tap="Popup('')"></view>
        <view class="hybrid-popup-box" :class="{'pullup':type==='bottom','pullcenter':type==='center'}" :style="[{'width':boxWidth},{'height':boxHeight}]">
            <slot></slot>
            <view class="close" v-if="type==='bottom'" @tap="Popup('')">
                <text class="iconfont icon-guanbi1"></text>    
            </view>
            <view class="closeMask" v-if="type==='center'" @tap="Popup('')">
                <image src="/static/close.png"></image>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            bounce: 'none'
        }
    },
    watch:{
        show(newvalue,oldvalue){
            if(newvalue==true){
                this.bounce = 'show';
            }
            if(newvalue==false){
                if(this.type == 'bottom'){
                    this.bounce = 'hide'
                    setTimeout(()=>{
                        this.bounce = 'none'
                    },200)
                }else{
                    this.bounce = 'none'
                }
            }
        }
    },
    props:{
        // 显示隐藏
        show:{
            type: [String,Boolean],
            default: false
        },
        type:{
            type: String,
            default: 'center'
        },
        boxWidth:{
            type: [String,Number],
            default: 'auto'
        },
        boxHeight:{
            type: [String,Number],
            default: 'auto'
        }
    },
    methods:{
        Popup(){
            this.$emit('hidePopup')
        },
        moveHandle() { //阻止遮罩下方的页面滚动
        },
        
    }
}
</script>

<style lang="scss">
.hybrid-popup {
     position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
        box-sizing: border-box;
        display: flex;
        z-index: 999;
   &.popup-center{
       justify-content: center;
       align-items: center;
   }
  &-mask{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
     background-color: rgba(0,0,0,0.3);
  }
  &-box{
      background-color: #ffffff;
       z-index: 999;
       &.pullup{
           position: fixed;
           bottom: 0;
            .close{
                position: absolute;
                right: 36upx;
                top: 36upx;
                color: #575757;
                text{
                    font-size: 32upx;
                }
            }
       }
       &.pullcenter{
           position: relative;
           border-radius:10upx;
           .closeMask{
               position: absolute;
               left: 50%;
               bottom: -126upx;
               margin-left: -38upx;
               image{
                   width: 76upx;
                   height: 76upx;
               }
           }
       }
  }
}
.popup-bottom{
    &.show{
        display: flex;
        animation: bounce-in 0.2s;
    }
    &.hide{
        animation: bounce-in 0.2s reverse;
    }
    &.none{
        display: none;
    }
}
.popup-center{
    &.show{
        display: flex;
    }
    &.none{
        display: none;
    }
}
@keyframes bounce-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>