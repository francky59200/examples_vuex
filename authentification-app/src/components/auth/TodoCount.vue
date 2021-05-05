<template>
  <v-container style="text-align: center; margin-top: 2rem">
    <div id="counter">
      <h2 style="margin-bottom: 20px">{{ count }}</h2>
      <v-btn @click="increment" tile style="margin-right: 15px">Increment</v-btn>
      <v-btn @click="decrement" tile>Decrement</v-btn>
    </div>
    <div id="todo" style="margin-top: 8rem; margin-bottom: 4rem">
      <ul v-if="users.length" style="margin-bottom: 4rem">
        <li v-for="user in users" :key="user.name" style="list-style-type: none">{{ user.name }} {{ user.prename }}</li>
      </ul>
      <v-card style="margin: auto" max-width="500">
        <v-card-text>
          <v-text-field v-model="lastname" label="lastname" required type="text"></v-text-field>
          <v-text-field v-model="firstname" label="firstname" required  type="text"></v-text-field>
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn tile @click="addElt" color="indigo white--text">validate</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'TodoCount',
  data: ()=>({
    lastname:'',
    firstname:''
  }),
  computed: {
    ...mapGetters([
        'count',
        'users'
    ])
  },
  methods:{
    ...mapActions([
        'increment',
        'decrement',
        'add_user'
    ]),
    addElt:function (e){
      e.preventDefault()
      this.$store.dispatch('add_user', {name: this.lastname, prename: this.firstname})
      this.lastname=''
      this.firstname=''
    }
  }
}

</script>

<style>

</style>