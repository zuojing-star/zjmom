<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可 {{loading_state}}</p>
        </div>
      </Card>
    </div>
  </div>
  <!-- <Layout class="body-wrap">
    <Card class="card-wrap">
      <p slot="title" class="title-wrap">
        <img src="@/assets/images/BIMLogo.png" class="title-img">宝业BIM信息管理平台
      </p>
      <Form>
        <FormItem>
          <Input type="text" placeholder="请输入您的手机号" v-model="username"/>
        </FormItem>
        <FormItem>
          <Input type="text" placeholder="请输入您的密码" v-model="password"/>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="gotoLogin">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </Layout>-->
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
// import ajax from "@/ajax";
// import urls from "@/urls";

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    LoginForm
  },
  methods: {
    // async gotoLogin() {
    //   let params = {
    //     account: this.username,
    //     password: this.password
    //   };

    //   let res = await ajax.post(urls.url.login, params);
    //   if (res.status === 200) {
    //     if (res.data.status === 200) {
    //       this.$router.push({ path: "/home" });
    //       alert("登录成功");
    //     } else {
    //       alert("登录失败");
    //     }
    //   }
    // }
    ...mapActions(['handleLogin', 'getUserInfo']),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  },
  computed: {
    loading_state () {
      console.log(this.$store.state.abcd)
      return this.$store.state.abcd
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
.body-wrap {
  height: 100%;
}
.card-wrap {
  position: absolute !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 340px;
  background: #fff;
  padding: 20px 50px;
}
.title-img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 16px;
  margin-right: 17px;
}
.title-wrap {
  height: 66px !important;
  font-size: 18px;
}
</style>
