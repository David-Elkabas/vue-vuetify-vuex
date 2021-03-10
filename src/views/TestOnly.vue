<template>
  <div>
    <div class="pa-10" style="height: 100px; width: 100px">
      <p>{{ allCombinations.category1.base1.options }}</p>
    </div>

    <div>
      <v-card dark>
        <v-data-table
          :headers="$store.state.bases"
          :items="items4"
          hide-default-footer
          class="transparent elevation-0 mt-4 table2"
          disable-pagination
          disable-sort
          fixed-header
        >
          <template v-slot:header>
            <thead>
              <tr>
                <th
                  style="text-align: center"
                  :colspan="allSizeOfCategories[0]"
                >
                  start
                </th>
              </tr>
              <tr>
                <th
                  :colspan="allSizeOfCategories[1]"
                  style="text-align: center"
                >
                  Category 1
                </th>
                <th
                  :colspan="allSizeOfCategories[2]"
                  style="text-align: center"
                >
                  Category 2
                </th>
                <th
                  :colspan="allSizeOfCategories[3]"
                  style="text-align: center"
                >
                  Category 3
                </th>
              </tr>
            </thead>
          </template>
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td></td>
                <td
                  class="px-2"
                  v-for="index in $store.state.sizeOfRadioCells"
                  :key="index"
                >
                  <v-select
                    v-for="(title, index) in titles"
                    :key="index"
                    attach
                    :items="title"
                    item-value="id"
                    item-text="name"
                    placeholder="select"
                  >
                  </v-select>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    // v-select === :items="allCombinations.category1.base1.options"
    return {
      firstTime: false,
      itemsSize: 7,
      items4: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
        {
          id: 9,
        },
      ],
    };
  },
  async created() {
    this.fetchCombinations();
    this.fetchRecipes();
  },
  methods: {
    ...mapActions(["fetchCombinations", "fetchRecipes"]),
    changeFirstTime: function () {
      this.firstTime = false;
    },
  },
  computed: {
    ...mapState(["Combinations", "Recipes"]),
    ...mapGetters(["allCombinations", "allRecipes", "allSizeOfCategories"]),
    titles: function () {
      var titles = [["a", "b"]];
      var temp = [];
      for (let category in this.Combinations) {
        for (let base in this.Combinations[category]) {
          for (let option in this.Combinations[category][base]) {
            if (option == "options") {
              for (let person in this.Combinations[category][base][option]) {
                temp.push(
                  this.Combinations[category][base][option][person].name
                );
              }
            }
          }
        }
      }
      console.log(temp);
      return titles;
    },
  },
};
</script>
<style scope>
.table2 td {
  height: 70px !important;
}
.table2 th {
  height: 50px !important;
}
</style>
