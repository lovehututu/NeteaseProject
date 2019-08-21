//使用msite管理模块相关状态数据的vuex
import {
  RECEIVE_CATEGORYS,
} from '../mutation-types'

import {
  reqCategorys, 
} from '../../api'

const state = {
  categorys: [], //商品分类列表
}
const mutations = {
  [RECEIVE_CATEGORYS](state, info) {
    state.categorys = info
  }
}
const actions = {
  async getCategorys({ commit },cb) {
    const result = await reqCategorys()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, result.data)
      cb()
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