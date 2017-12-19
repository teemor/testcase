import Vue from 'vue'
import Vuex from 'vuex'
// import list from './list/store'
import DomainStore from './list/domain/DomainStore'
import ModuleStore from './list/module/ModuleStore'
import treeStore from './list/treetable/TreeTableStore'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    DomainStore,
    ModuleStore,
    treeStore
  }
})
