import Index from '../pages/Index/index.vue'
import Category from '../pages/Category/category.vue'
import Things from '../pages/Things/Things.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import CategotyDetail  from '../pages/Category/CategotyDetail.vue'

export default [
  {
    path: '/index',
    component: Index, 
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category, 
    redirect: '/category/categorydetail/0',
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/category/categorydetail/:id',
        component: CategotyDetail,
        meta: {
          isShowFooter: true
        }
      }
    ]
  },
  {
    path: '/things',
    component: Things, 
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcar',
    component: ShopCar, 
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/', // 项目根路径
    redirect: '/index'
  },
]