<template>
    <div class="body">
        <div class="look-for">
            <input class="input"  type="text" placeholder="搜索"
            :class="{input_content:input}"
            @mouseover="input=true" @mouseout="input=false"/>
            <span class="iconfont" :class="{find:find}"
            @mouseover="find=true" @mouseout="find=false">&#xe602;</span>
        </div> 
        <div class="content">
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            find:false,
            input:false,
        }
    }
}
</script>

<style scoped>

.body{
    height: 8rem;
    background:#000;
    opacity:0.5;
    padding-top: 5rem;
    overflow:hidden;
}

.look-for{
    height: 1rem;
    margin: auto;
    width: 7rem;
    font-size:.32rem;
    color:#888;
}

.look-for span{
    cursor:pointer;
    line-height:.6rem;
    font-size: .50rem;
    float:left;
    padding-left:.1rem;
}

.input{
    background:#222;
    padding-left:0.3rem;
    border:#ddd 1px solid;
    border-radius:.4rem;
    text-align:right;
    color:#ffffff;
    height:.6rem;
    width:5.7rem;
    float:left;
    padding-right:.3rem;
}

.content{
    color:#444;
    text-align:center;
    padding-top:1rem;
    font-size:2rem;
    font-family:YouYuan;
}

.input_content{
    border-bottom:#ffffff 3px solid;
}

.find{
    color:#fff;
}
</style>