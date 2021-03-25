<template>
    <div class="main">
        <el-card shadow="hover" style="width:60%;margin-left:20%">
            <el-input placeholder="请输入职位或公司" v-model="input3" class="input-with-select" style="font-size:20px">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="font-size:20px" default-first-option>
                    <el-option label="校招" value="1"></el-option>
                    <el-option label="实习" value="2"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            input3: '',
            select: ''
        }
    }
}
</script>

<style>
.el-card .el-card__body {
    height: 100%;
    padding: 0;
}
.el-select .el-input{
    width: 130px !important;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.main {
    width: 80%;
    margin-left: 10%;
}
.el-card .el-input {
    height: 100%;
}
.el-card .el-input__inner {
    height: 100%;
}
.el-card {
    height: 60px;
}
</style>