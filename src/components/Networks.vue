<template>
  <div id="container2">
    <v-data-table
      v-on:scroll="handleScroll"
      :headers="headers"
      :items="allRecipes.desserts"
      class="elevation-1 table1 mx-1"
      item-key="name"
      hide-default-footer
      fixed-header
      dark
    >
    </v-data-table>
  </div>
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
    this.fetchRecipes();
  },
  methods: {
    ...mapActions(["fetchRecipes"]),

    handleScroll: function (e) {
      console.log(e);
    },
  },
  computed: {
    ...mapState(["Recipes"]),
    ...mapGetters(["allRecipes"]),
  },
};
</script>
<style scope>
.table1 td {
  height: 71px !important;
}
.table1 th {
  height: 50px !important;
}
</style>



