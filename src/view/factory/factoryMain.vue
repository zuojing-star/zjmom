<template>
  <div class="main-company-wrap ivu-card ivu-card-bordered ivu-card-body">
    <div class="page-title-wrap">
      <div class="page-title">{{ factoryTemplateData.title }}</div>
      <Dropdown trigger="click" style="margin-left: 20px;margin-right:10px;">
        <a href="javascript:void(0)">操作
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem class="border">
            <div @click="addMessage" class="dep-msg-button">{{ factoryTemplateData.add }}</div>
          </DropdownItem>
          <DropdownItem class="border">
            <div class="dep-msg-button" @click="depMsgClick">{{ factoryTemplateData.son }}</div>
          </DropdownItem>
          <DropdownItem>
            <div class="dep-msg-button" @click="empMsgClick">{{ factoryTemplateData.grandson }}</div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input :placeholder="factoryTemplateData.search1" style="width: auto"/>
      <Input :placeholder="factoryTemplateData.search2" style="width: auto"/>
      <Input :placeholder="factoryTemplateData.search3" style="width: auto"/>
      <Button type="info">搜索</Button>
    </div>
    <TableList :columns="columns" :data="data" checkedSource="factory"/>
  </div>
</template>

<script>
import TableList from "@/components/table-list/table-list.vue";
import { mapState } from "vuex";
import urls from "@/urls.js";
import ajax from "@/ajax.js";

import mixin from "@/view/service-mixin.js";
import "@/assets/styles/common-main.css";
import routerPage from "@/view/router-page.js";

export default {
  mixins: [mixin],
  components: {
    TableList
  },

  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
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
                      this.show(params.index);
                    }
                  }
                },
                "View"
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
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ],
      factoryTemplateData: {
        title: "工厂信息",
        add: "添加工厂",
        son: "产线信息",
        grandson: "模台信息",
        search1: "工厂搜索",
        search2: "产线搜索",
        search3: "模台搜索"
      }
    };
  },
  methods: {
    addMessage() {
      console.log("addMessage", routerPage.FACTORY_ADD);
      this.$router.push({
        path: routerPage.FACTORY_ADD
      });
    },
    depMsgClick() {},
    empMsgClick() {}
  },
  mounted() {}
};
</script>