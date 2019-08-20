//使用msite管理模块相关状态数据的vuex
import {
  RECEIVE_CATEGORYS,
} from '../mutation-types'

import {
  reqCategorys, 
} from '../../api'

const state = {
  categorys: [], //首页商品分类列表
}
const mutations = {
  [RECEIVE_CATEGORYS](state, info) {
    state.categorys = info
  }
}
const actions = {
  async getCategorys({ commit }, callback) {
    const result = await reqCategorys()
    if (result.code === 0) {
      console.log(result)
      commit(RECEIVE_CATEGORYS, result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}