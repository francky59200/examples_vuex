<template>
  <v-container class="mx-auto text-center mt-5">
   <ul>
     <li v-for="memb in member" :key="memb.id">
       {{memb.name}}
       <v-btn dark tile class="rounded" @click="removeMembers(memb.id)"> X </v-btn>
     </li>
   </ul>
    <v-card class="mx-auto mt-9" max-width="500" >
      <v-form>
      <v-card-text>
          <v-text-field v-model="message" label="prenom" required outlined type="text"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-col class="text-right">
          <v-btn class="rounded" tile dark @click="addMembers">Ajouter</v-btn>
        </v-col>
      </v-card-actions>
      </v-form>
    </v-card>
  </v-container>

</template>

<script>
let index = 1
export default{
  data: ()=>({
  message: '',
  member :[]
}),
  methods: {
    addMembers (){
      const nextMembers = this.message
      if(nextMembers){
        this.member.push({
          id : index++,
          name: nextMembers
        })
      }
      this.message =''
    },
    removeMembers(element){
      this.member.splice(this.member.indexOf(element), 1);
      /*this.member = this.member.filter(membe =>{
        return membe.id !== element
      })*/
    }
  }
}

</script>

<style>

</style>