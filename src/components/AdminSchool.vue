<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-input placeholder="职位"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="公司"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="工资范围单位k 如10-20"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="发布人"></el-input>
                </el-col>
                <el-col :span="4">
                      <el-time-picker
                        is-range
                        v-model="value1"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                    </el-time-picker>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-col :span="4">
                    <el-select v-model="value" clearable placeholder="请选择招聘类型">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:20px">
        <el-table
            style="width:100%margin-left:20%;margin-top:40px;background:white"
            :data="tableData"
            border>
            <el-table-column
            prop="date"
            label="职位"
            width="170">
            </el-table-column>
            <el-table-column
            prop="name"
            label="公司"
            width="150">
            </el-table-column>
            <el-table-column
            prop="province"
            label="工资"
            width="150">
            </el-table-column>
            <el-table-column
            prop="city"
            label="学历"
            width="150">
            </el-table-column>
            <el-table-column
            prop="address"
            label="招聘类型"
            width="200">
            </el-table-column>
            <el-table-column
            prop="n2"
            label="发布时间"
            width="200">
            </el-table-column>
            <el-table-column
            prop="n1"
            label="发布人"
            width="210">
            </el-table-column>
            <el-table-column
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" @click="dialogFormVisible1 = true">查看</el-button>
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
        </el-card>
        <el-dialog title="招聘内容" :visible.sync="dialogFormVisible1" center width="900px">
            <el-form :model="form">
                <el-form-item label="职位" :label-width="'100px'">
                    <el-input v-model="form.n1" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="公司" :label-width="'100px'">
                    <el-input v-model="form.n3" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="工资" :label-width="'100px'">
                    <el-input v-model="form.n4" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="学历" :label-width="'100px'">
                    <el-input v-model="form.n5" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="招聘类型" :label-width="'100px'">
                    <el-input v-model="form.n6" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="'100px'">
                    <el-input v-model="form.n7" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="详细内容" :label-width="'100px'">
                    <el-input v-model="form.n2" autocomplete="off" readonly type="textarea"
  :autosize="{ minRows: 1, maxRows: 10}"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'AdminSchool',
    data(){
        return{
                    options: [{
          value: '选项1',
          label: '校招'
        }, {
          value: '选项2',
          label: '实习'
        }],
        value: '',
        tableData: [{
          date: 'Java开发工程师',
          name: '京东集团',
          province: '10-20k',
          city: '本科',
          address: '校招',
          n1: '万秋里',
          n2:'2021-05-10 15:32'
        }, {
          date: 'Java开发工程师',
          name: '京东集团',
          province: '10-20k',
          city: '本科',
          address: '校招',
          n1: '万秋里',
          n2:'2021-05-10 15:32'
        }, {
          date: 'Java开发工程师',
          name: '京东集团',
          province: '10-20k',
          city: '本科',
          address: '校招',
          n1: '万秋里',
          n2:'2021-05-10 15:32'
        }, {
           date: 'Java开发工程师',
          name: '京东集团',
          province: '10-20k',
          city: '本科',
          address: '校招',
          n1: '万秋里',
          n2:'2021-05-10 15:32'
        }, {
          date: 'Java开发工程师',
          name: '京东集团',
          province: '10-20k',
          city: '本科',
          address: '校招',
          n1: '万秋里',
          n2:'2021-05-10 15:32'
        }, {
          date: 'Java开发工程师',
          name: '京东集团',
          province: '10-20k',
          city: '本科',
          address: '校招',
          n1: '万秋里',
          n2:'2021-05-10 15:32'
        }],
        dialogFormVisible1: false,
            form: {
                n1: 'Java开发',
                n2:'1、参与业务线后端服务的设计、开发、优化等研发工作，保证产品的质量和开发进度\n2、和产品等团队合作，确保前后端模块的协同工作;\n3、参与研究新兴技术，对产品进行持续优化。',
                n3:'京东集团',
                n4:'10-23k',
                n5:'本科',
                n6:'校招',
                n7:'wwwtest@163.com'
            }
        }
    }
}
</script>

<style scoped>

</style>