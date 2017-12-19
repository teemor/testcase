<template>
  <div id="operate">
    <!-- operate父组件 -->
    <operate :domainData="$store.state.DomainStore.domainDataf"
             :model="$store.state.ModuleStore.model"
             @add="Daddway"
             @edit="Deditway"
             @delete="Ddeleteway"
             @addM="Maddway"
             @editM="Meditway"
             @deleteM="Mdeleteway">
    </operate>
    <!-- Domain的增加弹框 -->
    <el-dialog :visible.sync="Dadddialog"
               title="添加Domin">
      <domain-add @domainway="Dadddialog=false"></domain-add>
    </el-dialog>
    <!--Domain的修改弹框  -->
    <el-dialog :visible.sync="Deditdialog"
               title="修改Domin">
      <domain-add @domainway="Deditdialog=false"
                  :data="form"></domain-add>
    </el-dialog>
    <!-- module的增加框 -->
    <el-dialog :visible.sync="Madddialog"
               title="添加Module">
      <module-add @closeMadd="Madddialog=false">
      </module-add>
    </el-dialog>
    <!-- module 的编辑弹框 -->
    <el-dialog :visible.sync="Meditdialog"
               title="修改Module">
      <module-edit @closeMedit="Meditdialog=false"
                   :data="editForm">
      </module-edit>
    </el-dialog>
    <!-- service父组件 -->
    <service>
    </service>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: function () {
    return {
      Dadddialog: false,
      Deditdialog: false,
      Madddialog: false,
      Meditdialog: false,
      form: {},
      editForm: {}
    }
  },
  mounted () {
    this.domainlist()
  },
  computed: {
    ...mapState({
      formdata: 'form',
      formdataE: 'editForm'
    })
  },
  methods: {
    domainlist: function () {
      this.$store.dispatch('DomainStore/domainpage')
    },
    Daddway: function () {
      this.Dadddialog = true
    },
    Deditway: function (Model) {
      this.Deditdialog = true
      this.form = JSON.parse(JSON.stringify(Model))
      console.log('测试form', Model)
    },
    //  刪除
    Ddeleteway: function (id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then((res) => {
        this.$store.dispatch('DomainStore/domaindelete', id)
        console.log('测试ID', id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // module增加
    Maddway: function () {
      this.Madddialog = true
    },
    // module 修改
    Meditway: function (Model) {
      this.Meditdialog = true
      this.editForm = JSON.parse(JSON.stringify(Model))
      console.log('测试修改是否传过值', Model)
    },
    Mdeleteway: function (id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then((res) => {
        this.$store.dispatch('ModuleStore/moduledelete', id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>




