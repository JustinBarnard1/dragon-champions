import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../services/axiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    champions: [],
    game: {
      dragon: "",
      champion: ""
    }
  },
  mutations: {
    setAllDragons(state, dragons) {
      state.dragons = dragons
    },
    setAllChampions(state, champions){
      state.champions = champions
    }
  },
  actions: {
    async getAllDragons({ commit, dispatch }) {
      let res = await api.get('dragons')
      commit("setAllDragons", res.data)
    },
    async getAllChampions({commit, dispatch}){
      let res = await api.get('champions')
      commit('setAllChampions', res.data)
    }
  },
  modules: {
  }
})
