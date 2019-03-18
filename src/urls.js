const host = "http://192.168.18.110:9001";
const zhaojunhaoHost = "http://192.168.18.105:9001";
const zjhost = "http://localhost:3000";

let env = host;

export default {
  //合同
  contractBuild: {
    add: `${host}/project/PcProjandhttype/createHTTypeInfo`,
    get: `${host}/project/PcProjandhttype/getHTTypeDatas`,
    getKeySCTypes: `${env}/project/PcHttypeandsctype/getKeySCTypes`,
    createHTTAndSCT: `${env}/project/PcHttypeandsctype/createHTTAndSCT`,
    updateHTTAndSCT: `${env}/project/PcHttypeandsctype/updateHTTAndSCT`
  },
  //关联生产类型
  relevanceType: {
    get: `${host}/project/PcProjandsctype/getSCTForChoose`,
    getRelevanceType: `${host}/project/PcProjandsctype/getProjSCTypes`,
    createProjSCType: `${host}/project/PcProjandsctype/createProjSCType`
  },
  //项目
  project: {
    add: `${host}/Project/Project/createFacProjectInfo`,
    get: `${host}/Project/Project/getFacProjects`,
    del: `${host}/Project/Project/delProject`
  },
  //项目成员
  projMember: {
    get: `${host}/project/PcProjandusers/getUsersOfFac`,
    getAuth: `${host}/project/PcProjandusers/getUsersOfProj`,
    save: `${host}/project/PcProjandusers/createProjMenbers`,
    update: `${host}/project/PcProjandusers/updateProjMenbers`
  },
  //楼栋
  louDong: {
    add: `${host}/Project/Building/createLouInfo`,
    get: `${host}/Project/Building/getlouDatas`,
    del: `${host}/Project/Building/delLouDong`
  },
  //楼层
  floor: {
    add: `${host}/Project/Floor/createLCInfo`,
    get: `${host}/Project/Floor/getlcDatas`,
    del: `${host}/Project/Floor/delFloor`
  },
  //登录
  basic: {
    login: `${env}/basic/Login/momLogin`,
    login222: `${env}/basic/Login/getFacsForLogin`,
    getFactory: `${env}/basic/Login/getFacsForLogin`,
    getCompany: `${env}/basic/Login/getCompsForLogin`
  },

  //公司
  company: {
    getPccompany: `${env}/basic/PcCompany/getPcCompany`,
    delPccompnay: `${env}/basic/PcCompany/delPcCompanyByCode`,
    addPcCompany: `${env}/basic/PcCompany/addPcCompany`
  },
  //部门
  department: {
    getPcDepartment: `${env}/basic/PcDepartment/getPcDepartment`,
    delPcDepartment: `${env}/basic/PcDepartment/delPcDepartmentByCode`,
    addPcDepartment: `${env}/basic/PcDepartment/addPcDepartment`,
    getPcDepartmentListByName: `${env}/basic/PcDepartment/getPcDepartmentListByName`
  },
  //员工
  employee: {
    getPcEmployee: `${env}/basic/PcPerson/selectPerByDept`,
    delPcPerson: `${env}/basic/PcUser/delPcUserByUserCode`,
    addPcPerson: `${env}/basic/PcUser/addPcUser`,
    getPcPersonListByUserNameC: `${env}/basic/PcUser/getPcUserListByUserNameC`,
    getPcPersonListByUserNameD: `${env}/basic/PcUser/getPcUserListByUserNameD`
  },
  //工厂
  factory: {
    getFacDatas: `${env}/basic/PcFactory/getFacDatas`,
    addFactory: `${env}/basic/PcFactory/createFacInfo`,
    delFactory: `${env}/basic/PcFactory/deleteObj`,
    addFacDept: `${env}/basic/PcFactory/createDeptInfoOfFac`,
    addFacEmp: `${env}/basic/PcFactory/createPersonInfoOfFac`,
    getDeptsOfFac: `${env}/basic/PcFactory/getDeptsOfFac`,
    getPersonsOfFac: `${env}/basic/PcFactory/getPersonsOfFac`
  },
  //产线
  productLine: {
    getProductLine: `${env}/basic/PcFacline/getLineDatas`,
    delProductLine: `${env}/basic/PcFacline/deleteObj`,
    addProductLine: `${env}/basic/PcFacline/createLineInfo`
  },
  //模台
  mouldDesk: {
    getMouldDesk: `${env}/basic/PcFacflat/getFlatDatas`,
    delMouldDesk: `${env}/basic/PcFacflat/deleteObj`,
    addMouldDesk: `${env}/basic/PcFacflat/createFlatInfo`
  },
  //堆场
  storageYard: {
    getStorageYard: `${env}/basic/PcYarddata/getYardDatas`,
    delStorageYard: `${env}/basic/PcYarddata/deleteObj`,
    addStorageYard: `${env}/basic/PcYarddata/createYardInfo`
  },
  //区位
  zoneBit: {
    getZoneBit: `${env}/basic/PcAreadata/getAreaDatas`,
    delZoneBit: `${env}/basic/PcAreadata/deleteObj`,
    addZoneBit: `${env}/basic/PcAreadata/createAreaInfo`
  },
  //货架
  storageRack: {
    getStorageRack: `${env}/basic/PcFramedata/getFrameDatas`,
    delStorageRack: `${env}/basic/PcFramedata/deleteObj`,
    addStorageRack: `${env}/basic/PcFramedata/createFrameInfo`
  },
  //角色
  role: {
    getRole: `${env}/basic/PcRole/getRolesByFac`,
    delRole: `${env}/basic/PcRole/deleteObj`,
    addRole: `${env}/basic/PcRole/createRoleInfo`
  },
  //角色菜单授权
  roleAuth: {
    addAuth: `${env}/basic/PcRolemenu/createRoleMenus`,
    selectCode: `${env}/basic/PcRolemenu/getKeyMenus`, //查询
    updateAuth: `${env}/basic/PcRolemenu/updateRoleMenus`
  },
  //角色人员授权
  roleEmpAuth: {
    addEmpAuth: `${env}/basic/PcRoleuser/createRoleUsers`,
    updateEmpAuth: `${env}/basic/PcRoleuser/updateRoleUsers`,
    selectUserCode: `${env}/basic/PcRoleuser/getUsersOfRCode`
  },
  // 物料
  supplies: {
    addSupplies: `${env}/basic/PcMaterial/createWLInfo`,
    getSupplies: `${env}/basic/PcMaterial/getMaterials`,
    delSupplies: `${env}/basic/PcMaterial/deleteObj`
  },
  //工序
  produceProcess: {
    getProduceProcess: `${env}/basic/PcProcedure/getPcProcedureList`,
    getProduceProcessByCode: `${env}/basic/PcProcedure/getPcProcedureByCode`,
    addProduceProcess: `${env}/basic/PcProcedure/addPcProcedure`,
    delPcProcessByCodes: `${env}/basic/PcProcedure/delPcProcedureByCodes`,
    getUsersOfFac: `${env}/basic/PcProcess/getUsersOfFac`,
    getUsersOfGX: `${env}/basic/PcProcedure/getUsersOfGX`,
    createGXUsers: `${env}/basic/PcProcedure/createGXUsers`,
    updateGXUsers: `${env}/basic/PcProcedure/updateGXUsers`
  },
  //工艺
  produceCraft: {
    getProduceCraft: `${env}/basic/PcProcess/getPcProcessList`,
    getProduceCraftByCode: `${env}/basic/PcProcess/getPcProcessByCode`,
    addProduceCraft: `${env}/basic/PcProcess/createProcessInfo`,
    delProduceCraftByCodes: `${env}/basic/PcProcess/delPcProcessByCodes`,

    getProcessDatas: `${env}/basic/PcProcess/getProcessDatas`,
    createProcessInfo: `${env}/basic/PcProcess/createProcessInfo`,
    getUsersOfFac: `${env}/basic/PcProcess/getUsersOfFac`,
    getUsersOfGY: `${env}/basic/PcProcess/getUsersOfGY`,
    createGYUsers: `${env}/basic/PcProcess/createGYUsers`,
    updateGYUsers: `${env}/basic/PcProcess/updateGYUsers`
  },
  //生产类型
  produceType: {
    getProduceType: `${env}/basic/PcSctype/getPcSctypeList`,
    addProduceType: `${env}/basic/PcSctype/addPcSctype`,
    delAllProduceType: `${env}/basic/PcSctype/delPcSctypeByCodes`,

    getSCTypeDatas: `${env}/basic/PcSctype/getSCTypeDatas`,
    getAllGYDatas: `${env}/basic/PcProcess/getAllGYDatas`,
    getGYsOfSCType: `${env}/basic/PcScTypeGy/getGYsOfSCType`,
    createSCTypeAndGYs: `${env}/basic/PcScTypeGy/createSCTypeAndGYs`,
    updateSCTypeAndGYs: `${env}/basic/PcScTypeGy/updateSCTypeAndGYs`,
    createSCTypeInfo: `${env}/basic/PcSctype/createSCTypeInfo`
  }
};
