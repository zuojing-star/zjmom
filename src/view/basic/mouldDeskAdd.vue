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
      data: [],
      title: "添加模台"
    };
  },
  components: {
    Form
  },
  computed: mapState(["factoryArray", "produceLineArray"]),
  methods: {
    addSubmit() {
      this.addData(urls.mouldDesk.addMouldDesk);
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
          },
          {
            text: "产线代码",
            value:
              (this.produceLineArray.length > 0 &&
                this.produceLineArray[0].code) ||
              "",
            type: "input",
            requestField: "lineCode",
            require: false,
            isHide: true
          }
        ],
        viewData.add.addMouldDesk
      );
    }
  },
  mounted() {
    this._extendViewData();
  }
};
</script>

