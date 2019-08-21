//包含多个请求函数的模块  函数的返回值都是promise对象
import axios from './ajax.js'
const BASE = '/api'

//mock首页商品分类列表
export const reqCategory = () => axios('/cate')

//mock商品分类
export const reqCategorys = () => axios('/categorys')

//mock商品分类信息
export const reqCategoryInfo = () => axios('/categoryinfo')

//搜索商品
// export const reqSearch = (keywordPrefix) => axios({
//   url: BASE+'/xhr/search/searchAutoComplete.json',
//   params:{
//   keywordPrefix
//   }
// })
export const reqSearch = (keywordPrefix) => axios({
  url: BASE + '/xhr/search/searchAutoComplete.json?keywordPrefix=' + keywordPrefix
})

//默认搜索列表
export const reqSearchGuide = () => axios(BASE + '/xhr/search/init.json')


