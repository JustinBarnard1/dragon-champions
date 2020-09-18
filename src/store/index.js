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
    activeDragon: null,
    activeChampion: null,
    activeGame: {}
  },
  mutations: {
    setAllDragons(state, dragons) {
      state.dragons = dragons
    },
    setAllChampions(state, champions) {
      state.champions = champions
    },
    setGameDragon(state, dragonid) {
      state.game.dragon = dragonid
    },
    setGameChampion(state, championid) {
      state.game.champion = championid
    },
    setActiveGame(state, gameId) {
      state.activeGame = gameId
    },
    setActiveChampion(state, champion) {
      state.activeChampion = champion
    },
    setActiveDragon(state, dragon) {
      state.activeDragon = dragon
    }

  },
  actions: {
    async getAllDragons({ commit, dispatch }) {
      let res = await api.get('dragons')
      commit("setAllDragons", res.data)
    },
    async getAllChampions({ commit, dispatch }) {
      let res = await api.get('champions')
      commit('setAllChampions', res.data)
    },
    selectDragon({ commit, dispatch }, dragon) {
      console.log(dragon);
      console.log(dragon.id);
      commit("setGameDragon", dragon.id)
      commit("setActiveDragon", dragon)
    },
    selectChampion({ commit, dispatch }, champion) {
      console.log(champion)
      console.log(champion.id);
      commit("setGameChampion", champion.id)
      commit("setActiveChampion", champion)
    },
    async startGame({ commit, dispatch }, gameData) {
      let res = await api.post('games', gameData)
      commit('setActiveGame', res.data)
      router.push({ name: 'Game', params: { id: res.data.id } })
    },
    async attack({ commit, dispatch }, attackData) {
      let res = await api.put('games/' + attackData.id, attackData.damage)
      console.log(res);
    }
  },
  modules: {
  }
})
