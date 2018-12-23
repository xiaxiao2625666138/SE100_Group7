<template>
  <div class="main-part">
    <div class="main-container">
      <div v-if="quesShow === 'latest' || quesShow === 'hotest'"
      class="container">
        <div class="container">
          <div class="question-item"
          v-for="item in displayList" :key="item.id">
            <div class="item-left">
              <div class="label-item">
                <div class="item-num">
                  {{item.followNum}}
                </div>
                <span>follows</span>
              </div>
              <div class="label-item">
                <div class="item-num">
                  {{item.answerNum}}
                </div>
                <span>
                  answers
                </span>
              </div>
              <div class="label-item">
                <div class="item-num">
                  {{item.viewNum}}
                </div>
                <span>
                  views
                </span>
              </div>
            </div>
            <div class="question-main">
              <div class="question-des">
                {{item.question}}
              </div>
              <div class="question-labels">
                <span v-for="lab in item.label"
                :key="lab.id">
                {{lab.name}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="quesShow === 'online'"
        class="container">
        <div class="container">
          <div class="online-header">找在线用户1对1帮助吧</div>
          <div class="online-item" 
          v-for="item in displayList" :key="item.id">
            <img :src="item.imgUrl">
            <div class="user-info">
              <div class="user-id">{{item.id}}</div>
              <div class="user-post">{{item.post}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="quesShow === 'askMe'"
      class="container">
        <div class="container">
          <div class="askme-header">我要 上线帮助小伙伴们</div>
          <div class="post-info">
            Nothing here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MainPart',
  data () {
    return {
      quesList: [
        {
          name: 'latest',
          list: [
            {
              id: '01',
              question: '什么是vuex',
              viewNum: '0',
              answerNum: '0',
              followNum: '0',
              label: [
                {
                  id: '01',
                  name: 'Vue'
                },
                {
                  id: '02',
                  name: 'Vuex'
                }
              ]
            },
            {
              id: '02',
              question: '什么是vue router',
              viewNum: '0',
              answerNum: '1',
              followNum: '0',
              label: [
                {
                  id: '01',
                  name: 'Vue'
                },
                {
                  id: '02',
                  name: 'Vue router'
                }
              ]
            }
          ]
        },
        {
          name: 'hotest',
          list: [
            {
              id: '01',
              question: '什么是vue-cli',
              viewNum: '250',
              answerNum: '102',
              followNum: '26',
              label: [
                {
                  id: '01',
                  name: 'Vue'
                },
                {
                  id: '02',
                  name: 'Vue-cli'
                },
                {
                  id: '03',
                  name: 'webpack'
                }
              ]
            },
            {
              id: '02',
              question: '什么是vue-loader',
              viewNum: '260',
              answerNum: '103',
              followNum: '33',
              label: [
                {
                  id: '01',
                  name: 'Vue'
                },
                {
                  id: '02',
                  name: 'Vue-loader'
                },
                {
                  id: '03',
                  name: 'webpack'
                }
              ]
            },
          ]
        },
        {
          name: 'online',
          list: [
            {
              id: '我是在线1',
              imgUrl: 'http://www.ghost64.com/qqtupian/zixunImg/local/2018/07/13/1531479237184.jpg',
              post: '回答关于vue-cli的问题哦'
            },
            {
              id: '我是在线2',
              imgUrl: 'http://thumb10.jfcdns.com/2018-06/bce5b10ae530f530.png',
              post: '回答关于ReactNative的问题哦'
            },
            {
              id: '我是在线3',
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8z3c3zuczurMAv84JuasUwXWSbdpNGvPfsY34lXhR_a9LMy1',
              post: '回答关于女生情感的问题哦'
            },
            {
              id: '我是在线4',
              imgUrl: 'https://imgt.388g.com/thumb_src/190_180/1481789751841219.jpg',
              post: '回答关于如何撩妹的问题哦'
            },
            {
              id: '我是在线5',
              imgUrl: 'http://www.imeitou.com/uploads/allimg/171123/3-1G123203S6-50.jpg',
              post: '回答关于后端的问题哦'
            },
          ]
        },
      ]
    }
  },
  computed: {
    ...mapState(['quesShow']),
    displayList () {
      let list = []
      this.quesList.forEach(element => {
        if (element.name === this.quesShow){
          list = element.list
        }
      })
      return list
    }
  }
}
</script>
<style scoped>
.main-part{
  position: relative;
  left: .48rem;
  top: 2.96rem;
  float: left;
  height: 12rem;
  width: 20rem;
  display: flex;
  flex: 1;
}
.main-container{
  height: 100%;
  width: 100%;
  background: #eef2f7;
  border-top: 2px solid #9bbadb;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.container{
  height: 100%;
  width: 100%;
  font-size: .32rem
}
.question-item{
  margin: .12rem .24rem;
  border-bottom: 1px dashed #9bbadb;
  height:1.88rem;
  width: 20rem;
  overflow: hidden;
}
.question-item .item-left{
  float: left;
  width: 4.8rem;
  height: 100%;
  margin: auto .18rem;
}
.item-left .label-item{
  float: left;
  width: 30%;
  height: .88rem;
  padding-top: .36rem;
  margin: .1rem auto;
  color: #6e7d88;
}
.label-item .item-num{
  margin-bottom: .12rem;
  font-size: .38rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
}
.label-item span{
  width: 1.44rem;
  height: .32rem;
  line-height: .32rem;
  font-size: .28rem;
  text-align: center;
  display: block;
}
.label-item:hover{
  border: 1px solid #9bbadb;
  color: #9bbadb;
  border-radius: 5px;
  cursor: pointer;
}
.question-main{
  padding-top: .24rem;
  overflow:hidden;
}
.question-main .question-des{
  font-size: .38rem;
  color: #9bbadb;
  height: .88rem;
}
.question-labels{
  height: .8rem;
  font-size: .24rem;
  color: #000;
}
.question-labels span{
  background: #9bbadb;
  border-radius: 3px;
  margin: .12rem .05rem;
  padding: .05rem .03rem;
  color: #fff;
  cursor: pointer;
}
.online-header{
  height: 1.2rem;
  width: 10rem;
  margin: auto .2rem;
  text-align: center;
  font-size: .48rem;
  color: #4095ef;
  line-height: 1.2rem;
}
.online-item{
  height: 1.2rem;
  width: 3.6rem;
  float: left;
  margin:.3rem .2rem;
  margin-bottom: .3rem;
  padding: .2rem .1rem;
  display:flex;
}
.online-item:hover{
  background: #dce9f9;
  cursor: pointer;
}
.online-item img{
  height: .88rem;
  width: .88rem;
  border-radius: 100px;
}
.online-item .user-info{
  margin-left: .32rem;
  height: 1.2rem;
  padding-top: .12rem;
}
.user-info .user-id{
  font-size: .4rem;
  height: .36rem;
  line-height: .36rem;
  color: #4d93de;
}
.user-info .user-post{
  font-size: .24rem;
  padding-top: .36rem;
  height: .44rem;
  width: 2.4rem;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.askme-header{
  height: 1.2rem;
  width: 10rem;
  margin: auto .2rem;
  text-align: center;
  font-size: .48rem;
  color: #4095ef;
  line-height: 1.2rem;
}
</style>
