<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div style="padding-bottom:10px;">
      <div style="display:inline-block;margin-right:20px;">工序人员授权</div>
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
          title: "姓名",
          key: "userName"
        },
        {
          title: "账号",
          key: "userCode"
        },
        {
          title: "电话",
          key: "telephone"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "邮箱",
          key: "email"
        },
        {
          title: "工厂编码",
          key: "facCode"
        },
        {
          title: "部门编码",
          key: "deptCode"
        }
      ]
    };
  },

  //计算属性
  computed: mapState([
    "companyArray",
    "departmentArray",
    "factoryArray",
    "produceProcessArray"
  ]),

  //接口
  methods: {
    backRole() {
      this.$router.back(-1);
    },
    async updateSubmit() {
      console.log("this.users:", this.users);
      let arr = [];

      this.users.forEach(k => {
        if (k._checked) {
          arr.push({ userCode: k.userCode });
        }
      });
      console.log("this.users:22222", arr);
      let params = {
        obj: {
          gxCode: this.produceProcessArray[0].code,
          facCode: this.factoryArray[0].code
        },
        list: arr
      };
      let url = urls.produceProcess.updateGXUsers;

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
      console.log("this.users2222:", this.users);

      if (this.users.length == 0) {
        this.$Message.error("至少选择一个人员!");
        return;
      }

      let params = {
        obj: {
          gxCode: this.produceProcessArray[0].code,
          facCode: this.factoryArray[0].code
        },
        list: this.users
      };
      console.log("params", params);

      let url = urls.produceProcess.createGXUsers;
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
      let url = urls.produceProcess.getUsersOfGX;
      let params = {
        obj: {
          gxCode: this.produceProcessArray[0].code,
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
      let url = urls.produceProcess.getUsersOfFac;
      let params = {
        obj: { pageIndex: 0, facCode: this.factoryArray[0].code }
      };

      let result = await ajax.post(url, params);
      let users = result.data.jsonData;
      let usersAuth = await this.findUsersAuth();

      this.setButtonShow(usersAuth);

      for (let i = 0; i < usersAuth.length; i++) {
        for (let ii = 0; ii < users.length; ii++) {
          if (users[ii].userCode == usersAuth[i].userCode) {
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
