<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <PageTitle
      pagetitle="部门信息"
      :operation="operation"
      @jumpTo="jumpTo($event,departmentArray,'部门')"
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
    this.getFacDepartment();
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
      operation: viewData.pagetitle.facDepartment,
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
          title: "部门代码",
          key: "code"
        },
        {
          title: "部门名称",
          key: "name"
        },
        {
          title: "维护人",
          key: "owner"
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
                            urls.department.delPcDepartment,
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
  computed: mapState(["factoryArray", "departmentArray"]),

  //接口
  methods: {
    getFacDepartment() {
      this.getData(
        urls.factory.getDeptsOfFac,
        { obj: { pageIndex: this.page, facCode: this.factoryArray[0].code } },
        this.factoryArray,
        this.page,
        true,
        this.departmentArray
      );
    },
    delCallback() {
      this.getFacDepartment();
    },
    //分页
    pageChange() {
      this.getFacDepartment();
    }
  }
};
</script>
<style>
</style>
