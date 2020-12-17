<template>
  <v-app>
    <v-main>
     <Counter/>
    </v-main>
  </v-app>
</template>

<script>
import Counter from "@/components/Counter";

export default {
  name: 'App',

  components: {
    Counter,
  },
};
</script>
