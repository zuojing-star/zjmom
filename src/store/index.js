import Vue from "vue";
import Vuex from "vuex";

import user from "./module/user";
import app from "./module/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    canAddCompany: false
    //
  },
  mutations: {
    //
    chooseOneCompany(state) {
      state.canAddCompany = true;
    }
  },
  actions: {
    //
  },
  modules: {
    user,
    app
  }
});
