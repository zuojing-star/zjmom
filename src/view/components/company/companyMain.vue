<template>
  <div class="main-company-wrap">
    <div class="page-title-wrap">
      <div class="page-title">公司信息</div>
      <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
        <a href="javascript:void(0)">操作
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem class="border">
            <div @click="addCompany" class="dep-msg-button">添加公司</div>
          </DropdownItem>
          <DropdownItem class="border">
            <div class="dep-msg-button" @click="depMsgClick">部门信息</div>
          </DropdownItem>
          <DropdownItem>
            <div class="dep-msg-button" @click="empMsgClick">员工信息</div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input placeholder="公司搜索" style="width: auto"/>
      <Input placeholder="地址搜索" style="width: auto"/>
      <Input placeholder="责任人搜索" style="width: auto"/>
      <Button type="info">搜索</Button>
    </div>
    <TableList :columns="columns" :data="data" checkedSource="company"/>
  </div>
</template>
<script>
import TableList from "@/components/table-list/table-list.vue";
import { mapState } from "vuex";
import urls from "@/urls.js";
import ajax from "@/ajax.js";

import "./companyMain.css";
import mixin from "@/view/service-mixin.js";

export default {
  //初始化
  mounted() {
    this.getPccompany();
  },

  //mixin
  mixins: [mixin],

  //组件注册
  components: {
    TableList
  },

  //数据
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "公司333444",
          key: "name"
        },
        {
          title: "地址333",
          key: "address"
        },
        {
          title: "所有者333",
          key: "owner"
        },
        {
          title: "责任人",
          key: "responsible"
        },
        {
          title: "修改人",
          key: "modifer"
        },
        {
          title: "创建时间",
          key: "createdate"
        },
        {
          title: "修改时间",
          key: "modifydate"
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
        path: "/components/tables_page/addCompany"
      });
    }
  }
};
</script>
<style>
</style>
