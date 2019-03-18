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
        placeholder="请输入密码"
        style="width:100% !important;"
      >
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="login_type">
      <Select v-model="workAreaModel" placeholder="选择工作区域" @on-change="selectchange">
        <Option v-for="item in workArea" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem prop="login_factory">
      <Select
        v-show="hasFactorySelect"
        placeholder="选择所属"
        v-model="workAreaChoosed"
        @on-change="selectchange2"
      >
        <Option v-for="item in factorys" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import { mapState } from "vuex";
import urls from "@/urls.js";
import mixin from "@/view/service-mixin.js";
import ajax from "@/ajax.js";
import { mapMutations } from "vuex";

export default {
  mixins: [mixin],
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
      hasFactorySelect: false,
      factorys: [],
      workAreaModel: "",
      workAreaChoosed: "",
      workArea: [
        {
          value: "pcmomadmin",
          label: "超级管理员"
        },
        {
          value: "comp",
          label: "集团公司 / 总包"
        },
        {
          value: "fac",
          label: "独立工厂 / 外协"
        }
      ],
      form: {
        userName: "",
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
    ...mapMutations(["setScopeName"]),
    async getCompanys() {
      let companys = await ajax.post(urls.basic.getCompany, {
        obj: { pageIndex: 0 }
      });
      this.factorys = companys.data.jsonData.map(k => {
        return {
          value: k.code,
          label: k.name
        };
      });
    },
    async getFacDatas() {
      let factorys = await ajax.post(urls.basic.getFactory, {
        obj: { pageIndex: 0 }
      });
      this.factorys = factorys.data.jsonData.map(k => {
        return {
          value: k.code,
          label: k.name
        };
      });
    },
    showFactorySelect() {
      this.hasFactorySelect = true;
    },
    hideFactorySelect() {
      this.hasFactorySelect = false;
    },
    selectchange2(code) {
      let scopeObj = this.factorys.find(k => {
        return k.value == code;
      });
      this.setScopeName(scopeObj.label);
    },
    selectchange(value) {
      if (value == "pcmomadmin") {
        this.hideFactorySelect();
        this.workAreaChoosed = value;
      } else if (value == "comp") {
        this.getCompanys();
        this.showFactorySelect();
      } else {
        this.getFacDatas();
        this.showFactorySelect();
      }
    },
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            userCode: this.form.userName,
            password: this.form.password,
            scopeType: this.workAreaModel,
            scopeCode: this.workAreaChoosed
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
