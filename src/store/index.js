import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
// import { forEach } from 'core-js/fn/array';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    Recipes: {},
    Combinations: { category1: { base1: { options: [] } } }, //will have to change category1 to the right prop 
    bases: [{
      align: "center",
      sortable: false,
    },],
    sizeOfCategory1: 0,
    sizeOfCategory2: 0,
    sizeOfCategory3: 0,
    sizeOfTheBigHeader: 0,
    basesNames: [],
    sizeOfRadioCells: 0,
    rowsID: [],
    sizeOfNets: 0,

  },
  getters: {
    allRecipes: (state) => {
      return state.Recipes
    },
    allSizeOfCategories: (state) => {
      return [state.sizeOfTheBigHeader, state.sizeOfCategory1, state.sizeOfCategory2, state.sizeOfCategory3]
    },
    allCombinations: (state) => {
      return state.Combinations
    },
    getSizeOfRadioCells: (state) => {
      return state.sizeOfRadioCells
    }
  },
  mutations: {

    setRecipes(state, Recipes) {
      state.Recipes = Recipes
      for (let index in Recipes.netsName) {
        state.rowsID.push({ id: Number(index) + 1 })
      }

    },

    setCombinations(state, Combinations) {
      state.Combinations = Combinations
      state.sizeOfCategory1 = Object.keys(Combinations.category1).length + 1
      state.sizeOfCategory2 = Object.keys(Combinations.category2).length
      state.sizeOfCategory3 = Object.keys(Combinations.category3).length
      state.sizeOfTheBigHeader = state.sizeOfCategory1 + state.sizeOfCategory2 + state.sizeOfCategory3
      for (let i in Combinations) {
        for (let key in Combinations[i]) {
          state.bases.push({ text: key, value: key })

          state.sizeOfRadioCells++
          state.basesNames.push(key)
        }
      }
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      try {
        const res = await axios.get("http://localhost:3000/widget");
        let Recipes = res.data
        commit('setRecipes', Recipes)

      } catch (e) {
        console.log(e);
      }
    },
    async fetchCombinations({ commit }) {
      try {
        const res = await axios.get("http://localhost:3000/combinations");
        let combinations = res.data
        commit('setCombinations', combinations)

      } catch (e) {
        console.log(e);
      }
    }



  },
  modules: {
  }
})
