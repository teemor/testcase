<template>
  <div id="service"
       style="float:left;margin-left:50px">
    <filter-tree :treeData="treeData"
                  @node-click="handleNodeChange">
    </filter-tree>
    <div style="margin-top:50px;margin-left:230px">
      <el-button @click="addTree">增加</el-button>
      <el-button @click="TreeModify">修改</el-button>
      <el-button>删除</el-button>
    </div>
    <!-- @current-node=""
    :tableData="" -->
    <!-- 增加树节点的弹框 -->
    <el-dialog :visible.sync="TreeAdddialog"
               title="增加树的节点"
               action="treeStore/addTree">
      <tree-dialog @Treeway="TreeAdddialog = false" :current="current"></tree-dialog>
    </el-dialog>
    <!-- 修改树节点的弹框 -->
    <el-dialog :visible.sync="TreeModifydialog"
                title="修改树的节点"
                action="treeStore/treeModify">
      <tree-dialog :data="TreeModifyForm"
                   @Treeway="TreeModifydialog = false"></tree-dialog>
    </el-dialog>
    <!-- <general-table style="float:right"></general-table> -->
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
// vuex模块化开发命名空间
const { mapGetters } = createNamespacedHelpers('treeStore')
export default {
  data () {
    return {
      filterText: '',
      defaultProps: {
        children: 'Nodes',
        label: 'name'
      },
      TreeAdddialog: false,
      TreeModifydialog: false,
      Treeform: {},
      TreeModifyForm: {},
      current: {}
    }
  },
  mounted () {
    this.$store.dispatch('treeStore/initTree')
  },
  computed: {
    ...mapGetters({
      treeData: 'treeData'
    })
  },
  methods: {
    // 树节点的增加
    addTree: function () {
      this.TreeAdddialog = true
    },
    // 树节点的修改
    TreeModify: function (Model) {
      this.TreeModifydialog = true
      this.TreeModifyForm = JSON.parse(JSON.stringify(Model))
    },
    handleNodeChange: function (data) {
      this.current = data
      this.$store.dispatch('treeStore/treeOne', data.data)
      console.log('传值到form', data.data)
    }
  }
}
</script>
