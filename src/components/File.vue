<template>
    <div>
        <el-card style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="search.userName" placeholder="请输入用户名称" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.fileName" placeholder="请输入文件名称" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button @click="searchFile">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:20px;background:white"
            :data="file"
            border>
            <el-table-column
            prop="fileName"
            label="文件名称"
            width="220">
            </el-table-column>
            <el-table-column
            prop="fileType"
            label="文件类型"
            width="200">
            </el-table-column>
            <el-table-column
            prop="fileSize"
            label="文件大小"
            width="100">
            </el-table-column>
            <el-table-column
            prop="userName"
            label="发布人"
            width="100">
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="发布时间"
            width="320">
            </el-table-column>
            <el-table-column
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="checkFile(scope.row)">查看</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div style="text-align:center;margin-top:20px">
            <el-pagination
            :page-size="5"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="total, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'File',
    data() {
        return{
            total: 0,
            currentPage: 1,
            file: [],
            search: {
                pageNum: 1,
                pageSize: 8,
                userName: '',
                fileName: ''
            }
        }
    },
    created() {
        this.init();
    },
    methods: {
      async init() {
          const {data} = await this.$http.post('/file/home', this.search);
          this.file = data.data.file.records;
          this.total = data.data.file.total;
          this.currentPage = data.data.file.current;
      },
      async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/file/home', this.search);
            this.school = data.data.file.records;
            this.total = data.data.file.total;
            this.currentPage = data.data.file.current;
      },
      async searchFile() {
          const {data} = await this.$http.post('/file/home', this.search);
          this.file = data.data.file.records;
          this.total = data.data.file.total;
          this.currentPage = data.data.file.current;
      },
      checkFile(row) {
          window.open(row.fileUrl);
      }
    },
}
</script>

<style> 
</style>