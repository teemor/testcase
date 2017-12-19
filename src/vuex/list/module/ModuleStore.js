import request from '@/api/api'
import * as types from '../../mutation-types.js'

const state = {
  moduleDataf: [],
  model: [],
  formdataM: {
  },
  formdataE: {},
  domainId: '',
  modelName: ''
}
const mutations = {
  // module 数据获取
  [types.MODULE_SELECT] (state, id) {
    state.moduleDataf = id
    console.log('测试module数据是否获取', state.moduleDataf)
  },
  [types.MODULE_MODEL] (state, model) {
    state.model = model
    console.log('测试Model', model)
  },
  // module 的增加
  [types.MODULE_ADD] (state, Mform) {
    state.formdataM = Mform
  },
  // module 的修改
  [types.MODULE_EDIT] (state, Mform) {
    state.formdataE = Mform
  },
  // change事件获取domain的id
  [types.DOMAIN_ID] (state, id) {
    state.domainId = id
  },
  //  动态改变的modulename
  [types.MODULE_NAME] (state, name) {
    state.modelName = name
  }
}
const actions = {
 // module下拉列表数据的获取
  // module 获取domain里的id
  changeId: function ({ dispatch, commit }, id) {
    commit(types.DOMAIN_ID, id)
  },
  // 全局modulename
  modulename: function ({ commit }, name) {
    commit(types.MODULE_NAME, name)
  },
  modulepage: function ({ commit }, model) {
    request.modulePOST(state.domainId)
    .then(res => {
      commit(types.MODULE_MODEL, res.data.Model)
      console.log('测试module下拉列表数据是否获取', res.data)
    })
  },
  // 新增方法
  moduleadd: function ({dispatch, commit}, formdataM) {
    request.moduleADD(formdataM)
    .then(res => {
      commit(types.MODULE_ADD, res.data)
      return dispatch('modulepage')
    })
  },
  // module 的修改
  moduleedit: function ({dispatch, commit}, formdataE) {
    request.moduleEDIT(formdataE)
    .then(res => {
      commit(types.MODULE_EDIT, formdataE)
      console.log('测试修改', formdataE)
      return dispatch('modulepage')
    })
  },
  // module 的删除
  moduledelete: function ({dispatch, commit}, id) {
    request.moduleDELETE(id)
    .then(res => {
      return dispatch('modulepage')
    })
  }
}
export default ({
  namespaced: true, state, mutations, actions
})
