<template>
  <div id="TableForm">
    <el-button>新增</el-button>
    <el-button>删除</el-button>
    <el-table :data="tableData"
              border
              style="width: 965px">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column prop="date"
                       label="描述"
                       width="150">
      </el-table-column>
      <el-table-column prop="name"
                       label="预期效果"
                       width="120">
      </el-table-column>
      <el-table-column prop="province"
                       label="实例数据"
                       width="120">
      </el-table-column>
      <!-- <el-table-column prop="city"
                       label="编辑时间"
                       width="120">
      </el-table-column> -->
      <el-table-column prop="address"
                       label="编辑人"
                       width="300">
      </el-table-column>
      <el-form-item>
      <el-button type="primary"
                 @click="submitForm">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
    </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },

  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>
