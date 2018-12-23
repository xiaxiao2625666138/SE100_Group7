<template>
    <div class="login">
            <div class = "loginFrame">
                <el-form ref = "AccountForm" 
                :model = "account"
                rules = "rules"
                label-position = "left"
                label-width = "0px"
                class = "demo-ruleForm login-container">
                <!--tab标签-->
                <span class="return iconfont"
                @click="login">&#xe60e;</span>
                    <el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users">
                        <el-tab-pane label = "学生" name = "students">学生</el-tab-pane>
                        <el-tab-pane label = "管理员" name = "controler">管理员</el-tab-pane>
                    </el-tabs>
                <el-form-item prop = "username">
                    <el-input type = "text"
                    v-model = "account_username"
                    auto-complete = "off"
                    placeholder = "请输入您的账号"></el-input>
                    </el-form-item> 
                <el-form-item prop = "password">
                    <el-input type = "password"
                    v-model = "account_password"
                    auto-complete = "off"
                    placeholder = "请输入密码"></el-input>
                </el-form-item>
                <el-checkbox v-model = "checked"
                checked class = "remember">记住密码</el-checkbox>    
                <el-form-item style = "width:100%;">
                    <router-link to="/">
                        <el-button type = "primary"
                        style = "width:100%;" >登录</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            logining : false,
            account : {
               username:'',
                password:'',
            },
            rules: {
                username :[
                    {required: true, message: '请输入账号',trigger: 'blur'},
                    //{ validator: validaePass }
                ],
                password: [
                    {required: true,message: '请输入密码', trigger: 'blur'},
                    //{ validator: validaePass2 }
                ]
            },
            checked: false
        }
    },
    methods:{
        login:function(){
            this.$emit("login")
        }
    }
}

</script>
<style scoped>
.login{
    position:fixed;
    z-index:1;
    width:100%;
    background:#000;
    opacity:0.85;
}

.return{
    color: #888;
    cursor:pointer;
    float:right;
    padding-top:.2rem;
}

.return:hover{
    color:#000;
}

.users{
    clear:both;
}

.login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 0 .6rem .3rem .6rem;
    background: #fff ;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.el-tab-pane{
    font-size: .32rem;
    line-height: .32rem;
    color:#cac6c6;
    margin-bottom: .15rem;
}

.login-header{
  position: relative;
  z-index: 2;
  width:100%;
  height: 2rem;
  padding: 0 1rem;
}

.header-right{ 
  position: relative;
  right: 1.4rem;
  margin-top: .6rem;
  float: right;
}

.header-right a{
  text-align: center;
  width: 1.8rem;
  height: .8rem;
  font-size: .36rem;
  color: #fff;
  line-height: .8rem;
  margin-left: .4rem;
  border: 1px solid #fff;
  border-radius: 100px;
  background-color: transparent;
  float: left;
}

</style>