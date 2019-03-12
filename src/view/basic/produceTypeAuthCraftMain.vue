<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div style="padding-bottom:10px;">
      <div style="display:inline-block;margin-right:20px;">类型工艺授权</div>
      <Button type="info" @click="addSubmit" style="margin-right:10px;" :disabled="addButtonUse">添加</Button>
      <Button
        type="info"
        @click="updateSubmit"
        style="margin-right:10px;"
        :disabled="updateButtonUse"
      >修改</Button>
      <Button type="info" @click="backRole">返回工序</Button>
    </div>

    <Table
      border
      ref="selection"
      :columns="columns"
      :data="data"
      :hidePage="hidePage"
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
      hidePage: true,
      users: [],
      updateButtonUse: false,
      addButtonUse: false,
      page: 1,
      totalPage: 0,
      operation: viewData.pagetitle.employee,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "代码",
          key: "code"
        },
        {
          title: "描述",
          key: "desp"
        }
      ]
    };
  },

  //计算属性
  computed: mapState([
    "companyArray",
    "departmentArray",
    "factoryArray",
    "produceTypeArray",
    "produceCraftArray"
  ]),

  //接口
  methods: {
    backRole() {
      this.$router.back(-1);
    },
    async updateSubmit() {
      let arr = [];

      console.log("this.users:", this.users);

      this.users.forEach(k => {
        if (k._checked) {
          arr.push({ gyCode: k.code });
        }
      });
      let params = {
        obj: {
          typeCode: this.produceTypeArray[0].code,
          facCode: this.factoryArray[0].code
        },
        list: arr
      };
      let url = urls.produceType.updateSCTypeAndGYs;

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
    selectChange(selection) {
      this.users = selection.map(k => {
        let tempK = k;
        tempK._checked = true;
        return tempK;
      });
    },
    async addSubmit() {
      if (this.users.length == 0) {
        this.$Message.error("至少选择一个人员!");
        return;
      }

      let params = {
        obj: {
          typeCode: this.produceTypeArray[0].code,
          facCode: this.factoryArray[0].code
        },
        list: this.users.map(k => {
          k.gyCode = k.code;
          return k;
        })
      };
      console.log("params", params);

      let url = urls.produceType.createSCTypeAndGYs;
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
    async findUsersAuth() {
      let url = urls.produceType.getGYsOfSCType;
      let params = {
        obj: {
          typeCode: this.produceTypeArray[0].code,
          facCode: this.factoryArray[0].code
        }
      };

      console.log("url:", url);
      console.log("params:", params);

      let result = await ajax.post(url, params);

      return result.data.jsonData;
    },
    setButtonShow(codes) {
      if (codes.length == 0) {
        this.addButtonUse = false;
        this.updateButtonUse = true;
      } else {
        this.addButtonUse = true;
        this.updateButtonUse = false;
      }
    },
    async getEmployee() {
      let url = urls.produceType.getAllGYDatas;
      let params = {
        obj: { pageIndex: 0, facCode: this.factoryArray[0].code }
      };

      let result = await ajax.post(url, params);

      let users = result.data.jsonData;
      let usersAuth = await this.findUsersAuth();

      this.setButtonShow(usersAuth);

      for (let i = 0; i < usersAuth.length; i++) {
        for (let ii = 0; ii < users.length; ii++) {
          if (users[ii].code == usersAuth[i].gyCode) {
            users[ii]._checked = true;
            break;
          }
        }
      }

      console.log("已经授权的人员:", usersAuth);
      console.log("总人员:", users);

      this.data = users;
      this.users = users;
    },
    delCallback() {
      // this.getEmployee();
    },
    //分页
    pageChange() {
      // this.getEmployee();
    }
  },
  //初始化
  mounted() {
    // console.log("gx:", this.produceProcessArray);
    this.getEmployee();
  }
};
</script>
<style>
</style>
