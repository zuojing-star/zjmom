<template>
  <div>
    <div class="page-title-wrap">
      <div class="page-title">员工信息</div>
      <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
        <a href="javascript:void(0)">menu
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>
            <div class="emp-msg-button">添加</div>
          </DropdownItem>
          <DropdownItem>
            <div class="emp-msg-button">删除</div>
          </DropdownItem>
          <DropdownItem>
            <div class="emp-msg-button">修改</div>
          </DropdownItem>
          <DropdownItem>
            <span class="emp-msg-button" @click="deptMsgClick">部门信息</span>
          </DropdownItem>
          <DropdownItem>
            <span class="emp-msg-button" @click="companyMsgClick">公司信息</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input placeholder="Enter text" style="width: auto">
        <Icon type="ios-search" slot="suffix"/>
      </Input>
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
</style>