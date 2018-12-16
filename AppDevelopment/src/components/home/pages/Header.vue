<template>
    <div class="header">
        <div class="header-left">
            <router-link to ="/">
            <span :class="{choose:choose1}" 
            @mouseover="choose1=true" @mouseout="choose1=false">首页</span>
            </router-link>
            <router-link to = "/user">
            <span :class="{choose:choose2}" 
            @mouseover="choose2=true" @mouseout="choose2=false">我的课程</span>
            </router-link>
            <router-link to = '/links'>
            <span :class="{choose:choose3}" 
            @mouseover="choose3=true" @mouseout="choose3=false">定制教程</span>
            </router-link>
            <span :class="{choose:choose4}" 
            @mouseover="choose4=true" @mouseout="choose4=false">消息</span>
        </div>
        <div class="header-right">
            <span class="iconfont save" 
            :class="{choose:choose5}" 
            @mouseover="choose5=true" @mouseout="choose5=false">&#xe635;</span>
            <router-link to="login">
                <span class="iconfont login" 
                :class="{choose:choose6}" 
                @mouseover="choose6=true" @mouseout="choose6=false">&#xe600;</span>
            </router-link>
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
        }
    },
}
</script>

<style scoped>

.header{
    width:100%;
    color:#ddd;
    background-color:#000000;
    opacity:0.85;
    height: 1.3rem;
    overflow:hidden;
}

.header-left{
    float:left;
    margin-left:1rem;
    font-family:"Arial", "Hiragino Sans GB", 微软雅黑, "Helvetica", "sans-serif";
}


.header span{
    color: #ddd;
    height:1.3rem;
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