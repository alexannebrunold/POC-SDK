import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
const unicorn = require('pocnuxtpackage')
console.log(unicorn)

Vue.use(Vuex)

export const state = () => ({
  loader:false,
  nomPokemon:'Pikachu',
  pokemons: [],
})

export const getters = {
  allPokemons: (state) => state.pokemons,
  uni: () => unicorn
}

export const mutations = {
  getNomPokemon(state, filter){
    state.filter = filter; 
  },
  updateNomPokemon(state, value){
    state.nomPokemon = value
  },
  setPokemons: (state, pokemons) => (state.pokemons = pokemons),
}

export const actions = {
  gtNomDePokemon:({ commit }) => {
    commit('getNomPokemon')
 },
 async fetchPokemons({ commit }) {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(response.data.results);
    commit("setPokemons", response.data.results);
    return response;
  } catch (err) {
    commit("setPokemons", null);
    throw "Unable to fetch current Pokemon";
  }
},
}

