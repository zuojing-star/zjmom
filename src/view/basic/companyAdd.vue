<template>
  <Form :title="title" :columns="data" @addSubmit="addSubmit"/>
</template>
<script>
import api from "@/api.js";
import ajax from "@/ajax.js";
import Form from "_c/form/form.vue";
import mixin from "@/view/service-mixin.js";
import viewData from "@/view/view-data.js";
import "@/assets/styles/common-add.css";

let url_add = api.company.add;
export default {
  mixins: [mixin],
  data() {
    return {
      data: viewData.add.addCompany,
      title: "添加公司"
    };
  },
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(url_add);
    }
  }
};
</script>


