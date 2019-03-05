<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div style="padding-bottom:10px;">
      <div style="display:inline-block;margin-right:20px;">角色授权</div>
      <Button type="info" @click="addSubmit" style="margin-right:10px;">确定添加</Button>
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

export default {
  //初始化
  mounted() {
    this.data = menus;
  },

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
  computed: mapState(["roleArray"]),

  //接口
  methods: {
    selectChange(selection) {
      console.log(selection);
      this.menusArray = selection;
    },
    async addSubmit() {
      let params = {
        obj: this.roleArray[0].code,
        maps: this.menusArray.map(k => {
          return {
            code: k.code
          };
        })
      };
      let url = urls.roleAuth.addAuth;
      let result = await ajax.post(url, params);
      console.log(result);
      console.log("params:", params);
      console.log("roleArray:", this.roleArray);
      console.log("menusArray:", this.menusArray);
    },
    backRole() {
      this.$router.back(-1);
    }
  }
};
</script>
<style>
</style>
