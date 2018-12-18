<template>
    <div class="tailer">
        <div class="association">
            <a href="mailto:2625666138@foxmail.com?subject=艾学网&body=hello！"
            title="Send Email to Us"
            :class="{send_email:association}"
            @mouseover="association=true" @mouseout="association=false">联系我们</a>
        </div>
        <div class="copy-right">
            copyright@SE100_Group7
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            association:false
        }
    }
}
</script>

<style scoped>

.tailer{
    background:#000000;
    opacity:0.85;
    height:2.2rem;
    color: #fff;
    text-align:center;
    padding:.4rem 0;
    font-size:.32rem;
}

.association a{
    font-family:楷体;
    font-size:.4rem;
    color: #fff;
}

.copy-right{
    padding: .4rem;
}

.send_email{
    opacity: 0.2;
}

</style>