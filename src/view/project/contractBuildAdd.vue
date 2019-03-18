<template>
  <Form :title="title" :columns="data" @addSubmit="addSubmit"/>
</template>
<script>
import urls from "@/urls.js";
import api from "@/api.js";
import ajax from "@/ajax.js";
import "@/assets/styles/common-add.css";
import Form from "_c/form/form.vue";
import mixin from "@/view/service-mixin.js";
import viewData from "@/view/view-data.js";
import { mapState, mapMutations } from "vuex";

let url = urls.contractBuild.add;
let form_title = "添加合同";
let mapstate = ["projectArray"];

export default {
  mixins: [mixin],
  data() {
    return {
      data: [],
      title: form_title
    };
  },
  computed: mapState(mapstate),
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(url);
    },
    _extendViewData() {
      this.data = this.extendViewData(
        [
          {
            text: "项目名称",
            value: this.projectArray[0].name,
            type: "input",
            requestField: "projName",
            require: true,
            isHide: true
          },
          {
            text: "项目代码",
            value: this.projectArray[0].projCode,
            type: "input",
            requestField: "projCode",
            require: true,
            isHide: true
          }
        ],
        viewData.add.contractBuild
      );
    }
  },
  mounted() {
    this._extendViewData();
  }
};
</script>


