<template>
  <v-card>
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      hide-default-footer
      hide-default-header
    >
      <!-- <template v-slot:body="{ props }">
        <th v-for="index in props.desserts" :key="index.name">
          <div>
            <v-select
              attach
              :items="items"
              placeholder="select from items"
            ></v-select>
          </div>
        </th>
      </template> -->
    </v-data-table>
  </v-card>
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
    items: ["dessert", "calories", "iron", "fat"],
  }),
};
</script>

<style>
</style>