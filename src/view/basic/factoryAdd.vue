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
      data: viewData.add.addFactory,
      title: "添加工厂"
    };
  },
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(urls.factory.addFactory);
    }
  },
  mounted() {}
};
</script>
