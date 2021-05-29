<template>
    <div>
        <el-card style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="5">
                    <el-input v-model="search.title" placeholder="请输入标题名称" style="width:200px"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-select clearable v-model="search.companyName" placeholder="请选择">
                        <el-option
                        v-for="item in companyList"
                        :key="item.companyName"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <el-button @click="searchUserInterview">搜索</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="danger" @click="addview = true">发布面试经历</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:40px;background:white"
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
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" @click="checkDetail(scope.row)">查看</el-button>
                <el-button type="text" @click="deleteInterview(scope.row)">删除</el-button>
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
        <!-- 新添面经 -->
        <el-dialog title="新添面经" :visible.sync="addview" center width="900px">
            <el-form :model="interviewCondition">
                <el-form-item label="标题" :label-width="'100px'">
                    <el-input v-model="interviewCondition.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="招聘职位" :label-width="'100px'">
                    <el-input v-model="interviewCondition.position" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司" :label-width="'100px'">
                    <el-select v-model="interviewCondition.companyName" placeholder="请选择">
                        <el-option
                        v-for="item in companyList"
                        :key="item.companyName"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="详细内容" :label-width="'100px'">
                    <el-input v-model="interviewCondition.content" autocomplete="off" type="textarea"
  :autosize="{ minRows: 1, maxRows: 200}"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addview = false">取 消</el-button>
                <el-button type="primary" @click="addInterview">保 存</el-button>
            </div>
        </el-dialog>
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
    name: 'UserInterview',
    data() {
        return{
            addview: false,
            interviewCondition: {},
            interview: [],
            currentPage: 1,
            total: 0,
            search: {
                pageNum: 1,
                pageSize: 8,
                userId: 1,
                title: '',
                companyName: ''
            },
            companyList: [],
            detailView: false,
            detail: {
                title: '',
                position: '',
                companyName: '',
                content: ''
            }
        }
    },
    created() {
        this.init();
        this.initCompany();
    },
    methods: {
        async init() {
            this.search.userId = localStorage.getItem("userId");
            const {data} = await this.$http.post("/interview/home", this.search);
            this.interview = data.data.interview.records;
            this.currentPage = data.data.interview.current;
            this.total = data.data.interview.total;
        },
        async initCompany() {
            const {data} = await this.$http.post("/recruitm/getCompany");
            this.companyList = data.data.company;
        },
        // 新添内容
        async addInterview(){
            this.interviewCondition.userId = this.search.userId;
            const {data} = await this.$http.post("/interview/add", this.interviewCondition);
            this.addview = false;
            if(data.data.add == 1) {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                this.init();
            } else {
                this.$message({
                    message: '添加失败',
                    type: 'error'
                });
            }
        },
        async searchUserInterview() {
            const {data} = await this.$http.post("/interview/home", this.search);
            this.interview = data.data.interview.records;
            this.currentPage = data.data.interview.current;
            this.total = data.data.interview.total;
        },
        async deleteInterview(row) {
            this.interviewCondition.id = row.id;
            const {data} = await this.$http.post("/interview/delete", this.interviewCondition);
            this.addview = false;
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
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/interview/home', this.search);
            this.interview = data.data.interview.records;
            this.total = data.data.interview.total;
            this.currentPage = data.data.interview.current;
        },
        checkDetail(row) {
            this.detail = row;
            this.detailView = true;
        }
    }
}
</script>

<style> 
</style>