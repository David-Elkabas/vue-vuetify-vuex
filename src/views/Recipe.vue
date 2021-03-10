<template>
  <v-container>
    <h1 class="subheading grey--text pb-3">Recipes</h1>
    <!-- <v-card color="grey lighten-4" flat> </v-card> -->

    <v-card dark>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          class="mt-n3"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          color="orange lighten-2"
        ></v-text-field>
      </v-card-title>

      <v-toolbar class="mt-n3 mb-2" height="50" flat>
        <v-btn icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- will need to change the :items="allRecipes.desserts" -->
      <v-data-table
        :headers="headers"
        :items="allRecipes.desserts"
        :items-per-page="5"
        class="elevation-1"
        v-model="selected"
        :single-select="singleSelect"
        show-select
        item-key="name"
        :search="search"
      >
        <template v-slot:top>
          <v-switch
            v-model="singleSelect"
            label="Single select"
            class="pr-3 my-n5"
            color="orange lighten-2"
          ></v-switch>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
        { text: "xxx (%)", value: "x" },
        { text: "yyy (%)", value: "y" },
        { text: "zzz (%)", value: "z" },
        { text: "www (%)", value: "w" },
      ],
    };
  },
  async created() {
    // this.$store.dispatch("fetchRecipes");
    // this.$store.dispatch("fetchTodos");

    this.fetchRecipes();
  },
  methods: {
    ...mapActions(["fetchRecipes"]),
  },
  computed: {
    ...mapState(["Recipes"]),
    ...mapGetters(["allRecipes"]),
  },
};
</script>

<style>
</style>