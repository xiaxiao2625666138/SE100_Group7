<template>
    <div class="header">
        <div class="logo">
        <img src="~@/assets/img/logo.jpg"/>
        </div>
        <div class="header-left">
            <router-link to ="/">
            <span :class="{choose:choose1}" 
            @mouseover="choose1=true" @mouseout="choose1=false">首页</span>
            </router-link>
            <router-link to = "/user">
            <span :class="{choose:choose2}" 
            @mouseover="choose2=true" @mouseout="choose2=false">我的课程</span>
            </router-link>
            <span :class="{choose:choose3}" 
            @mouseover="choose3=true" @mouseout="choose3=false">定制教程</span>
            <router-link to = '/QA'>
            <span :class="{choose:choose7}" 
            @mouseover="choose7=true" @mouseout="choose7=false">问答区</span>
            </router-link>
            <router-link to = 'Message'>
            <span :class="{choose:choose4}" 
            @mouseover="choose4=true" @mouseout="choose4=false">消息(0)</span>
            </router-link>
        </div>
        <div class="header-right">
            <span class="iconfont save" 
            :class="{choose:choose5}" 
            @mouseover="choose5=true" @mouseout="choose5=false">&#xe635;</span>
            <span class="iconfont login" 
            :class="{choose:choose6}" 
            @click="login"
            @mouseover="choose6=true" @mouseout="choose6=false">&#xe600;</span>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            "choose1":false,
            "choose2":false,
            "choose3":false,
            "choose4":false,
            "choose5":false,
            "choose6":false,
            "choose7":false
        }
    },
    methods:{
        login:function(){
            this.$emit("login")
        }
    }
}
</script>

<style scoped>

.header{
    width:100%;
    color:#ddd;
    background-color:#000000;
    overflow:hidden;
    opacity:0.95;
    height: 1.3rem;
    outline:1px solid #000;
}

.logo{
    float:left;
    height:1.3rem;
    padding: .2rem .6rem;
}
.logo img{
    border-radius:.2rem;
    width:1.3rem;
    line-height: 1.3rem;
}

.header-left{
    height: 1.3rem;
    float:left;
    margin-left:.2rem;
    font-family:"Arial", "Hiragino Sans GB", 微软雅黑, "Helvetica", "sans-serif";
}


.header span{
    color: #ddd;
    height:1.3rem;
    overflow:hidden;
    line-height:1.3rem;
    font-size: .4rem;
    cursor: pointer;
    padding: 0 .6rem 0 .2rem;
}

.save{
    float: right;
}

.login{
    color:#fff;
    float: right;
}

.choose{
    opacity:.20;
}
</style>