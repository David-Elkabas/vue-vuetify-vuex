<template>
  <div class="about">
    <h1 class="subheading grey--text pb-3">This is an about page</h1>
    <p>{{ $store.state.posts }}</p>
    <p v-for="post in posts" :key="post.name">{{ post.name }}</p>
    <v-btn @click="increase">click me</v-btn>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  async created() {
    this.$store.dispatch("fetchDB");
  },
  methods: {
    increase() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>
