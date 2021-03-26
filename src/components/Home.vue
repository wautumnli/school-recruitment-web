<template>
    <div class="main">
        <!-- 搜索区 -->
        <el-card shadow="hover" style="width:60%;margin-left:20%">
            <el-input placeholder="请输入职位或公司" v-model="input3" class="input-with-select" style="font-size:15px">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="font-size:15px" default-first-option>
                    <el-option label="校招" value="1"></el-option>
                    <el-option label="实习" value="2"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-card>
        <!-- 校招区域 -->
        <el-divider>校招</el-divider>
        <div class="r-school">
            <el-card class="r-school-t">
                <el-menu mode="horizontal" default-active="1">
                    <el-menu-item index="1">IT</el-menu-item>
                    <el-menu-item index="2">计算机</el-menu-item>
                    <el-menu-item index="3">物流</el-menu-item>
                    <el-menu-item index="4">金融</el-menu-item>
                    <el-menu-item index="5">医疗</el-menu-item>
                    <el-menu-item index="6">供应链</el-menu-item>
                    <el-menu-item index="7">娱乐</el-menu-item>
                    <el-menu-item index="8">传媒</el-menu-item>
                    <el-menu-item index="9">法律</el-menu-item>
                </el-menu>
            </el-card>
            <el-row :gutter="10" class="c-card">
                <el-col :span="8" v-for="item in zpSchoolList" :key="item.id">
                    <el-card class="c-body">
                        <div class="c-inner">
                            <el-row>
                                <el-col :span="16">
                                    <el-link type="info" class="c-name">
                                        {{item.jobName}}
                                    </el-link>
                                </el-col>
                                <el-col :span="8">
                                    <span class="c-price">{{item.price}}</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="50">
                                <el-col :span="3">
                                    <el-tag type="success">{{item.address}}</el-tag>
                                </el-col>
                                <el-col :span="3">
                                    <el-tag type="primary">{{item.edu}}</el-tag>
                                </el-col>
                                <el-col :span="3" :offset="12">
                                    <el-tag type="danger">{{item.type}}</el-tag>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row class="company">
                                <el-col :span="5">
                                    <img style="width:70%" :src="item.src">
                                </el-col>
                                <el-col :span="8" style="margin-top:15px;">
                                    <el-link type="info">{{item.cname}}</el-link>
                                </el-col>
                                <el-col :span="5" style="margin-top:15px;position:absolute;right:40px">
                                    {{item.ctype}}
                                </el-col>
                                <el-col :span="3" style="margin-top:15px;position:absolute;right:0">
                                    {{item.cstate}}
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px;text-align:center">
                <el-button type="primary" class="more">查看更多</el-button>
            </el-row>
        </div>
        <!-- 实习区域 -->
        <el-divider>实习</el-divider>
        <div class="r-pratice">
            <el-row :gutter="10" class="c-card">
                <el-col :span="8" v-for="item in zpPraticeList" :key="item.id">
                    <el-card class="c-body">
                        <div class="c-inner">
                            <el-row>
                                <el-col :span="16">
                                    <el-link type="info" class="c-name">
                                        {{item.jobName}}
                                    </el-link>
                                </el-col>
                                <el-col :span="8">
                                    <span class="c-price">{{item.price}}</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="50">
                                <el-col :span="3">
                                    <el-tag type="success">{{item.address}}</el-tag>
                                </el-col>
                                <el-col :span="3">
                                    <el-tag type="primary">{{item.edu}}</el-tag>
                                </el-col>
                                <el-col :span="3" :offset="12">
                                    <el-tag type="danger">{{item.type}}</el-tag>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row class="company">
                                <el-col :span="5">
                                    <img style="width:70%" :src="item.src">
                                </el-col>
                                <el-col :span="8" style="margin-top:15px;">
                                    <el-link type="info">{{item.cname}}</el-link>
                                </el-col>
                                <el-col :span="5" style="margin-top:15px;position:absolute;right:40px">
                                    {{item.ctype}}
                                </el-col>
                                <el-col :span="3" style="margin-top:15px;position:absolute;right:0">
                                    {{item.cstate}}
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px;text-align:center">
                <el-button type="primary" class="more">查看更多</el-button>
            </el-row>
        </div>
        <!-- 热门企业 -->
        <el-divider>热门企业</el-divider>
        <div class="r-company">
            <el-row :gutter="20" class="c-card">
                <el-col :span="6" v-for="item in zpCompany" :key="item.id" style="margin-top:20px">
                    <el-card class="c-company-body">
                        <div class="c-inner">
                            <el-row style="text-align:center">
                                <img :src="item.src">
                            </el-row>
                            <el-row style="text-align:center;margin-top:10px">
                                <el-link style="font-size:20px">{{item.cname}}</el-link>
                            </el-row>
                            <el-row style="text-align:center;margin-top:20px;font-size:12px">
                                <span style="color: #8d92a1;">{{item.ctype}}</span>
                                <span style="color: #8d92a1;margin-left:10px">{{item.cstate}}</span>
                            </el-row>
                            <el-row style="text-align:center;margin-top:20px">
                                <el-button plain style="color:#8d92a1;font-size:10px">
                                    <span style="color:#fd7240;">{{item.jobNum}}</span>个职位招聘
                                </el-button>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px;text-align:center">
                <el-button type="primary" class="more">查看更多</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            input3: '',
            select: '',
            zpSchoolList: [
                { id: 1, jobName: "Java开发工程师", price: "16-25k", address: "北京", edu: "本科", type: "校招", cname: "京东集团", ctype: "零售", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 2, jobName: "高级IOS开发工程师", price: "20-40k", address: "北京", edu: "硕士", type: "校招", cname: "网易杭州", ctype: "互联网", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/brand/92025.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 3, jobName: "数据仓库工程师", price: "25-45k", address: "北京", edu: "硕士", type: "校招", cname: "理性汽车", ctype: "智能硬件", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190918/11a8f3478bf1ed2878b5e9e3a0db2dcf89917d8a223eca14e297f318ebe8963b_s.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 4, jobName: "效绩管理(MJ004101)", price: "25-40k", address: "北京", edu: "本科", type: "校招", cname: "松果出行", ctype: "移动互联网", cstate: "C轮", src: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180424/d131dbb57fafa07e8d8a5babdc86de30baf241ac2dd9bc11f6021b9b76fdd848.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 5, jobName: "腾讯视频海外产品经理", price: "25-50k·16薪", address: "深圳", edu: "硕士", type: "校招", cname: "腾讯", ctype: "互联网", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/20200430/4204e9c9f200b00b77fb59d093acd281be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 6, jobName: "数据分析工程师-供应链研发", price: "25-50k·14薪", address: "北京", edu: "硕士", type: "校招", cname: "网易杭州", ctype: "完美世界", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/20200402/8d53f00b8309c5edefc54538c0a2c675be1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_60,limit_0" }
            ],
            zpPraticeList: [
                { id: 1, jobName: "Java开发工程师", price: "16-25k", address: "北京", edu: "本科", type: "实习", cname: "京东集团", ctype: "零售", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 2, jobName: "高级IOS开发工程师", price: "20-40k", address: "北京", edu: "硕士", type: "实习", cname: "网易杭州", ctype: "互联网", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/brand/92025.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 3, jobName: "数据仓库工程师", price: "25-45k", address: "北京", edu: "硕士", type: "实习", cname: "理性汽车", ctype: "智能硬件", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190918/11a8f3478bf1ed2878b5e9e3a0db2dcf89917d8a223eca14e297f318ebe8963b_s.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 4, jobName: "效绩管理(MJ004101)", price: "25-40k", address: "北京", edu: "本科", type: "实习", cname: "松果出行", ctype: "移动互联网", cstate: "C轮", src: "https://img.bosszhipin.com/beijin/mcs/chatphoto/20180424/d131dbb57fafa07e8d8a5babdc86de30baf241ac2dd9bc11f6021b9b76fdd848.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 5, jobName: "腾讯视频海外产品经理", price: "25-50k·16薪", address: "深圳", edu: "硕士", type: "实习", cname: "腾讯", ctype: "互联网", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/20200430/4204e9c9f200b00b77fb59d093acd281be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_60,limit_0" },
                { id: 6, jobName: "数据分析工程师-供应链研发", price: "25-50k·14薪", address: "北京", edu: "硕士", type: "实习", cname: "网易杭州", ctype: "完美世界", cstate: "已上市", src: "https://img.bosszhipin.com/beijin/mcs/bar/20200402/8d53f00b8309c5edefc54538c0a2c675be1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_60,limit_0" }
            ],
            zpCompany: [
                { id: 1, cname: "京东集团", ctype: "电子商务", cstate: "已上市", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/mcs/bar/20191129/3cdf5ba2149e309b38868b62ae9c22cabe1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0" },
                { id: 2, cname: "好未来", ctype: "互联网", cstate: "已上市", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/mcs/bar/20201205/34de43bc4a6dfa1dee040f5551a71a60be1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_90,limit_0" },
                { id: 3, cname: "滴滴", ctype: "移动互联网", cstate: "D轮以上", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/mcs/bar/20201205/25965fbe2c0440e760df2b6a6b81d7c2be1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_90,limit_0" },
                { id: 4, cname: "美团点评", ctype: "O2O", cstate: "已上市", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/upload/com/logo/20201107/9a15865bc32a3924b33b20a01e6316ea2d08c50abcbdc33aec2214bd902b556f.png?x-oss-process=image/resize,w_90,limit_0" },
                { id: 5, cname: "华为", ctype: "计算机软件", cstate: "不需要融资", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/upload/com/logo/20200429/8f64c9d0b30a53c434b26799ca78966cec9b49ecaf1604cb263748f03d5c2b0f.png?x-oss-process=image/resize,w_90,limit_0" },
                { id: 6, cname: "腾讯", ctype: "互联网", cstate: "已上市", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/mcs/bar/20200430/4204e9c9f200b00b77fb59d093acd281be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0" },
                { id: 7, cname: "Lianjia.链家", ctype: "地产中介", cstate: "C轮", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/mcs/bar/20191216/3e371e809d4951177b447e957f9f78d4be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_90,limit_0"},
                { id: 8, cname: "百度", ctype: "互联网", cstate: "已上市", jobNum: 1024, src: "https://img.bosszhipin.com/beijin/logo/0e0d441a2f93a236536f20e8277bf4dbbe1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_90,limit_0"}
            ]
        }
    }
}
</script>

<style>
.el-card .el-card__body {
    height: 100%;
    padding: 0;
}
.el-select .el-input{
    width: 130px !important;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.main {
    width: 70%;
    margin-left: 15%;
}
.el-card {
    height: 45px;
}
.el-divider .el-divider__text {
    font-size: 20px;
}
.r-school, .r-pratice, .r-company {
    margin-left: 0%;
    margin-bottom: 50px;
}
.r-school-t {
    margin-bottom: 20px;
    height: 50px;
}
.el-card .el-input,
.el-card .el-input__inner,
.el-card .el-menu,
.el-menu, 
.el-menu .el-menu-item {
    height: 100%;
}
.el-menu .el-meun-item {
    margin-left: 10px;
}
.el-menu-item {
    font-size: 15px;
}
.c-name {
    font-size: 20px;
    max-width:200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.c-body{
    height: 230px;
}
.c-company-body {
    height: 300px;
}
.c-card .el-col {
    margin-top: 10px;
}
.more {
    padding-left: 50px;
    padding-right: 50px;
}
.more span{
    font-size: 18px;
}
.c-inner {
    padding: 20px;
}
.el-divider--horizontal {
    left: 40%;
    width: 20%;
}
.c-inner .el-divider--horizontal{
    left: 0;
    width: 100%;
    margin-bottom: 10px;
}
.c-price {
    font-size:18px;
    color:#fd7240;
    position: absolute;
    right: 0;
}
.company .el-col {
    margin-top: 0;
    font-size: 13px;
    color: #8d92a1;
}
.company .el-link--inner {
    max-width:120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.c-name .el-link--inner {
    max-width:300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.el-divider .el-divider__text {
    font-size: 15px;
}
</style>