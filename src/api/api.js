import axios from 'axios'
export default {
  // domain 查询
  domainPOST () {
    return axios.post('http://192.168.0.58:7845/usercase/updatetest/TestCase/query')
  },
  //  修改
  domainEDITMODEL (model) {
    return axios.post('http://192.168.0.62:62399/usercase/updatetest/TestCase/modify', model)
  },
  //  增加
  domainADD (model) {
    return axios.post('http://192.168.0.58:7845/usercase/updatetest/TestCase/add', model)
  },
  // 删除
  domainDELETE (model) {
    return axios.get('http://192.168.0.58:7845/usercase/updatetest/TestCase/Erase/' + model.id)
  },
  // module 查
  modulePOST (id) {
    return axios.post('http://192.168.0.58:7845/usercase/updatetest/TestCase/query/' + id)
  },
  // 增加的接口
  moduleADD (model) {
    console.log('xx', model)
    return axios.post('http://192.168.0.58:7845/usercase/updatetest/TestCase/add', model)
  },
  //  修改接口
  moduleEDIT (model) {
    return axios.post('http://192.168.0.62:62399/usercase/updatetest/TestCase/modify', model)
  },
  //  删除接口
  moduleDELETE (id) {
    return axios.get('http://192.168.0.58:7845/usercase/updatetest/TestCase/Erase/' + id.id)
  },
  //  树查
  initTree (id) {
    return axios.get('http://192.168.0.58:7845/usercase/updatetest/TestCase/treequery/' + id)
  },
  // 增加
  addTree (model) {
    console.log('hh', model)
    return axios.post('http://192.168.0.58:7845/usercase/updatetest/TestCase/add', model)
  },
  // 修改
  treeMODIFY (model) {
    return axios.post('http://192.168.0.62:62399/usercase/updatetest/TestCase/modify', model)
  },
  // 删除树
  // 点击三级树节点获取表格的接口
  tableData () {
    return axios.post('http://192.168.0.58:7845/usercase/updatetest/tree/datalist/{pageIndex}/{pageSize}')
  }
}
