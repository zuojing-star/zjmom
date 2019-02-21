<template>
  <Form :title="title" :columns="data" @addSubmit="addSubmit"/>
</template>
<script>
import urls from "@/urls.js";
import ajax from "@/ajax.js";

import "@/assets/styles/common-add.css";

import Form from "_c/form/form.vue";

import mixin from "@/view/service-mixin.js";

import viewData from "@/view/view-data.js";

export default {
  mixins: [mixin],
  data() {
    return {
      data: viewData.add.addCompany,
      title: "添加公司",
      name: "",
      address: "",
      responsible: "",
      telphone: ""
    };
  },
  components: {
    Form
  },
  methods: {
    addSubmit() {
      console.log(this.data);

      if (this.validRequireForm(this.data)) {
        console.log("提交数据");
        let params = {
          obj: this.getRequestParams(this.data)
        };
        let url = urls.company.addPcCompany;

        this.addCompany(url, params);

        console.log(params);
      } else {
        console.log("不提交数据");
      }
    },
    getParams() {
      let name = this.name;
      let address = this.address;
      let telphone = this.telphone;
      let responsible = this.responsible;

      if (name == "") {
        this.$Message.info("公司名称必须填写");
        return;
      }

      let params = {
        obj: {
          name,
          address,
          responsible,
          telphone
        }
      };
      return params;
    },
    cleanForm(data) {
      data.forEach(k => {
        k.value = "";
      });
    },
    //处理响应
    addResponse(result) {
      console.log("result:", result);
      if (result.status == 200) {
        if (result.data.type == 1) {
          this.$Modal.confirm({
            title: "添加公司成功",
            content: "<p>是否继续添加</p>",
            onOk: () => {
              this.cleanForm(this.data);
            },
            onCancel: () => {
              this.cleanForm(this.data);
              this.$router.push({ path: "/basic/company" });
            }
          });
        } else {
          this.$Message.info("添加公司失败");
        }
      } else {
        this.$Message.info("添加公司失败");
      }
    },
    async addCompany(url, params) {
      let result = await ajax.post(url, params);
      this.addResponse(result);
    }
  },
  mounted() {}
};
</script>


