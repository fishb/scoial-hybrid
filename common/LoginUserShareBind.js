import store from '@/store'
export const LoginUserShareBind = ((query)=>{
    store.commit('SET_TOKEN',query.token)
    store.commit('SET_USERINFO',query.userinfo)
    if(query.url){
        uni.switchTab({
            url: '/pages/mine/mine'
        })
    }else{
        uni.navigateBack({
            delta: query.num?query.num:1
        })
    }
})
export default LoginUserShareBind

//     // export const Fans = (that,data,token,num=1,url) => {
//     //     that.$store.commit('getToken',token)    //登录注册时的token
//     //     that.$store.commit('getFans',data)   //登陆注册时的用户信息
//     //     // 登录后如果有sc  并且 share_code不大于1就绑定推荐人
//     //     if(that.$store.state.sc && that.$store.state.sc !== that.$store.state.fans.share_code && that.$store.state.fans.share_id == 0 ){					
//     //         that._MyBind(that, that.$store.state.sc)
//     //     }
//     //     that.$store.commit('getSc','')
//     //     that.$store.commit('getAddress','')  
//     //     if(url){
//     //         uni.switchTab({
//     //             url: '/pages/mine/mine'
//     //         })
//     //     }else{
//     //         uni.navigateBack({
//     //             delta: num
//     //         })
//     //     }
//     // }
// })

// export default new LoginUserShareBind()