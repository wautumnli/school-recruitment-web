<template>
    <div>
        <!-- 分类 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%">
            <el-row>
                <el-col :span="8">
                    <span style="color:#61687c;font-size:15px">招聘职业：</span>
                    <el-select v-model="value" clearable placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="7">
                    <span style="color:#61687c;font-size:15px">公司：</span>
                    <el-select v-model="value" clearable placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-button type="primary">搜索</el-button>
            </el-row>
        </el-card>

        <!-- 内容 -->
                <el-card style="width:60%;margin-left:20%;margin-top:10px">
            <el-row>
                <el-link style="font-size:22px;" type="primary">面经标题</el-link>
            </el-row>
            <el-row style="margin-top:10px">
                <span style="font-size:15px;color:rgb(32, 35, 41)">发布人</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">2020-10-21</span>
                <el-badge :value="12" style="margin-left:10px;color:#61687c;font-size:15px;float:right">
                    <el-button size="mini" type="primary">点赞</el-button>
                </el-badge>
            </el-row>
            <el-row style="margin-top:10px">
                <el-tag type="info" size="mini">职位</el-tag>
                <el-tag type="info" size="mini" style="margin-left:10px">公司</el-tag>
            </el-row>
        </el-card>

                        <el-card style="width:60%;margin-left:20%;margin-top:10px">
            <el-row>
                <el-link style="font-size:22px;" type="primary">面经标题</el-link>
            </el-row>
            <el-row style="margin-top:10px">
                <span style="font-size:15px;color:rgb(32, 35, 41)">发布人</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">2020-10-21</span>
                <el-badge :value="12" style="margin-left:10px;color:#61687c;font-size:15px;float:right">
                    <el-button size="mini" type="primary">点赞</el-button>
                </el-badge>
            </el-row>
            <el-row style="margin-top:10px">
                <el-tag type="info" size="mini">职位</el-tag>
                <el-tag type="info" size="mini" style="margin-left:10px">公司</el-tag>
            </el-row>
        </el-card>

                        <el-card style="width:60%;margin-left:20%;margin-top:10px">
            <el-row>
                <el-link style="font-size:22px;" type="primary">面经标题</el-link>
            </el-row>
            <el-row style="margin-top:10px">
                <span style="font-size:15px;color:rgb(32, 35, 41)">发布人</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">2020-10-21</span>
                <el-badge :value="12" style="margin-left:10px;color:#61687c;font-size:15px;float:right">
                    <el-button size="mini" type="primary">点赞</el-button>
                </el-badge>
            </el-row>
            <el-row style="margin-top:10px">
                <el-tag type="info" size="mini">职位</el-tag>
                <el-tag type="info" size="mini" style="margin-left:10px">公司</el-tag>
            </el-row>
        </el-card>

                        <el-card style="width:60%;margin-left:20%;margin-top:10px">
            <el-row>
                <el-link style="font-size:22px;" type="primary">面经标题</el-link>
            </el-row>
            <el-row style="margin-top:10px">
                <span style="font-size:15px;color:rgb(32, 35, 41)">发布人</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">2020-10-21</span>
                <el-badge :value="12" style="margin-left:10px;color:#61687c;font-size:15px;float:right">
                    <el-button size="mini" type="primary">点赞</el-button>
                </el-badge>
            </el-row>
            <el-row style="margin-top:10px">
                <el-tag type="info" size="mini">职位</el-tag>
                <el-tag type="info" size="mini" style="margin-left:10px">公司</el-tag>
            </el-row>
        </el-card>

                        <el-card style="width:60%;margin-left:20%;margin-top:10px">
            <el-row>
                <el-link style="font-size:22px;" type="primary">面经标题</el-link>
            </el-row>
            <el-row style="margin-top:10px">
                <span style="font-size:15px;color:rgb(32, 35, 41)">发布人</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">|</span>
                <span style="margin-left:10px;color:#61687c;font-size:15px">2020-10-21</span>
                <el-badge :value="12" style="margin-left:10px;color:#61687c;font-size:15px;float:right">
                    <el-button size="mini" type="primary">点赞</el-button>
                </el-badge>
            </el-row>
            <el-row style="margin-top:10px">
                <el-tag type="info" size="mini">职位</el-tag>
                <el-tag type="info" size="mini" style="margin-left:10px">公司</el-tag>
            </el-row>
        </el-card>

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
    name: 'Interview',
    data() {
        return{
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
        value: ''
        }
    }
}
</script>

<style scoped>
</style>