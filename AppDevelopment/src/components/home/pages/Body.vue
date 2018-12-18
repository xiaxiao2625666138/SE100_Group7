<template>
    <div class="body">
        <div class="look-for">
            <input class="input"  type="text" placeholder="搜索"
            :class="{input_content:input}"
            @mouseover="input=true" @mouseout="input=false"
            v-clickoutside = "handleClose"
            @click = "handleInput"
            @keyup.enter="handleSubmit"
            v-model="inputMsg"
            />
            <span class="iconfont" :class="{find:find}"
            @mouseover="find=true" @mouseout="find=false"
            @click="handleSubmit"
            >&#xe602;</span> 
        </div> 
        <div class="tips" v-if="waitForInput">
            <div>
                <ul class="tips-list">
                    <li class="tips-item"
                    v-for="item in tipsDisplay"
                    :key="item.id"
                    @click="handleClick(item.info)">
                        <div class="tips-container">
                          <span class="tips-info">{{item.info}}</span>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return{
            inputMsg :'',
            find:false,
            input:false,
            waitForInput: false,
            tipsInfo: [
                {
                    id: '01',
                    info: 'vue'
                },
                {
                    id: '02',
                    info: 'javascript'
                },
                {
                    id: '03',
                    info: 'vuex'
                },
                {
                    id: '04',
                    info: 'vue-router'
                }
            ]
        }
    },
    methods: {
        handleClose () {
            this.waitForInput = false
        },
        handleInput () {
            if(this.waitForInput)
                return true
            else this.waitForInput = true
        },
        handleSubmit () {
            this.waitForInput = false
            var item = {}
            item.id = this.tipsInfo.length.toString()
            item.info = this.inputMsg;
            this.tipsInfo.unshift(item)
        },
        handleClick (info) {
            this.inputMsg = info
            this.waitForInput = false
            var item = {}
            item.id = this.tipsInfo.length.toString()
            item.info = this.inputMsg;
            this.tipsInfo.unshift(item)
        }
    },
    computed: {
        tipsDisplay () {
            return this.tipsInfo.slice(0,5)
        }
    },
    directives: {
        clickoutside: {
            bind: function (el, binding, vnode) {
                function documentHandler (e) {
                    if (el.contains(e.target)) {
                        return false
                    }
                    if (binding.expression) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = documentHandler
                document.addEventListener('click', documentHandler)
            },
            unbind (el, binding) {
                document.removeEventListener('click', el.__vueClickOutside__)
                delete el.__vueClickOutside__
            }
        }
    }
}
</script>

<style scoped>

.body{
    height: 8rem;
    background:#000;
    opacity:0.5;
    padding-top: 5rem;
    overflow:hidden;
}

.look-for{
    height: 1rem;
    margin: auto;
    width: 7rem;
    font-size:.32rem;
    color:#888;
}

.look-for span{
    cursor:pointer;
    line-height:.6rem;
    font-size: .50rem;
    float:left;
    padding-left:.1rem;
}

.input{
    background:#222;
    padding-left:0.3rem;
    border:#ddd 1px solid;
    border-radius:.4rem;
    text-align:right;
    color:#ffffff;
    height:.6rem;
    width:5.7rem;
    float:left;
    padding-right:.3rem;
}
.tips{
    text-align: left;
    margin: auto;
    width: 6.3rem;
    float: top;
    margin-top: -1px;
    z-index: 989;
    cursor: pointer;
    background: #000;
}
.tips div{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.tips .tips-list{
    flex: auto;
    padding-bottom: 0px;
}
.tips-list .tips-item{
    line-height: 22px;
    display: flex;
    align-items: center;
    min-width: 0;
    max-height: none;
    padding: 0;   
}
.tips-item:hover{
    background:#444;
}
.tips-item .tips-container{
    padding: 0px;
    margin: 0 20px;
    display: flex;
    border-bottom:1px solid #fff; 
}
.tips-item .tips-info{
    color: #fff;
    font-size: 16px;
    padding-right: 8px;
    align-items: center;
    word-break: break-all; 
}

.content{
    color:#444;
    text-align:center;
    padding-top:1rem;
    font-size:2rem;
    font-family:YouYuan;
}

.input_content{
    border-bottom:#ffffff 3px solid;
}

.find{
    color:#fff;
}
</style>