<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-main class="d-flex justify-center text-center">
      <Form/>
      <CounterHot/>
    </v-main>
  </v-app>
</template>

<script>
import CounterHot from "@/components/CounterHot";
import Form from "@/components/Form"

export default {
  name: 'App',

  components: {
    Form,
    CounterHot,
  },

  data: () => ({
    //
  }),
};
</script>
