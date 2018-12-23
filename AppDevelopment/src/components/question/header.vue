<template>
  <div class="question-header">
    <div class="header-container">
      <div class="header-main">
        <router-link to="/">
        <span>首页</span>
        </router-link>
        <router-link to="/user">
        <span>课程</span>
        </router-link>
        <router-link to='/user'>
        <span>消息</span>
        </router-link>
      </div>
      <div class="header-search">
        <span class="iconfont">&#xe602;</span>
        <input type="text"
        placeholder="搜索"
        class="search-input">
      </div>
      <div class="header-user-right">
        <img :src="user.imgUrl">
        <span>{{user.id}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuestionHeader',
  data () {
    return {
      user: {
        imgUrl: 'http://n.sinaimg.cn/translate/20170726/Zjd3-fyiiahz2863063.jpg',
        id: '努力学习'
      }
    }
  }
}
</script>
<style scoped>
.question-header{
  position: absolute;
  width: 100%;
  height: 1.88rem;
  background: #9bbadb;
}
.question-header .header-container{
  position: relative;
  top: .40rem;
  height: 1rem;
}
.header-main{
  float: left;
  width: 6rem;
  padding-left: 2.88rem;
  font-size: .48rem;
}
.header-main a span{
  height: 1rem;
  line-height: 1rem;
  margin: 0 .48rem;
  text-align: center;
  color: #fff;
}
.header-main a span:hover{
  color: #3d93ec;
}
.header-search{
  position: absolute;
  right: 4.8rem;
  width: 5rem;
  height: .64rem;
  line-height: .64rem;
  display: flex;
  margin: .16rem auto;
}
.header-search .iconfont{
  color: #e5ebf0;
  font-size: .44rem;
}
.header-search .search-input{
  width: 4rem;
  border-radius: 3px;
  background: #aac4df;
  border: 0;
  margin-left: .16rem;
}
.header-user-right{
  position: absolute;
  right: .48rem;
  height: .88rem;
  line-height: .88rem;
  display: flex;
}
.header-user-right img{
  width: .88rem;
  height: .88rem;
  border-radius: 100px;
  margin-right: .24rem;
}
.header-user-right span{
  color: #fff;
  font-size: .28rem;
}
</style>
