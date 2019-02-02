import Vue from "vue";
import Vuex from "vuex";

import user from "./module/user";
import app from "./module/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    canAddCompany: false,
    choosedCompany: null, //选择的公司

    companyArray: [],
    departmentArray: [],
    departmentArray: [] //选择的部门
  },
  mutations: {
    chooseOneCompany(state) {
      state.canAddCompany = true;
    },
    choosedCompany(state, company) {
      state.choosedCompany = company;
    },
    choosedCompanyArray(state, companyArray) {
      state.companyArray = companyArray;
    },
    choosedDepartmentArray(state, departmentArray) {
      state.departmentArray = departmentArray;
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
