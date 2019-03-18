export default [
  // {
  //   name: "配置管理",
  //   code: "baisc",
  //   children: [
  //     {
  //       name: "公司管理",
  //       code: "compManage"
  //     },
  //     {
  //       name: "工厂管理",
  //       code: "facManage"
  //     },
  //     {
  //       name: "堆场管理",
  //       code: "yardManage"
  //     }
  //   ]
  // }
  {
    name: "配置管理",
    code: "baisc",
    parent: ""
  },
  {
    name: "--- 公司管理",
    code: "compManage",
    parent: "配置管理"
  },
  {
    name: "--- 工厂管理",
    code: "facManage",
    parent: "配置管理"
  },
  {
    name: "--- 堆场管理",
    code: "yardManage",
    parent: "配置管理"
  },
  {
    name: "项目辖区",
    code: "project",
    parent: ""
  },
  {
    name: "--- 项目管理",
    code: "projManage",
    parent: "项目辖区"
  }
];
