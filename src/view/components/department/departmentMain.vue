<template>
  <div>
    <div class="page-title-wrap">
      <div class="page-title">部门信息</div>
      <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
        <a href="javascript:void(0)">操作
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem class="border">
            <div @click="addDepartment" class="emp-msg-button">添加部门</div>
          </DropdownItem>
          <DropdownItem class="border">
            <span class="emp-msg-button" @click="companyMsgClick">返回公司</span>
          </DropdownItem>
          <DropdownItem>
            <span class="emp-msg-button" @click="empMsgClick">员工信息</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input placeholder="公司搜索" style="width: auto"></Input>
      <Input placeholder="地址搜索" style="width: auto"></Input>
      <Input placeholder="责任人搜索" style="width: auto"></Input>
      <Button type="info">搜索</Button>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
  computed: mapState(["canAddCompany", "departmentArray"]),
  methods: {
    addDepartment() {
      console.log("addDepartment");

      this.$router.push({
        path: "/components/tables_page/depAdd"
      });
    },
    companyMsgClick() {
      this.$router.push({
        path: "/components/tables_page/company"
      });
    },
    empMsgClick() {
      let departmentArray = this.departmentArray;

      if (departmentArray.length == 1) {
        this.$router.push({
          path:
            "/components/tables_page/employee?code=" + departmentArray[0].code
        });
      } else {
        this.$Modal.error({
          title: "至少选择一个部门"
        });
      }
    }
  },
  mounted() {
    console.dir(this.$route.query.code);
  }
};
</script>
<style>
.page-title {
  display: inline-block;
}
.page-title-wrap {
  padding: 0 0 20px 0;
}

.liketable {
  border: 1px solid #dbdbdb;
  overflow: hidden;
  color: #666;
  padding: 20px;
  border-radius: 4px;
}
.table-heade {
  display: flex;
  text-align: center;
  padding: 5px 20px;
  padding-right: 22px;
}
.table-head-col {
  flex: 1;
}
.table-item-wrap {
  padding: 0 20px;

  /* height: 200px;
  overflow-y: scroll; */
}
.table-item {
  color: #1c1c1c;
  overflow: hidden;
  list-style: none;
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
  display: flex;
}
.table-item-col {
  flex: 1;
  height: 38px;
  line-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  text-align: center;
  color: #1c1c1c;
  letter-spacing: -0.14px;
  padding-top: 0;
  margin-right: 2px;
}
.tag-icon {
  width: 14px;
  margin-right: 3px;
  /* vertical-align: middle; */
}
.button {
  margin-right: 10px;
  width: 100px;
}
.button-wrap {
  margin-bottom: 16px;
}
.form-line > label {
  display: inline-block;
  margin-right: 10px;
  width: 80px;
  text-align: right;
}
.ivu-checkbox-group {
  display: inline-block !important;
}
.ivu-row {
  display: inline-block !important;
}
.from-wrap {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 50px;
}
.form-line {
  margin-bottom: 20px;
}
.btn-submit {
  width: 162px !important;
}
.emp-msg-button {
  height: 26px;
  line-height: 30px;
  padding-left: 18px;
}
.border {
  border-bottom: 1px solid #dcdee2;
}
</style>
