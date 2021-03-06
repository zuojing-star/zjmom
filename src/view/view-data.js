export default {
  // 表单 数据
  add: {
    //公司
    addCompany: [
      /*
        text：string 字段名字
         value：string 字段值 
         tempValue:string 用于默认值的原始值
         type：string 输入框的类型 
         requestField:string 请求的字段名字
         require：boolean 必填
         selectData:array select组件的数据
         isHide:boolean 是否隐藏
         defaultValue:true  默认值字段
         */
      {
        text: "公司名字",
        value: "",
        type: "input",
        requestField: "name",
        require: true,
        isHide: false
      },
      {
        text: "公司地址",
        value: "",
        type: "input",
        requestField: "address",
        require: true
      },
      {
        text: "联系人",
        value: "",
        type: "input",
        requestField: "responsible",
        require: true
      },
      {
        text: "联系方式",
        value: "",
        type: "input",
        requestField: "telephone",
        require: false
      }
    ],
    addDepartment: [
      {
        text: "部门名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp"
      }
    ],
    addEmployee: [
      {
        text: "姓名",
        value: "",
        type: "input",
        requestField: "userName",
        require: true
      },
      {
        text: "账户",
        value: "",
        type: "input",
        requestField: "userCode",
        require: true
      },
      {
        text: "密码",
        value: "",
        type: "input",
        requestField: "password",
        require: true
      },
      { text: "地址", value: "", type: "input", requestField: "address" },
      { text: "联系电话", value: "", type: "input", requestField: "telephone" },
      { text: "邮箱", value: "", type: "input", requestField: "email" }
    ],
    //工厂
    addFactory: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "类型",
        value: "NB",
        type: "select",
        requestField: "type",
        require: true,
        defaultValue: true,
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
        requestField: "telephone",
        require: false
      },
      {
        text: "地址",
        value: "",
        type: "input",
        requestField: "address",
        require: false
      }
    ],
    //产线
    addProductLine: [
      {
        text: "产线名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "责任人",
        value: "",
        type: "input",
        requestField: "responsible",
        require: true
      },
      {
        text: "联系方式",
        value: "",
        type: "input",
        requestField: "telephone",
        require: false
      },
      {
        text: "模台总数",
        value: "",
        type: "input",
        requestField: "setNum",
        require: false
      },
      {
        text: "上班时间",
        value: "",
        type: "select",
        requestField: "startDate",
        require: true,
        selectData: [
          {
            value: "5 AM",
            label: "5 AM"
          },
          {
            value: "6 AM",
            label: "6 AM"
          },
          {
            value: "7 AM",
            label: "7 AM"
          },
          {
            value: "8  AM",
            label: "8  AM"
          },
          {
            value: "9  AM",
            label: "9  AM"
          },
          {
            value: "10 AM",
            label: "10 AM"
          },
          {
            value: "11 AM",
            label: "11 AM"
          },
          {
            value: "12 AM",
            label: "12 AM"
          },
          {
            value: "1 PM",
            label: "1 PM"
          },
          {
            value: "2 PM",
            label: "2 PM"
          },
          {
            value: "3 PM",
            label: "3 PM"
          },
          {
            value: "4 PM",
            label: "4 PM"
          },
          {
            value: "5 PM",
            label: "5 PM"
          }
        ]
      },
      {
        text: "是否轮班",
        value: "否",
        tempValue: "否",
        type: "radio",
        requestField: "isRotate",
        defaultValue: true,
        require: false,
        radioData: [
          {
            value: "yes",
            label: "是"
          },
          {
            value: "no",
            label: "否"
          }
        ]
      },
      {
        text: "下班时间",
        value: "",
        type: "select",
        requestField: "endDate",
        require: true,
        selectData: [
          {
            value: "5 AM",
            label: "5 AM"
          },
          {
            value: "6 AM",
            label: "6 AM"
          },
          {
            value: "7 AM",
            label: "7 AM"
          },
          {
            value: "8  AM",
            label: "8  AM"
          },
          {
            value: "9  AM",
            label: "9  AM"
          },
          {
            value: "10 AM",
            label: "10 AM"
          },
          {
            value: "11 AM",
            label: "11 AM"
          },
          {
            value: "12 AM",
            label: "12 AM"
          },
          {
            value: "1 PM",
            label: "1 PM"
          },
          {
            value: "2 PM",
            label: "2 PM"
          },
          {
            value: "3 PM",
            label: "3 PM"
          },
          {
            value: "4 PM",
            label: "4 PM"
          },
          {
            value: "5 PM",
            label: "5 PM"
          }
        ]
      },

      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    //模台
    addMouldDesk: [
      {
        text: "编号",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    //堆场
    addStorageYard: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "地址",
        value: "",
        type: "input",
        requestField: "address",
        require: true
      },
      {
        text: "联系人",
        value: "",
        type: "input",
        requestField: "responsible",
        require: true
      },
      {
        text: "联系方式",
        value: "",
        type: "input",
        requestField: "telephone",
        require: false
      },
      {
        text: "容纳量",
        value: "",
        type: "input",
        requestField: "totalVo",
        require: false
      }
    ],
    //区位
    addZoneBit: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    //货架
    addStorageRack: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "编码",
        value: "",
        type: "input",
        requestField: "code",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    //生产类型
    addProduceType: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    //工艺
    addProduceCraft: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    //工序
    addProduceProcess: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    addRole: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "编码",
        value: "",
        type: "input",
        requestField: "code",
        require: true
      },
      {
        text: "使用范围",
        value: "all",
        type: "select",
        requestField: "scope",
        defaultValue: true,
        selectData: [],
        require: true
      },
      {
        text: "备注",
        value: "",
        type: "textarea",
        requestField: "desp",
        require: false
      }
    ],
    addSupplies: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "编码",
        value: "",
        type: "input",
        requestField: "cusCode",
        require: true
      },
      {
        text: "生产类型",
        value: "",
        type: "input",
        requestField: "mscName",
        require: true
      },
      {
        text: "类别",
        value: "",
        type: "select",
        selectData: [
          {
            value: "lb1",
            label: "类别1"
          },
          {
            value: "lb2",
            label: "类别2"
          }
        ],
        requestField: "typeName",
        require: false
      },
      {
        text: "规格",
        value: "",
        type: "input",
        requestField: "mSpec",
        require: false
      },
      {
        text: "经验参数",
        value: "",
        type: "input",
        requestField: "mArg",
        require: true
      },
      {
        text: "计量单位",
        value: "",
        type: "input",
        requestField: "mUOM",
        require: false
      },
      {
        text: "统计单位",
        value: "",
        type: "input",
        requestField: "totalUOM",
        require: false
      },
      {
        text: "辅助说明",
        value: "",
        type: "textarea",
        requestField: "desc",
        require: false
      }
    ],
    addProject: [
      {
        text: "名称",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "编码",
        value: "",
        type: "input",
        requestField: "projCode",
        require: true
      },
      {
        text: "总面积",
        value: "",
        type: "input",
        requestField: "totalVo",
        require: true
      },
      {
        text: "总体量",
        value: "",
        type: "input",
        requestField: "totalArea",
        require: false
      },
      {
        text: "项目经理",
        value: "",
        type: "input",
        requestField: "manager",
        require: true
      },
      {
        text: "联系方式",
        value: "",
        type: "input",
        requestField: "telephone",
        require: true
      },
      {
        text: "项目地址",
        value: "",
        type: "input",
        requestField: "address",
        require: true
      },
      {
        text: "开工时间",
        value: "2000-01-01 00:00:00",
        type: "datepicker",
        requestField: "planStart",
        require: false
      },
      {
        text: "完工时间",
        value: "2000-01-01 00:00:00", //默认值
        type: "datepicker",
        requestField: "planEnd",
        require: false
      },
      {
        text: "描述",
        value: "",
        type: "input",
        requestField: "desp",
        require: false
      }
    ],
    addLouDong: [
      {
        text: "编号",
        value: "",
        type: "select",
        selectData: [
          {
            value: "1#",
            label: "1#"
          },
          {
            value: "2#",
            label: "2#"
          },
          {
            value: "3#",
            label: "3#"
          }
        ],
        requestField: "name",
        require: true
      },
      {
        text: "显示名称",
        value: "",
        type: "input",
        requestField: "showName",
        require: true
      },
      {
        text: "显示序号",
        value: "",
        type: "input",
        requestField: "sortIndex",
        require: true
      },
      {
        text: "总体量",
        value: "",
        type: "input",
        requestField: "totalVo",
        require: false
      }
    ],
    addFloor: [
      {
        text: "编号",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "显示名称",
        value: "",
        type: "input",
        requestField: "showName",
        require: true
      },
      {
        text: "总体量",
        value: "",
        type: "input",
        requestField: "totalVo",
        require: false
      },
      {
        text: "楼层位置",
        value: "",
        type: "input",
        requestField: "lcIndex",
        require: true
      }
    ],
    contractBuild: [
      {
        text: "编号",
        value: "",
        type: "input",
        requestField: "name",
        require: true
      },
      {
        text: "总体量",
        value: "",
        type: "input",
        requestField: "totalVo",
        require: false
      },
      {
        text: "描述",
        value: "",
        type: "input",
        requestField: "desp",
        require: false
      }
    ]
  },
  //操作 数据
  pagetitle: {
    /**
     *  require: boolean 需要父级依赖
     *  border：boolean 分割线
     */
    company: [
      { text: "添加公司", path: "/basic/addCompany", require: false },
      {
        text: "部门信息",
        path: "/basic/department",
        require: true
      },
      {
        text: "员工信息",
        path: "/basic/employee",
        require: true
      }
    ],
    department: [
      { text: "添加部门", path: "/basic/addDepartment" },
      {
        text: "返回公司",
        path: "/basic/company",
        require: true
      },
      {
        text: "员工信息",
        path: "/basic/employee",
        require: true
      }
    ],
    employee: [
      { text: "添加员工", path: "/basic/addEmployee" },
      {
        text: "返回公司",
        path: "/basic/company",
        require: true
      },
      {
        text: "返回部门",
        path: "/basic/department",
        require: true
      }
    ],
    factory: [
      { text: "新增工厂", path: "/basic/addFactory", require: false },
      {
        text: "批量删除",
        path: "/basic/addFactory",
        require: true,
        border: true
      },
      {
        text: "产线管理",
        path: "/basic/produceLine",
        require: true
      },
      {
        text: "查看模台",
        path: "/basic/mouldDesk",
        require: true,
        border: true
      },
      {
        text: "部门管理",
        path: "/basic/facDepartment",
        require: true
      },
      {
        text: "员工管理",
        path: "/basic/facEmployee",
        require: true
      },
      {
        text: "角色维护",
        path: "/basic/role",
        require: true
      },
      {
        text: "物料码库",
        path: "/basic/supplies",
        require: true,
        border: true
      },
      {
        text: "工序维护",
        path: "/basic/produceProcess",
        require: true
      },
      {
        text: "工艺维护",
        path: "/basic/produceCraft",
        require: true
      },
      {
        text: "类型维护",
        path: "/basic/produceType",
        require: true
      }
    ],
    produceProcess: [
      {
        text: "添加工序",
        path: "/basic/addProduceProcess",
        require: false
      },
      {
        text: "人员授权",
        path: "/basic/produceProcessEmp",
        require: true
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: false
      }
    ],
    produceType: [
      {
        text: "添加类型",
        path: "/basic/addProduceType",
        require: false
      },
      {
        text: "授权工艺",
        path: "/basic/produceTypeAuthCraft",
        require: true
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: false
      }
    ],
    produceCraft: [
      {
        text: "添加工艺",
        path: "/basic/addProduceCraft",
        require: false
      },
      {
        text: "工艺人员授权",
        path: "/basic/produceCraftEmp",
        require: true
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: false
      }
    ],
    produceLine: [
      {
        text: "新增产线",
        path: "/basic/addProduceLine",
        require: false
      },
      {
        text: "模台信息",
        path: "/basic/mouldDesk",
        require: true
      }
    ],
    mouldDesk: [
      {
        text: "新增模台",
        path: "/basic/addMouldDesk",
        require: false
      }
    ],
    storageYard: [
      {
        text: "新增堆场",
        path: "/basic/addStorageYard",
        require: false
      },
      {
        text: "区位管理",
        path: "/basic/zoneBit",
        require: true
      }
    ],
    zoneBit: [
      {
        text: "新增区位",
        path: "/basic/addZoneBit",
        require: false
      },
      {
        text: "货架管理",
        path: "/basic/storageRack",
        require: true
      },
      {
        text: "返回堆场",
        path: "/basic/storageYard",
        require: false
      }
    ],
    storageRack: [
      {
        text: "新增货架",
        path: "/basic/addStorageRack",
        require: true
      },
      {
        text: "返回区位",
        path: "/basic/zoneBit",
        require: true
      },
      {
        text: "返回堆场",
        path: "/basic/storageYard",
        require: false
      }
    ],
    role: [
      {
        text: "新增角色",
        path: "/basic/addRole",
        require: false
      },
      {
        text: "批量删除",
        path: "/basic/addRole",
        require: false,
        border: true
      },
      {
        text: "角色授权",
        path: "/basic/roleAuth",
        require: true
      },
      {
        text: "添加人员",
        path: "/basic/roleEmpAuth",
        require: true
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: false
      }
    ],
    facDepartment: [
      { text: "添加部门", path: "/basic/addFacDepartment" },
      {
        text: "员工信息",
        path: "/basic/facEmployee",
        require: true
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: true
      }
    ],
    facEmployee: [
      { text: "添加员工", path: "/basic/addFacEmployee" },
      {
        text: "返回部门",
        path: "/basic/facDepartment",
        require: true
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: true
      }
    ],
    supplies: [
      { text: "添加物料", path: "/basic/addSupplies" },
      {
        text: "导入物料",
        path: "这里是一个按钮，直接导入物料信息"
      },
      {
        text: "打印物料",
        path: "这里是一个按钮，直接导入物料信息"
      },
      {
        text: "返回工厂",
        path: "/basic/factory",
        require: true
      }
    ],
    //项目管理
    projectManage: [
      { text: "添加项目", path: "/project/addProjManage" },
      {
        text: "楼栋维护",
        path: "/project/louDong",
        require: true
      },
      {
        text: "项目成员",
        path: "/project/projMember"
      },
      {
        text: "文件夹集",
        path: "/basic/factory",
        require: true
      },
      {
        text: "项目资料",
        path: "/basic/factory",
        require: true
      },
      {
        text: "项目成本",
        path: "/basic/factory",
        require: true
      },
      {
        text: "合同构件类型",
        path: "/project/contractBuild",
        require: true
      },
      {
        text: "关联生产类型",
        path: "/project/productionTypeRelevance",
        require: true
      }
    ],
    louDong: [
      { text: "添加楼栋", path: "/project/addLouDong" },
      {
        text: "楼层维护",
        path: "/project/floor",
        require: true
      }
    ],
    floor: [{ text: "添加楼层", path: "/project/addFloor" }],
    contractBuild: [
      { text: "添加合同", path: "/project/addContractBuild" },
      {
        text: "类型关联",
        path: "/project/contractRelevanceType",
        require: true
      }
    ]
  }
};
