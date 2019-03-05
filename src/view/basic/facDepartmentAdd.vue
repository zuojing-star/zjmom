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
import { mapState } from "vuex";
export default {
  mixins: [mixin],
  data() {
    return {
      data: viewData.add.addDepartment,
      title: "添加部门"
    };
  },
  computed: mapState(["factoryArray"]),
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(urls.factory.addFacDept);
    },
    _extendViewData() {
      this.data = this.extendViewData(
        [
          {
            text: "工厂代码",
            value: this.factoryArray[0].code,
            type: "input",
            requestField: "facCode",
            require: true,
            isHide: true
          }
        ],
        viewData.add.addDepartment
      );
    }
  },
  mounted() {
    this._extendViewData();
  }
};
</script>


