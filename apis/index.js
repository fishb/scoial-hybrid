import http from "./http.js";
const request = {
    baseUrl: 'http://api.tianshic.com'
}

const axios = (url,data)=> {
    return http.POST(`${request.baseUrl}${url}`,data);
}

export const ShopInit = (data) => axios(`/v1/shop/init`, data); //初始化
export const shopList = (data) => axios(`/v2/goods/list`, data); 

//商品接口

export const GoodsInfo = (data) => axios(`/v2/goods/info`, data) // 商品详情
export const GoodsCollectAdd = (data) => axios(`/v2/goodsCollect/add`,data) //商品收藏
export const GoodsCollectDel = (data) => axios(`/v2/goodsCollect/del`,data) //取消收藏
export const GoodsCollectList = (data) => axios(`/v2/goodsCollect/list`,data) //收藏列表
export const GoodsCollectExist = (data) => axios(`/v2/goodsCollect/exist`,data) //商品收藏的状态

//注册登录接口、个人信息

export const SmsSend = (data) => axios(`/v1/sms/send`, data) //验证码
export const Register = (data) => axios(`/v1/fans/register`, data)  //注册
export const LoginIndex = (data) => axios(`/v1/fans/login`, data) //登陆
export const MyIndex = () => axios(`/v1/my/info`)  //个人信息
export const AddressList = () => axios(`/v1/address/list`)  //收货地址列表
export const AddressSave = (data) => axios(`/v1/address/save`,data)//添加、编辑收货地址
export const AddressDelete = (data) => axios(`/v1/address/delete`,data) //删除收货地址
export const AddressInfo = (data) => axios(`/v1/address/info`,data) //获取地址详情
export const MySetPayPwd = (data) => axios(`/v1/my/setPayPwd`,data) //钱包密码设置
export const ResetPayPwd = (data) => axios(`/v1/fans/resetPayPwd`,data) //重置钱包密码
export const MyCheckPayPwd = (data) => axios(`/v1/my/checkPayPwd`,data)//验证密码
export const WithdrawInfo = (data) => axios(`/v1/withdraw/info`,data) //提现信息
export const WithdrawAdd = (data) => axios(`/v1/withdraw/add`,data) //提现申请确认
export const LoginOut = (data) => axios(`/v1/my/logout`,data) //退出登录

//购物车接口

export const CartAdd = (data) => axios(`/v2/cart/add`,data) //加入购物车
export const CartEdit = (data) => axios(`/v2/cart/edit`,data) //修改购物车
export const CartClear = (data) => axios(`/v2/cart/clear`,data) //清空购物车
export const CartList = (data) => axios(`/v2/cart/list`,data) //购物车列表
export const CartCount = (data) => axios(`/v2/cart/count`,data) //购物车列表数量
export const CartDel = (data) => axios(`/v2/cart/del`,data) //购物车删除商品
export const CartSum = (data) => axios(`/v2/cart/sum`,data) //购物车总数量
export const CartSelected = (data) => axios(`/v2/cart/selected`,data) //购物车商品选中
export const CartExist = (data) => axios(`/v2/cart/exist`,data) //购物车是否存在

// 店铺接口

export const ShopHome = (data) => axios(`/v2/shop/home`,data) //店铺首页
export const ShopDetail = (data) => axios(`/v2/shop/detail`,data) //店铺详情

//消息接口

export const MessageIndex = () => axios(`/v2/message/index`) //消息首页
export const MessageList = (data) => axios(`/v2/message/list`,data) //消息列表