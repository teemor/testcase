const factory = {
  function (Model) {
    if (Model) {
      return 'DomainStore/domainedit'
    } else {
      return 'DomainStore/domainadd'
    }
  }
}
const factoryM = {
  function (Model) {
    if (Model) {
      return 'TreeTableStore/treeModify'
    } else {
      return 'TreeTableStore/treeAdd'
    }
  }
}
export default {
  factory, factoryM
}
