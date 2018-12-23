<template>
  <div class="content-right">
    <div class="content-contaniner">
      <div class="content-item"
      v-for="item in displayList" :key="item.id">
        <div class="item-left">
          <span>
            <a :href="item.url">{{item.name}}</a>
            </span>
        </div>
        <div class="item-main">
          <span class="item-top">{{item.introduction}}</span>
          <p class="item-info">{{item.detail}}</p>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'ContentRight',
    data () {
      return {
        infoList: [
          {
            name: 'Vue',
            list: [
              {
                id: '01',
                name: 'Vuex',
                introduction: 'Vuex is a data controller of Vue',
                detail: 'Vuex can be used to store data that will be shared,\
                 it is convinent to use vuex when it comes to pass data between components and \
                  it make data more easily to control, it is benefit for separating data and DOM',
                url: 'https://cn.vuejs.org/index.html'
              },
              {
                id: '02',
                name: 'Vue-router',
                introduction: 'Vue Router is the official router for Vue.js',
                detail: 'Vue Router is used to change the page to be displayed and that all I know about it...',
                url: 'https://router.vuejs.org/'
              },
              {
                id: '03',
                name: 'Vue-loader',
                introduction: 'Vue loader is a loader for webpack that allows you to author Vue components in a format called Single-File Components (SFCs)',
                detail: 'With vue loader, we can beautifully write vue component in webpack. Actually, I know very little about it...',
                url: 'https://vue-loader.vuejs.org/'
              },
              {
                id: '04',
                name: 'Vue-cli',
                introduction: 'vue-cli脚手架工具',
                detail: 'It is an integram and standard tool to help quickly build a \
                vue project. It is very friendly for green hands',
                url: 'https://cli.vuejs.org/'
              },
            ]
          },
          {
            name: 'React',
            list: [
              {
                id: '01',
                name: 'JSX',
                introduction: 'JSX is like comonent in vue, but it writes more like javascript.',
                detail: 'No details, I didn\'t about it... \n\
                If you want to learn, you can click on the title',
                url: 'https://reactjs.org/'
              },
              {
                id: '02',
                name: 'React-Native',
                introduction: 'React Native lets you build mobile apps using only JavaScript.',
                detail: 'It uses the same design as React, letting you compose a rich mobile UI from declarative components.\
                With React Native',
                url: 'https://facebook.github.io/react-native/'
              },
              {
                id: '03',
                name: 'xxx',
                introduction: 'Nothing here',
                detail: 'No details and click on the title will trigger nothing',
                url: ''
              },
            ]
          },
          {
            name: 'Angular',
            list: [
              {
                id: '01',
                name: 'Angular.js',
                introduction: 'Nothing here',
                detail: 'No details for Angular...',
                url: ''
              },
              {
                id: '02',
                name: 'xxx',
                introduction: 'Nothing here',
                detail: 'No details for Angular...',
                url: ''
              },
            ]
          },
          {
            name: 'JQuery',
            list: [
              {
                id: '01',
                name: 'xxx',
                introduction: 'Nothing here',
                detail: 'No details for JQuery...',
                url: ''
              },
            ]
          },
          {
            name: '后端',
            list: [
              {
                id: '01',
                name: 'C/C++',
                introduction: 'C and C++ is very old but still 很有用！',
                detail: '',
                url: 'http://www.cpluscplus.com'
              },
              {
                id: '02',
                name: 'Java',
                introduction: 'I will soon learn it',
                detail: '',
                url: ''
              },
              {
                id: '03',
                name: 'python',
                introduction: 'Python is a large snake!',
                detail: '',
                url: 'http://www.python.org'
              },
            ]
          }
        ]
      }
    },
    computed: {
      displayList () {
        let list = []
        this.infoList.forEach(ele => {
          if (ele.name == this.display) {
            list = ele.list
          }
        })
        return list
      },
      ...mapState(['display'])
    }
}
</script>
<style scoped>
.content-right{
  margin-left: .2rem;
  padding-left: .05rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  float: left;
  width: 14.48rem;
  height:8.88rem;
  display: block;
}
.content-contaniner{
  margin-top: .1rem;
  overflow: scroll;
  font-size: 0.36rem;
  height: 100%;
  overflow-x: hidden;
}
.content-item{
  position: relative;
  height: 33.33%;
  border-bottom: 1px dashed #f59090;
}
.item-left{
  height: 100%;
  float: left;
  line-height: 2.96rem;
  color: #3f4042;
  width: 2.48rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

}
.item-left a{
  color: #601f89;

}
.item-left span:hover{
  color:#000;
  font-size: .36rem;
  text-decoration: underline;
  cursor: pointer;
}

.item-main{
  position: relative;
  width:11.2rem;
  height: 2.84rem;
  float: left;
  display: block;
}
.item-top{
  height: .88rem;
  line-height: .88rem;
  font-size: .28rem;
  color: #09417a;
  padding-bottom: 3px;
  border-bottom: 1px solid #d3d3d3;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}
.item-info{
  height: 1.96rem;
  margin-top: .32rem;
  font-size: .32rem;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
