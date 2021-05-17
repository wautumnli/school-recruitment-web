<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input placeholder="文件名称"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="发布人"></el-input>
                </el-col>
                <el-col :span="6">
                      <el-time-picker
                        is-range
                        v-model="value1"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                    </el-time-picker>
                </el-col>
                <el-col :span="2" :offset="1">
                    <el-button type="primary">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
        <el-table
            style="width:100%margin-left:20%;margin-top:20px;background:white"
            :data="tableData"
            border>
            <el-table-column
            prop="date"
            label="文件名称"
            width="200">
            </el-table-column>
            <el-table-column
            prop="name"
            label="文件类型"
            width="200">
            </el-table-column>
            <el-table-column
            prop="province"
            label="文件大小"
            width="200">
            </el-table-column>
            <el-table-column
            prop="city"
            label="发布人"
            width="200">
            </el-table-column>
            <el-table-column
            prop="address"
            label="发布时间"
            width="400">
            </el-table-column>
            <el-table-column
            label="操作"
            width="200">
            <template slot-scope="scope">
                <el-button type="text">删除</el-button>
                <el-button type="text">下载</el-button>
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
    name: 'AdminFile',
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
          date: 'Java知识汇总',
          name: 'pdf',
          province: '20M',
          city: '万秋里',
          address: '2021-05-10 15:32'
        }, {
          date: 'Java知识汇总',
          name: 'pdf',
          province: '20M',
          city: '万秋里',
          address: '2021-05-10 15:32'
        }, {
          date: 'Java知识汇总',
          name: 'pdf',
          province: '20M',
          city: '万秋里',
          address: '2021-05-10 15:32'
        }, {
          date: 'Java知识汇总',
          name: 'pdf',
          province: '20M',
          city: '万秋里',
          address: '2021-05-10 15:32'
        }, {
          date: 'Java知识汇总',
          name: 'pdf',
          province: '20M',
          city: '万秋里',
          address: '2021-05-10 15:32'
        }, {
          date: 'Java知识汇总',
          name: 'pdf',
          province: '20M',
          city: '万秋里',
          address: '2021-05-10 15:32'
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