<template>
    <el-container style="height:100%;">
        <el-aside width="300px" style="height:100%">
            <el-menu
            default-active="2"
            background-color="#545c64"
            text-color="#fff"
            style="height:100%"
            active-text-color="#ffd04b"
            router
            >
            <el-menu-item style="font-size:30px;font-weight:400;text-align:center">
                <span slot="title">管理后台</span>
            </el-menu-item>
            <el-menu-item index="user" style="font-size:20px;font-weight:200;margin-top:4  0px">
                <i class="el-icon-setting"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="interview" style="font-size:20px;font-weight:200">
                <i class="el-icon-setting"></i>
                <span slot="title">面经管理</span>
            </el-menu-item>
            <el-menu-item index="file" style="font-size:20px;font-weight:200">
                <i class="el-icon-setting"></i>
                <span slot="title">文件管理</span>
            </el-menu-item>
            <el-menu-item index="school" style="font-size:20px;font-weight:200">
                <i class="el-icon-setting"></i>
                <span slot="title">招聘信息管理</span>
            </el-menu-item>
            <el-menu-item style="font-size:20px;font-weight:200" @click.native="logout">
                <i class="el-icon-setting"></i>
                <span slot="title">退出</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Admin',
    methods: {
        logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("userType");
            localStorage.removeItem("userId");
            this.$message.success("退出成功");
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
</style>