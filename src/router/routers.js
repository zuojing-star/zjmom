import Main from "@/components/main";
import parentView from "@/components/parent-view";

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login - 登录",
      hideInMenu: true //是否在  左边菜单栏显示
    },
    component: () => import("@/view/login/login.vue")
  },
  {
    path: "/",
    name: "_home",
    redirect: "/home",
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          hideInMenu: true,
          title: "首页",
          notCache: true,
          icon: "md-home"
        },
        component: () => import("@/view/single-page/home")
      }
    ]
  },
  {
    path: "/message",
    name: "message",
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: "message_page",
        name: "message_page",
        meta: {
          icon: "md-notifications",
          title: "消息中心"
        },
        component: () => import("@/view/single-page/message/index.vue")
      }
    ]
  },
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
          title: "工厂维护"
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
        path: "markdown_page",
        name: "markdown_page",
        meta: {
          icon: "logo-markdown",
          title: "Markdown编辑器"
        },
        component: () => import("@/view/components/markdown/markdown.vue")
      },
      {
        path: "editor_page",
        name: "editor_page",
        meta: {
          icon: "ios-create",
          title: "富文本编辑器"
        },
        component: () => import("@/view/components/editor/editor.vue")
      },
      {
        path: "b",
        name: "b",
        meta: {
          icon: "md-pause",
          title: "生产工序"
        },
        component: () => import("@/view/components/split-pane/split-pane.vue")
      },
      {
        path: "c",
        name: "c",
        meta: {
          icon: "md-pause",
          title: "功能菜单"
        },
        component: () => import("@/view/components/split-pane/split-pane.vue")
      },
      {
        path: "d",
        name: "d",
        meta: {
          icon: "md-pause",
          title: "操作角色"
        },
        component: () => import("@/view/components/split-pane/split-pane.vue")
      },
      {
        path: "e",
        name: "e",
        meta: {
          icon: "md-pause",
          title: "菜单授权"
        },
        component: () => import("@/view/components/split-pane/split-pane.vue")
      },
      {
        path: "f",
        name: "f",
        meta: {
          icon: "md-pause",
          title: "堆场管理"
        },
        component: () => import("@/view/components/split-pane/split-pane.vue")
      },
      {
        path: "g",
        name: "g",
        meta: {
          icon: "md-pause",
          title: "编码维护"
        },
        component: () => import("@/view/components/split-pane/split-pane.vue")
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
  },
  {
    path: "/update",
    name: "update",
    meta: {
      icon: "md-cloud-upload",
      title: "市场营销"
    },
    component: Main,
    children: [
      {
        path: "update_table_page",
        name: "update_table_page",
        meta: {
          icon: "ios-document",
          title: "上传Csv"
        },
        component: () => import("@/view/update/update-table.vue")
      },
      {
        path: "update_paste_page",
        name: "update_paste_page",
        meta: {
          icon: "md-clipboard",
          title: "粘贴表格数据"
        },
        component: () => import("@/view/update/update-paste.vue")
      }
    ]
  },
  {
    path: "/excel",
    name: "excel",
    meta: {
      icon: "ios-stats",
      title: "项目配置"
    },
    component: Main,
    children: [
      {
        path: "upload-excel",
        name: "upload-excel",
        meta: {
          icon: "md-add",
          title: "合同范围"
        },
        component: () => import("@/view/excel/upload-excel.vue")
      },
      {
        path: "export-excel",
        name: "export-excel",
        meta: {
          icon: "md-download",
          title: "单价维护"
        },
        component: () => import("@/view/excel/export-excel.vue")
      },
      {
        path: "cad-update",
        name: "cad-update",
        meta: {
          icon: "md-download",
          title: "项目资料"
        },
        component: () => import("@/view/excel/export-excel.vue")
      },
      {
        path: "aa",
        name: "aa",
        meta: {
          icon: "md-download",
          title: "信息完善"
        },
        component: () => import("@/view/excel/export-excel.vue")
      },
      {
        path: "bb",
        name: "bb",
        meta: {
          icon: "md-download",
          title: "项目成员"
        },
        component: () => import("@/view/excel/export-excel.vue")
      },
      {
        path: "cc",
        name: "cc",
        meta: {
          icon: "md-download",
          title: "模具维护"
        },
        component: () => import("@/view/excel/export-excel.vue")
      }
    ]
  },
  {
    path: "/error_logger",
    name: "error_logger",
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: "error_logger_page",
        name: "error_logger_page",
        meta: {
          icon: "ios-bug",
          title: "错误收集"
        },
        component: () => import("@/view/single-page/error-logger.vue")
      }
    ]
  },
  // {
  //   path: "/directive",
  //   name: "directive",
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: "directive_page",
  //       name: "directive_page",
  //       meta: {
  //         icon: "ios-navigate",
  //         title: "指令"
  //       },
  //       component: () => import("@/view/directive/directive.vue")
  //     }
  //   ]
  // },
  {
    path: "/multilevel",
    name: "multilevel",
    meta: {
      icon: "md-menu",
      title: "多级菜单"
    },
    component: Main,
    children: [
      {
        path: "level_2_1",
        name: "level_2_1",
        meta: {
          icon: "md-funnel",
          title: "二级-1"
        },
        component: () => import("@/view/multilevel/level-2-1.vue")
      },
      {
        path: "level_2_2",
        name: "level_2_2",
        meta: {
          access: ["super_admin"],
          icon: "md-funnel",
          showAlways: true,
          title: "二级-2"
        },
        component: parentView,
        children: [
          {
            path: "level_2_2_1",
            name: "level_2_2_1",
            meta: {
              icon: "md-funnel",
              title: "三级"
            },
            component: () =>
              import("@/view/multilevel/level-2-2/level-2-2-1.vue")
          },
          {
            path: "level_2_2_2",
            name: "level_2_2_2",
            meta: {
              icon: "md-funnel",
              title: "三级"
            },
            component: () =>
              import("@/view/multilevel/level-2-2/level-2-2-2.vue")
          }
        ]
      },
      {
        path: "level_2_3",
        name: "level_2_3",
        meta: {
          icon: "md-funnel",
          title: "二级-3"
        },
        component: () => import("@/view/multilevel/level-2-3.vue")
      },
      {
        path: "aaa",
        name: "aaa",
        meta: {
          icon: "md-funnel",
          title: "二级-3"
        },
        component: () => import("@/view/multilevel/level-2-3.vue")
      },
      {
        path: "bbb",
        name: "bbb",
        meta: {
          icon: "md-funnel",
          title: "二级-3"
        },
        component: () => import("@/view/multilevel/level-2-3.vue")
      },
      {
        path: "ccc",
        name: "ccc",
        meta: {
          icon: "md-funnel",
          title: "二级-3"
        },
        component: () => import("@/view/multilevel/level-2-3.vue")
      },
      {
        path: "ddd",
        name: "ddd",
        meta: {
          icon: "md-funnel",
          title: "二级-3"
        },
        component: () => import("@/view/multilevel/level-2-3.vue")
      }
    ]
  },
  {
    path: "/argu",
    name: "argu",
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: "params/:id",
        name: "params",
        meta: {
          icon: "md-flower",
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: "before_close_normal"
        },
        component: () => import("@/view/argu-page/params.vue")
      },
      {
        path: "query",
        name: "query",
        meta: {
          icon: "md-flower",
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import("@/view/argu-page/query.vue")
      }
    ]
  },
  {
    path: "/401",
    name: "error_401",
    meta: {
      hideInMenu: true
    },
    component: () => import("@/view/error-page/401.vue")
  },
  {
    path: "/500",
    name: "error_500",
    meta: {
      hideInMenu: true
    },
    component: () => import("@/view/error-page/500.vue")
  },
  {
    path: "*",
    name: "error_404",
    meta: {
      hideInMenu: true
    },
    component: () => import("@/view/error-page/404.vue")
  }
];
