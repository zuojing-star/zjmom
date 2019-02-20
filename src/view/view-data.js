export default {
  // 表单 数据
  add: {
    //公司
    addCompany: [
      //text：字段名字   value：字段值 type：输入框的类型 requestField:请求的字段名字 require：必填
      {
        text: "公司名字",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "公司地址",
        value: "",
        type: "input",
        requestField: "address",
        require: false
      },
      {
        text: "联系人",
        value: "",
        type: "input",
        requestField: "responsible",
        require: false
      },
      {
        text: "联系方式",
        value: "",
        type: "input",
        requestField: "telphone",
        require: false
      }
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
  //操作 数据
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
      { text: "新增工厂", path: "/components/addFactory", require: false },
      { text: "批量删除", path: "/components/addFactory", require: false },
      {
        text: "产线管理",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "模台管理",
        path: "/components/mouldDesk",
        require: false
      },
      {
        text: "部门管理",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "员工管理",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "角色维护",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "工序维护",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "工艺维护",
        path: "/components/produceLine",
        require: false
      },
      {
        text: "类型维护",
        path: "/components/produceLine",
        require: false
      }
    ],
    produceLine: [
      {
        text: "新增产线",
        path: "/components/addProduceLine",
        require: false
      }
    ],
    mouldDesk: [
      {
        text: "新增模台",
        path: "/components/addMouldDesk",
        require: false
      }
    ],
    storageYard: [
      {
        text: "新增堆场",
        path: "/components/addStorageYard",
        require: false
      }
    ]
  }
};
