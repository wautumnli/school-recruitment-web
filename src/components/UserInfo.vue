<template>
    <div style="width:64%;margin-left:20%;margin-top:50px">
        <el-card>
            <el-divider></el-divider>
            <el-tag type="success">账号信息</el-tag>
            <el-divider></el-divider>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">账号:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.sysUser.username" disabled></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">密码:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.password"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">昵称:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.sysUser.nickName"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">账户类型:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.sysUser.userType" disabled></el-input>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-tag type="danger">详细信息</el-tag>
            <el-divider></el-divider>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">出生日期:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.birthday" ></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">性别:</div>
                </el-col>
                <el-col :span="8">
                    <el-input  v-model="userInfo.sex"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">年级:</div>
                </el-col>
                <el-col :span="8">
                    <el-input  v-model="userInfo.grade"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">学院:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.college"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px;margin-bottom:20px">
                <el-col :offset="3" :span="2" style="margin-top:6px">
                    <div style="font-size:20px; font-weight:400">班级:</div>
                </el-col>
                <el-col :span="8">
                    <el-input v-model="userInfo.className"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:50px;margin-bottom:20px">
                <el-col :offset="8" :span="4">
                    <el-button v-if="userType!=1" type="danger" @click="applyUser">申请招聘用户</el-button>
                </el-col>
                <el-col :span="1">
                    <el-button type="primary" @click="updateUser">修改信息</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data() {
        return{
            userInfo: {
                password: ''
            },
            userInfoCondition: {
                userId: 1
            },
            updateUserInfo: {},
            userType: 1,
            applyUserInfo: {}
        }
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            this.userInfoCondition.userId = localStorage.getItem("userId");
            this.userType = localStorage.getItem("userType");
            const {data} = await this.$http.post('/info/userinfod', this.userInfoCondition);
            this.userInfo = data.data.userinfo;
            if(this.userInfo.sysUser.userType == 1) {
                this.userInfo.sysUser.userType = '招聘用户';
            } else {
                this.userInfo.sysUser.userType = '求职用户'
            }
            if(this.userInfo.sex == 1) {
                this.userInfo.sex = '男';
            } else {
                this.userInfo.sex = '女'
            }
        },
        async updateUser() {
            this.updateUserInfo = this.userInfo;
            this.updateUserInfo.userNickName =  this.updateUserInfo.sysUser.nickName;
            this.updateUserInfo.userPassword =  this.updateUserInfo.password;
            if(this.updateUserInfo.sex == '男') {
                this.updateUserInfo.sex = 1;
            } else {
                this.updateUserInfo.sex = 0;
            }
            const {data} = await this.$http.post("/info/update", this.updateUserInfo);
            if(data.data.update == 1) {
                this.$message({
                    message: '更新成功',
                    type: 'success'
                });
            } else {
                this.$message({
                    message: '更新失败',
                    type: 'error'
                });
            }
        },
        async applyUser() {
            this.applyUserInfo.id = this.userInfoCondition.userId;
            const {data} = await this.$http.post("/apply", this.applyUserInfo);
            this.$message.success('申请成功, 等待管理员审批');
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("userType");
            localStorage.removeItem("userId");
            this.$router.push("/login")
        }
    },

}
</script>

<style> 
</style>