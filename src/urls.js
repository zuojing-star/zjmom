const host = "http://192.168.18.110:9001";
const zhaojunhaoHost = "http://192.168.18.103:9001";

let env = host;

export default {
  //登录
  basic: {
    login: `${env}/basic/PcUser/Login`
  },
  //公司
  company: {
    // getPccompany: `${env}/basic/PcCompany/getPcCompany`,
    getPccompany: `${env}/basic/PcCompany/getPcCompany`,
    delPccompnay: `${env}/basic/PcCompany/delPcCompanyByCode`, // code=0000002
    addPcCompany: `${env}/basic/PcCompany/addPcCompany`
  },
  //部门
  department: {
    getPcDepartment: `${env}/basic/PcDepartment/getPcDepartment`,
    delPcDepartment: `${env}/basic/PcDepartment/delPcDepartmentByCode`,
    addPcDepartment: `${env}/basic/PcDepartment/addPcDepartment`,
    getPcDepartmentListByName: `${env}/basic/PcDepartment/getPcDepartmentListByName` //{obj:{pageIndex:1,companyCode:""}}  公司查部门
  },
  //员工
  employee: {
    getPcEmployee: `${env}/basic/PcPerson/selectPerByDept`, // 部门下的员工 dept='部门1'  dept=name
    delPcPerson: `${env}/basic/PcUser/delPcUserByUserCode`, //删除员工
    addPcPerson: `${env}/basic/PcUser/addPcUser`,
    getPcPersonListByUserNameC: `${env}/basic/PcUser/getPcUserListByUserNameC`, //
    getPcPersonListByUserNameD: `${env}/basic/PcUser/getPcUserListByUserNameD` //部门 查
  },
  //工厂
  factory: {
    getFacDatas: `${env}/basic/PcFactory/getFacDatas`,
    addFactory: `${env}/basic/PcFactory/save`,
    delFactory: `${env}/basic/PcFactory/deleteObj`
  },
  //产线
  productLine: {
    getProductLine: `${env}/basic/PcFacline/getLineDatas`,
    delProductLine: `${env}/basic/PcFacline/deleteObj`,
    addProductLine: `${env}/basic/PcFacline/save`
  },
  //模台
  mouldDesk: {
    getMouldDesk: `${env}/basic/PcFacflat/getFlatDatas`,
    delMouldDesk: `${env}/basic/PcFacflat/deleteObj`,
    addMouldDesk: `${env}/basic/PcFacflat/save`
  },
  //堆场
  storageYard: {
    getStorageYard: `${env}/basic/PcYarddata/getYardDatas`,
    delStorageYard: `${env}/basic/PcYarddata/deleteObj`,
    addStorageYard: `${env}/basic/PcYarddata/save`
  },
  //区位
  zoneBit: {
    getZoneBit: `${env}/basic/PcAreadata/getAreaDatas`,
    delZoneBit: `${env}/basic/PcAreadata/deleteObj`,
    addZoneBit: `${env}/basic/PcAreadata/save`
  },
  //货架
  storageRack: {
    getStorageRack: `${env}/basic/PcFramedata/getFrameDatas`,
    delStorageRack: `${env}/basic/PcFramedata/deleteObj`,
    addStorageRack: `${env}/basic/PcFramedata/save`
  }
};
