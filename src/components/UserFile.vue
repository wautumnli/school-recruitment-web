<template>
    <div>
        <el-card style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="search.fileName" placeholder="请输入文件名称" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button @click="searchFile">搜索</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" @click="init">刷新</el-button>
                </el-col>
                <el-col :span="3" :offset="10">
                    <el-button type="danger" @click="fileView = true">文件上传</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:50px;background:white"
            :data="file"
            border>
            <el-table-column
            prop="fileName"
            label="文件名称"
            width="300">
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
            <template slot-scope="scope">
                {{scope.row.fileSize >= 1024 ? Math.floor(scope.row.fileSize/1000) + 'M': Math.floor(scope.row.fileSize) + 'K'}}
            </template>
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="发布时间"
            width="340">
            </el-table-column>
            <el-table-column
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" @click="deleteFile(scope.row)">删除</el-button>
                <el-button type="text" @click="checkFile(scope.row)">查看</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div style="text-align:center;margin-top:20px">
            <el-pagination
            :page-size="8"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="total, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
        <el-dialog title="文件上传" :visible.sync="fileView" center width="500px">
            <el-upload
                action="http://localhost:8082/file/upload"
                :data="search"
                :limit="3"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">文件大小不超过20mb</div>
            </el-upload>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'UserFile',
    data() {
        return{
            fileList: [],
            file: [],
            currentPage: 1,
            total: 0,
            search: {
                pageNum: 1,
                pageSize: 8,
                fileName: '',
                userId: 1
            },
            fileCondition: {},
            fileView: false
        }
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            this.search.userId = localStorage.getItem("userId");
            const {data} = await this.$http.post("/file/home", this.search);
            this.file = data.data.file.records;
            this.currentPage = data.data.file.current;
            this.total = data.data.file.total;
        },
        async searchFile() {
            const {data} = await this.$http.post("/file/home", this.search);
            this.file = data.data.file.records;
            this.currentPage = data.data.file.current;
            this.total = data.data.file.total;
        },
        checkFile(row) {
            window.open(row.fileUrl);
        },
        async deleteFile(row) {
            this.fileCondition.id = row.id;
            this.fileCondition.fileName = row.fileName;
            const {data} = await this.$http.post("/file/delete", this.fileCondition);
            if(data.data.delete == 1) {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.init();
            } else {
                this.$message({
                    message: '删除失败',
                    type: 'error'
                });
            }
            this.init();
        },
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/file/home', this.search);
            this.file = data.data.file.records;
            this.total = data.data.file.total;
            this.currentPage = data.data.file.current;
        }
    }
}
</script>

<style> 
</style>