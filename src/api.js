const zjhost = "http://localhost:3000";

export default {
  //公司
  company: {
    add: `${zjhost}/basic/company/add`,
    get: `${zjhost}/basic/company/get`,
    del: `${zjhost}/basic/company/del`
  },
  //工厂
  factory: {
    getFacDatas: `${zjhost}/basic/PcFactory/getFacDatas`,
    addFactory: `${zjhost}/basic/PcFactory/createFacInfo`,
    delFactory: `${zjhost}/basic/PcFactory/deleteObj`,
    addFacDept: `${zjhost}/basic/PcFactory/createDeptInfoOfFac`,
    addFacEmp: `${zjhost}/basic/PcFactory/createPersonInfoOfFac`,
    getDeptsOfFac: `${zjhost}/basic/PcFactory/getDeptsOfFac`,
    getPersonsOfFac: `${zjhost}/basic/PcFactory/getPersonsOfFac`
  },
  project: {
    add: `${zjhost}/project/createFacProjectInfo`,
    get: `${zjhost}/project/getFacProjects`,
    del: `${zjhost}/project/delProject`
  },
  louDong: {
    add: `${zjhost}/louDong/createLouInfo`,
    get: `${zjhost}/louDong/getlouDatas`,
    del: `${zjhost}/louDong/delLouDong`
  },
  floor: {
    add: `${zjhost}/floor/createLCInfo`,
    get: `${zjhost}/floor/getlcDatas`,
    del: `${zjhost}/floor/delFloor`
  },
  //合同构建类型
  contractBuild: {
    add: `${zjhost}/contractBuild/createHTTypeInfo`,
    get: `${zjhost}/contractBuild/getHTTypeDatas`,
    del: `${zjhost}/contractBuild/delContractBuild`
  },
  //关联生产类型
  productionTypeRelevance: {
    //工厂的 生产类型
    getSCTForChoose: `${zjhost}/productionTypeRelevance/getSCTForChoose`,

    //项目关联的 生产类型
    getProjSCTypes: `${zjhost}/productionTypeRelevance/getProjSCTypes`,

    //关联生产类型
    createProjSCType: `${zjhost}/productionTypeRelevance/createProjSCType`,

    //变更生产类型
    updateProjSCType: `${zjhost}/productionTypeRelevance/updateProjSCType`
  }
};
