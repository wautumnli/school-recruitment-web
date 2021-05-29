<template>
    <div class="main">
        <!-- 校招区域 -->
        <el-divider>校招</el-divider>
        <div class="r-school">
            <el-card class="r-school-t">
                <el-menu mode="horizontal" default-active="1">
                    <el-menu-item v-for="item in industry" :index="item.industry" v-bind:key="item.industry">
                        {{item.industry}}
                    </el-menu-item>
                </el-menu>
            </el-card>
            <el-row :gutter="10" class="c-card">
                <el-col :span="8" v-for="item in school" :key="item.id">
                    <el-card class="c-body">
                        <div class="c-inner">
                            <el-row>
                                <el-col :span="16">
                                    <el-link type="info" class="c-name">
                                        {{item.position}}
                                    </el-link>
                                </el-col>
                                <el-col :span="8">
                                    <span class="c-price">{{item.wages}}</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="50">
                                <el-col :span="3">
                                    <el-tag type="success">{{item.workPlace}}</el-tag>
                                </el-col>
                                <el-col :span="3">
                                    <el-tag type="primary">{{item.education}}</el-tag>
                                </el-col>
                                <el-col :span="3" :offset="12">
                                    <el-tag type="danger">{{item.recruitType == 1?'校招':'实习  '}}</el-tag>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row class="company">
                                <el-col :span="5">
                                    <img style="width:70%" :src="item.companyM.imgUrl">
                                </el-col>
                                <el-col :span="8" style="margin-top:15px;">
                                    <el-link type="info">{{item.companyM.companyName}}</el-link>
                                </el-col>
                                <el-col :span="5" style="margin-top:15px;position:absolute;right:40px">
                                    {{item.companyM.companyStatus}}
                                </el-col>
                                <el-col :span="3" style="margin-top:15px;position:absolute;right:0">
                                    {{item.companyM.companyType}}
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top:20px;text-align:center">
                <el-button type="primary" class="more" @click="gotoPage">查看更多</el-button>
            </el-row>
        </div>
        <!-- 实习区域 -->
        <el-divider>实习</el-divider>
        <div class="r-pratice">
            <el-row :gutter="10" class="c-card">
                <el-col :span="8" v-for="item in practice" :key="item.id">
                    <el-card class="c-body">
                        <div class="c-inner">
                            <el-row>
                                <el-col :span="16">
                                    <el-link type="info" class="c-name">
                                        {{item.position}}
                                    </el-link>
                                </el-col>
                                <el-col :span="8">
                                    <span class="c-price">{{item.wages}}</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="50">
                                <el-col :span="3">
                                    <el-tag type="success">{{item.workPlace}}</el-tag>
                                </el-col>
                                <el-col :span="3">
                                    <el-tag type="primary">{{item.education}}</el-tag>
                                </el-col>
                                <el-col :span="3" :offset="12">
                                    <el-tag type="danger">{{item.recruitType=='1'?'校招':'实习'}}</el-tag>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row class="company">
                                <el-col :span="5">
                                    <img style="width:70%" :src="item.companyM.imgUrl">
                                </el-col>
                                <el-col :span="8" style="margin-top:15px;">
                                    <el-link type="info">{{item.companyM.companyName}}</el-link>
                                </el-col>
                                <el-col :span="5" style="margin-top:15px;position:absolute;right:40px">
                                    {{item.companyM.companyType}}
                                </el-col>
                                <el-col :span="3" style="margin-top:15px;position:absolute;right:0">
                                    {{item.companyM.companyStatus}}
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
                <el-col :span="6" v-for="item in company" :key="item.id" style="margin-top:20px">
                    <el-card class="c-company-body">
                        <div class="c-inner">
                            <el-row style="text-align:center">
                                <img :src="item.imgUrl + '?x-oss-process=image/resize,w_100,limit_0'">
                            </el-row>
                            <el-row style="text-align:center;margin-top:10px">
                                <el-link style="font-size:20px">{{item.companyName}}</el-link>
                            </el-row>
                            <el-row style="text-align:center;margin-top:20px;font-size:12px">
                                <span style="color: #8d92a1;">{{item.companyType}}</span>
                                <span style="color: #8d92a1;margin-left:10px">{{item.companyStatus}}</span>
                            </el-row>
                            <el-row style="text-align:center;margin-top:20px">
                                <el-button plain style="color:#8d92a1;font-size:10px">
                                    <span style="color:#fd7240;">{{item.recruitNumber}}</span>个职位招聘
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
            industry: [],
            school: [],
            practice: [],
            company: []
        }
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            const {data} = await this.$http.post('/recruitm/home');
            this.industry = data.data.industry;
            this.school = data.data.school;
            this.practice = data.data.practice;
            this.company = data.data.company;
        },
        gotoPage() {
            this.$router.push("/school");
        }
    },
}
</script>

<style scoped>
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
    height: 100px;
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