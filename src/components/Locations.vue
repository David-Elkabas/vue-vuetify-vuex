<template>
  <v-data-table
    dense
    :headers="headers"
    :items="desserts"
    item-key="name"
    sort-by="name"
    group-by="category"
    class="elevation-1"
    hide-default-footer
    height="200"
    calculate-widths="false"
  ></v-data-table>
</template>
<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "center",
        sortable: false,
        value: "name",
        groupable: true,
      },
      { text: "Category", value: "category", align: "right" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        category: "Ice cream",
      },
      {
        name: "Ice cream sandwich",
        category: "Ice cream",
      },
      {
        name: "Eclair",
        category: "Cookie",
      },
      {
        name: "Cupcake",
        category: "Pastry",
      },
    ],
  }),
};
</script>

<style>
</style>