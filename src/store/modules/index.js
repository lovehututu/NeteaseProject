//使用msite管理模块相关状态数据的vuex
import {
  RECEIVE_CATEGORY,
} from '../mutation-types'

import {
  reqCategory,
} from '../../api'

const state = {
  category:[], //首页商品分类列表
}
const mutations = {
  [RECEIVE_CATEGORY](state, info) {
    state.category = info
  }
}
const actions = {
  async getCategory({commit},callback) {
    const result = await reqCategory()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORY, result)
      typeof callback === 'function' && callback()
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