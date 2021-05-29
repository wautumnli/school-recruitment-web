<template>
    <div>
        <el-card style="margin-top:15%;margin-left:33%;width:30%">
            <el-row>
                <div style="font-size:30px;text-align:center">登录</div>
            </el-row>
            <el-row style="margin-top:20px">
                <el-input v-model="userInfo.username" placeholder="请输入账号"></el-input>
            </el-row>
            <el-row style="margin-top:10px">
                <el-input v-model="userInfo.password" type="password" placeholder="请输入密码"></el-input>
            </el-row>
            <el-row style="margin-top:10px">
                <el-select v-model="userInfo.loginType" clearable placeholder="请选择登录">
                    <el-option label="客户端" value="1"></el-option>
                    <el-option label="管理端" value="0"></el-option>
                </el-select>
            </el-row>
            <el-row style="margin-top:10px">
                <el-col :offset="15" :span="4">
                    <el-button type="danger" @click="gotoPage">注册</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button type="success" @click="login">登录</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Logon',
    data() {
        return {
            userInfo: {}
        }
    },
    methods: {
        async login() {
            const {data} = await this.$http.post("/login", this.userInfo);
            if (data.code != 200) {
                this.$message.error(data.message);
                return;
            }
            if (data.code == 200) {
                localStorage.setItem("token", data.data.token);
                localStorage.setItem("username", data.data.username);
                localStorage.setItem("userType", data.data.userType);
                localStorage.setItem("userId", data.data.userId);
            }
            this.$message.success('登录成功');
            if(data.data.userType ==3 ) {
                this.$router.push("/admin/home");
            }else {
                this.$router.push("/");
            }

        },
        gotoPage() {
            this.$router.push('regist');
        }
    },
}
</script>

<style scoped>
</style>