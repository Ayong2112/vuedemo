<template>
    <div class="header">
        <div class="logo">Logo</div>
        <!-- <div class="login-out">退出</div> -->
     <!--    <div class="feedback" @click="routeTo('/feedback')">问题反馈</div> -->
        <div class="user-info">您好，{{username}}</div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'admin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('name');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('name')
                    this.$router.push('/login');
                }
            },
            routeTo(href){
                this.$router.push(href);
            }
        }
    }
</script>
<style scoped type="text/css" lang="css">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        background: #000;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info, .feedback, .login-out{
        float: right;
        font-size: 16px;
        color: #fff;
        margin-right: 1rem;
    }
    .feedback{
        float: right;

    }
    .login-out{
        background-color: #2d3235;
    }
</style>
