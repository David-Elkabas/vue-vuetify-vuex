<template>
  <v-data-table
    :headers="headers"
    :items="allRecipes.desserts"
    class="elevation-1"
    item-key="name"
    hide-default-footer
    height="400"
  >
  </v-data-table>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "name",
          align: "center",
          sortable: false,
          value: "name",
          groupable: true,
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
    };
  },
  async created() {
    // this.$store.dispatch("fetchRecipes");
    // this.$store.dispatch("fetchTodos");
    this.fetchTodos();
    this.fetchRecipes();
  },
  methods: {
    ...mapActions(["fetchTodos", "fetchRecipes"]),
  },
  computed: {
    ...mapState(["Recipes"]),
    ...mapGetters(["allTodos", "allRecipes"]),
  },
};
</script>
