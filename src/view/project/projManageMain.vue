<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle
      :pagetitle="pagetitle"
      :operation="operation"
      @jumpTo="jumpTo($event,projectArray,jumpAlert)"
    />
    <TableList :columns="columns" :data="data" :totalPage="totalPage" @pageChange="pageChange"/>
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

let url = urls.project.get;
console.log("urllllllll:", url);
let delurl = urls.project.del;
let _operation = viewData.pagetitle.projectManage;
let columns = [
  {
    title: "名称",
    key: "name"
  },
  {
    title: "编码",
    key: "projCode"
  },
  {
    title: "总方量",
    key: "totalVo"
  },
  {
    title: "总面积",
    key: "totalArea"
  },
  {
    title: "项目经理",
    key: "manager"
  },
  {
    title: "联系电话",
    key: "telephone"
  },
  {
    title: "预计开始时间",
    key: "planStart"
  },
  {
    title: "预计结束时间",
    key: "planEnd"
  },
  {
    title: "供货地址",
    key: "address"
  }
];
let mapstate = ["projectArray"];
let pagetitle = "项目管理";
let jumpAlert = "项目";

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
      jumpAlert,
      pagetitle,
      operation: _operation,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        ...columns,
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {}
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.$Modal.confirm({
                        title: "确定删除么？",
                        content: "<p></p>",
                        onOk: () => {
                          console.log(params.row.projCode);
                          this.delData(
                            delurl,
                            params.row.projCode,
                            this.delCallback
                          );
                        },
                        onCancel: () => {}
                      });
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },

  //计算属性
  computed: mapState(mapstate),

  //接口
  methods: {
    ...mapMutations(["clearState"]),
    delCallback() {
      this.getPccompany();
    },

    getPccompany() {
      this.getData(
        url,
        { obj: { pageIndex: this.page } },
        this.companyArray,
        this.page
      );
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
