import Main from "@/components/main";

export default [
  {
    path: "/project",
    name: "project",
    meta: {
      icon: "logo-buffer",
      title: "项目辖区"
    },
    component: Main,
    children: [
      {
        path: "projManage",
        name: "projManage",
        meta: {
          icon: "md-trending-up",
          title: "项目管理"
        },
        component: () => import("@/view/project/projManageMain.vue")
      },
      {
        path: "addProjManage",
        name: "addProjManage",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加项目"
        },
        component: () => import("@/view/project/projManageAdd.vue")
      },
      {
        path: "projMember",
        name: "projMember",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "项目成员"
        },
        component: () => import("@/view/project/projMemberMain.vue")
      },
      {
        path: "projDocument",
        name: "projDocument",
        meta: {
          icon: "md-trending-up",
          title: "项目文档"
        },
        component: () => import("@/view/project/projDocumentMain.vue")
      },
      {
        path: "manageRecord",
        name: "manageRecord",
        meta: {
          icon: "md-trending-up",
          title: "管理记录"
        },
        component: () => import("@/view/project/manageRecordMain.vue")
      },
      {
        path: "statisticAnalysis",
        name: "statisticAnalysis",
        meta: {
          icon: "md-trending-up",
          title: "统计分析"
        },
        component: () => import("@/view/project/statisticAnalysisMain.vue")
      },
      {
        path: "materialPrint",
        name: "materialPrint",
        meta: {
          icon: "md-trending-up",
          title: "资料打印"
        },
        component: () => import("@/view/project/materialPrintMain.vue")
      },
      {
        path: "costAnalysis",
        name: "costAnalysis",
        meta: {
          icon: "md-trending-up",
          title: "成本统计"
        },
        component: () => import("@/view/project/costAnalysisMain.vue")
      },
      {
        path: "louDong",
        name: "louDong",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "楼栋信息"
        },
        component: () => import("@/view/project/louDongMain.vue")
      },
      {
        path: "addLouDong",
        name: "addLouDong",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加楼栋"
        },
        component: () => import("@/view/project/louDongAdd.vue")
      },
      {
        path: "floor",
        name: "floor",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "楼层信息"
        },
        component: () => import("@/view/project/floorMain.vue")
      },
      {
        path: "addFloor",
        name: "addFloor",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加楼层"
        },
        component: () => import("@/view/project/floorAdd.vue")
      },
      {
        path: "contractBuild",
        name: "contractBuild",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "合同构建"
        },
        component: () => import("@/view/project/contractBuildMain.vue")
      },
      {
        path: "addContractBuild",
        name: "addContractBuild",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "添加合同"
        },
        component: () => import("@/view/project/contractBuildAdd.vue")
      },
      {
        path: "productionTypeRelevance",
        name: "productionTypeRelevance",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "关联生产类型"
        },
        component: () =>
          import("@/view/project/productionTypeRelevanceMain.vue")
      },
      {
        path: "contractRelevanceType",
        name: "contractRelevanceType",
        meta: {
          hideInMenu: true,
          icon: "md-trending-up",
          title: "合同类型关联"
        },
        component: () => import("@/view/project/contractRelevanceTypeMain.vue")
      }
    ]
  }
];
