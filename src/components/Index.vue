<template>
    <el-container>
        <!-- 头部 -->
        <el-header>
            <el-menu
            default-active="1"
            mode="horizontal"
            class="e-m"
            background-color="#202329"
            text-color="#fff"
            router
            active-text-color="#ffd04b">
                <el-menu-item class="e-m-first"><img src="../assets/img/logo3.jpeg" style="max-width:90%"></el-menu-item>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/school">校招</el-menu-item>
                <el-menu-item index="/interview">面经</el-menu-item>
                <el-menu-item index="/file">资料</el-menu-item>
                <el-menu-item style="position:absolute;right:20%">
                    <el-dropdown>
                        <span style="color:white">
                            {{username}}
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="goToPage('/user/info')">个人信息</el-dropdown-item>
                            <el-dropdown-item v-if="userType == 1" @click.native="goToPage('/user/school')">招聘信息</el-dropdown-item>
                            <el-dropdown-item @click.native="goToPage('/user/interview')">面经信息</el-dropdown-item>
                            <el-dropdown-item @click.native="goToPage('/user/file')">文件信息</el-dropdown-item>
                            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
                <!-- <el-menu-item @click="dialogFormVisible2 =true" class="e-m-logon" >登录</el-menu-item>
                <el-menu-item @click="dialogFormVisible1 =true" style="position:absolute;right:17%" >注册</el-menu-item> -->
            </el-menu>
        </el-header>
        <!-- 整体 -->
        <el-main>
            <!-- 子页面 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return{
            userView: false,
            username: '',
            userType: 1
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.username = localStorage.getItem("username");
            this.userType = localStorage.getItem("userType");
        },
        goToPage(page) {
            this.$router.push(page)
        },
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

<style lang="less" scoped>
.el-menu-item {
    font-size: 18px;
}
.e-m {
    .el-menu-item {
        margin-left: 1%;
    }
    .e-m-first {
        width: 10%;
        margin-left: 20%;
    }
}
.e-m-logon {
    position: absolute;
    right: 20%;
}
</style>