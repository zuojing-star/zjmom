<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <!-- <login-form @on-success-valid="handleSubmit"></login-form> -->
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
          <div @click="handleSubmit">ddddddddddddd</div>
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
// import LoginForm from "_c/login-form";
import { mapActions, mapState, mapMutations } from "vuex";
import urls from "@/urls.js";
// import ajax from "@/ajax.js";
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    // LoginForm
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
    ...mapMutations(["setUser", "setToken"]),
    ...mapActions(["handleLogin", "getUserInfo"]),
    validForm({ userCode, password, scopeType, scopeCode }) {
      if (!userCode) {
      }
    },

    async handleSubmit({ userCode, password, scopeType, scopeCode }) {
      // if (!userCode) {
      //   this.$Message.error("用户名必须填写!");
      //   return;
      // }
      // if (!password) {
      //   this.$Message.error("密码必须填写!");
      //   return;
      // }
      // if (!scopeType) {
      //   this.$Message.error("工作区域必须填写!");
      //   return;
      // }
      // if (!scopeCode) {
      //   this.$Message.error("所属必须填写!");
      //   return;
      // }

      let url = urls.basic.login;
      let params = {
        obj: {
          userCode,
          password,
          scopeType,
          scopeCode
        }
      };
      console.log("login url....", url);

      $.ajax({
        type: "POST",
        url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(params),
        success: function(message) {
          console.log(message);
        },
        error: function(message) {
          $("#request-process-patent").html("提交数据失败！");
        }
      });

      // console.log("login start....", url);
      // let result = await axios({
      //   method: "post",
      //   url,
      //   data: {
      //     obj: {
      //       userCode: "111",
      //       pageIndex: 0,
      //       password: "admin",
      //       token: "admin"
      //     }
      //   },
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // });

      // let result = await ajax.post(url, params);

      //console.log("login start333....", result);

      // if (result.data.type == 1) {
      //   let user = result.data.jsonData;
      //   this.setUser(user);
      //   this.setToken("super_admin");
      //   this.$router.push({ name: this.$config.homeName });
      // } else {
      //   this.$Message.info(result.data.jsonData);
      // }

      // this.handleLogin({ userName, password }).then(res => {
      //   this.getUserInfo().then(res => {
      //     console.log("userInfo:", res);
      //     /*
      //       {
      //         name: "super_admin",
      //         user_id: "1",
      //         access: Array(2),
      //         token: "super_admin",
      //         avator: "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
      //       }
      //     */

      //     this.$router.push({
      //       name: this.$config.homeName
      //     });
      //   });
      // });
    }
  }
};
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
.login-con {
  top: 55%;
  height: 455px;
}
</style>
