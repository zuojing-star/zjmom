<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div style="padding-bottom:10px;">
      <div style="display:inline-block;margin-right:20px;">{{pagetitle}}</div>
      <Button
        type="info"
        @click="addSubmit"
        style="margin-right:10px;"
        :disabled="addButtonUse"
      >确定关联</Button>
      <Button
        type="info"
        @click="updateSubmit"
        style="margin-right:10px;"
        :disabled="updateButtonUse"
      >变更关联</Button>
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

let url = urls.relevanceType.get;
let url2 = urls.relevanceType.getRelevanceType;
let url3 = urls.contractBuild.getKeySCTypes;
let delurl = api.contractBuild.del;
let mapstate = ["projectArray", "produceTypeArray", "HTTArray"];

let _operation = viewData.pagetitle.contractBuild;

let columns = [
  {
    title: "名称",
    key: "name"
  },
  {
    title: "编码",
    key: "code"
  },
  {
    title: "描述",
    key: "desp"
  }
];

let pagetitle = "关联生产类型";
let jumpAlert = "关联生产类型";

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
    async addSubmit() {
      if (this.selectMenus.length == 0) {
        this.$Message.error("至少选择一个类型!");
        return;
      }

      let params = {
        obj: {
          htTypeCode: this.HTTArray[0].code,
          htTypeName: this.HTTArray[0].name
        },
        list: this.selectMenus.map(k => {
          if (k._checked) {
            return {
              scTypeCode: k.code,
              scTypeName: k.name
            };
          }
        })
      };
      let url = urls.contractBuild.createHTTAndSCT;
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
    async updateSubmit() {
      let arr = [];

      this.selectMenus.forEach(k => {
        if (k._checked) {
          arr.push({ scTypeCode: k.code, scTypeName: k.name });
        }
      });

      let params = {
        obj: {
          htTypeCode: this.HTTArray[0].code,
          htTypeName: this.HTTArray[0].name
        },
        list: arr
      };
      let url = urls.contractBuild.updateHTTAndSCT;

      let result = await ajax.post(url, params);

      if (result.data.type == 1) {
        this.$Message.success("授权成功!");
        let _this = this;

        setTimeout(function() {
          _this.goBack();
        }, 2000);
      } else {
        this.$Message.error("授权失败!");
      }
    },
    delCallback() {
      this.getPccompany();
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
    async getPccompany() {
      let result = await ajax.post(url);
      let result2 = await ajax.post(url2, {
        obj: {
          projCode: this.projectArray[0].projCode
        }
      });
      let result3 = await ajax.post(url3, {
        obj: {
          htTypeCode: this.HTTArray[0].code
        }
      });
      let res = result.data.jsonData;
      let res2 = result2.data.jsonData;
      let res3 = result3.data.jsonData;

      console.log("res3:", res3);
      let filterArray = [];

      for (let i = 0; i < res2.length; i++) {
        for (let ii = 0; ii < res.length; ii++) {
          if (res[ii].code == res2[i].scTypeCode) {
            filterArray.push(res[ii]);
            break;
          }
        }
      }

      if (res3.length > 0) {
        for (let i = 0; i < res3.length; i++) {
          for (let ii = 0; ii < filterArray.length; ii++) {
            if (filterArray[ii].code == res3[i].scTypeCode) {
              filterArray[ii]._checked = true;
              break;
            }
          }
        }
      }

      console.log("filterArray:", filterArray);
      this.data = filterArray;
    },
    selectChange(selection) {
      this.selectMenus = selection.map(k => {
        let tempK = k;
        tempK._checked = true;
        return tempK;
      });
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
