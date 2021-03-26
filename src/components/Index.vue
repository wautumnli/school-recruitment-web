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
            active-text-color="#ffd04b">
                <el-menu-item index="0" @click="goToPage('/')" class="e-m-first"><img src="../assets/img/logo3.jpeg" style="max-width:100%"></el-menu-item>
                <el-menu-item index="1" @click="goToPage('/')">首页</el-menu-item>
                <el-menu-item index="2" @click="goToPage('/school')">校招</el-menu-item>
                <el-menu-item index="3" @click="goToPage('/pratice')">实习</el-menu-item>
                <el-menu-item index="4" @click="goToPage('/interview')">面经</el-menu-item>
                <el-menu-item index="5" @click="goToPage('/file')">资料</el-menu-item>
                <el-menu-item index="6" @click="goToPage('/login')" class="e-m-logon">登录/注册</el-menu-item>
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
    methods: {
        goToPage(page) {
            this.$router.push(page)
        }
    }
}
</script>

<style lang="less" scope>
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