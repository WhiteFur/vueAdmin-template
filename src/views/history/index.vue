<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="主旨" align="center">
        <template slot-scope="scope">
          {{scope.row.Title}}
        </template>
      </el-table-column>
      <el-table-column label="內容" align="center">
        <template slot-scope="scope">
          {{scope.row.Message}}
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作者" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="總通數" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.Total}}
        </template>
      </el-table-column>
      <el-table-column label="成功通數" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.Success}}
        </template>
      </el-table-column>
      <el-table-column label="失敗通數" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.Failure}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.Status | statusFilter">{{scope.row.Status | statusDescription}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="發送時間" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.SendTime | moment('YYYY-MM-DD HH:mm:ss')}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/history'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'gray',
        1: 'gray',
        2: 'gray',
        3: 'success',
        4: 'danger'
      }
      return statusMap[status]
    },
    statusDescription(status) {
      const statusMap = {
        0: '名單查詢中',
        1: '未發送',
        2: '發送中',
        3: '已發送',
        4: '發送失敗'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
