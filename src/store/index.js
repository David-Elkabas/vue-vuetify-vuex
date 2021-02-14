import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    posts: []
  },
  getters: {
    getCount: (state) => state.count

  },
  mutations: {
    increment(state) {
      state.count++
    },
    SET_POST(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchDB({ commit }) {
      try {
        const res = await axios.get("http://localhost:3000/widget");
        let posts = res.data
        console.log(res.data);
        commit('SET_POST', posts)

      } catch (e) {
        console.log(e);
      }
    }
    // async fetchDB(state){
    //   const response = await 
    // }
  },
  modules: {
  }
})
