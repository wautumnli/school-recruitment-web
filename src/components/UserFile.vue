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
                <el-col :span="7">
                    <el-button>搜索</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="danger" @click="dialogFormVisible1 = true">文件上传</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-table
            style="width:1100px;margin-left:20%;margin-top:50px;background:white"
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
            prop="address"
            label="发布时间"
            width="340">
            </el-table-column>
            <el-table-column
            label="操作"
            width="160">
            <template slot-scope="scope">
                <el-button type="text" @click="openFullScreen2">删除</el-button>
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
        <el-dialog title="文件上传" :visible.sync="dialogFormVisible1" center width="500px">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">文件大小不超过10mb</div>
            </el-upload>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'UserFile',
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
            input:'',
            value1:'',
            dialogFormVisible1: false,
            fileList: [{name: 'Java知识点汇总.pdf', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '并发编程艺术.pdf', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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