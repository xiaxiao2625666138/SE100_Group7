<template>
  <div class="question-navigation">
    <div class="navigation-container">
      <span @click="changeMain(item.identity)"
      v-for="item in displayList" :key="item.id">{{item.name}}</span>
    </div>
  </div>  
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'QuestionNavigation',
  data () {
    return {
      displayList: [
        {
          id: '01',
          identity: 'latest',
          name: '最新问题'
        },
        {
          id: '02',
          identity: 'hotest',
          name: '最热问题'
        },
        {
          id: '03',
          identity: 'online',
          name: '在线用户'
        },
        {
          id: '04',
          identity: 'askMe',
          name: 'Q我吧'
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {
    changeMain (identity) {
      this.changeMainShow(identity)
    },
    ...mapMutations(['changeMainShow'])
  }
}
</script>
<style scoped>

.question-navigation{
  position: relative;
  bottom: 0;
  margin-top: 2.96rem;
  width: 4.24rem;
  height: 100%;
  background: #9bbadb;
  float: left;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.navigation-container{
  font-size: .36rem;
  height: 8.88rem;
  position: relative;
  top: .36rem;
}
.navigation-container span{
  text-align: center;
  width: 3.4rem;
  display: block;
  margin: .56rem auto;
  color: #fff;
  height: .88rem;
  line-height: .88rem;
}
.navigation-container span:hover{
  color: #3d93ec;
  cursor: pointer;
  opacity: 0.7;
  border: 1px solid #fff;
  border-radius: 8px;
}
</style>
