<template>
  <div>
    <h1 class="subheading grey--text pb-8">This is an about page</h1>
    <v-container style="background-color: green; height: 800px; width: 1050px">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="6">
          <v-card style="background-color: red" height="300" width="500">
            <Locations />
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="6">
          <v-card
            class="mt-n11"
            style="background-color: blue"
            height="400"
            width="500"
          >
            <Networks />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card style="background-color: yellow" height="400" width="500">
            <Combinations />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Combinations from "../components/Combinations.vue";
import Locations from "../components/Locations.vue";
import Networks from "../components/Networks.vue";
export default {
  components: { Locations, Networks, Combinations },
  data() {
    return {};
  },
};
</script>
