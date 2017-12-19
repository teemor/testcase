<template>
  <div>
    <el-form :model="Treeform"
             v-if="Treeform"
             :rules="rules"
             ref="form"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="父级名称"
                    prop="value">
        <el-input v-model="value"></el-input>
      </el-form-item>
      <el-form-item label="service"
                    prop="name">
        <el-input v-model="Treeform.name"
                  placeholder="请输入名称"></el-input>
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
    current: Object,
    data: Object //  父级是树
//      action: String  // 获取dispatch提交变量
  },
  data: function () {
    return {
      model: {},
      value: '',
      Treeform: {
        father_id: '',
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      }
    }
  },
  mounted: function () {
    this.Treeform = this.treeData || this.initModel()
    if (this.data) {
      this.value = this.$store.state.treeStore.treeOne.name
    } else {
      this.value = this.$store.state.ModuleStore.modelName
    }
  },
  watch: {
    data: function (val) {
      this.Treeform = this.data
    }
//    current: function () {
//     this.Treeform.currentNode_Name = this.current.data.name
//    }
  },
  methods: {
    initModel: function () {
      return {
        name: ''
//        currentNode_Name: this.current.data.name
      }
    },
    submitForm: function () {
      console.log('chuma', this.data)
      console.log('提交方法', this.Treeform.name)
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.data) {
            this.model.father_id = this.$store.state.treeStore.father_id
            this.model.name = this.Treeform.name
          } else {
            this.model.father_id = this.$store.state.treeStore.modelDataId
            this.model.name = this.Treeform.name
          }
          this.$emit('Treeway', this.Treeform)
          this.$store.dispatch('treeStore/addTree', this.model)
          console.log('ceshi提交是否有Treeform', this.model)
        } else {
          console.log('error submit')
          return false
        }
      })
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

