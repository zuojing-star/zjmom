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
  computed: mapState(["companyArray", "departmentArray"]),
  data() {
    return {
      data: [],
      title: "添加员工"
    };
  },
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(urls.employee.addPcPerson);
    },
    _extendViewData() {
      this.data = this.extendViewData(
        [
          {
            text: "公司代码",
            value: this.companyArray[0].code,
            type: "input",
            requestField: "companyCode",
            require: true,
            isHide: true
          },
          {
            text: "部门代码",
            value: this.departmentArray[0].code,
            type: "input",
            requestField: "deptCode",
            require: true,
            isHide: true
          }
        ],
        viewData.add.addEmployee
      );
    }
  },
  mounted() {
    this._extendViewData();
  }
};
</script>


