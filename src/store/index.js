import Vue from "vue";
import Vuex from "vuex";

import user from "./module/user";
import app from "./module/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_: "", //用户
    menus: [], //授权菜单

    loginScopeName: "", //login scope
    tempCode: "", //
    companyArray: [],
    departmentArray: [],
    factoryArray: [],
    mouldDeskArray: [], //模台
    produceLineArray: [], //产线
    storageYardArray: [], //堆场
    zoneBitArray: [], //区位
    roleArray: [], //角色
    produceProcessArray: [], //工序
    produceCraftArray: [], //工艺
    produceTypeArray: [] //类型
  },
  mutations: {
    setScopeName(state, name) {
      state.loginScopeName = name;
    },
    setMenus(state, menus) {
      state.menus = menus;
    },
    setUser(state, user) {
      state.user_ = user;
    },
    clearState(state, flag) {
      switch (flag) {
        case "gs":
          state.companyArray = [];
          break;
      }
    },
    updateArrayState(state, array) {
      console.log("add state", array);
      if (array.length == 0) {
        switch (state.tempCode) {
          case "GS":
            state.companyArray = [];
            break;
          case "BM":
            state.departmentArray = [];
            state.tempCode = "";
            break;
          case "FAC":
            state.factoryArray = [];
            state.tempCode = "";
            break;
          case "CX":
            state.produceLineArray = [];
            state.tempCode = "";
            break;
          case "YARD":
            state.storageYardArray = [];
            state.tempCode = "";
            break;
          case "AREA":
            state.zoneBitArray = [];
            state.tempCode = "";
            break;
          case "JS":
            state.roleArray = [];
            state.tempCode = "";
            break;
          case "GX":
            state.produceProcessArray = [];
            state.tempCode = "";
            break;
          case "GY":
            state.produceCraftArray = [];
            state.tempCode = "";
            break;
          case "SCT":
            state.produceTypeArray = [];
            state.tempCode = "";
            break;
        }
      } else {
        if (!array[0].code && !array[0].userCode) {
          state.tempCode = "";
          return;
        }

        let _code = array[0].code || array[0].userCode;

        let code = getParentType(_code);
        switch (code) {
          case "GS":
            state.companyArray = array;
            state.tempCode = code;
            break;
          case "BM":
            state.departmentArray = array;
            state.tempCode = code;
            break;
          case "FAC":
            state.factoryArray = array;
            state.tempCode = code;
            break;
          case "CX":
            state.produceLineArray = array;
            state.tempCode = code;
            break;
          case "YARD":
            state.storageYardArray = array;
            state.tempCode = code;
            break;
          case "AREA":
            state.zoneBitArray = array;
            state.tempCode = code;
            break;
          case "JS":
            state.roleArray = array;
            state.tempCode = code;
            break;
          case "GX":
            state.produceProcessArray = array;
            state.tempCode = code;
            break;
          case "GY":
            state.produceCraftArray = array;
            state.tempCode = code;
            break;
          case "SCT":
            state.produceTypeArray = array;
            state.tempCode = code;
            break;
        }
      }

      function getParentType(sParentCode) {
        return sParentCode.split("-")[0];
      }
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
