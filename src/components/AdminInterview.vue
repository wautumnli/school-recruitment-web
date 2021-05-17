<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-input placeholder="面经标题名称"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="公司"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="职位"></el-input>
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
            label="标题"
            width="170">
            </el-table-column>
            <el-table-column
            prop="name"
            label="职位"
            width="150">
            </el-table-column>
            <el-table-column
            prop="province"
            label="公司"
            width="150">
            </el-table-column>
            <el-table-column
            prop="city"
            label="热度"
            width="150">
            </el-table-column>
            <el-table-column
            prop="address"
            label="发布时间"
            width="320">
            </el-table-column>
            <el-table-column
            prop="n1"
            label="发布人"
            width="320">
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
                <el-form-item label="招聘职位" :label-width="'100px'">
                    <el-input v-model="form.n1" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="公司" :label-width="'100px'">
                    <el-input v-model="form.n3" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="详细内容" :label-width="'100px'">
                    <el-input v-model="form.n2" autocomplete="off" readonly type="textarea"
  :autosize="{ minRows: 1, maxRows: 100}"></el-input>
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
    name: 'AdminInterview',
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
          date: '京东1面',
          name: 'Java开发工程师',
          province: '京东集团',
          city: '32',
          address: '2021-05-10 15:32',
          n1: '万秋里'
        }, {
          date: '京东1面',
          name: 'Java开发工程师',
          province: '京东集团',
          city: '32',
          address: '2021-05-10 15:32',
          n1: '万秋里'
        }, {
          date: '京东1面',
          name: 'Java开发工程师',
          province: '京东集团',
          city: '32',
          address: '2021-05-10 15:32',
          n1: '万秋里'
        }, {
          date: '京东1面',
          name: 'Java开发工程师',
          province: '京东集团',
          city: '32',
          address: '2021-05-10 15:32',
          n1: '万秋里'
        }, {
          date: '京东1面',
          name: 'Java开发工程师',
          province: '京东集团',
          city: '32',
          address: '2021-05-10 15:32',
          n1: '万秋里'
        }, {
          date: '京东1面',
          name: 'Java开发工程师',
          province: '京东集团',
          city: '32',
          address: '2021-05-10 15:32',
          n1: '万秋里'
        }],
        dialogFormVisible1: false,
                    form: {
                n1: 'Java开发工程师',
                n3: '京东集团',
                n2: 'java基础\n1  jvm内存结构 内存区域划分及存储内容\n2 对象在初始化之后 怎么内存分配到回收的过程\n3 minorgc 属于哪个区域的回收'
            }
        }
    }
}
</script>

<style scoped>

</style>