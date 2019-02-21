<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle pagetitle="类型信息" :operation="operation" @jumpTo="jumpTo($event,null,'产线')"/>
    <TableList :columns="columns" :data="data" checkedSource="productLine"/>
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
      operation: viewData.pagetitle.produceType,
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
          title: "描述",
          key: "desc"
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
                          this.delPccompany(params.row.code);
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
    //删除公司
    async delPccompany(code) {
      let url = urls.company.delPccompnay;
      let data = {
        str: code
      };
      let result = await ajax.post(url, data);
      this.delResponse(result);
    },

    //删除公司 回调
    delResponse(result) {
      if (result.data.type == 200) {
        this.getPccompany();
        this.$Message.info("删除成功");
      } else {
        this.$Message.info("删除失败");
      }
    },

    //获取公司数据
    async getPccompany() {
      let url = urls.company.getPccompany;
      let result = await ajax.post(url);
      this.getResponse(result, this.companyArray);
    },

    //页面跳转
    empMsgClick() {
      let companyArray = this.companyArray;

      if (companyArray.length == 1) {
        this.$router.push({
          path: `/components/tables_page/employee`
        });
      } else {
        this.$Modal.error({
          title: "至少选择一个公司"
        });
      }
    },
    depMsgClick() {
      let companyArray = this.companyArray;

      if (companyArray.length == 1) {
        this.$router.push({
          path: "/components/tables_page/department"
        });
      } else {
        this.$Modal.error({
          title: "至少选择一个公司"
        });
      }
    },
    addCompany() {
      this.$router.push({
        path: "/components/addCompany"
      });
    }
  }
};
</script>
<style>
</style>
