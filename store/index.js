import Vue from 'vue'
import Vuex from 'vuex'
// const unicorn = require('pocnuxtpackage')

Vue.use(Vuex)

export const state = () => ({
  loader:false,
  nomPokemon:'Pikavhu'
})

export const getters = {
}

export const mutations = {
  getNomPokemon(state, filter){
    state.filter = filter; 
  },
  updateNomPokemon(state, value){
    state.nomPokemon = value
  }
}

export const actions = {
  inString:({ commit }, hey) => {
    commit('increment', hey)
 }
}

