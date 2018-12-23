<template>
  <div class="content-left">
    <div class="content-item"
    v-for="item in contentList"
    :key="item.id"
    @click="changeright (item.content)">
      <span>{{item.content}}</span>
    </div>
    <div class="content-item"
     @click="handleClick">
      <span>
        简单前端水平测试
      </span>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'ContentLeft',
  data () {
    return {
      showTest: false,
      contentList: [
        {
          id: '01',
          content: 'Vue'
        },
        {
          id: '02',
          content: 'React',
        },
        {
          id: '03',
          content: 'Angular'
        },
        {
          id: '04',
          content: 'JQuery'
        },
        {
          id: '05',
          content: '后端'
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$emit('handletest')
    },
    changeright (name) {
      this.changeDisplay(name)
    },
    ...mapMutations([
      'changeDisplay'
    ])
  }
}
</script>
<style scoped>
.content-left{
  float: left;
  margin-left: 3.2rem;
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
