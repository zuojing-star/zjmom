<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle pagetitle="工厂信息" :operation="operation" @jumpTo="jumpTo($event,factoryArray,'工厂')"/>
    <TableList
      :columns="columns"
      :data="data"
      checkedSource="factory"
      :totalPage="totalPage"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import TableList from "@/components/table-list/table-list.vue";
import { mapState } from "vuex";
import urls from "@/urls.js";
import ajax from "@/ajax.js";
import mixin from "@/view/service-mixin.js";
import "@/assets/styles/common-main.css";
import routerPage from "@/view/router-page.js";
import viewData from "@/view/view-data.js";
import PageTitle from "_c/page-title/page-title.vue";

export default {
  mixins: [mixin],
  components: {
    TableList,
    PageTitle
  },
  mounted() {
    this.getFacDatas();
  },
  data() {
    return {
      operation: viewData.pagetitle.factory,
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
          title: "类型",
          key: "type"
        },
        {
          title: "联系人",
          key: "responsible"
        },
        {
          title: "联系方式",
          key: "telephone"
        },
        {
          title: "地址",
          key: "responsible"
        },
        {
          title: "描述",
          key: "responsible"
        },
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
                    click: () => {
                      console.log(params);

                      this.$Modal.confirm({
                        title: "确定删除么？",
                        content: "<p></p>",
                        onOk: () => {},
                        onCancel: () => {}
                      });
                    }
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
                      console.log(params);

                      this.$Modal.confirm({
                        title: "确定删除么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delData(
                            urls.factory.delFactory,
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
      ],
      data: []
    };
  },
  computed: mapState(["factoryArray"]),
  methods: {
    delCallback() {
      this.getFacDatas();
    },
    getFacDatas() {
      this.getData(
        urls.factory.getFacDatas,
        { obj: { pageIndex: this.page } },
        this.factoryArray,
        this.page
      );
    },
    pageChange(page) {
      this.page = page;
      this.getFacDatas();
    }
  }
};
</script>