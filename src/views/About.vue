<template>
  <div>
    <h1 class="subheading grey--text pb-8">This is an about page</h1>
    <div
      class="d-flex justify-space-between align-center px-10"
      style="background-color: AliceBlue; height: 800px; width: 1200px"
    >
      <div
        class="align-self-end flex-grow-1 flex-shrink-1"
        style="background-color: AliceBlue; height: 683px; width: 300px"
      >
        <Networks />
      </div>

      <div
        class="flex-grow-1 flex-shrink-1"
        style="background-color: AliceBlue; height: 800px; width: 600px"
      >
        <Locations />
      </div>
    </div>
    <v-container>
      <v-card>
        <v-data-table
          :headers="tableHeaders"
          :items="items"
          hide-default-footer
          class="transparent elevation-0 my-4"
          disable-pagination
          disable-sort
        >
          <template v-slot:header>
            <thead>
              <tr>
                <th style="text-align: center" colspan="7">start</th>
              </tr>
              <tr>
                <th colspan="3" style="text-align: center">Category 1</th>
                <th colspan="2" style="text-align: center">Category 2</th>
                <th colspan="2" style="text-align: center">Category 3</th>
              </tr>
            </thead>
          </template>
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td></td>
                <td v-for="index in itemsSize" :key="index">
                  <v-select
                    attach
                    :items="selectItems"
                    placeholder="select from items"
                  >
                  </v-select>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Locations from "../components/Locations.vue";
import Networks from "../components/Networks.vue";
export default {
  components: { Locations, Networks },
  data() {
    return {
      selectItems: ["where", "is", "my", "cookie"],
      tableHeaders: [
        {
          align: "center",
          sortable: false,
        },
        { text: "base1", value: "base1" },
        { text: "base2", value: "base2" },
        { text: "base10", value: "base10" },
        { text: "base20", value: "base20" },
        { text: "base100", value: "base100" },
        { text: "base200", value: "base200" },
      ],
      itemsSize: 9,
      items: [
        {
          id: 1,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 2,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 3,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 4,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 5,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 6,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 7,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 8,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
        {
          id: 9,
          base1: "",
          base2: "",
          base10: "",
          base20: "",
          base100: "",
          base200: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.centerThis td {
  text-align: center !important;
}
</style>

