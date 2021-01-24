<template>
  <div id="app">
    <v-toolbar color="primary" style="padding: 0 2rem">
      <v-toolbar-title>
        <div style="display: flex; align-items: center">
          <h3 style="margin-left: 8px">{{ auth }}</h3>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="items.length" style="display: flex; justify-content: space-between; align-items: center; ">
        <div v-for="item in items" :key="item.title"  style="line-height: 1.2; margin: 0 0.5rem" >
          <router-link :to="item.route" >
           <p>{{ item.title}}</p>
          </router-link>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: ()=>({
    auth: "Auth application",
    items: [
      {
        title: 'Home', route: '/'
      },
      {
        title: 'About', route: '/about'
      },
      {
        title: 'Login', route: '/login'
      },
      {
        title: 'Register', route: '/register'
      },
      {
        title: 'TodoCount', route: '/todoCount'
      }
    ]
  })
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}
</style>
