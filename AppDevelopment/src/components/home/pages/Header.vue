<template>
    <div class="header">
        <span class="iconfont return">&#xe626;</span>
        <router-link to="login">
            <span class="iconfont login">&#xe600;</span>
        </router-link>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>

.header{
    width:100%;
    color:#ffffff;
    background-color:#000000;
    opacity:0.85;
    height: 1.3rem;
    overflow:hidden;
}


.header span{
    font-size:.5rem;
    cursor: pointer;
}

.return{
    padding: 0 .2rem;
}

.login{
    line-height:1.3rem;
    float: right;
    padding: 0 .6rem 0 .2rem;
    color:#fff;
}
</style>