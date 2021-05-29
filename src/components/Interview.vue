<template>
    <div>
        <!-- 分类 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-input v-model="searchText" placeholder="请输入标题或职位"></el-input>
                </el-col>
                <el-col :span="6">
                    <span style="color:#61687c;font-size:15px">公司：</span>
                    <el-select v-model="companyName" clearable placeholder="请选择" @clear="delVal">
                        <el-option
                        v-for="item in companyList"
                        :key="item.companyName"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="test01" placeholder="发布人名称"></el-input>
                </el-col>
                <el-col :span="3" :offset="4">
                    <el-button type="primary" @click="searchInterview">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>

        <!-- 内容 -->
        <el-card style="width:60%;margin-left:20%;margin-top:10px" v-for="item in interview" v-bind:key="item.id">
            <el-row>
                <el-link style="font-size:22px;" type="primary" @click="checkDetail(item)">{{item.title}}</el-link>
            </el-row>
            <el-row style="margin-top:10px">
                <span style="font-size:15px;color:rgb(32, 35, 41)">{{item.userName}}</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">{{item.createTime}}</span>
                <el-badge :value="item.hot" style="margin-left:10px;color:#61687c;font-size:15px;float:right">
                    <el-button size="mini" type="primary" @click="addHot(item)">点赞</el-button>
                </el-badge>
            </el-row>
            <el-row style="margin-top:10px">
                <el-tag type="info" size="mini">{{item.position}}</el-tag>
                <el-tag type="info" size="mini" style="margin-left:10px">{{item.companyName}}</el-tag>
            </el-row>
        </el-card>

        <div style="text-align:center;margin-top:20px">
            <el-pagination
            :page-size="5"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="total, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>

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
    name: 'Interview',
    data() {
        return{
            interview: [],
            search: {
                pageNum: 1,
                pageSize: 5,
                title: '',
                position: '',
                companyName: ''
            },
            currentPage: 1,
            total: 0,
            companyList: [],
            companyName: '',
            searchText: '',
            detailView: false,
            detail: {
                title: '',
                position: '',
                companyName: '',
                content: ''
            },
            hotCondition: {
                id: null,
                hot: 1
            }
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
        async searchInterview() {
            this.search.title = this.searchText;
            this.search.position = this.searchText;
            this.search.companyName = this.companyName;
            const {data} = await this.$http.post("/interview/home", this.search);
            this.interview = data.data.interview.records;
            this.currentPage = data.data.interview.current;
            this.total = data.data.interview.total;
        },
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/recruitm/home', this.search);
            this.school = data.data.interview.records;
            this.total = data.data.interview.total;
            this.currentPage = data.data.interview.current;
        },
        checkDetail(item) {
            this.detail = item;
            this.detailView = true;
        },
        addHot(item) {
            this.$message.success("点赞成功");
            item.hot = item.hot + 1;
            this.hotCondition.id = item.id;
            this.hotCondition.hot = item.hot;
            this.$http.post("/interview/addhot", this.hotCondition)
        },
        delVal(){
            this.companyName = null;
        }
    }
}
</script>

<style scoped>
</style>