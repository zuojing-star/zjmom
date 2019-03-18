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

let url = urls.floor.add;
let form_title = "添加楼层";
let mapstate = ["louDongArray", "projectArray"];

export default {
  mixins: [mixin],
  data() {
    return {
      data: [],
      title: form_title
    };
  },
  components: {
    Form
  },
  computed: mapState(mapstate),
  methods: {
    addSubmit() {
      this.addData(url);
    },
    _extendViewData() {
      this.data = this.extendViewData(
        [
          {
            text: "楼栋编码",
            value: this.louDongArray[0].code,
            type: "input",
            requestField: "louCode",
            require: true,
            isHide: true
          },
          {
            text: "楼栋编号",
            value: this.louDongArray[0].name,
            type: "input",
            requestField: "louName",
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
        viewData.add.addFloor
      );
    }
  },
  mounted() {
    this._extendViewData();
  }
};
</script>


