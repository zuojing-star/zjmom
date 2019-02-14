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