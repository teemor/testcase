<template>
  <div id="generalTable">
    <el-button>新增</el-button>
    <el-button>删除</el-button>
    <el-table :data="tableData"
              border
              style="width: 965px">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scop">
          {{ scope.row[scope.column.property] }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary"
                     @click="modify">编辑</el-button>
        </template>
      </el-table-column>
      <!--分页-->
      <pagination v-if="showPagination"
                  :total="tableData.Model.Count"
                  :changePage="changePage"
                  @pagination-change="paginationChange"></pagination>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Object,
    // 分页属性
    showPagination: {
      type: Boolean,
      default: false
    },
    // 当前页数
    changePage: Number
  },
  data: function () {
    return {
      width: '150'
    }
  },
  mounted () {
    this.$nextTick(function () {
      if (this.operationWidth) {
        this.width = this.operationWidth
      }
    })
  },
  methods: {
    // 表格操作按钮
    handleClick: function (operation, key, index) {
      this.$emit('operation-btn-click', operation, key, index)
    },
    // 分页操作
    paginationChange: function (currentPage, pageSize) {
      this.$emit('paginationChange', currentPage, pageSize)
    }
  }
}
</script>

