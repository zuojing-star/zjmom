<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div style="padding-bottom:10px;">
      <div style="display:inline-block;margin-right:20px;">角色菜单授权</div>
      <Button type="info" @click="addSubmit" style="margin-right:10px;" :disabled="addButtonUse">添加</Button>
      <Button
        type="info"
        @click="updateSubmit"
        style="margin-right:10px;"
        :disabled="updateButtonUse"
      >修改</Button>
      <Button type="info" @click="backRole">返回角色</Button>
    </div>

    <Table
      border
      ref="selection"
      :columns="columns"
      :data="data"
      @on-selection-change="selectChange"
    ></Table>
  </div>
</template>

<script>
import TableList from "@/components/table-list/table-list.vue";
import { mapState } from "vuex";
import urls from "@/urls.js";
import ajax from "@/ajax.js";
import "@/assets/styles/common-main.css";
import mixin from "@/view/service-mixin.js";
import PageTitle from "_c/page-title/page-title.vue";
import viewData from "@/view/view-data.js";
import menus from "@/menus.js";

let localMenus = menus.concat();

export default {
  //mixin
  mixins: [mixin],

  //组件注册
  components: {
    TableList,
    PageTitle
  },

  //数据
  data() {
    return {
      selectMenus: [],
      updateButtonUse: false,
      addButtonUse: false,
      hidePage: true,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "菜单名称",
          key: "name"
        },
        {
          title: "父级",
          key: "parent"
        },
        {
          title: "菜单码",
          key: "code"
        }
      ]
    };
  },

  //计算属性
  computed: mapState(["roleArray", "factoryArray"]),

  //接口
  methods: {
    async updateSubmit() {
      console.log("this.selectMenus:", this.selectMenus);
      let arr = [];

      this.selectMenus.forEach(k => {
        if (k._checked) {
          arr.push({ menuCode: k.code });
        }
      });

      let params = {
        obj: {
          roleCode: this.roleArray[0].code,
          facCode: this.factoryArray[0].code
        },
        list: arr
      };
      let url = urls.roleAuth.updateAuth;

      let result = await ajax.post(url, params);

      if (result.data.type == 1) {
        this.$Message.success("授权成功!");
        let _this = this;

        setTimeout(function() {
          _this.backRole();
        }, 2000);
      } else {
        this.$Message.error("授权失败!");
      }
    },
    setButtonShow(menuCode) {
      if (menuCode.length == 0) {
        this.addButtonUse = false;
        this.updateButtonUse = true;
      } else {
        this.addButtonUse = true;
        this.updateButtonUse = false;
      }
    },
    async getSelectCode() {
      return await ajax.post(urls.roleAuth.selectCode, {
        obj: {
          roleCode: this.roleArray[0].code,
          facCode: this.factoryArray[0].code
        }
      });
    },
    selectChange(selection) {
      this.selectMenus = selection.map(k => {
        let tempK = k;
        tempK._checked = true;
        return tempK;
      });
    },
    async addSubmit() {
      if (this.selectMenus.length == 0) {
        this.$Message.error("至少选择一个菜单!");
        return;
      }
      let params = {
        obj: {
          roleCode: this.roleArray[0].code,
          facCode: this.factoryArray[0].code
        },
        list: this.selectMenus.map(k => {
          return {
            menuCode: k.code
          };
        })
      };
      let url = urls.roleAuth.addAuth;
      let result = await ajax.post(url, params);

      if (result.data.type == 1) {
        this.$Message.success("添加成功!");
        let _this = this;
        setTimeout(function() {
          _this.$router.back(-1);
        }, 2000);
      } else {
        this.$Message.error("添加失败!");
      }
    },
    backRole() {
      this.$router.back(-1);
    },
    showRoleMenus(selectCode) {
      console.log("111111", localMenus, selectCode);

      localMenus.forEach(k => {
        k._checked = false;
      });

      for (let i = 0; i < selectCode.length; i++) {
        for (let ii = 0; ii < localMenus.length; ii++) {
          if (localMenus[ii].code == selectCode[i].menuCode) {
            localMenus[ii]._checked = true;
            break;
          }
        }
      }

      console.log("修改后的菜单：", localMenus);
    }
  },

  //初始化
  async mounted() {
    let result = await this.getSelectCode();
    let selectCode = result.data.jsonData;
    this.setButtonShow(selectCode);

    console.log(selectCode.length);
    if (selectCode.length > 0) {
      console.log("有菜单");

      this.showRoleMenus(selectCode);
      this.data = localMenus;
      this.selectMenus = localMenus;
    } else {
      console.log("没有菜单。。。。", localMenus);
      localMenus.forEach(k => {
        k._checked = false;
      });
      this.data = localMenus;
    }
  }
};
</script>
<style>
</style>
