<template>
    <div class="home">
    <home-header />
    <home-body />
    <home-tailer />
    </div>
</template>

<script>
import HomeHeader from './pages/Header'
import HomeBody from './pages/Body'
import HomeTailer from './pages/Tailer'

export default{
    components:{
        HomeHeader,
        HomeBody,
        HomeTailer,
    }
}

</script>

<style scoped>

.home{
    width:100%;
    height: 16.5rem;
    overflow:hidden;
    background-image: url("~@/assets/img/homebg.jpg");
    background-repeat:no-repeat;
    background-size:31rem,100%;
    background-position:center;
    -moz-background-size:100% 100%;
}


</style>