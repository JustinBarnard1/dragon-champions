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
    },
    setGameDragon(state, dragonid){
      state.game.dragon = dragonid
    },
    setGameChampion(state, championid){
      state.game.champion = championid
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
    },
    selectDragon({commit, dispatch}, dragonid){
      commit("setGameDragon", dragonid)
    },
    selectChampion({commit, dispatch}, championid){
      commit("setGameChampion", championid)
      console.log(this.state.game);
    }
  },
  modules: {
  }
})
