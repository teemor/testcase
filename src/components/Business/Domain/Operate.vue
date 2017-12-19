<template>
  <div style="flaot:left,width:100%">
    <!-- 点击domin增加出现的弹框  -->
    <span>Domain:</span>
    <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
    <el-select v-model="value"
               placeholder="请选择"
               value-key="id"
               @change="changed(value)">
      <el-option v-for="item in domainData"
                 :key="item.id"
                 :label="item.name"
                 :value="item">
        <!-- 此处的value指的是选项的值,select里不用绑定data,b绑定了data也是无效的 -->
      </el-option>
    </el-select>
    <el-button @click="Dadd">增加</el-button>
    <el-button @click="Dedit">修改</el-button>
    <el-button @click="Ddelete">删除</el-button>
    <!-- module -->
    <span style="margin-left:50px">模块:</span>
    <el-select v-model="valueModel"
               value-key="id"
               placeholder="请选择模块"
               @change="change">
      <el-option v-for="item in $store.state.ModuleStore.model"
                 :key="item.id"
                 :label="item.name"
                 :value="item">
      </el-option>
    </el-select>
    <el-button @click="Madd">增加</el-button>
    <el-button @click="Medit">编辑</el-button>
    <el-button>检索</el-button>
    <el-button @click="Mdelete">删除</el-button>
    <el-button @click="query"
               style="margin-left:100px">查询</el-button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      value: {},
      Dform: {},
      valueModel: {},
      Mform: {},
      Eform: {}
    }
  },
  props: {
    domainData: Array,
    model: Array
  },
  methods: {
    // domain 增加
    Dadd: function () {
      this.$emit('add', this.Dform)
    },
    // domain 修改
    Dedit: function () {
      this.Dform.father_id = this.value.father_id
      this.Dform.name = this.value.name
      this.Dform.id = this.value.id
      this.Dform.parent_tree = this.value.parent_tree
      this.Dform.createtime = this.value.createtime
      this.Dform.operatorid = this.value.operatorid
      this.Dform.isdelete = this.value.isdelete
      this.$emit('edit', this.Dform)
    },
    changed: function (item) {
      this.$store.dispatch('ModuleStore/changeId', item.id)
      this.$store.dispatch('ModuleStore/modulepage')
      this.$store.dispatch('DomainStore/modulename', item.name)
        //  console.log('测试change', item.name)
    },
    // domain 删除
    Ddelete: function () {
      this.$emit('delete', this.value)
      this.value = {}
    },
    // module 增加
    Madd: function () {
      this.$emit('addM', this.Mform)
    },
    // module 修改
    Medit: function () {
      this.Eform.father_id = this.valueModel.father_id
      this.Eform.name = this.valueModel.name
      this.Eform.id = this.valueModel.id
      this.Eform.parent_tree = this.valueModel.parent_tree
      this.Eform.createtime = this.valueModel.createtime
      this.Eform.operatorid = this.valueModel.operatorid
      this.Eform.isdelete = this.valueModel.isdelete
      this.$emit('editM', this.Eform)
    },
    // module 删除
    Mdelete: function () {
      this.$emit('deleteM', this.valueModel)
      this.valueModel = {}
      console.log('测试删除', this.valueModel)
    },
    change: function (item) {
      this.$store.dispatch('treeStore/moduleID', item.id)
      this.$store.dispatch('ModuleStore/modulename', item.name)
      console.log('测试模块change', item.name)
    },
    // 选中前两个id进行查询
    query: function () {
      this.Eform.father_id = this.$store.state.treeStore.modelDataId
      this.$store.dispatch('treeStore/initTree', this.Eform.father_id)
      console.log('测试查询树', this.$store.state.treeStore.modelDataId)
    }
  }
}
</script>

