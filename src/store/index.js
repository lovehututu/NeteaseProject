/* 
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import index from './modules/index'
import cate from './modules/cate'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    index,
    cate,
    search
  }
})

//vuex多模块编程
//user:{}  =>  state.user.user._id