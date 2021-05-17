<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="2" style="margin-top:5px">
                    <span style="font-size:20px;">基础信息</span>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入账号"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入昵称"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入邮箱"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px" :gutter="20">
                <el-col :span="2" style="margin-top:5px">
                    <span style="font-size:20px;">详细信息</span>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入年级"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入班级"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入学院"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px" :gutter="20">
                <el-col :span="2" style="margin-top:5px">
                    <span style="font-size:20px;">操作</span>
                </el-col>
                <el-col :span="4">
                      <el-select v-model="value" placeholder="请选择用户状态">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary">搜索</el-button>
                </el-col>
                <el-col :span="3" :offset="13">
                    <el-button type="danger" @click="dialogFormVisible1 = true">添加新用户</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
                    <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="账号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="昵称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="province"
            label="邮箱"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="年级"
            width="140">
            </el-table-column>
            <el-table-column
            prop="address"
            label="班级"
            width="320">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="学院"
            width="140">
            </el-table-column>
            <el-table-column
            prop="n1"
            label="用户类型"
            width="140">
            </el-table-column>
            <el-table-column
            prop="n2"
            label="用户状态"
            width="140">
            <template slot-scope="scope">
                <el-tag :type="scope.row.n2 == '已审核'?'success':'danger'">{{scope.row.n2}}</el-tag>
            </template>
            </el-table-column>
            <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button type="text">审核</el-button>
                <el-button type="text">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
                <div style="text-align:center;margin-top:20px">
            <el-pagination
            :page-size="4"
            layout="total, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div>
                <el-dialog title="添加用户" :visible.sync="dialogFormVisible1" center width="600px">
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
                <el-button type="primary" @click="dialogFormVisible1 = false">添 加</el-button>
            </div>
        </el-dialog>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'AdminUser',
    data(){
        return{
                    options: [{
          value: '选项1',
          label: '已审核'
        }, {
          value: '选项2',
          label: '未审核'
        }],
        value: '',
        tableData: [{
          date: 'wanqiuli',
          name: '万秋里',
          province: 'wwtest@163.com',
          city: '2017',
          address: '软件工程卓越计划班',
          zip: '计算机学院',
          n1:'招聘用户',
          n2:'已审核'
        }, {
          date: 'wanqiuli',
          name: '万秋里',
          province: 'wwtest@163.com',
          city: '2017',
          address: '软件工程卓越计划班',
          zip: '计算机学院',
          n1:'招聘用户',
          n2:'已审核'
        }, {
          date: 'wanqiuli',
          name: '万秋里',
          province: 'wwtest@163.com',
          city: '2017',
          address: '软件工程卓越计划班',
          zip: '计算机学院',
          n1:'招聘用户',
          n2:'已审核'
        }, {
          date: 'wanqiuli',
          name: '万秋里',
          province: 'wwtest@163.com',
          city: '2017',
          address: '软件工程卓越计划班',
          zip: '计算机学院',
          n1:'招聘用户',
          n2:'未审核'
        }, {
          date: 'wanqiuli',
          name: '万秋里',
          province: 'wwtest@163.com',
          city: '2017',
          address: '软件工程卓越计划班',
          zip: '计算机学院',
          n1:'招聘用户',
          n2:'未审核'
        }, {
          date: 'wanqiuli',
          name: '万秋里',
          province: 'wwtest@163.com',
          city: '2017',
          address: '软件工程卓越计划班',
          zip: '计算机学院',
          n1:'招聘用户',
          n2:'未审核'
        }],
        dialogFormVisible1: false,
        form: {

        }
        }
    }
}
</script>

<style scoped>

</style>