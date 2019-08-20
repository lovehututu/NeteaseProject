import Mock from 'mockjs'
import category from './categoty.json'
import cate from './cate.json'

//获取首页商品分类
Mock.mock('/cate', { code: 0, data: category.kingKongModule.kingKongList })

//获取分类页商品分类列表
Mock.mock('/categorys', { code: 0, data: cate.categoryL1List })

//获取分类页商品分类信息
Mock.mock('/categoryinfo', { code: 0, data: cate.categoryL2List })
