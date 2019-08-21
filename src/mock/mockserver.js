import Mock from 'mockjs'
import category from './categoty.json'
import cates from './CategoryList1.json'

//获取首页商品分类
Mock.mock('/cate', { code: 0, data: category.kingKongModule.kingKongList })

//获取分类页商品分类列表
Mock.mock('/categorys', { code: 0, data: cates })

