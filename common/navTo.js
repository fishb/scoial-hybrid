import store from '@/store'
export const navTo = function(url,auth,type='navigateTo'){
	if(!url){
		uni.navigateBack()
	}else if(auth && !store.getters.hasLogin){
		uni.navigateTo({
            url: '/pages/register/login_index',
            animationType: "fade-in",
            animationDuration: 300
		})
	}else{
		uni[type]({
			url
		})
	}
}
export default navTo