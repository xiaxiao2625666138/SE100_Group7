<template>
<div class="body">
    <div class="body-content">
        <div class="functions">
            <div :class="{choose:choose1}" 
            @mouseover="choose1=true" @mouseout="choose1=false">
            新消息(0)
            </div >
            <div :class="{choose:choose2}" 
            @mouseover="choose2=true" @mouseout="choose2=false">
            学习提醒(0)
            </div>
            <div :class="{choose:choose3}" 
            @mouseover="choose3=true" @mouseout="choose3=false">
            消息记录(0)
            </div>
        </div>
        <div class="content">
            <div class="tittle">
            Nothing
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default{
    data(){
        return{
            choose1:false,
            choose2:false,
            choose3:false,
        }
    }
}
</script>

<style scoped>
.body{
    background:#e0e0e0;
    height:12rem;
}

.body-content{
    padding:1rem .5rem;
    height:10rem;
    overflow:hidden;
}

.functions{
    float:left;
    font-size:.32rem;
    color:#fff;
    font-family:;
    padding:.3rem 0;
    margin-bottom:8rem;
    background:#000;
    opacity:0.85;
    width:2.4rem;
    border-radius: .2rem;
}

.functions div{
    padding:0 .3rem;
    height:.8rem;
    line-height:.8rem;
    cursor:pointer;
}

.choose{
    opacity:0.2;
}

.content{
    float:left;
    border-radius:.2rem;
    height:10rem;
    background:#000;
    width:60%;
    opacity:0.85;
    color:#fff;
    text-align:center;
}

.tittle{
    margin: .6rem;
    font-size:.32rem;
    border-bottom:1px solid #fff;
}
</style>