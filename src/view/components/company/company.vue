<template>
  <div>
    <div class="page-title-wrap">
      <div class="page-title">公司信息</div>
      <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
        <a href="javascript:void(0)">menu
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>
            <div @click="addCompany">添加</div>
            <!-- <router-link to="/components/tables_page/company/companyadd" @click="addOne">添加</router-link> -->
          </DropdownItem>
          <DropdownItem>删除</DropdownItem>
          <DropdownItem>修改</DropdownItem>
          <DropdownItem>
            <router-link to="/components/tables_page/department">部门信息</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/components/tables_page/employee">员工信息</router-link>
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
export default {
  computed: {
    canAddCompany() {
      return this.$store.state.canAddCompany;
    }
  },
  methods: {
    addCompany() {
      console.log(this.canAddCompany);
      if (this.canAddCompany) {
        this.$router.push({
          path: "/components/tables_page/company/companyadd"
        });
      } else {
        alert("选择一条记录");
      }
    }
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
</style>
