<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle
      :pagetitle="pagetitle"
      :operation="operation"
      @jumpTo="jumpTo($event,louDongArray,jumpAlert)"
    />
    <TableList :columns="columns" :data="data" :totalPage="totalPage" @pageChange="pageChange"/>
  </div>
</template>

<script>
import TableList from "@/components/table-list/table-list.vue";
import { mapState, mapMutations } from "vuex";
import urls from "@/urls.js";
import ajax from "@/ajax.js";
import "@/assets/styles/common-main.css";
import mixin from "@/view/service-mixin.js";
import PageTitle from "_c/page-title/page-title.vue";
import viewData from "@/view/view-data.js";
import api from "@/api.js";

let url = urls.louDong.get;
let delurl = urls.louDong.del;
let operation = viewData.pagetitle.louDong;
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
    title: "展示序号",
    key: "sortIndex"
  }
];
let mapstate = ["louDongArray", "projectArray"];
let pagetitle = "楼栋管理";
let jumpAlert = "楼栋";

export default {
  mounted() {
    console.log("projectArray:", this.projectArray);
    this.getPccompany();
  },
  mixins: [mixin],
  components: {
    TableList,
    PageTitle
  },
  data() {
    return {
      jumpAlert,
      pagetitle,
      operation,
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
                            params.row.code,
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
  computed: mapState(mapstate),
  methods: {
    delCallback() {
      this.getPccompany();
    },

    getPccompany() {
      this.getData(
        url,
        {
          obj: { pageIndex: this.page, projCode: this.projectArray[0].projCode }
        },
        this.louDongArray,
        this.page
      );
    },
    pageChange(page) {
      this.page = page;
      this.getPccompany();
    }
  }
};
</script>
<style>
</style>
