<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify App Bar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Home</v-btn>
      <v-btn>Login</v-btn>
    </v-app-bar>
    <v-content>
      <Login></Login>
    </v-content>
  </v-app>
</template>

<script>
import Login from "./Login";
export default {
  name: "Container",
  components: { Login },
};
</script>

<style>
</style>
