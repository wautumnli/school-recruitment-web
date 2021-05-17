<template>
    <div>
        <!-- 搜索区 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%">
            <el-input placeholder="请输入职位或公司" v-model="input" class="input-with-select" style="font-size:15px">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-card>
        <!-- 分类区 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:20px">
            <el-row>
                <el-col :span="8">
                    <span style="font-size:15px;color:#61687c">职业类型：</span>
                    <el-select
                        v-model="value2"
                        multiple
                        collapse-tags
                        placeholder="请选择 ">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <span style="font-size:15px;color:#61687c">招聘类型：</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
        </el-card>
        <!-- 信息区 -->
        <br>
        <br>
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:10px">
            <el-row style="padding:20px 20px 0px 20px">
                <el-col :span="20">
                    <el-row>
                        <el-col :span="10">
                            <el-link type="primary" style="font-size:22px" @click="dialogFormVisible1 = true">招聘职业名称  【北京】</el-link>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-link type="primary" style="font-size:22px">公司名称</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:10px">
                        <el-col :span="10">
                            <span style="font-size:20px;color:orange">10-20k</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">5-10年</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">本科</span>
                            <span style="margin-left:10px">
                                <el-tag size="mini">万秋里 | 公司职员</el-tag>
                            </span>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <span style="color:#61687c;font-size:15px">互联网</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">已上市</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">10000人以上</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <img src="https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0">
                </el-col>
            </el-row>
            <el-row style="padding:0px 20px 20px 20px">
                <el-tag type="info" style="margin-right:10px">IT</el-tag>
                <el-tag type="info" style="margin-right:10px">计算机</el-tag>
                <el-tag type="info" style="margin-right:10px">待遇不错</el-tag>
            </el-row>
        </el-card>
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:10px">
            <el-row style="padding:20px 20px 0px 20px">
                <el-col :span="20">
                    <el-row>
                        <el-col :span="10">
                            <el-link type="primary" style="font-size:22px">招聘职业名称  【北京】</el-link>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-link type="primary" style="font-size:22px">公司名称</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:10px">
                        <el-col :span="10">
                            <span style="font-size:20px;color:orange">10-20k</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">5-10年</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">本科</span>
                            <span style="margin-left:10px">
                                <el-tag size="mini">万秋里 | 公司职员</el-tag>
                            </span>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <span style="color:#61687c;font-size:15px">互联网</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">已上市</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">10000人以上</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <img src="https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0">
                </el-col>
            </el-row>
            <el-row style="padding:0px 20px 20px 20px">
                <el-tag type="info" style="margin-right:10px">IT</el-tag>
                <el-tag type="info" style="margin-right:10px">计算机</el-tag>
                <el-tag type="info" style="margin-right:10px">待遇不错</el-tag>
            </el-row>
        </el-card>
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:10px">
            <el-row style="padding:20px 20px 0px 20px">
                <el-col :span="20">
                    <el-row>
                        <el-col :span="10">
                            <el-link type="primary" style="font-size:22px">招聘职业名称  【北京】</el-link>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-link type="primary" style="font-size:22px">公司名称</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:10px">
                        <el-col :span="10">
                            <span style="font-size:20px;color:orange">10-20k</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">5-10年</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">本科</span>
                            <span style="margin-left:10px">
                                <el-tag size="mini">万秋里 | 公司职员</el-tag>
                            </span>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <span style="color:#61687c;font-size:15px">互联网</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">已上市</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">10000人以上</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <img src="https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0">
                </el-col>
            </el-row>
            <el-row style="padding:0px 20px 20px 20px">
                <el-tag type="info" style="margin-right:10px">IT</el-tag>
                <el-tag type="info" style="margin-right:10px">计算机</el-tag>
                <el-tag type="info" style="margin-right:10px">待遇不错</el-tag>
            </el-row>
        </el-card>
        <el-card shadow="hover" style="width:60%;margin-left:20%;margin-top:10px">
            <el-row style="padding:20px 20px 0px 20px">
                <el-col :span="20">
                    <el-row>
                        <el-col :span="10">
                            <el-link type="primary" style="font-size:22px">招聘职业名称  【北京】</el-link>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-link type="primary" style="font-size:22px">公司名称</el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:10px">
                        <el-col :span="10">
                            <span style="font-size:20px;color:orange">10-20k</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">5-10年</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">本科</span>
                            <span style="margin-left:10px">
                                <el-tag size="mini">万秋里 | 公司职员</el-tag>
                            </span>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <span style="color:#61687c;font-size:15px">互联网</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">已上市</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                            <span style="margin-left:10px;color:#61687c;font-size:15px">10000人以上</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <img src="https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0">
                </el-col>
            </el-row>
            <el-row style="padding:0px 20px 20px 20px">
                <el-tag type="info" style="margin-right:10px">IT</el-tag>
                <el-tag type="info" style="margin-right:10px">计算机</el-tag>
                <el-tag type="info" style="margin-right:10px">待遇不错</el-tag>
            </el-row>
        </el-card>
        <div class="block" style="text-align:center;margin-top:10px">
            <el-pagination
            :page-size="4"
            layout="total, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div>
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
    name: 'School',
    data() {
        return{
            select: '',
            input: '',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            value2: [],
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