<template>
  <div class="box">
    <el-form ref="form" size="small" :model="form" label-width="100px">
      <el-row>
        <el-col :lg="6" :md="8" :sm="8">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8">
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8">
          <el-form-item label="性别">
            <el-select v-model="form.gender" style="width:100%">
              <el-option label="男" value="1"></el-option>
              <el-option label="女 two" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8">
          <el-form-item label="老师姓名">
            <el-input v-model="form.teacherName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="8">
          <el-form-item label="">
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div></div>
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="age" label="年龄" width="180" />
        <el-table-column prop="gender" label="性别" />
        <el-table-column prop="age" label="老师姓名" width="180" />
        <el-table-column prop="age" label="操作" width="180">
          <template #default="{row}">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { studentList } from '@/api/students'
  const form = reactive({
    name: '',
    age: '',
    gender: '',
    teacherName: ''
  })
  const onSubmit = () => {
    console.log('submit!')
  }
  let tableData = ref([])
  // 获取学生列表
  const getList = () => {
    studentList()
      .then(res => {
        tableData.value = res.data.data
      })
      .catch(err => { console.log(err)})
  }
  onMounted(() => {
    getList()
  })
</script>
<style lang="less" scope>
  .box {
    padding: 30px;
  }
</style>
