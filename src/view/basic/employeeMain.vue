<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle pagetitle="员工信息" :operation="operation" @jumpTo="jumpTo($event,[{}],'员工')"/>
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
    this.getEmployee();
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
      operation: viewData.pagetitle.employee,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "姓名",
          key: "userName"
        },
        {
          title: "账号",
          key: "userCode"
        },
        {
          title: "公司名称",
          key: "compName"
        },
        {
          title: "公司代码",
          key: "compCode"
        },
        {
          title: "部门代码",
          key: "deptCode"
        },
        {
          title: "部门名称",
          key: "deptName"
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
                            urls.employee.delPcPerson,
                            params.row.userCode,
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
  computed: mapState(["companyArray", "departmentArray"]),

  //接口
  methods: {
    getEmployee() {
      let url = "",
        params = {};

      if (this.departmentArray.length > 0) {
        url = urls.employee.getPcPersonListByUserNameD;
        params = {
          obj: { pageIndex: 1, deptCode: this.departmentArray[0].code }
        };
      } else {
        (params = {
          obj: { pageIndex: 1, compCode: this.companyArray[0].code }
        }),
          (url = urls.employee.getPcPersonListByUserNameC);
      }

      this.getData(
        url,
        params,
        this.companyArray,
        this.page,
        true,
        this.departmentArray
      );
    },
    delCallback() {
      this.getEmployee();
    },
    //分页
    pageChange() {
      this.getEmployee();
    }
  }
};
</script>
<style>
</style>
