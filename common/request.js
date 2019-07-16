// export const request = async(this,url,query)=> {
//     console.log(this)
//     let page = 1
//     let loading = 1
//     let data = await this.$apis[url]({page,...query})
//     this.list = [...this.list,...data.result.list]
//     if (page == 1) {
//         this.total = data.result.total
//     }
//     loading = 0
//     if (this.list.length == this.total) {
//         loading = 2
//         return loading
//     }
//     page++
// }
// export default request