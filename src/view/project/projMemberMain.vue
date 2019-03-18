<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div style="padding-bottom:10px;">
      <div style="display:inline-block;margin-right:20px;">{{pagetitle}}</div>
      <Button type="info" @click="addSubmit" style="margin-right:10px;" :disabled="addButtonUse">保存</Button>
      <Button
        type="info"
        @click="updateSubmit"
        style="margin-right:10px;"
        :disabled="updateButtonUse"
      >更新</Button>
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
import { mapState, mapMutations } from "vuex";
import urls from "@/urls.js";
import api from "@/api.js";
import ajax from "@/ajax.js";
import "@/assets/styles/common-main.css";
import mixin from "@/view/service-mixin.js";
import PageTitle from "_c/page-title/page-title.vue";
import viewData from "@/view/view-data.js";

let url = urls.projMember.get;
let authUrl = urls.projMember.getAuth;
let saveUrl = urls.projMember.save;
let updateUrl = urls.projMember.update;

let delurl = urls.contractBuild.del;
let _operation = viewData.pagetitle.contractBuild;
let columns = [
  {
    title: "姓名",
    key: "userName"
  },
  {
    title: "账户",
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
    key: "mail"
  },
  {
    title: "工厂编码",
    key: "facCode"
  },
  {
    title: "部门编码",
    key: "deptCode"
  }
];
let mapstate = ["projectArray", "user_"];
let pagetitle = "项目成员";
let jumpAlert = "项目成员";

export default {
  //初始化
  async mounted() {
    this.getPccompany();
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
      selectMenus: [],
      updateButtonUse: false,
      addButtonUse: false,
      jumpAlert,
      pagetitle,
      operation: _operation,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        ...columns
      ]
    };
  },

  //计算属性
  computed: mapState(mapstate),

  //接口
  methods: {
    ...mapMutations(["clearState"]),
    setButtonShow(codes) {
      if (codes.length == 0) {
        this.addButtonUse = false;
        this.updateButtonUse = true;
      } else {
        this.addButtonUse = true;
        this.updateButtonUse = false;
      }
    },
    selectChange(selection) {
      console.log("selection:", selection);
      this.selectMenus = selection.map(k => {
        let tempK = k;
        tempK._checked = true;
        return tempK;
      });
    },
    async addSubmit() {
      if (this.selectMenus.length == 0) {
        this.$Message.error("至少选择一个类型!");
        return;
      }

      let params = {
        obj: this.projectArray[0],
        list: this.selectMenus
      };

      let result = await ajax.post(saveUrl, params);

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
    async updateSubmit() {
      let arr = [];

      this.selectMenus.forEach(k => {
        if (k._checked) {
          arr.push(k);
        }
      });

      let params = {
        obj: this.projectArray[0],
        list: arr
      };

      let result = await ajax.post(updateUrl, params);

      if (result.data.type == 1) {
        this.$Message.success("授权成功!");
        let _this = this;

        setTimeout(function() {
          console.log("settimeout");
          _this.goBack();
        }, 2000);
      } else {
        this.$Message.error("授权失败!");
      }
    },
    delCallback() {
      this.getPccompany();
    },

    async getPccompany() {
      let res = await ajax.post(url, {
        obj: { facCode: this.user_.facCode }
      });

      let res2 = await ajax.post(authUrl, {
        obj: {
          facCode: this.user_.facCode,
          projCode: this.projectArray[0].projCode
        }
      });

      let members = res.data.jsonData;
      let membersAuth = res2.data.jsonData;
      console.log("members:", members);
      console.log("members:", membersAuth);

      this.setButtonShow(membersAuth);

      for (let i = 0; i < membersAuth.length; i++) {
        for (let ii = 0; ii < members.length; ii++) {
          if (members[ii].userCode == membersAuth[i].userCode) {
            members[ii]._checked = true;
            break;
          }
        }
      }

      this.data = members;
    },

    //分页
    pageChange(page) {
      console.log("page:", page);
      this.page = page;
      this.getPccompany();
    }
  }
};
</script>
<style>
</style>
