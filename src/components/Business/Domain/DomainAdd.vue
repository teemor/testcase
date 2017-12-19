<template>
  <div>
    <el-form :model="Dform"
             :rules="rules"
             ref="form"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="Domain"
                    prop="name">
        <el-input v-model="Dform.name" placeholder="请输入内容"></el-input>
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
import Factory from '../../../factory.js'
export default {
  props: {
    data: Object
  },
  data () {
    return {
      submit: '',
      Dform: this.initModel(),
      rules: {
        name: [
          { required: true, message: '请输入域名', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    data: function () {
      this.Dform = this.data
    }
  },
  mounted: function () {
    if (this.data && Object.keys(this.data).length) {
      this.setModel()
    } else {
      this.Dform = this.initModel()
    }
  },
  methods: {
    setModel: function () {
      this.Dform = this.data
    },
    initModel: function () {
      return {
        name: ''
      }
    },
    // 提交表单
    submitForm: function () {
      this.submit = Factory.factory.function(this.data)
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('domainway', this.Dform)
          this.$store.dispatch(this.submit, this.Dform)
          console.log('ceshi提交是否有dform', this.Dform)
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

