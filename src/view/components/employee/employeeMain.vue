<template>
  <div>
    <div class="page-title-wrap">
      <div class="page-title">员工信息</div>
      <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
        <a href="javascript:void(0)">操作
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem class="border">
            <div class="emp-msg-button" @click="addEmp">添加员工</div>
          </DropdownItem>
          <DropdownItem class="border">
            <span class="emp-msg-button" @click="deptMsgClick">返回部门</span>
          </DropdownItem>
          <DropdownItem>
            <span class="emp-msg-button" @click="companyMsgClick">返回公司</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input placeholder="公司搜索" style="width: auto"/>
      <Input placeholder="地址搜索" style="width: auto"/>
      <Input placeholder="责任人搜索" style="width: auto"/>
      <Button type="info">搜索</Button>
    </div>
    <TableList :columns="columns" :data="data" checkedSource="emp"/>
  </div>
</template>

<script>
import TableList from "@/components/table-list/table-list.vue";
import { mapState } from "vuex";
import urls from "@/urls.js";
import ajax from "@/ajax.js";
import mixin from "@/view/service-mixin.js";

export default {
  mixins: [mixin],
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "员工",
          key: "username"
        },
        {
          title: "所属部门",
          key: "deptcode"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "所有者",
          key: "owner"
        },
        {
          title: "联系方式",
          key: "tellphone"
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
          title: "所属公司",
          key: "companycode"
        },
        {
          title: "Action",
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
                        title: "确定删除部门么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delPcPerson(params.row.usercode);
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
                        title: "确定删除部门么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delPcPerson(params.row.usercode);
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
  components: { TableList },
  computed: mapState(["departmentArray", "companyArray"]),
  methods: {
    addEmp() {
      this.$router.push({
        path: "/components/tables_page/empAdd"
      });
    },
    companyMsgClick() {
      this.$router.push({
        path: "/components/tables_page/company"
      });
    },
    deptMsgClick() {
      this.$router.push({
        path: "/components/tables_page/department"
      });
    },
    async getPcEmployee(url, data) {
      console.log("result--------------", url, data);
      let result = await ajax.post(url, data);
      console.log("result", result);
      if (result.status == 200) {
        this.data = result.data.jsonData;
      }
    },
    delResponse(result) {
      if (result.data.type == 200) {
        if (this.departmentArray.length == 1) {
          this.getPcEmployee(urls.employee.getPcPersonListByUserNameD, {
            str: this.departmentArray[0].code
          });
        } else {
          this.getPcEmployee(urls.employee.getPcPersonListByUserNameC, {
            str: this.companyArray[0].code
          });
        }
        this.$Message.info("删除成功");
      } else {
        this.$Message.info("删除失败");
      }
    },

    async delPcPerson(code) {
      let url = urls.employee.delPcPerson;
      let data = { str: code };
      let result = await ajax.post(url, data);
      this.delResponse(result);
    }
  },

  mounted() {
    if (this.departmentArray.length == 1) {
      this.getPcEmployee(urls.employee.getPcPersonListByUserNameD, {
        str: this.departmentArray[0].code
      });
    } else {
      this.getPcEmployee(urls.employee.getPcPersonListByUserNameC, {
        str: this.companyArray[0].code
      });
    }
  }
};
</script>

<style>
.emp-msg-button {
  height: 26px;
  line-height: 30px;
  padding-left: 18px;
}
.border {
  border-bottom: 1px solid #dcdee2;
}
</style>