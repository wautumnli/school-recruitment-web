<template>
    <div>
        <el-card style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="input" placeholder="请输入文件名称" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-date-picker
                        v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="6">
                    <el-button>搜索</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="danger" @click="dialogFormVisible1 = true">发布面试经历</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:40px;background:white"
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
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" @click="openFullScreen2">查看</el-button>
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
    name: 'UserInterview',
    data() {
        return{
            tableData: [{
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
            }, {
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: '京东面试成功',
                name: 'Java开发工程师',
                province: '京东',
                city: '32',
                address: '2021-05-10 16:42',
                zip: 200333
            }],
            input:'',
            dialogFormVisible1: true,
            form: {
                n1: 'Java开发工程师',
                n3: '京东集团',
                n2: 'java基础\n1  jvm内存结构 内存区域划分及存储内容\n2 对象在初始化之后 怎么内存分配到回收的过程\n3 minorgc 属于哪个区域的回收'
            }
        }
    },
    methods: {
         openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: '文件正在准备下载..',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    },
}
</script>

<style> 
</style>