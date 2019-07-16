export const toast = (query)=> {
    if(query.title.length<7){
        uni.showToast({
            ...query,
			image: query.icon=='none'?'/static/toclose.png':''
		})
		return
    }
	uni.showToast({
		...query
	})
}
export default toast

