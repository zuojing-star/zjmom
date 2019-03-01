<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName" style="width:100%;">
      <Input v-model="form.userName" placeholder="请输入用户名" style="width:100% !important;">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input
        type="password"
        v-model="form.password"
        placeholder="请输入密码2"
        style="width:100% !important;"
      >
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    return {
      form: {
        userName: "super_admin",
        password: ""
      }
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            userName: this.form.userName,
            password: this.form.password
          });
        }
      });
    }
  }
};
</script>
<style>
.ivu-card {
  padding: 40px 20px;
}
</style>
