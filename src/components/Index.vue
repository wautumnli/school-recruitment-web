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
                <el-menu-item index="0" @click="goToPage('/')" class="e-m-first"><img src="../assets/img/logo3.jpeg" style="max-width:90%"></el-menu-item>
                <el-menu-item index="1" @click="goToPage('/')">首页</el-menu-item>
                <el-menu-item index="2" @click="goToPage('/school')">校招</el-menu-item>
                <el-menu-item index="4" @click="goToPage('/interview')">面经</el-menu-item>
                <el-menu-item index="5" @click="goToPage('/file')">资料</el-menu-item>
                <el-menu-item style="position:absolute;right:20%">
                    <el-dropdown>
                        <span style="color:white">
                            万秋里
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click="dialogFormVisible3 = true">个人信息</el-dropdown-item>
                            <el-dropdown-item>招聘信息</el-dropdown-item>
                            <el-dropdown-item>面经信息</el-dropdown-item>
                            <el-dropdown-item>文件信息</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
                <!-- <el-menu-item @click="dialogFormVisible2 =true" class="e-m-logon" >登录</el-menu-item>
                <el-menu-item @click="dialogFormVisible1 =true" style="position:absolute;right:17%" >注册</el-menu-item> -->
            </el-menu>
        </el-header>
        <!-- 注册区 -->
        <el-dialog title="注册" :visible.sync="dialogFormVisible1" center width="600px">
            <el-form :model="form">
                <el-form-item label="账号" :label-width="'100px'">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="'100px'">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="'100px'">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="昵称" :label-width="'100px'">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="账号类型" :label-width="'100px'">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="求职用户" value="shanghai"></el-option>
                    <el-option label="招聘用户" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 登录区 -->
        <el-dialog title="登录" :visible.sync="dialogFormVisible2" center width="500px">
            <el-form :model="form2">
                <el-form-item label="账号" :label-width="'100px'">
                    <el-input v-model="form2.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="'100px'">
                    <el-input v-model="form2.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="个人信息" :visible.sync="dialogFormVisible3" width="500px">
            <el-form :model="form3">
                <el-form-item label="昵称" :label-width="'100px'">
                    <el-input v-model="form3.n1" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="账号" :label-width="'100px'">
                    <el-input v-model="form3.n2" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="'100px'">
                    <el-input v-model="form3.n3" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年级" :label-width="'100px'">
                    <el-input v-model="form3.n4" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学院" :label-width="'100px'">
                    <el-input v-model="form3.n5" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="班级" :label-width="'100px'">
                    <el-input v-model="form3.n6" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="'100px'">
                    <el-select v-model="form.n7" placeholder="请选择性别">
                        <el-option label="男" value="shanghai"></el-option>
                        <el-option label="女" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible3 = false">修 改</el-button>
            </div>
        </el-dialog>
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
            dialogFormVisible1: false,
            dialogFormVisible2: false,
            dialogFormVisible3: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            form2: {
                name: ''
            },
            form3: {
                n2: 'wanqiuli'
            }
        }
    },
    methods: {
        goToPage(page) {
            this.$router.push(page)
        },
        s() {

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