<template>
  <div id="ModuleAdd">
    <el-form :model="Mform"
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
        <el-input v-model="Mform.name"
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
  data () {
    return {
      Mform: {name: '', domain_id: ''},
      domain_id: '',
      model: {},
      rules: {
        name: [
          { required: true, message: '请输入模块名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm: function () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.model.father_id = this.$store.state.ModuleStore.domainId
          this.model.name = this.Mform.name
          console.log('测试', this.Mform.father_id)
          this.$emit('closeMadd', this.Mform)
          this.$store.dispatch('ModuleStore/moduleadd', this.model)
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
