<template>
  <div class="content-left">
    <div class="content-item">
      <span>前沿/区块链/人工智能</span>
    </div>
    <div class="content-item">
      <span>前端/小程序/JS</span>
    </div>
    <div class="content-item">
      <span>后端/JAVA/Python</span>
    </div>
    <div class="content-item">
      <span>云计算/大数据/容器</span>
    </div>
    <div class="content-item">
      <span>移动/Android/iOS</span>
    </div>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
.content-left{
  float: left;
  width: 4.32rem;
  height: 8.88rem;
  padding-top: .24rem;
  background: #2b333b;
  border-bottom-left-radius: 4px;
  font-weight: 400;
}
.content-item{
  color: rgba(255,255,255,0.6);
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .28rem;
  cursor: pointer;
  margin-left:.16rem;
  padding-left: .24rem;
  position:relative;
  border-top-left-radius: 4px;
  border-top-left-radius: 4px;
}
.content-item:hover{
  background: rgba(255,255,255,0.3);
  color: #fff;
}
.content-item span{
  padding: 0 .32rem;
}
</style>
