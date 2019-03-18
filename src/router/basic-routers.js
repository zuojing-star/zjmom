import Main from "@/components/main";

export default [
  {
    path: "/basic",
    name: "basic",
    meta: {
      icon: "logo-buffer",
      title: "基础板块"
    },
    component: Main,
    children: [
      {
        path: "drag_list_page",
        name: "drag_list_page",
        meta: {
          hideInMenu: true,
          icon: "ios-infinite",
          title: "拖拽列表"
        },
        component: () => import("@/view/components/drag-list/drag-list.vue")
      },
      {
        path: "drag_drawer_page",
        name: "drag_drawer_page",
        meta: {
          hideInMenu: true,
          icon: "md-list",
          title: "可拖拽抽屉"
        },
        component: () => import("@/view/components/drag-drawer")
      },
      {
        path: "org_tree_page",
        name: "org_tree_page",
        meta: {
          hideInMenu: true,
          icon: "ios-people",
          title: "组织结构树"
        },
        component: () => import("@/view/components/org-tree")
      },
      {
        path: "tree_table_page",
        name: "tree_table_page",
        meta: {
          hideInMenu: true,
          icon: "md-git-branch",
          title: "树状表格"
        },
        component: () => import("@/view/components/tree-table/index.vue")
      },
      {
        path: "cropper_page",
        name: "cropper_page",
        meta: {
          hideInMenu: true,
          icon: "md-crop",
          title: "图片裁剪"
        },
        component: () => import("@/view/components/cropper/cropper.vue")
      },
      {
        path: "company",
        name: "company",
        meta: {
          icon: "md-trending-up",
          title: "公司管理"
        },
        component: () => import("@/view/basic/companyMain.vue")
      },
      {
        path: "addCompany",
        name: "添加公司",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加公司"
        },
        component: () => import("@/view/basic/companyAdd.vue")
      },
      {
        path: "role",
        name: "role",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "角色管理"
        },
        component: () => import("@/view/basic/roleMain.vue")
      },
      {
        path: "addRole",
        name: "addRole",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加角色"
        },
        component: () => import("@/view/basic/roleAdd.vue")
      },
      {
        path: "department",
        name: "department",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "部门管理"
        },
        component: () => import("@/view/basic/departmentMain.vue")
      },
      {
        path: "addDepartment",
        name: "addDepartment",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加部门"
        },
        component: () => import("@/view/basic/departmentAdd.vue")
      },
      {
        path: "employee",
        name: "employee",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "员工信息"
        },
        component: () => import("@/view/basic/employeeMain.vue")
      },
      {
        path: "addEmployee",
        name: "addEmployee",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加员工"
        },
        component: () => import("@/view/basic/employeeAdd.vue")
      },
      {
        path: "addFactory",
        name: "addFactory",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加工厂"
        },
        component: () => import("@/view/basic/factoryAdd.vue")
      },
      {
        path: "addProduceLine",
        name: "addProduceLine",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加产线"
        },
        component: () => import("@/view/basic/produceLineAdd.vue")
      },
      {
        path: "addMouldDesk",
        name: "addMouldDesk",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加模台"
        },
        component: () => import("@/view/basic/mouldDeskAdd.vue")
      },
      {
        path: "mouldDesk",
        name: "mouldDesk",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "模台信息"
        },
        component: () => import("@/view/basic/mouldDeskMain.vue")
      },
      {
        path: "addStorageYard",
        name: "addStorageYard",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加堆场"
        },
        component: () => import("@/view/basic/storageYardAdd.vue")
      },
      {
        path: "storageYard",
        name: "storageYard",
        meta: {
          icon: "md-trending-up",
          title: "堆场管理"
        },
        component: () => import("@/view/basic/storageYardMain.vue")
      },
      {
        path: "addZoneBit",
        name: "addZoneBit",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加区位"
        },
        component: () => import("@/view/basic/zoneBitAdd.vue")
      },
      {
        path: "zoneBit",
        name: "zoneBit",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "区位信息"
        },
        component: () => import("@/view/basic/zoneBitMain.vue")
      },
      {
        path: "addStorageRack",
        name: "addStorageRack",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加货架"
        },
        component: () => import("@/view/basic/storageRackAdd.vue")
      },
      {
        path: "storageRack",
        name: "storageRack",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "货架信息"
        },
        component: () => import("@/view/basic/storageRackMain.vue")
      },
      {
        path: "produceType",
        name: "produceType",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "生产类型信息"
        },
        component: () => import("@/view/basic/produceTypeMain.vue")
      },
      {
        path: "addProduceType",
        name: "addProduceType",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加生产类型"
        },
        component: () => import("@/view/basic/produceTypeAdd.vue")
      },
      {
        path: "produceCraft",
        name: "produceCraft",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "生产工艺信息"
        },
        component: () => import("@/view/basic/produceCraftMain.vue")
      },
      {
        path: "addProduceCraft",
        name: "addProduceCraft",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加生产工艺"
        },
        component: () => import("@/view/basic/produceCraftAdd.vue")
      },
      {
        path: "produceProcess",
        name: "produceProcess",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "工序维护"
        },
        component: () => import("@/view/basic/produceProcessMain.vue")
      },
      {
        path: "addProduceProcess",
        name: "addProduceProcess",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加工序"
        },
        component: () => import("@/view/basic/produceProcessAdd.vue")
      },

      {
        path: "produceLine",
        name: "produceLine",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "产线信息"
        },
        component: () => import("@/view/basic/produceLineMain.vue")
      },
      {
        path: "factory",
        name: "factory",
        meta: {
          icon: "md-trending-up",
          title: "工厂管理"
        },
        component: () => import("@/view/basic/factoryMain.vue")
      },
      {
        path: "facDepartment",
        name: "facDepartment",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "工厂部门"
        },
        component: () => import("@/view/basic/facDepartmentMain.vue")
      },
      {
        path: "addFacDepartment",
        name: "addFacDepartment",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加部门"
        },
        component: () => import("@/view/basic/facDepartmentAdd.vue")
      },
      {
        path: "facEmployee",
        name: "facEmployee",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "工厂员工"
        },
        component: () => import("@/view/basic/facEmployeeMain.vue")
      },
      {
        path: "addFacEmployee",
        name: "addFacEmployee",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加员工"
        },
        component: () => import("@/view/basic/facEmployeeAdd.vue")
      },
      {
        path: "roleAuth",
        name: "roleAuth",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "角色授权"
        },
        component: () => import("@/view/basic/roleAuth.vue")
      },
      {
        path: "roleEmpAuth",
        name: "roleEmpAuth",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加人员"
        },
        component: () => import("@/view/basic/roleEmpAuth.vue")
      },
      {
        path: "supplies",
        name: "supplies",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "物料码库"
        },
        component: () => import("@/view/basic/suppliesMain.vue")
      },
      {
        path: "addSupplies",
        name: "addSupplies",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "新增物料"
        },
        component: () => import("@/view/basic/suppliesAdd.vue")
      },
      {
        path: "produceProcessEmp",
        name: "produceProcessEmp",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "工序人员授权"
        },
        component: () => import("@/view/basic/produceProcesspEmpMain.vue")
      },
      {
        path: "produceCraftEmp",
        name: "produceCraftEmp",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "工艺人员授权"
        },
        component: () => import("@/view/basic/produceCraftEmpMain.vue")
      },
      {
        path: "produceTypeAuthCraft",
        name: "produceTypeAuthCraft",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "工艺人员授权"
        },
        component: () => import("@/view/basic/produceTypeAuthCraftMain.vue")
      },
      {
        path: "markdown_page",
        name: "markdown_page",
        meta: {
          hideInMenu: true,
          icon: "logo-markdown",
          title: "Markdown编辑器"
        },
        component: () => import("@/view/components/markdown/markdown.vue")
      },
      {
        path: "editor_page",
        name: "editor_page",
        meta: {
          hideInMenu: true,
          icon: "ios-create",
          title: "富文本编辑器"
        },
        component: () => import("@/view/components/editor/editor.vue")
      },
      {
        path: "icons_page",
        name: "icons_page",
        meta: {
          hideInMenu: true,
          icon: "_bear",
          title: "自定义图标"
        },
        component: () => import("@/view/components/icons/icons.vue")
      }
    ]
  }
];
