<template>
  <div class="content">
    <content-left @handletest = "changeShow"></content-left>
    <content-right></content-right>
    <div class="test"
    v-if="showTest">
      
      <div class="test-container">
        <div
        class="test-header">
          <span @click="testClose"
          class="header-close">
            关闭
          </span>
        </div>
        <ul class="test-list">
          <li :class="item.choosed?'item-choosed':'item-notchoosed'"
          title="了解吗？"
          v-for="item in testList"
          :key="item.id"
          @click="handleChoose(item.id)">
            {{item.content}}
          </li>
        </ul>
        <div class="test-footer">
          <span class="footer-submit"
          @click="handleSubmit">
            测完啦
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContentLeft from './contentLeft'
import ContentRight from './contentRight'
export default {
  name: 'UserContent',
  components: {
    ContentLeft,
    ContentRight
  },
  data () {
    return {
      showTest: false,
      testList: [
        {
          id: '01',
          content: 'Html5',
          choosed: false
        },
        {
          id: '02',
          content: 'CSS3',
          choosed: false
        },
        {
          id: '03',
          content: 'JavaScript',
          choosed: false
        },
        {
          id: '04',
          content: 'Vue',
          choosed: false
        },
        {
          id: 'o5',
          content: 'Vuex',
          choosed: false
        },
        {
          id: '06',
          content: 'React',
          choosed: false
        },
        {
          id: '07',
          content: 'npm',
          choosed: false
        },
        {
          id: '08',
          content: 'Node.js',
          choosed: false
        },
        {
          id: '09',
          content: 'json',
          choosed: false
        },
        {
          id: '10',
          content: 'e2e',
          choosed: false
        }
      ]
      
    }
  },
  methods: {
    changeShow () {
      if (this.showTest)
        this.showTest = false
      else this.showTest = true
    },
    testClose () {
      this.showTest = false
    },
    handleChoose (id) {
      this.testList.forEach(ele => {
        if (ele.id === id) {
          if (ele.choosed)
            ele.choosed = false
          else ele.choosed = true
        }        
      })
    },
    handleSubmit () {
      this.showTest = false
    }
  }
}
</script>
<style scoped>
.content{
  height: 8.88rem;
  overflow: hidden;
  width: 23.04rem;
  margin-top: 1rem;
  margin-left: .5rem;
  border-radius: 8px;
}
.test{
  position: absolute;
  left: 0;
  right: 0;
  top: 1.3rem;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: #000;
  opacity: .7;
}
.test .test-container{
  width: 7rem;
  height: 10rem;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  margin: 1.4rem auto .8rem;
  background: #c0c4cc;
  z-index: 6;
  font-size:.5rem;
  border-radius: 5px;
  opacity: 5;
}
.test-container .test-header{
  height: .7rem;
  margin-bottom: .15rem;
  font-size: .5rem;
  line-height: .7rem;
  border-bottom: 1px solid #fff;
}
.test-header .header-close{
  float: right;
  margin-right: .2rem;
  margin-top: .1rem;
  height: .5rem;
  width: 1.2rem;
  font-size: .36rem;
  line-height: .5rem;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  background-color: transparent;
  text-align: center;
}
.test-header .header-close:hover{
  background: #ec0f24;
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor: pointer;
}
.test-container .test-footer{
  position: absolute;
  bottom: 0;
  margin-bottom: .16rem;
  height: .88rem;
  line-height: .88rem;
  width: 100%;
}
.test-container .test-list{
  height:auto;
}
.test-list .item-notchoosed{
  margin: .36rem .36rem;
  width: 33.33%;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  font-size: .32rem;
  border: 1px solid #fff;
  border-radius: 100px;
  float: left;
}
.test-list .item-notchoosed:hover{
  color: #fff;
  background: #2c8aea;
  border: 1px solid #fff;
  cursor: pointer;
}
.test-list .item-choosed{
  margin: .36rem .36rem;
  width: 33.33%;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  font-size: .32rem;
  border: 1px solid #fff;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  background: #2c8aea;
  float: left;
}
.test-footer .footer-submit{
  display: block;
  margin: 0 auto;
  font-size: .36rem;
  height: .8rem;
  line-height: .8rem;
  width: 2.4rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 100px;
}
.test-footer .footer-submit:hover{
  color: #fff;
  background: #2c8aea;
  border: 1px solid #fff;
  cursor: pointer;
}
</style>
