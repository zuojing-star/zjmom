<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle
      pagetitle="堆场管理"
      :operation="operation"
      @jumpTo="jumpTo($event,storageYardArray,'堆场')"
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
    this.getStorageYard();
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
      operation: viewData.pagetitle.storageYard,
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
          title: "联系人",
          key: "responsible"
        },
        {
          title: "联系方式",
          key: "telephone"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "容量",
          key: "totalvo"
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
                        onOk: () => {
                          this.delPccompany(params.row.code);
                        },
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
                            urls.storageYard.delStorageYard,
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
  computed: mapState(["storageYardArray"]),

  //接口
  methods: {
    delCallback() {
      this.getStorageYard();
    },

    getStorageYard() {
      this.getData(
        urls.storageYard.getStorageYard,
        { obj: { pageIndex: this.page } },
        this.storageYardArray,
        this.page
      );
    },

    //分页
    pageChange(page) {
      this.page = page;
      this.getStorageYard();
    }
  }
};
</script>
<style>
</style>
