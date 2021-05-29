<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="2" style="margin-top:5px">
                    <span style="font-size:20px;">基础信息</span>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.username" placeholder="请输入账号"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.userNickName" placeholder="请输入昵称"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px" :gutter="20">
                <el-col :span="2" style="margin-top:5px">
                    <span style="font-size:20px;">详细信息</span>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.grade" placeholder="请输入年级"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.className" placeholder="请输入班级"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="search.college" placeholder="请输入学院"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px" :gutter="20">
                <el-col :span="2" style="margin-top:5px">
                    <span style="font-size:20px;">操作</span>
                </el-col>
                <el-col :span="4">
                      <el-select v-model="search.userType" clearable placeholder="请选择用户状态">
                        <el-option label="招聘用户" value="1"></el-option>
                        <el-option label="求职用户" value="0"></el-option>
                        <el-option label="未审核用户" value="-1"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary" @click="searchUser">搜索</el-button>
                </el-col>
                <el-col :span="3" :offset="13">
                    <el-button type="danger" @click="userView = true">添加新用户</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
            <el-table
            :data="userInfoList"
            border
            style="width: 100%">
            <el-table-column
            prop="sysUser.username"
            label="账号"
            width="120">
            </el-table-column>
            <el-table-column
            prop="sysUser.nickName"
            label="昵称"
            width="150">
            </el-table-column>
            <el-table-column
            prop="grade"
            label="年级"
            width="100">
            </el-table-column>
            <el-table-column
            prop="className"
            label="班级"
            width="120">
            </el-table-column>
            <el-table-column
            prop="college"
            label="学院"
            width="140">
            </el-table-column>
            <el-table-column
            prop="birthday"
            label="出生日期"
            width="140">
            </el-table-column>
            <el-table-column
            prop="sex"
            label="性别"
            width="50">
            <template slot-scope="scope">
                {{ scope.row.sex == 0 ?'男':'女'}}
            </template>
            </el-table-column>
            <el-table-column
            prop="college"
            label="学院"
            width="140">
            </el-table-column>
            <el-table-column
            prop="sysUser.userType"
            label="用户类型"
            width="140">
            <template slot-scope="scope">
                {{ scope.row.sysUser.userType == 0 ?'求职用户':'招聘用户'}}
            </template>
            </el-table-column>
            <el-table-column
            prop="sysUser.userType"
            label="用户状态"
            width="160">
            <template slot-scope="scope">
                <el-tag :type="scope.row.sysUser.userType==-1?'danger':'success'">{{scope.row.sysUser.userType==-1?'未审核':'已审核'}}</el-tag>
            </template>
            </el-table-column>
            <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
                <el-popconfirm
                    @confirm="rejectUser(scope.row)"
                    confirm-button-text='好的'
                    cancel-button-text='取消'
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定驳回吗？"
                    >
                    <el-button type="text" slot="reference" v-show="scope.row.sysUser.userType == -1">驳回</el-button>
                </el-popconfirm>
                <el-popconfirm
                    @confirm="checkUser(scope.row)"
                    confirm-button-text='好的'
                    cancel-button-text='取消'
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定审核吗？"
                    >
                    <el-button type="text" slot="reference" v-show="scope.row.sysUser.userType == -1">审核</el-button>
                </el-popconfirm>
                <el-popconfirm
                    @confirm="deleteUser(scope.row)"
                    confirm-button-text='好的'
                    cancel-button-text='取消'
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定删除吗？"
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
        <el-dialog title="添加用户" :visible.sync="userView" center width="900px">
            <el-form :model="addUser">
                <el-form-item label="账号" :label-width="'100px'">
                    <el-input v-model="addUser.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="'100px'">
                    <el-input v-model="addUser.userPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="昵称" :label-width="'100px'">
                    <el-input v-model="addUser.userNickName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="招聘职位" :label-width="'100px'">
                    <el-select v-model="addUser.userType" clearable placeholder="请选择用户状态">
                        <el-option label="招聘用户" value="1"></el-option>
                        <el-option label="求职用户" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="userView = false">取 消</el-button>
                <el-button type="primary" @click="addUserInfo">确 认</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'AdminUser',
    data(){
        return{
            search: {
                pageNum: 1,
                pageSize: 8,
                username: '',
                userNickName: '',
                grade: '',
                className: '',
                college: ''
            },
            currentPage: 1,
            total: 0,
            userInfoList: [],
            userCondition: {},
            userView: false,
            addUser: {
                username: '',
                userPassword: '',
                userNickName: '',
                userType: null
            }
        }
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            const {data} = await this.$http.post('/info/home', this.search);
            this.userInfoList = data.data.userInfoList.records;
            this.currentPage = data.data.userInfoList.current;
            this.total = data.data.userInfoList.total;
        },
        async handleCurrentChange(val) {
            this.search.pageNum = val;
            const {data} = await this.$http.post('/info/home', this.search);
            this.userInfoList = data.data.userInfoList.records;
            this.currentPage = data.data.userInfoList.current;
            this.total = data.data.userInfoList.total;
        },
        async searchUser() {
            const {data} = await this.$http.post("/info/home", this.search);
            this.userInfoList = data.data.userInfoList.records;
            this.currentPage = data.data.userInfoList.current;
            this.total = data.data.userInfoList.total;
        },
        async deleteUser(row) {
            console.log(11);
            this.userCondition.id = row.id;
            this.userCondition.userId = row.sysUser.id;
            const {data} = await this.$http.post("/info/delete", this.userCondition);
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
        },
        async checkUser(row) {
            this.userCondition.userId = row.sysUser.id;
            this.userCondition.userType = 1;
            const {data} = await this.$http.post("/info/check", this.userCondition);
            if(data.data.check == 1) {
                this.$message({
                    message: '审核成功',
                    type: 'success'
                });
                this.init();
            } else {
                this.$message({
                    message: '审核失败',
                    type: 'error'
                });
            }
        },
        async rejectUser(row) {
            this.userCondition.userId = row.sysUser.id;
            this.userCondition.userType = 0;
            const {data} = await this.$http.post("/info/reject", this.userCondition);
            if(data.data.reject == 1) {
                this.$message({
                    message: '驳回成功',
                    type: 'success'
                });
                this.init();
            } else {
                this.$message({
                    message: '驳回失败',
                    type: 'error'
                });
            }
        },
        async addUserInfo() {
            const {data} = await this.$http.post("/info/add", this.addUser);
            if(data.data.add == 1) {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                this.userView = false;
                this.init();
            } else {
                this.$message({
                    message: '添加失败',
                    type: 'error'
                });
            }
        }
    },
}
</script>

<style scoped>

</style>