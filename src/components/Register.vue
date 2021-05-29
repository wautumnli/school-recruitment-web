<template>
    <div>
        <el-card style="margin-top:15%;margin-left:33%;width:30%">
            <el-row>
                <div style="font-size:30px;text-align:center">注册</div>
            </el-row>
            <el-row style="margin-top:20px">
                <el-input v-model="userInfo.username" placeholder="请输入账号"></el-input>
            </el-row>
            <el-row style="margin-top:10px">
                <el-input v-model="userInfo.userPassword" placeholder="请输入密码"></el-input>
            </el-row>
            <el-row style="margin-top:10px">
                <el-input v-model="userInfo.userNickName" placeholder="昵称"></el-input>
            </el-row>
            <el-row style="margin-top:10px">
                <el-select v-model="userInfo.userType" clearable placeholder="请选择用户类型">
                    <el-option label="招聘用户" value="1"></el-option>
                    <el-option label="求职用户" value="0"></el-option>
                </el-select>
            </el-row>
            <el-row style="margin-top:10px">
                <el-col :offset="15" :span="4">
                    <el-button type="danger" @click="addUser">注册</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button type="success" @click="gotoPage">登录</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            userInfo: {}
        }
    },
    methods: {
        gotoPage() {
            this.$router.push('login');
        },
        async addUser() {
            const {data} = await this.$http.post("/info/add", this.userInfo);
            if(data.data.add == 1) {
                this.$message({
                    message: '注册成功',
                    type: 'success'
                });
                this.$router.push("/login");
            } else {
                this.$message({
                    message: '注册失败',
                    type: 'error'
                });
            }
        }
    },
}
</script>

<style scoped>
</style>