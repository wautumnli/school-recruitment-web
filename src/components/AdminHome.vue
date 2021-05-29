<template>
    <div style="width:94%;margin-left:2%;margin-top:50px">
        <el-row :gutter="10">
            <el-col :span="6">
                <el-card header="系统拥有用户：">
                    <el-row style="text-align:center;margin-top:10px">
                        <span style="font-size:100px;color:green">{{userCount}}</span>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card header="系统拥有职位：">
                    <el-row style="text-align:center;margin-top:10px">
                        <span style="font-size:100px;color:#f8aba6">{{positionCount}}</span>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card header="系统拥有面经：">
                    <el-row style="text-align:center;margin-top:10px">
                        <span style="font-size:100px;color:#faa755">{{interviewCount}}</span>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card header="系统拥有文件：">
                    <el-row style="text-align:center;margin-top:10px">
                        <span style="font-size:100px;color:#6950a1">{{fileCount}}</span>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px" :gutter="20">
            <el-col :span="12">
                <el-card header="系统用户类型统计图">
                    <div id="echart1" style="height:350px"></div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card header="系统用户类型统计图">
                    <div id="echart2" style="height:350px"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-card header="招聘职位增加图" style="margin-top:20px">
                <div id="echart3" style="height:500px"></div>
            </el-card>
        </el-row>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'AdminHome',
    data() {
        return{
            echarts1: null,
            echarts2: null,
            echarts3: null,
            fileCount: 0,
            interviewCount: 0,
            userCount: 0,
            positionCount: 0,
            typeCount: []
        }
    },
    created() {
    },
    mounted() {
        this.initData();
        this.init1();
        this.init2();
        this.init3();
    },
    methods: {
        async initData() {
            const {data} = await this.$http.post("/admin/home");
            this.fileCount = data.data.fileCount;
            this.typeCount = data.data.typeCount;
            this.userCount = data.data.userCount;
            this.interviewCount = data.data.interviewCount;
            this.positionCount = data.data.positionCount;
        },
        init1() {
            this.echarts1 = echarts.init(document.getElementById("echart1"));
            this.echarts1.setOption({
                xAxis: {
                    type: 'category',
                    data: ['招聘用户', '求职用户']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [6, 5],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }]
            })
        },
        init2() {
            this.echarts2 = echarts.init(document.getElementById("echart2"));
            this.echarts2.setOption({
                title: {
                    text: '公司招聘数量',
                    subtext: '仅供参考',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '数量',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 1048, name: '京东'},
                            {value: 735, name: '百度'},
                            {value: 580, name: '阿里'},
                            {value: 484, name: '字节跳动'},
                            {value: 300, name: '苏宁'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        },
        init3() {
            var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
            var dateList = data.map(function (item) {
                return item[0];
            });
            var valueList = data.map(function (item) {
                return item[1];
            });
            this.echarts3 = echarts.init(document.getElementById("echart3"));
            this.echarts3.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [2, 1, 2, 3, 2, 4, 2],
                    type: 'line'
                }]
            })
        }
    }
}
</script>

<style scoped>

</style>