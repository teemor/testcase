import request from '@/api/api'
import * as types from '../../mutation-types.js'

const state = {
  domainDataf: [],
  formdata: {
    name: ''
  },
  domainName: ''
}
const mutations = {
  // Domain下拉列表的数据的获取
  [types.DOMAIN_SELECT] (state, res) {
    state.domainDataf = res
    console.log('测试state.domainDataf', state.domainDataf)
  },
  // Domain 增加
  [types.DOMAIN_ADD] (state, Dform) {
    state.formdata = Dform
  },
  // domain 修改
  [types.DOMAIN_MODEL] (state, Dform) {
    state.formdata = Dform
    console.log('测试修改', state.formdata)
  },
  // domain name的全局设置
  [types.DOMAIN__NAME] (state, name) {
    state.domainName = name
  }
}
const actions = {
  // domain下拉列表数据的获取
  domainpage: function ({ commit }) {
    console.log('测试')
    request.domainPOST()
    .then(res => {
      console.log('测试1')
      commit(types.DOMAIN_SELECT, res.data.Model)
      console.log('domain', res.data.Model)
    })
  },
  // Domain 增加
  domainadd: function ({dispatch, commit}, formdata) {
    request.domainADD(formdata)
    .then(res => {
      commit(types.DOMAIN_ADD, formdata)
      console.log('增加数据', formdata)
      return dispatch('domainpage')
    })
  },
  // domain 修改model
  domainedit: function ({dispatch, commit}, Model) {
    request.domainEDITMODEL(Model)
    .then(res => {
      commit(types.DOMAIN_MODEL, Model)
      return dispatch('domainpage')
    })
  },
  // domain 删除
  domaindelete: function ({dispatch, commit}, id) {
    request.domainDELETE(id)
    .then(res => {
      console.log('删除的', id)
      return dispatch('domainpage')
    })
  },
  modulename: function ({ commit }, name) {
    commit(types.DOMAIN__NAME, name)
  }
}
export default {
  namespaced: true, state, mutations, actions
}
