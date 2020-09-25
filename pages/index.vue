<template>
  <div class="container">
    <p>Le contenu est : {{ getNomPokemon }} </p>
      <input v-model="getNomPokemon"/> 
    <button>Click ici</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name:'index',
  data(){
    return {
    }
  },
  methods:{
  },
  computed:{
    getNomPokemon:{
      get(){
        return this.$store.state.nomPokemon
      },
      set(value){
        return this.$store.commit('updateNomPokemon', value)
      }
    }
  }
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
