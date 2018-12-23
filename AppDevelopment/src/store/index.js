import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    display: 'Vue',
    quesShow: 'latest'
  },
  mutations: {
    changeDisplay (state, displayName) {
      state.display = displayName
    },
    changeMainShow (state, quesShow) {
      state.quesShow = quesShow
    }
  }
})