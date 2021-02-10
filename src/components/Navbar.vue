<template>
  <nav>
    <v-app-bar app color="deep-purple" dark clipped-right>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span class="bold">Food</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="orange lighten-2">
        <!-- TODO-change color -->
        <span>Sign Out</span>
        <v-icon right>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      clipped
      permanent
      expand-on-hover
      width="165px"
      app
      right
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      links: [
        { icon: "mdi-inbox-arrow-down", text: "Home", route: "/" },
        { icon: "mdi-deathly-hallows", text: "About", route: "/about" },
        { icon: "mdi-account-details", text: "Recipe", route: "/recipe" },
      ],
    };
  },
};
</script>

<style>
</style>