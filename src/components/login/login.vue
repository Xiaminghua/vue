<template>

    <div class="login">
        <div class="box">
            <!-- 表单组件 -->
            <!-- 
                    el-form：form 表单
                        model: 绑定的数据源
                        status-icon：检验结果的反馈图标
                        rules：检验的规则
                        label-width：设置标题的宽度
                        label-position: 设置标题文本的位置
                    el-form-item：表单元素的项  
                        label：项的名称
                        prop：检验的属性
                    el-input：表单元素
                 -->
            <h2>用户登录</h2>
            <el-form label-position="top" :model="loginObj" status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名">
                    <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="mybtn" type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginObj: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        // 登录逻辑
        login() {
            // 得到参数，通过 axios 提交到服务器
            this.$http.post('/login', this.loginObj)
                .then(data => {
                    console.log(data)
                    var {meta, data} = data.data
                    if (meta.status === 200) {
                        alert(meta.msg)
                    } else {
                        alert(meta.msg)
                    }
                })
        }
    }
}
</script>

<style>
.login {
    background-color: #2C3742;
    width: 100%;
    height: 100%;
    position: relative;
}

.login .box {
    width: 500px;
    padding: 40px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
.login .box h2 {
    margin-bottom: 20px;
}
.login .box .mybtn {
    width: 100%;
}
</style>
