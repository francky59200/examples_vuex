<template>
  <v-container class="mx-auto text-center mt-5">
    <h2>{{ message }}</h2>
   <ul v-if="members.length">
     <li v-for ="member in members" :key="member.id" class="mt-2">
       <input type="checkbox" @change="completeMember(member)" :checked="member.isComplete"/>
       <span :class="{complete: member.isComplete}" class="ma-3" contenteditable="true">{{member.title}}</span>
       <v-btn small elevation="3" tile  @click="removeMember(member)"> X </v-btn>
     </li>
   </ul>
    <v-card class="mx-auto mt-9" max-width="500" >
      <v-form>
      <v-card-text>
          <v-text-field id="my-border-style" @keydown.enter="addElement" :class="{error: hasError}" v-model="value" label="firstname" required outlined type="text"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-col class="text-right">
          <v-btn class="rounded" tile @click="addElement">Ajouter</v-btn>
        </v-col>
      </v-card-actions>
      </v-form>
    </v-card>
  </v-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  data: ()=>({
  value: '',
}),
  computed: {
    ...mapGetters([
      'members',
      'message',
      'hasError'
    ]),
    /*addMembers (){
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
    }*/
  },
  methods: {
    ...mapActions({
      addMember: 'addMember',
      removeMember: 'removeMember',
      completeMember: 'completeMember'
    }),
    addElement(e) {
      e.preventDefault();
      this.$store.dispatch('addMember', {title: this.value})
      this.value=''
    }
  }
}

</script>

<style>

.complete{
  text-decoration: line-through;
}

.v-text-field--outlined.error >>> fieldset {
  border-color: red !important;
  background-color: inherit !important;
}
</style>