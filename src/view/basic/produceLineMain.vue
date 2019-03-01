<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle
      pagetitle="产线信息"
      :operation="operation"
      @jumpTo="jumpTo($event,produceLineArray,'产线')"
    />
    <TableList
      :columns="columns"
      :data="data"
      checkedSource="productLine"
      :totalPage="totalPage"
      @pageChange="pageChange"
      :hidePage="hidePage"
    />
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
    console.log("produceLineArray:", this.produceLineArray);
    this.getProductLine();
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
      operation: viewData.pagetitle.produceLine,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "工厂名称",
          key: "facName"
        },
        {
          title: "工厂代码",
          key: "facCode"
        },
        {
          title: "产线名称",
          key: "name"
        },
        {
          title: "产线代码",
          key: "code"
        },
        {
          title: "责任人",
          key: "responsible"
        },
        {
          title: "联系电话",
          key: "telephone"
        },
        {
          title: "上班时间",
          key: "startdate"
        },
        {
          title: "下班时间",
          key: "enddate"
        },
        {
          title: "是否轮班",
          key: "isrotate"
        },
        {
          title: "模具总数",
          key: "setnum"
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

                      this.delData(
                        urls.productLine.delProductLine,
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
      this.getProductLine();
    },

    getProductLine() {
      this.getData(
        urls.productLine.getProductLine,
        {
          obj: {
            pageIndex: this.page,
            facCode: this.factoryArray && this.factoryArray[0].code
          }
        },
        this.factoryArray,
        this.page,
        true,
        this.produceLineArray
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
