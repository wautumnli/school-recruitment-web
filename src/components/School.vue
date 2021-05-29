<template>
    <div>
        <!-- 搜索区 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%">
            <el-input placeholder="请输入职位或公司" v-model="searchText" class="input-with-select" style="font-size:15px">
                <el-button slot="append" icon="el-icon-search" @click="searchSchool"></el-button>
            </el-input>
        </el-card>
        <!-- 分类区 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:20px">
            <el-row>
                <el-col :span="8">
                    <span style="font-size:15px;color:#61687c">职业类型：</span>
                    <el-select
                        clearable
                        v-model="search.industry"
                        @clear="delIndustry"
                        placeholder="请选择">
                        <el-option
                        v-for="item in industryList"
                        :key="item.industry"
                        :label="item.industry"
                        :value="item.industry">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <span style="font-size:15px;color:#61687c">招聘类型：</span>
                    <el-select v-model="search.recruitType" @clear="delValue" placeholder="请选择" clearable>
                        <el-option label="校招" value="1"></el-option>
                        <el-option label="实习" value="0"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px">
                <el-col :span="8">
                    <span style="font-size:15px;color:#61687c">学历要求：</span>
                    <el-select v-model="education" placeholder="请选择职业">
                        <el-option value="本科" label="本科"></el-option>
                        <el-option value="本科" label="硕士"></el-option>
                        <el-option value="本科" label="博士"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-input v-model="education" placeholder="请输入发布人名称"></el-input>
                </el-col>
            </el-row>
        </el-card>
        <!-- 信息区 -->
        <br>
        <br>
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:10px" v-for="item in school" v-bind:key="item.id">
            <el-row style="padding:20px 20px 0px 20px">
                <el-col :span="20">
                    <el-row>
                        <el-col :span="10">
                            <el-link type="primary" style="font-size:22px" @click="checkDetail(item)">{{item.position}}  【{{item.workPlace}}】</el-link>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-link type="primary" style="font-size:22px">{{item.companyM.companyName}}</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:10px">
                        <el-col :span="10">
                            <span style="font-size:20px;color:orange">{{item.wages}}</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">{{item.recruitType == 1?'校招':'实习'}}</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">{{item.education}}</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px">
                                <el-tag size="small">发布人:{{item.userName}}</el-tag>
                            </span>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <span style="color:#61687c;font-size:15px">{{item.companyM.companyType}}</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">{{item.companyM.companyStatus}}</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <img :src="item.companyM.imgUrl + '?x-oss-process=image/resize,w_90,limit_0'">
                </el-col>
            </el-row>
            <el-row style="padding:0px 20px 20px 20px">
                <el-tag type="info" style="margin-right:10px">{{item.industry}}</el-tag>
            </el-row>
        </el-card>
        <div class="block" style="text-align:center;margin-top:10px">
            <el-pagination
            :page-size="4"
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
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return{
            input: '',
            dialogFormVisible1: false,
            form: {
                n1: 'Java开发',
                n2:'1、参与业务线后端服务的设计、开发、优化等研发工作，保证产品的质量和开发进度\n2、和产品等团队合作，确保前后端模块的协同工作;\n3、参与研究新兴技术，对产品进行持续优化。',
                n3:'京东集团',
                n4:'10-23k',
                n5:'本科',
                n6:'校招',
                n7:'wwwtest@163.com'
            },
            //已改变
            school: [],
            search: {
                pageNum: 1,
                pageSize: 4,
                position: '',
                companyName: '',
                recruitType: null,
                industry: null
            },
            education: null,
            searchText: '',
            currentPage: 1,
            total: 0,
            industryList: [],
            industry: '',
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
            schoolCondition: {}
        }
    },
    created() {
        this.init();
        this.initIndustry();
    },
    methods: {
        async init() {
            const {data} = await this.$http.post('/recruitm/school', this.search);
            this.school = data.data.school.records;
            this.total = data.data.school.total;
            this.currentPage = data.data.school.current;
        },
        async initIndustry() {
            const {data} = await this.$http.post('/recruitm/industry');
            this.industryList = data.data.data;
        },
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/recruitm/school', this.search);
            this.school = data.data.school.records;
            this.total = data.data.school.total;
            this.currentPage = data.data.school.current;
        },
        async searchSchool() {
            this.search.position = this.searchText;
            this.search.companyName = this.searchText;
            const {data} = await this.$http.post("/recruitm/school", this.search);
            this.school = data.data.school.records;
            this.total = data.data.school.total;
            this.currentPage = data.data.school.current;
        },
        async checkDetail(row) {
            this.schoolCondition.id = row.id;
            const {data} = await this.$http.post("/recruitm/detail", this.schoolCondition);
            this.detail = data.data.detail;
            console.log(data);
            this.detailView = true;
        },
        delValue() {
            this.search.recruitType = null;
        },
        delIndustry() {
            this.industry = null;
        }
    },
}
</script>

<style scoped> 
</style>