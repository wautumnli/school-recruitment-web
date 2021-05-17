<template>
    <el-container style="height:100%;">
        <el-aside width="300px" style="height:100%">
                <el-menu
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            style="height:100%"
            active-text-color="#ffd04b">
            <el-menu-item index="0" style="font-size:30px;font-weight:400;text-align:center">
                <span slot="title">管理后台</span>
            </el-menu-item>
            <el-menu-item index="1" style="font-size:20px;font-weight:200;margin-top:4  0px">
                <i class="el-icon-setting"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="2" style="font-size:20px;font-weight:200">
                <i class="el-icon-setting"></i>
                <span slot="title">面经管理</span>
            </el-menu-item>
            <el-menu-item index="3" style="font-size:20px;font-weight:200">
                <i class="el-icon-setting"></i>
                <span slot="title">资料管理</span>
            </el-menu-item>
            <el-menu-item index="4" style="font-size:20px;font-weight:200">
                <i class="el-icon-setting"></i>
                <span slot="title">招聘信息管理</span>
            </el-menu-item>
            <el-menu-item index="5" style="font-size:20px;font-weight:200">
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
    name: 'Admin'
}
</script>

<style scoped>
</style>