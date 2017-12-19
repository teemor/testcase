<template>
  <div id="ModuleAdd">
    <el-form :model="Eform"
             :rules="rules"
             ref="form"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="Domain"
                    prop="name">
        <el-input v-model="$store.state.DomainStore.domainName"
                  placeholder="请输入域名"
                  readonly></el-input>
      </el-form-item>
      <el-form-item label="模块"
                    prop="name">
        <el-input v-model="Eform.name"
                  placeholder="请输入模块名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data: function () {
    return {
      Eform: { name: '', id: '' },
      modelAdd: {},
      rules: {
        name: [
          { required: true, message: '请输入模块名称', trigger: 'blur' }
        ]
      }
    }
  },
  // 数据的初始化。
  mounted () {
    this.Eform = this.data
  },
  watch: {
    data: function () {
      this.Eform = this.data
    }
  },
  methods: {
    submitForm: function () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('closeMedit', this.Eform)
          this.modelAdd.name = this.Eform.name
          this.modelAdd.father_id = this.Eform.father_id
          this.modelAdd.id = this.Eform.id
          this.modelAdd.parent_tree = this.Eform.parent_tree
          this.modelAdd.createtime = this.Eform.createtime
          this.modelAdd.operatorid = this.Eform.operatorid
          this.modelAdd.isdelete = this.Eform.isdelete
          this.$store.dispatch('ModuleStore/moduleedit', this.modelAdd)
          console.log('测试Eform', this.Eform)
        } else {
          console.log('error')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
