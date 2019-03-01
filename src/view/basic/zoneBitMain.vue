<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle pagetitle="区位信息" :operation="operation" @jumpTo="jumpTo($event,zoneBitArray,'区位')"/>
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
    this.getZoneBit();
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
      operation: viewData.pagetitle.zoneBit,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "堆场名称",
          key: "yardName"
        },
        {
          title: "堆场代码",
          key: "yardCode"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "编码",
          key: "code"
        },
        {
          title: "责任人",
          key: "responsible"
        },
        {
          title: "位置描述",
          key: "desp"
        },
        {
          title: "容纳量",
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
                      console.log(params);

                      this.$Modal.confirm({
                        title: "确定删除么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delData(
                            urls.zoneBit.delZoneBit,
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
  computed: mapState(["storageYardArray", "zoneBitArray"]),

  //接口
  methods: {
    getZoneBit() {
      this.getData(
        urls.zoneBit.getZoneBit,
        {
          obj: { pageIndex: this.page, yardCode: this.storageYardArray[0].code }
        },
        this.storageYardArray,
        this.page,
        true,
        this.zoneBitArray
      );
    },
    delCallback() {
      this.getZoneBit();
    },
    //分页
    pageChange() {
      this.getZoneBit();
    }
  }
};
</script>
<style>
</style>
