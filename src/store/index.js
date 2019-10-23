import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollY: 0 //滚动距离
  },
  mutations: {
    SET_SCROLL_Y: (state, value) => {
      state.scrollY = value
    }
  },
  actions: {
    setScrollY({ commit }, value) {
      commit('SET_SCROLL_Y', value)
    }
  },
  modules: {}
})
