<template>
  <v-container class="mx-auto text-center mt-5">
   <ul>
     <li v-for="member in members" :key="member.id">
       {{member.name}}
       <v-btn dark tile class="rounded" @click="removeMembers(member.id)"> X </v-btn>
     </li>
   </ul>
    <v-card class="mx-auto mt-9" max-width="500" >
      <v-form>
      <v-card-text>
          <v-text-field v-model="value" label="prenom" required outlined type="text"></v-text-field>
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
  value: '',
  members :[]
}),
  methods: {
    addMembers (){
      const nextMembers = this.value
      if(nextMembers){
        this.members.push({
          id : index++,
          name: nextMembers
        })
      }
      this.value =''
    },
    removeMembers(element){
      // this.members.splice(this.members.indexOf(element), 1);
      this.members = this.members.filter(member =>{
        return member.id !== element
      })
    }
  }
}

</script>

<style>

</style>