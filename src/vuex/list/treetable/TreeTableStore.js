import request from '@/api/api'
import * as types from '../../mutation-types'

const state = {
  treeData: [],
  tableData: {},
  nodeId: '',
  pageModel: {
    currentPage: 1,
    pagesize: 15
  },
  modelDataId: '',
  treeAddData: {},
  treeOne: {}
}
const getters = {
  treeData: state => state.treeData,
  tableData: state => state.tableData
}
const mutations = {
  // 树的查询
  [types.MODULE_ID] (state, id) {
    state.modelDataId = id
    console.log('测试是否获取module的ID', state.modelDataId)
  },
  // 获取树结构的数据
  [types.TREE_SELECT] (state, res) {
    state.treeData = res
  },
  // 获取所选中的node对象
  [types.TREE_ONE] (state, res) {
    state.treeOne = res
  },
  // 获取表格树结构对应的数据id
  [types.NODE_ID] (state, nodeId) {
    state.nodeId = nodeId
  },
  // 增加树节点的数据
  [types.TREE_ADD] (state, Treeform) {
    state.Treeform = Treeform
  },
  // 修改树节点的数据
  [types.TREE_MODIFY] (state, Treeform) {
    state.Treeform = Treeform
  },
  // 表格的数据获取
  [types.TABLE_MODEL] (state, tableData) {
    state.tableData = tableData
  },
  // 获取分页数据
  [types.TABLE_PAGE_SIZE] (state, pageModel) {
    state.pageModel = pageModel
  }
}
const actions = {
  // 树查询
  initTree: function ({ dispatch, commit }, model) {
    request.initTree(model)
      .then(res => {
        commit(types.TREE_SELECT, res.data.Model)
      })
  },
  // 提交树节点id
  treeNodeId: function ({ commit }, id) {
    commit(types.NODE_ID, id)
  },
  // 选中树的对象
  treeOne: function ({ commit }, data) {
    commit(types.TREE_ONE, data)
    console.log('全局点击', data)
  },
  // 增加树的节点
  addTree: function ({dispatch, commit}, treeAddData) {
    request.addTree(treeAddData)
    .then(res => {
      commit(types.TREE_ADD, this.treeAddData)
      return dispatch('initTree')
    })
  },
  // 修改树节点
  treeModify: function ({dispatch, commit}, model) {
    request.treeMODIFY(model)
    .then(res => {
      commit(types.TREE_MODIFY, this.model)
      return dispatch('initTree')
    })
  },
  // 表格的获取
  initTable: function ({ dispatch, commit }, model) {
    request.tableData(state.pageModel.currentPage, state.pageModel.pageSize, state.nodeId)
      .then(res => {
        commit(types.TABLE_MODEL, model)
      })
  },
  // 获取模板的change事件的id
  moduleID: function ({ commit }, modelDataId) {
    commit(types.MODULE_ID, modelDataId)
    console.log('测试mokuai的id', modelDataId)
  }
}
export default ({
  namespaced: true, state, getters, mutations, actions
})
