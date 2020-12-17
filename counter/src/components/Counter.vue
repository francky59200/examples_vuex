<template>
  <v-container id ="Counter" class="text-center">
    <p>{{ count }}</p>
    <v-btn @click="addNumber">ADD</v-btn>
    <v-btn @click="RemoveNumber">REMOVE</v-btn>
  </v-container>

</template>

<script>
import store from '../store/store'
import * as type from '../store/actions'
import { mapState } from 'vuex'

export default {
  name: 'Counter',
  // dans le computed apres la mutation dans le store on lance le mapstate({}) qui permet de recupéré le nouveau state mis a jour
  computed : mapState({
    count : function (state) {
      if(state.count < 0 ){
        state.count = 0
      }
      return state.count
      // on peut aussi récuéré le store de cette façon lorsque le nom de la propriété est le même que celui du store dans un tableau mapstate([ count ])
    }
  }),
  // creation des fonctions actions qui permettent de lancer le dispatch action sur le store avec le type d'action et l'amount qui est le payload (data) qui
  // modifie le state le type d'action appele dans actions.js l'action correspondante qui lui appele dans le store.js la fonction de l'action crée dans l'objet
  //des actions qui lui a son tour fait un commit de mutation pour modifier le state.
  methods : {
    addNumber(){
      store.dispatch({
        type: type.INCREMENT,
        amount: 20
      })
    },
    RemoveNumber(){
      store.dispatch({
        type: type.DECREMENT,
        amount: 20
      })
    }
  }
}

</script>

<style>

</style>