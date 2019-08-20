//使用msite管理模块相关状态数据的vuex
import {
  RECEIVE_KEYS,
  RECEIVE_KEYSGUIDE
} from '../mutation-types'

import {
  reqSearch,
  reqSearchGuide
} from '../../api'

const state = {
  keywordPrefix: [],
  keywordPrefixGuide:{},
  placeholder:''
}
const mutations = {
  [RECEIVE_KEYS](state, info) {
    state.keywordPrefix = info
  },
  [RECEIVE_KEYSGUIDE](state, info) {
    state.keywordPrefixGuide = info
    state.placeholder = info.defaultKeyword.keyword
  }
}
const actions = {
  async getsearchkeywords({commit},state) {
    const result = await reqSearch(state)
    commit(RECEIVE_KEYS, result)
  },
  async getsearchkeywordsguide({commit}) {
    const result = await reqSearchGuide()
    if (result.code === '200') {
      commit(RECEIVE_KEYSGUIDE, result.data)
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