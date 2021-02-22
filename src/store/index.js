import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    Recipes: [],
    todos: [],
  },
  getters: {
    allTodos: (state) => {
      return state.todos
    },
    allRecipes: (state) => {
      return state.Recipes
    }
  },
  mutations: {

    setRecipes(state, Recipes) {
      state.Recipes = Recipes
    },
    setTodos(state, todos) {
      state.todos = todos
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      try {
        const res = await axios.get("http://localhost:3000/widget");
        let Recipes = res.data
        console.log(res.data);
        commit('setRecipes', Recipes)

      } catch (e) {
        console.log(e);
      }
    },
    async fetchTodos({ commit }) {
      try {
        const res = await axios.get("http://localhost:3000/todos");
        let todos = res.data

        commit('setTodos', todos)
        console.log(this.state.todos);

      } catch (e) {
        console.log(e);
      }
    }

  },
  modules: {
  }
})
