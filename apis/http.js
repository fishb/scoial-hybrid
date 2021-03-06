import store from "@/store"
function HTTP(obj, config) {

	let defaultConfig = {
		isRes: false,
		loading: false
	}

	config = { ...defaultConfig,
		...config
	}


	// 如果需要显示loading,mask防止点击穿透
	config.loading && uni.showLoading({
		title: '加载中',
		mask: true
	});

	return new Promise((resolve, reject) => {

		let options = {
			url: "",
			method: "GET",
			data: {},
			dataType: "json",
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'time': new Date().getTime(),
				'version': '1.0.0',
				'platform': JSON.stringify(uni.getSystemInfoSync()),
				'token': store.state.token
			},
			success: (res) => {
				console.log("HTTP请求结果：",res)
				uni.hideLoading();
				// 状态码为200
				if (res.statusCode == 200) {
					let data = res.data;
					//自动校验用户是否登录过期
					// if (data.code == "001") {
					// 	uni.showToast({
					// 		title: '登录失效',
					// 		icon: 'none',
					// 		duration: 2000
					// 	})
					// 	setTimeout(()=>{
					// 		store.dispatch("reLogin");
					// 	},2000)
					// 	return;
					// }
					// else {
					if (data.code == 0 || data.code == 8) {
						resolve(data)
					}else if(data.code == 5 ){
						store.commit('SET_TOKEN','')
					}else{
						uni.showToast({
							title: data.msg,
							icon: "none",
							duration: 2000
						})
						reject(data.msg);
					}
					//}
				} else {
					reject(res.data.msg)
					//reject("HTTP:状态码异常！");
				}
			},
			fail: (err) => {
				uni.hideLoading();
				uni.showToast({
					title: "网络异常，请稍后再试!",
					icon: "none",
				})
				reject("网络异常，请稍后再试!");
			},
			complete: () => {}
		}

		options = { ...options,
			...obj
		};
		
		const OPENID = uni.getStorageSync("openId");
		if (OPENID) options["header"]["openId"] = OPENID;

		if (options.url && options.method) {
			uni.request(options);
		} else {
			uni.showToast({
				title: 'HTTP：缺失参数',
				icon: "none",
				duration: 2000
			})
		}
	})

}



export default {
	GET(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "GET"
		}, config);
	},
	POST(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config);
	}
}