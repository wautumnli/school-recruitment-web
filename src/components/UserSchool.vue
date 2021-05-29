<template>
    <div>
        <el-card style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="search.position" placeholder="请输入职位" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="6">
                    <span style="color:#61687c;font-size:15px">公司：</span>
                    <el-select v-model="search.companyName" clearable placeholder="请选择">
                        <el-option
                        v-for="item in companyList"
                        :key="item.companyName"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="2">
                    <el-button @click="searchUserSchool">搜索</el-button>
                </el-col>
                <el-col :span="2">
                    <el-button @click="init">刷新</el-button>
                </el-col>
                <el-col :span="3" :offset="2">
                    <el-button type="primary" @click="fileView = true">批量上传</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="danger" @click="addview = true">发布职位</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:20px;background:white"
            :data="school"
            border>
            <el-table-column
            prop="position"
            label="职位"
            width="170">
            </el-table-column>
            <el-table-column
            prop="workPlace"
            label="工作地点"
            width="100">
            </el-table-column>
            <el-table-column
            prop="wages"
            label="工资"
            width="100">
            </el-table-column>
            <el-table-column
            prop="companyM.companyName"
            label="公司名"
            width="100">
            </el-table-column>
            <el-table-column
            prop="education"
            label="学历"
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
                <el-button type="text" size="small" @click="checkDetail(scope.row)">查看</el-button>
                <el-button type="text" size="small" @click="deleteSchool(scope.row)">删除</el-button>
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
        <!-- 新添职位 -->
        <el-dialog title="新添职位" :visible.sync="addview" center width="900px">
            <el-form :model="schoolCondition">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="职位" :label-width="'100px'">
                            <el-input v-model="schoolCondition.position" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="工作地点" :label-width="'100px'">
                            <el-input v-model="schoolCondition.workPlace" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="工资" :label-width="'100px'">
                            <el-input v-model="schoolCondition.wages" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="邮箱" :label-width="'100px'">
                            <el-input v-model="schoolCondition.email" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="学历" :label-width="'100px'">
                            <el-select v-model="schoolCondition.education" placeholder="请选择">
                                <el-option label="本科" value="本科"></el-option>
                                <el-option label="硕士" value="硕士"></el-option>
                                <el-option label="博士" value="博士"></el-option>
                                <el-option label="本科" value="博士以上"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="招聘类型" :label-width="'100px'">
                            <el-select v-model="schoolCondition.recruitType" placeholder="请选择">
                                <el-option label="校招" value="1"></el-option>
                                <el-option label="实习" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="公司" :label-width="'100px'">
                            <el-select v-model="schoolCondition.companyId" placeholder="请选择">
                                <el-option
                                v-for="item in companyList"
                                :key="item.companyName"
                                :label="item.companyName"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="所属行业" :label-width="'100px'">
                            <el-input v-model="schoolCondition.industry" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="详细内容" :label-width="'100px'">
                    <el-input v-model="schoolCondition.content" autocomplete="off" type="textarea"
  :autosize="{ minRows: 1, maxRows: 200}"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addview = false">取 消</el-button>
                <el-button type="primary" @click="addSchool">保 存</el-button>
            </div>
        </el-dialog>
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
        <el-dialog title="批量倒入文件上传" :visible.sync="fileView" center width="500px">
            <el-upload
                action="http://localhost:8082/recruitm/batch"
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
    name: 'UserSchool',
    data() {
        return{
            companyName: '',
            companyList: [],
            currentPage: 1,
            total: 0,
            search: {
                pageNum: 1,
                pageSize: 8,
                userId: 1,
                position: '',
                companyName: ''
            },
            school: [],
            addview: false,
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
            },
            fileView: false,
            fileList: []
        }
    },
    created() {
        this.init();
        this.initCompany();
    },
    methods: {
        async init() {
            this.search.userId = localStorage.getItem("userId");
            const {data} = await this.$http.post("/recruitm/school", this.search);
            this.school = data.data.school.records;
            this.currentPage = data.data.school.current;
            this.total = data.data.school.total;
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
        async searchUserSchool() {
            const {data} = await this.$http.post("/recruitm/school", this.search);
            this.school = data.data.school.records;
            this.currentPage = data.data.school.current;
            this.total = data.data.school.total;
        },
        async addSchool() {
            this.schoolCondition.userId = this.search.userId;
            const {data} = await this.$http.post("/recruitm/add", this.schoolCondition);
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
            this.init();
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
            this.schoolCondition.id = row.id;
            const {data} = await this.$http.post("/recruitm/detail", this.schoolCondition);
            this.detail = data.data.detail;
            console.log(data);
            this.detailView = true;
        }
    }
}
</script>

<style> 
</style>