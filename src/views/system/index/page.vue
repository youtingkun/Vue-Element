<template>
<div>
  <el-button @click="handleAdd">新增</el-button>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="id"
      prop="_id"></el-table-column>
    <el-table-column
      label="姓名"
      prop="username"
      >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="delUser(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 新增 -->
  <el-dialog
  title="添加弹窗"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form>
    <el-form-item label="姓名"><el-input v-model="addForm.username"></el-input></el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog
  title="添加弹窗"
  :visible.sync="editDialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form>
    <el-form-item label="姓名"><el-input v-model="editForm.username"></el-input></el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editUser">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import * as userServer from '@/api/user.js'
export default {
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      editDialogVisible: false,
      addForm: {},
      editForm: {}
    }
  },
  created () {
    this.getUser()
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      userServer.getUser().then(res => {
        this.tableData = res.result
      })
    },
    addUser () {
      userServer.addUser(this.addForm).then(res => {
        this.getUser()
        this.dialogVisible = false
        this.$message.success('添加成功')
      })
    },
    editUser () {
      userServer.editUser(this.editForm).then(res => {
        this.getUser()
        this.editDialogVisible = false
        this.$message.success('编辑成功')
      })
    },
    delUser (index, row) {
      userServer.delUser(row).then(res => {
        this.getUser()
        this.$message.success('删除成功')
      })
    },
    handleAdd () {
      this.dialogVisible = true
    },
    handleEdit (index, row) {
      this.editDialogVisible = true
      this.editForm = JSON.parse(JSON.stringify(row))
    },
    handleDelete (index, row) {
    },
    handleClose () {
      this.dialogVisible = false
      this.editDialogVisible = false
    }
  }
}
</script>
