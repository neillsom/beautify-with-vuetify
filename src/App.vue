<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-1"
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-btn icon @click="toggleTheme">
        <font-awesome-icon id="toggle-icon" icon="adjust" />
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div class="hello"></div>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Login",
          url: "/login",
        },
        {
          label: "Dashboard",
          url: "/dashboard",
        },
        {
          label: "Signup",
          url: "/signup",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "lightblue";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
/* .hello {
  height: 200px;
  width: 200px;
  color: var(--v-primary-base);
  background-color: var(--v-accent-lighten3);
  position: absolute;
  top: 70px;
} */
#toggle-icon:hover {
  cursor: pointer;
  filter: hue-rotate(100);
}
</style>
