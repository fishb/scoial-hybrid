export const phone_regular = new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)
export const id_regular = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)
export const nameReg = new RegExp(/^[\u4E00-\u9FA5]{2,4}$/) // 中文姓名正则
export const email = new RegExp(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/) // 邮箱正则