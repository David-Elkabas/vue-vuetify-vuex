<template>
  <v-app>
    <Navbar />

    <v-main class="david">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>
<style>
.david {
  background: #faffd8;
}
</style>