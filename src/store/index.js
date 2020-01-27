import Vue from 'vue'
import Vuex from 'vuex'
import { authentication } from './auth.module';
import { users } from './users.module';

Vue.use(Vuex)


export default new Vuex.Store({

  modules:{
    authentication,
    users
  },
  state: {
     packages: []
  },
  mutations: {
    SET_PACKAGE(state, payload) {
      state.packages.push(payload);
    },

    DELETE_PACKAGE(state, payload){
      let index = state.packages.findIndex(el => el === payload);
      state.packages.splice(index, 1);
    },

    EDIT_PACKAGE(state, {range, PRICE, picked, index}){
      let curItem = state.packages[index];
      state.packages[index] = {...curItem, range, PRICE, picked};      
    },

    RESET(state){
      state.packages = []
    }
  },
  actions: {
    addPackage({commit}, data) {
      commit("SET_PACKAGE", data)
    },

    deletePackage({commit}, data) {
      commit("DELETE_PACKAGE", data)
    },

    editPackage({commit}, data){
      commit("EDIT_PACKAGE", data)
    }
  },
  getters: {
    getPackages(state) {
      return state.packages
    },
  }
})
