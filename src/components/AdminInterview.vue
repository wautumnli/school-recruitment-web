<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-input v-model="search.title" placeholder="面经标题名称"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-select clearable v-model="search.companyName" placeholder="请选择公司名称">
                        <el-option
                        v-for="item in companyList"
                        :key="item.companyName"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="search.position" placeholder="职位"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="search.userName" placeholder="发布人"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="searchInterview">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
        <el-table
            style="width:100%margin-left:20%;margin-top:40px;background:white"
            :data="interview"
            border>
            <el-table-column
            prop="title"
            label="标题"
            width="170">
            </el-table-column>
            <el-table-column
            prop="position"
            label="职位"
            width="150">
            </el-table-column>
            <el-table-column
            prop="companyName"
            label="公司"
            width="150">
            </el-table-column>
            <el-table-column
            prop="hot"
            label="热度"
            width="150">
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="发布时间"
            width="320">
            </el-table-column>
            <el-table-column
            prop="userName"
            label="发布人"
            width="320">
            </el-table-column>
            <el-table-column
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" @click="checkDetail(scope.row)">查看</el-button>
                <el-popconfirm
                    confirm-button-text='好的'
                    cancel-button-text='取消'
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定删除吗？"
                    @confirm="deleteInterview(scope.row)"
                    >
                    <el-button type="text" slot="reference">删除</el-button>
                </el-popconfirm>
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
        <!-- 查看内容 -->
        <el-dialog title="面经内容" :visible.sync="detailView" center width="900px">
            <el-form :model="detail">
                <el-form-item label="标题" :label-width="'100px'">
                    <el-input v-model="detail.title" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="招聘职位" :label-width="'100px'">
                    <el-input v-model="detail.position" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司" :label-width="'100px'">
                    <el-input v-model="detail.companyName" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="详细内容" :label-width="'100px'">
                    <el-input v-model="detail.content" readonly autocomplete="off" type="textarea"
        :autosize="{ minRows: 1, maxRows: 200}"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="detailView = false">取 消</el-button>
                <el-button type="primary" @click="detailView = false">确 认</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'AdminInterview',
    data(){
        return{
            interview: [],
            currentPage: 1,
            total: 0,
            search: {
                pageNum: 1,
                pageSize: 8,
                title: '',
                companyName: '',
                position: '',
                userName: ''
            },
            companyList: [],
            detailView: false,
            detail: {
                title: '',
                position: '',
                companyName: '',
                content: ''
            },
            interviewCondition: {}
        }
    },
    created() {
        this.init();
        this.initCompany();
    },
    methods: {
        async init() {
            const {data} = await this.$http.post("/interview/home", this.search);
            this.interview = data.data.interview.records;
            this.currentPage = data.data.interview.current;
            this.total = data.data.interview.total;
        },
        async initCompany() {
            const {data} = await this.$http.post("/recruitm/getCompany");
            this.companyList = data.data.company;
        },
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/interview/home', this.search);
            this.interview = data.data.interview.records;
            this.total = data.data.interview.total;
            this.currentPage = data.data.interview.current;
        },
        async searchInterview() {
            const {data} = await this.$http.post("/interview/home", this.search);
            this.interview = data.data.interview.records;
            this.currentPage = data.data.interview.current;
            this.total = data.data.interview.total;
        },
        checkDetail(row) {
            this.detail = row;
            this.detailView = true;
        },
        async deleteInterview(row) {
            this.interviewCondition.id = row.id;
            const {data} = await this.$http.post("/interview/delete", this.interviewCondition);
            if(data.data.add == 1) {
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
    },
}
</script>

<style scoped>

</style>