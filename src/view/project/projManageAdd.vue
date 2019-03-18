<template>
  <Form :title="title" :columns="data" @addSubmit="addSubmit" @dateChange="dateChange($event)"/>
</template>
<script>
import urls from "@/urls.js";
import api from "@/api.js";
import ajax from "@/ajax.js";
import "@/assets/styles/common-add.css";
import Form from "_c/form/form.vue";
import mixin from "@/view/service-mixin.js";
import viewData from "@/view/view-data.js";

let url = urls.project.add;
let form_data = viewData.add.addProject;
let form_title = "添加项目";

export default {
  mixins: [mixin],
  data() {
    return {
      data: form_data,
      title: form_title
    };
  },
  components: {
    Form
  },
  methods: {
    dateChange(params) {
      console.log("form_data:", form_data);
      console.log("时间", params);

      this.data = form_data.map(k => {
        if (params.howKey == "planStart" && k.requestField == "planStart") {
          k.value = params.value;
        }

        if (params.howKey == "planEnd" && k.requestField == "planEnd") {
          k.value = params.value;
        }
        return k;
      });
    },
    addSubmit() {
      this.addData(url);
    }
  }
};
</script>


