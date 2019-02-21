const host = "http://192.168.18.110:9001";
const zhaojunhaoHost = "http://192.168.18.103:9001";

let env = host;

export default {
  company: {
    // getPccompany: `${env}/basic/PcCompany/getPcCompany`,
    getPccompany: `${env}/basic/PcCompany/getPcCompany`,
    delPccompnay: `${env}/basic/PcCompany/delPcCompanyByCode`, // code=0000002
    addPcCompany: `${env}/basic/PcCompany/addPcCompany`
  },
  department: {
    getPcDepartment: `${env}/basic/PcDepartment/getPcDepartment`, // 查询部门 comp='公司代码1'  comp=name
    delPcDepartment: `${env}/basic/PcDepartment/delPcDepartmentByCode`, //删除部门
    addPcDepartment: `${env}/basic/PcDepartment/addPcDepartment`,
    getPcDepartmentListByName: `${env}/basic/PcDepartment/getPcDepartmentListByName` //查询（companyCode  name） 根据 公司查询部门
  },
  employee: {
    getPcEmployee: `${env}/basic/PcPerson/selectPerByDept`, // 部门下的员工 dept='部门1'  dept=name
    delPcPerson: `${env}/basic/PcPerson/delPcPersonByUserCode`, //删除员工
    addPcPerson: `${env}/basic/PcPerson/addPcPerson`,
    getPcPersonListByUserNameC: `${env}/basic/PcPerson/getPcPersonListByUserNameC`,
    getPcPersonListByUserNameD: `${env}/basic/PcPerson/getPcPersonListByUserNameD` //
  },

  login: `${env}/zjh/SysUser/login`,
  // 物料编码库
  PcMaterialFindAll: `${env}/basic/PcMaterial/findAll`
};
