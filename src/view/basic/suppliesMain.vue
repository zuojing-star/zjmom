<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle
      pagetitle="物料码库"
      :operation="operation"
      @jumpTo="jumpTo($event,produceLineArray,'物料')"
    />
    <TableList :columns="columns" :data="data" :totalPage="totalPage" @pageChange="pageChange"/>
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
  //初始化
  mounted() {
    this.getSupplies();
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
      operation: viewData.pagetitle.supplies,
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
          key: "cusCode"
        },
        {
          title: "类别",
          key: "typeName"
        },
        {
          title: "规格",
          key: "mSpec"
        },
        {
          title: "经验参数",
          key: "mArg"
        },
        {
          title: "计量单位",
          key: "mUOM"
        },
        {
          title: "统计单位",
          key: "totalUOM"
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
                      this.delData(
                        urls.supplies.delSupplies,
                        params.row.code,
                        this.delCallback
                      );
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
  computed: mapState(["factoryArray", "produceLineArray"]),

  //接口
  methods: {
    delCallback() {
      this.getSupplies();
    },

    getSupplies() {
      this.getData(
        urls.supplies.getSupplies,
        {
          obj: {
            pageIndex: this.page,
            facCode: this.factoryArray && this.factoryArray[0].code
          }
        },
        this.factoryArray,
        this.page
      );
    },

    //分页
    pageChange(page) {
      console.log("page:", page);
      this.page = page;
      this.getSupplies();
    }
  }
};
</script>
<style>
</style>
