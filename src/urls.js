const host = 'http://192.168.18.110:8086'
const zhaojunhaoHost = 'http://192.168.18.100:9001'

export default {
  url: {
    login: `${host}/zjh/SysUser/login`,
    findAll: `${zhaojunhaoHost}/test/Student/findAll`,
    // 物料编码库
    PcMaterialFindAll: `${zhaojunhaoHost}/basic/PcMaterial/findAll`
  }
}
