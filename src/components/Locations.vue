<template>
  <div>
    <v-card dark>
      <v-data-table
        :headers="tableHeaders"
        :items="items"
        hide-default-footer
        class="transparent elevation-0 mt-4 table2"
        disable-pagination
        disable-sort
        fixed-header
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
              <td class="px-2" v-for="index in itemsSize" :key="index">
                <v-select
                  attach
                  :items="allCombinations.netsName"
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
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
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
      itemsSize: 6,
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
  async created() {
    this.fetchCombinations();
  },
  methods: {
    ...mapActions(["fetchCombinations"]),
  },
  computed: {
    ...mapState(["Combinations"]),
    ...mapGetters(["allCombinations"]),
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
