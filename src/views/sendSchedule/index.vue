<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="主旨">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="店家">
        <el-select v-model="form.group" placeholder="please select your zone">
          <el-option v-for="group in groups" v-bind:value="group.groupId + group.name" :key="group.groupId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="預約發送時間">
        <el-date-picker type="datetime" placeholder="選擇日期時間" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="立即發送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="會員過濾">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="擋招" name="type"></el-checkbox>
          <el-checkbox label="擋食" name="type"></el-checkbox>
          <el-checkbox label="擋玩" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="手機">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="發送內容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getSectionGroups } from '@/api/sendSchedule'
export default {
  data() {
    return {
      groups:[], 
      form: {

        name: '',
        group: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getSectionGroups().then(response => {
        this.groups = response.data.groups
      })
    },
    onSubmit() {
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

