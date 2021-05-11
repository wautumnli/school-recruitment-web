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
            value2: []
        }
    }
}
</script>

<style scoped> 
</style>