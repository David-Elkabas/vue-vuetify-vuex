<template>
  <v-card v-if="openTable" width="500" dark>
    <v-data-table
      :headers="headers"
      :items="properties"
      class="elevation-1"
      hide-default-footer
      dense
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      openTable: true,
      headers: [
        {
          text: "properties",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "value", value: "rank" },
      ],
      properties: [
        {
          name: "PRIVATE",
          rank: 1002,
        },
        {
          name: "PRIVATE SECOND CLASS",
          rank: "need to update",
        },
        {
          name: "CORPORAL",
          rank: 123456,
        },
        {
          name: "SERGEANT",
          rank: 555,
        },
        {
          name: "MASTER SERGEANT",
          rank: "when the sky fall",
        },
        {
          name: "FIRST SERGEANT",
          rank: 262,
        },
        {
          name: "SERGEANT MAJOR",
          rank: 0,
        },
        {
          name: "COMMAND SERGEANT MAJOR",
          rank: "Yes",
        },
        {
          name: "SERGEANT MAJOR OF THE ARMY",
          rank: "No",
        },
      ],
    };
  },
};
</script>

<style>
</style>