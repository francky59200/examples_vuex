<template>
  <v-container id="CounterHot">
    <p>{{ count }}</p>
    <v-btn @click="increment" class="mr-3"> add </v-btn>
    <v-btn @click="decrement"> Remove </v-btn>
  </v-container>
</template>

<script>
import {mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
        'count'
    ])
  },
  methods: mapActions([
      'increment',
      'decrement'
  ])
}

// deux methodes pour ajouter les map fonctions dans le composant soit avec le spread operator ...map<fonction>
// directement dans l'objet computed ou methods ex. computed :{...map()} ce qui veut dire copie ou merge ces actions ou ces getters a l'interieur de l'objet
// methods ou computed
// ou directement mais sans le spread operator sans besoin de copier a l'interieur de computed ex computed: map() les deux methodes fonctionnent
</script>

<style>

</style>