const host = 'http://192.168.18.110:9001'
const zhaojunhaoHost = 'http://192.168.18.103:9001'

let env = host

export default {
  company: {
    getPccompany: `${env}/basic/PcCompany/getPccompany`,
    delPccompnay: `${env}/basic/PcCompany/delPccompanyByCode` // code=0000002
  },
  department: {
    // 公司下的部门 comp='公司代码1'  comp=name
    getPcDepartment: `${env}/basic/PcDepartment/selectDepByComp`
  },
  employee: {
    // 部门下的员工 dept='部门1'  dept=name
    getPcEmployee: `${env}/basic/PcPerson/selectPerByDept`
  },

  login: `${env}/zjh/SysUser/login`,
  // 物料编码库
  PcMaterialFindAll: `${env}/basic/PcMaterial/findAll`
}
