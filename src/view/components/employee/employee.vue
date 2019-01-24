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
            <router-link to="/components/tables_page/company/companyadd">添加</router-link>
          </DropdownItem>
          <DropdownItem>删除</DropdownItem>
          <DropdownItem>修改</DropdownItem>
          <DropdownItem>
            <router-link to="/components/tables_page/department">部门信息</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/components/tables_page/company">公司信息</router-link>
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
