<template>
  <div class="filterTree" style="float:left;margin-top:50px">
    <el-input placeholder="输入关键字进行过滤"
              v-model="filterText"
              style="width:200px;">
    </el-input>
    <el-tree class="filter-tree"
             :data="treeData"
             :props="defaultProps"
             node-key='id'
             accordion
             :filter-node-method="filterNode"
             @node-click="handleNodeChange"
             ref="tree">
    </el-tree>
  </div>
</template>
<script>
export default {
  props: {
    treeData: Array
  },
  data: function () {
    return {
      filterText: '',
      defaultProps: {
        children: 'Nodes',
        label: 'name'
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    // 过滤节点
    filterNode: function (value, data, no) {
      if (!value) {
        return true
      } else {
        return data.name.indexOf(value) !== -1
      }
    },
    // 树节点被点击
    handleNodeChange: function (data, node) {
      this.currentNode = node
      console.log('点击事件', data)
      this.$emit('node-click', this.currentNode)
    }
  }
}
</script>

