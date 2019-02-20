export default {
  // 添加 表单 页面数据
  add: {
    //公司
    addCompany: [
      { text: "公司名字", value: "", type: "input", require: true }, //text：字段名字 value：字段值 type：输入框的类型 require：必填
      { text: "公司地址", value: "", type: "input", require: false },
      { text: "联系人", value: "", type: "input", require: false },
      { text: "联系方式", value: "", type: "input", require: false }
    ],
    //工厂
    addFactory: [
      { text: "名称", value: "", type: "input", require: true },
      {
        text: "类型",
        value: "NB",
        type: "select",
        require: false,
        selectData: [
          {
            value: "WX",
            label: "外协"
          },
          {
            value: "NB",
            label: "内部"
          }
        ]
      },
      { text: "联系人", value: "", type: "input", require: false },
      { text: "联系方式", value: "", type: "input", require: false },
      { text: "地址", value: "", type: "input", require: false }
    ],
    //产线
    addProduceLine: [
      { text: "产线名称", value: "", type: "input", require: true },
      { text: "责任人", value: "", type: "input", require: true },
      { text: "联系方式", value: "", type: "input", require: false },
      { text: "模台总数", value: "", type: "input", require: false },
      { text: "上班时间", value: "", type: "input", require: true },
      { text: "下班时间", value: "", type: "input", require: true },
      { text: "是否轮班", value: "", type: "input", require: false },
      { text: "备注", value: "", type: "input", require: false }
    ],
    //模台
    addMouldDesk: [
      { text: "编号", value: "", type: "input", require: true },
      { text: "备注", value: "", type: "input", require: false }
    ],
    //堆场
    addStorageYard: [
      { text: "名称", value: "", type: "input", require: true },
      { text: "地址", value: "", type: "input", require: false },
      { text: "联系人", value: "", type: "input", require: false },
      { text: "联系方式", value: "", type: "input", require: false },
      { text: "容纳量", value: "", type: "input", require: false }
    ],
    //区位
    addZoneBit: [
      { text: "名称", value: "", type: "input", require: true },
      { text: "备注", value: "", type: "input", require: false }
    ],
    //货架
    addStorageRack: [
      { text: "名称", value: "", type: "input", require: true },
      { text: "编码", value: "", type: "input", require: false }
    ],
    //生产类型
    addProduceType: [
      { text: "名称", value: "", type: "input", require: true },
      { text: "备注", value: "", type: "input", require: false }
    ],
    //工艺
    addProduceCraft: [
      { text: "名称", value: "", type: "input", require: true },
      { text: "是否必检", value: "", type: "input", require: false },
      { text: "质检顺序", value: "", type: "input", require: false },
      { text: "备注", value: "", type: "input", require: false }
    ],
    //工序
    addProduceProcess: [
      { text: "名称", value: "", type: "input", require: true },
      { text: "是否必检", value: "", type: "input", require: false },
      { text: "质检顺序", value: "", type: "input", require: false },
      { text: "备注", value: "", type: "input", require: false }
    ]
  },
  // main 页面 头部搜索 数据
  pagetitle: {
    company: [
      { text: "添加公司", path: "/components/addCompany", require: false },
      {
        text: "部门信息",
        path: "/components/tables_page/employee",
        require: true
      },
      {
        text: "员工信息",
        path: "/components/tables_page/department",
        require: true
      }
    ],
    factory: [
      { text: "添加工厂", path: "/components/addFactory", require: false },
      {
        text: "产线信息",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "模台信息",
        path: "/components/tables_page/department",
        require: false
      }
    ]
  }
};
