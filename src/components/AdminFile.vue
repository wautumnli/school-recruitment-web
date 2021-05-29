<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="search.fileName" placeholder="文件名称"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.userName" placeholder="发布人"></el-input>
                </el-col>
                <el-col :span="2" :offset="1">
                    <el-button type="primary" @click="searchFile">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
        <el-table
            style="width:100%margin-left:20%;margin-top:20px;background:white"
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
            width="300">
            </el-table-column>
            <el-table-column
            prop="fileSize"
            label="文件大小"
            width="150">
            </el-table-column>
            <el-table-column
            prop="userName"
            label="发布人"
            width="150">
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="发布时间"
            width="300">
            </el-table-column>
            <el-table-column
            label="操作"
            width="200">
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
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'AdminFile',
    data(){
        return{
            file: [],
            currentPage: 1,
            total: 0,
            search: {
                pageNum: 1,
                pageSize: 8,
                fileName: ''
            },
            fileCondition: {}
        }
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
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

<style scoped>

</style>