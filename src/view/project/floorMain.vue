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

let url = urls.floor.get;
let delurl = api.floor.del;

let _operation = viewData.pagetitle.floor;
let columns = [
  {
    title: "名称",
    key: "name"
  },
  {
    title: "显示名称",
    key: "showName"
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
    title: "楼层位置",
    key: "lcIndex"
  },
  {
    title: "项目名称",
    key: "projName"
  },
  {
    title: "项目编码",
    key: "projCode"
  }
];
let mapstate = ["projectArray", "louDongArray"];
let pagetitle = "楼层管理";
let jumpAlert = "楼层";

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
      console.log(this.projectArray[0].projCode);
      this.getData(
        url,
        {
          obj: {
            pageIndex: this.page,
            louCode: this.louDongArray[0].code,
            projCode: this.projectArray[0].projCode
          }
        },
        this.projectArray,
        this.page,
        true,
        this.louDongArray
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
