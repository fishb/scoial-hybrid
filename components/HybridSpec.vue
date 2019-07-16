<template>
    <view class="cart">
        <view class="cart-box">
            <image :src="selectd.goods_headimg?selectd.goods_headimg:defaultImg"></image>
            <view class="cart-select">
                <view class="cart-select-title">
                    ¥<text>{{selectd.goods_price?selectd.goods_price:defaultPrice}}</text></view>
                <text class="cart-select-label">
                    {{skuselectName}}
                </text>
            </view>
        </view>
        <view class="cart-label" v-for="(info,sIndex) in spec" :key="sIndex" :data-key="info.id">
            <text>{{info.name}}</text>
            <view class="cart-label-way">
                <view class="way-item" v-for="(item,itemIndex) in info.content" :key="itemIndex"
                    @tap="SpecSelect(info.id,item.id,sIndex,itemIndex)"
                    :class="[ parentIdArr[sIndex] == info.id && childIdArr[sIndex] == item.id ? 'active':'']"
                    :data-key="item.id">{{item.name}}</view>
            </view>
        </view>
        <view class="cart-num">
            <text>数量</text>
            <view class="cart-num-control">
                <view class="algorithm" @tap="amountAdd(-1)">－</view>
                <view class="num">{{selectStock}}</view>
                <view class="algorithm" @tap="amountAdd(1)">＋</view>
            </view>
        </view>
        <button class="cart-button" :class="{'success':cartdisabled.title=='立即购买'}" :disabled="cartdisabled.disabled" @tap="specButton(type)">{{cartdisabled.title}}</button>
    </view>
</template>

<script>
// 最终传给父组件
//     规格id和number
// 然后父组件拿到id和数量进行逻辑操作
    export default {
        props: {
            type:{
                type: String,
                default: 'CartSpec'
            },
            //商品可选的规格组合
            skuList: {
                type: [Object,Array],
                default: []
            },
            //规格列表
            spec: {
                type: [Object,Array],
                default: []
            },
            // 规格的默认图片
            defaultImg:{
                type: String,
                default: ''
            },
            defaultPrice:{
                type: [String,Number],
                default: 0
            }
        },
        data() {
            return {
                parentIdArr: [], //选择的规格大项id
                childIdArr: [], //是否选中 因为不确定是多规格还是单规格，所以这里定义数组来判断 存储的是索引  选择规格子项id
                selectName: [], //选中的规格name
                selectStock: 1 //选择数量
            }
        },
        computed: {
            disabled(){
                return !this.spec.length? false: 
                !this.selectd || this.selectd.stock == 0
            },
            title(){
                return !this.spec.length?(this.type=='CartSpec'?'加入购物车':'立即购买'):(!this.selectd?'请选择商品规格':(this.selectd.stock == 0?'库存不足':(this.type=='CartSpec'?'加入购物车':'立即购买')))
            },
            cartdisabled() { //加入购物车,立即购买按钮是否可用
                return {
                    disabled: this.disabled,
                    title: this.title
                }
            },
            selectd() { //最终选中的项
                if (!this.childIdArr.length || this.childIdArr.length !== this.spec.length) {
                    return ''
                }
                if (this.childIdArr.length == this.spec.length) {
                    let skuString = this.childIdArr.join('_')
                    return this.skuList.find(i => i.specs == skuString)
                }
            },
            skuselectName() {
                // 如果只有一条规格
                if(!this.spec.length){
                    return ''
                }
                //从skulist 查找到值push进来  三种选择状态
                if (!this.selectName.length) {
                    return '请选择' + (this.spec.map(item => {
                        return item.name
                    }))
                }
                if (this.selectName.length && this.selectName.length === this.spec.length) {
                    return '已选择' + this.selectName
                }
                //如果有未选项 则返回的是规格name 否则返回selectName[index]值
                if (this.selectName.length && this.selectName.length !== this.spec.length) {
                    return '请选择' + (this.spec.map((item, index) => {
                        if (!this.selectName[index]) {
                            return item.name
                        }
                        return this.selectName[index]
                    }))
                }
            }
        },
        methods: {
            // 把接口参数传到父组件
            specButton(emit){
                console.log(this.selectStock,this.selectd.id)
                this.$emit(emit,{goods_num:this.selectStock,goods_sku_id:this.selectd.id})
            },
            //选择规格
            SpecSelect(parentId, childId, parentIndex, childIndex) { 
                this.$set(this.parentIdArr, parentIndex, parentId)
                this.$set(this.childIdArr, parentIndex, childId)
                this.$set(this.selectName, parentIndex,
                    ((this.spec.find(i => i.id == parentId)).content.find(i => i.id == childId)).name
                )
                this.selectStock = 1  //重置数量
            },
            amountAdd(num) { //增减
                if (!this.selectd) {
                    return
                }
                if (this.selectStock == 1 && num == -1) {
                    this.$toast({ title: '最少购买1件哦!', icon: 'none' })
                    return
                }
                if (this.selectd && this.selectStock >= this.selectd.stock && this.selectd.stock !== -1 && num == 1) {
                    return
                }
                this.selectStock += num
            }
        }

    }
</script>

<style lang="scss">
    .cart {
        width: 100%;
        padding: 0 28upx;
        @include flexs(column, flex-start, center);

        &-box {
            width: 100%;
            margin-bottom: 28upx;
            padding-bottom: 32upx;
            border-bottom: 2upx solid #F6F6F6;
            @include flexs(row, flex-start, center);

            image {
                width: 184upx;
                height: 184upx;
                border-radius: 4upx;
                margin-top: -34upx;
                margin-right: 40upx;
            }

            .cart-select {
                &-title {
                    font-size: 25upx;
                    color: #F3022F;

                    text {
                        font-size: 42upx;
                    }
                }

                &-label {
                    font-size: 25upx;
                    color: #3C3C3C;
                }
            }
        }

        &-label {
            width: 100%;
            @include flexs(column, flex-start, flex-start);
            margin-bottom: 48upx;

            text {
                font-size: 25upx;
                color: #B2B2B2;
                line-height: 29upx;
                margin-bottom: 28upx;
            }

            &-way {
                width: 100%;
                @include flexs(row, flex-start, center);
                flex-wrap: wrap;

                .way-item {
                    width: 138upx;
                    height: 60upx;
                    margin-right: 22upx;
                    border: 2upx solid #000000;
                    border-radius: 6upx;
                    font-size: 25upx;
                    color: #333333;
                    text-align: center;
                    line-height: 60upx;

                    &.active {
                        color: $t-f;
                        border-color: #F3022F;
                        background-color: #F3022F;
                    }
                }

            }
        }

        &-num {
            width: 100%;
            height: 70upx;
            margin-top: 12upx;
            @include flexs(row, space-between, center);

            text {
                font-size: 25upx;
                color: #B2B2B2;
            }

            &-control {
                width: 230upx;
                height: 70upx;
                @include flexs(row, space-between, center);
                border: 2upx solid #E7E7E7;
                border-radius: 6upx;
                font-size: 33upx;
                color: #333333;

                .algorithm {
                    flex: 1;
                    height: 70upx;
                    line-height: 70upx;
                    text-align: center;
                }

                .num {
                    flex: 1;
                    height: 70upx;
                    line-height: 70upx;
                    text-align: center;
                    border-left: 2upx solid #E7E7E7;
                    border-right: 2upx solid #E7E7E7;
                }
            }
        }

        &-button {
            width: 100%;
            background-color: #333333;
            border-radius: 4upx;
            color: $t-f;
            font-size: 33upx;
            line-height: 104upx;
            margin: 66upx 0 42upx;

            &.success {
                background-color: #F3022F;
            }

            &:after {
                display: none;
            }
        }
    }
</style>