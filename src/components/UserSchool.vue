<template>
    <div>
        <el-card style="width:60%;margin-left:20%">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="input" placeholder="请输入用户名称" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="input" placeholder="请输入文件名称" style="widht:200px"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button>搜索</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:20px;background:white"
            :data="tableData"
            border>
            <el-table-column
            prop="date"
            label="文件名称"
            width="170">
            </el-table-column>
            <el-table-column
            prop="name"
            label="文件类型"
            width="150">
            </el-table-column>
            <el-table-column
            prop="province"
            label="文件大小"
            width="150">
            </el-table-column>
            <el-table-column
            prop="city"
            label="发布人"
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
                <el-button type="text" size="small" @click="openFullScreen2">下载</el-button>
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
    </div>
</template>

<script>
export default {
    name: 'UserSchool',
    data() {
        return{
            tableData: [{
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
            },, {
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
                }, {
                date: 'Java知识汇总',
                name: 'pdf',
                province: '2.7M',
                city: '万秋里',
                address: '2021-05-10 16:42',
                zip: 200333
            }],
            input:''
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