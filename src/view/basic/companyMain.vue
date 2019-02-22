<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle pagetitle="公司信息" :operation="operation" @jumpTo="jumpTo($event,companyArray,'公司')"/>
    <TableList
      :columns="columns"
      :data="data"
      checkedSource="company"
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
import "@/assets/styles/common-main.css";
import mixin from "@/view/service-mixin.js";
import PageTitle from "_c/page-title/page-title.vue";
import viewData from "@/view/view-data.js";

export default {
  //初始化
  mounted() {
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
      page: 1,
      totalPage: 0,
      operation: viewData.pagetitle.company,
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
          title: "公司地址",
          key: "address"
        },
        {
          title: "代码",
          key: "code"
        },
        {
          title: "联系人",
          key: "responsible"
        },
        {
          title: "联系方式",
          key: "telphone"
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
                            urls.company.delPccompnay,
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

  //计算属性
  computed: mapState(["companyArray"]),

  //接口
  methods: {
    delCallback() {
      this.getPccompany();
    },

    getPccompany() {
      this.getData(
        urls.company.getPccompany,
        { str: this.page },
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
