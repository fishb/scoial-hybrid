/**
 * 请求参数验证
 * params 的所有属性值都不能为空
 * 参数验证
 * 
 */
export default function paramsValidate(params) {
  let flag = false;  
  for(var key in params){
    if(params[key] != '0' && !params[key]){
      return true
    }
  }
  return flag
}
