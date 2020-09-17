import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router"
import { api } from '../services/axiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    champions: [],
    game: {
      dragon: null,
      champion: null
    },
    activeGame:{}
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
    },
    setActiveGame(state, gameId){
      state.activeGame = gameId
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
    },
    async startGame({commit, dispatch}, gameData){
      let res = await api.post('games', gameData)
      commit('setActiveGame', res.data)
      router.push({name:'Game', params:{id: res.data.id}})
    }
  },
  modules: {
  }
})
