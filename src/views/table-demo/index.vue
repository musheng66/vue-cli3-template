<template>
  <div class="users">
    <h3>用户管理</h3>
    <el-divider></el-divider>
    <div class="func-area">
      <el-input placeholder="请输入搜索关键字" v-model="searchParams.key" class="input-with-select" clearable>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <el-button type="success" class="" @click="handleCreate" icon="el-icon-plus">新建用户</el-button>
    </div>
    <div class="table-area">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 'active'" type="success">已激活</el-tag>
            <el-tag v-if="scope.row.status === 'inactive'" type="info">未激活</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          label="分组">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.group.includes('admin')">管理员</el-tag>
            <el-tag v-if="scope.row.group.includes('user')" type="success">用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.row)"><i class="el-icon-edit-outline"></i> 编 辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"><i class="el-icon-delete"></i> 删 除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="action === 'edit' ? '编辑用户' : '新建用户'"
      :visible.sync="dialogVisible"
      :center="true"
      width="480px"
      append-to-body
      @closed="clearForm">
      <div class="dialog-content">
        <el-form ref="form" :model="formData" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="formData.role" placeholder="请选择角色" style="display: block;">
              <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-switch
              v-model="formData.status"
              active-text="激活"
              inactive-text="未激活"
              active-value="active"
              inactive-value="inactive">
            </el-switch>
          </el-form-item>
          <el-form-item label="类型">
            <el-input v-model="formData.type" disabled></el-input>
          </el-form-item>
          <el-form-item label="分组">
            <el-select v-model="formData.group" multiple placeholder="请选择分组" clearable style="display: block;">
              <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createSubmit" v-if="action === 'create'">提 交</el-button>
        <el-button type="primary" @click="editSubmit" v-if="action === 'edit'">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AmbariUsers',
  components: { },
  data () {
    return {
      tableData: [
        { id: '1', name: '张三', role: 'admin', status: 'active', type: 'local', group: ['admin', 'user'] },
        { id: '2', name: '李四', role: 'user', status: 'active', type: 'local', group: ['user'] },
        { id: '3', name: '王五', role: 'admin', status: 'inactive', type: 'local', group: ['admin'] }
      ],
      searchParams: {
        key: ''
      },
      dialogVisible: false,
      action: 'create',
      categoryInfo: null,
      formData: {
        name: '',
        role: '',
        status: 'active',
        type: 'local',
        group: []
      },
      roleOptions: [
        { value: 'admin', label: '管理员' },
        { value: 'user', label: '用户' }
      ],
      groupOptions: [
        { value: 'admin', label: '管理员组' },
        { value: 'user', label: '用户组' }
      ]
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    handleCreate () {
      this.action = 'create'
      this.dialogVisible = true
    },
    createSubmit () {
      this.$message({ type: 'success', message: '操作成功！' + ' 提交数据：' + JSON.stringify(this.formData) })
      this.dialogVisible = false
    },
    handleEdit (row) {
      this.action = 'edit'
      this.formData = row
      this.dialogVisible = true
    },
    editSubmit () {
      this.$message({ type: 'success', message: '操作成功！' + ' 提交数据：' + JSON.stringify(this.formData) })
      this.dialogVisible = false
    },
    clearForm () {
      this.formData = {
        name: '',
        role: '',
        status: 'active',
        type: 'local',
        group: []
      }
    },
    handleDelete (row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // center: true,
        type: 'warning'
      }).then(() => {
        this.$message({ type: 'success', message: '删除成功!' + ' 提交数据：' + JSON.stringify(row) })
      }).catch(() => { })
    },
    search () {
      this.$message({ type: 'success', message: '查询成功!' + ' 提交数据：' + JSON.stringify(this.searchParams) })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/mixin";
  .users {
    padding: 20px;
    .func-area {
      padding-bottom: 15px;
      @include flex();
      @include justify-content(space-between);
      .input-with-select {
        width: 380px;
        .el-select {
          width: 110px;
        }
      }
    }
  }
</style>
