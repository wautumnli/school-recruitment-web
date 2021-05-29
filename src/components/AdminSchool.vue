<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-input v-model="search.position" placeholder="职位"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="search.companyName" clearable placeholder="请选择">
                        <el-option
                        v-for="item in companyList"
                        :key="item.companyName"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="search.wages" placeholder="工资范围单位k 如10-20"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="search.userName" placeholder="发布人"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="search.recruitType" clearable placeholder="请选择">
                        <el-option label="校招" value="1"></el-option>
                        <el-option label="实习" value="0"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="searchSchool">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
        <el-table
            style="width:100%margin-left:20%;margin-top:40px;background:white"
            :data="school"
            border>
            <el-table-column
            prop="position"
            label="职位"
            width="170">
            </el-table-column>
            <el-table-column
            prop="companyM.companyName"
            label="公司"
            width="150">
            </el-table-column>
            <el-table-column
            prop="wages"
            label="工资"
            width="150">
            </el-table-column>
            <el-table-column
            prop="education"
            label="学历"
            width="150">
            </el-table-column>
            <el-table-column
            prop="recruitType"
            label="招聘类型"
            width="200">
                <template slot-scope="scope">
                    {{scope.row.recruitType == 1 ?'校招':'实习'}}
                </template>
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="发布时间"
            width="200">
            </el-table-column>
            <el-table-column
            prop="userName"
            label="发布人"
            width="210">
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
                    @confirm="deleteSchool(scope.row)"
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
        <!-- 查看内容 -->
        <el-dialog title="职位内容" :visible.sync="detailView" center width="900px">
            <el-form :model="detail">
                <el-form-item label="职位" :label-width="'100px'">
                    <el-input v-model="detail.position" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司" :label-width="'100px'">
                    <el-input v-model="detail.companyM.companyName" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工作地点" :label-width="'100px'">
                    <el-input v-model="detail.workPlace" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工资" :label-width="'100px'">
                    <el-input v-model="detail.wages" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="行业" :label-width="'100px'">
                    <el-input v-model="detail.industry" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学历" :label-width="'100px'">
                    <el-input v-model="detail.education" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="'100px'">
                    <el-input v-model="detail.recruitD.email" readonly autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="'100px'">
                    <el-input v-model="detail.recruitD.content" readonly autocomplete="off" type="textarea"
  :autosize="{ minRows: 1, maxRows: 200}"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="detailView = false">取 消</el-button>
                <el-button type="primary" @click="detailView = false">确 认</el-button>
            </div>
        </el-dialog>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'AdminSchool',
    data(){
        return{
            companyName: '',
            companyList: [],
            currentPage: 1,
            total: 0,
            search: {
                pageNum: 1,
                pageSize: 8,
                position: '',
                companyName: '',
                wages: '',
                userName: ''
            },
            school: [],
            schoolCondition: {},
            detailView: false,
            detail: {
                position: '',
                workPlace: '',
                wages: '',
                industry: '',
                education: '',
                recruitD: {
                    email: '',
                    content: ''
                },
                companyM: {
                    companyName: ''
                }
            }
        }
    },
    created() {
        this.init();
        this.initCompany();
    },
    methods: {
        async init() {
            const {data} = await this.$http.post("/recruitm/school", this.search);
            this.school = data.data.school.records;
            this.currentPage = data.data.school.current;
            this.total = data.data.school.total;
            console.log(data);
        },
        async initCompany() {
            const {data} = await this.$http.post("/recruitm/getCompany");
            this.companyList = data.data.company;
        },
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/recruitm/school', this.search);
            this.school = data.data.school.records;
            this.total = data.data.school.total;
            this.currentPage = data.data.school.current;
        },
        async searchSchool() {
            const {data} = await this.$http.post("/recruitm/school", this.search);
            this.school = data.data.school.records;
            this.currentPage = data.data.school.current;
            this.total = data.data.school.total;
        },
        async deleteSchool(row) {
            this.schoolCondition.id = row.id;
            const {data} = await this.$http.post("/recruitm/delete", this.schoolCondition);
            this.addview = false;
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
        async checkDetail(row) {
            console.log(row);
            this.schoolCondition.id = row.id;
            const {data} = await this.$http.post("/recruitm/detail", this.schoolCondition);
            this.detail = data.data.detail;
            this.detailView = true;
        }
    },
}
</script>

<style scoped>

</style>