<template>
  <div class="container">
    <p>Le contenu est : {{ nomPokemon }} </p>
          <p> Hello {{ uni }}</p>
      <input v-model="nomPokemon"/> 
    <button @click="getPokemonName">Click ici</button>
      <button @click="onShowPokemonList">Click Here to discover a list of Pokemons</button>
    <div v-if="list">  
      <p v-for="pokemon in allPokemons" :key="pokemon.id"> {{ pokemon.name }}</p>
  </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters  } from 'vuex'

export default {
  name:'index',
  data(){
    return {
      title: '',
      list: false,
      uni: this.$store.getters.uni.nom
    }
  },
  methods:{
    getPokemonName(){
      this.$store.dispatch('getNomDePokemon', this.nomPokemon)
    },
       ...mapActions(["fetchPokemons"]),
    onShowPokemonList : function(){
      if(!this.list){
        this.list = true
      }else{
        this.list = false
      }
    }
  },
  computed:{
    ...mapGetters(["allPokemons"]),

    nomPokemon:{
      get(){
        return this.$store.state.nomPokemon
      },
      set(value){
        return this.$store.commit('updateNomPokemon', value)
      }
    }
  },
    created() {
    this.fetchPokemons();
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
