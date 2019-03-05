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
      title: "添加角色"
    };
  },
  components: {
    Form
  },
  computed: mapState(["factoryArray", "produceLineArray"]),
  methods: {
    addSubmit() {
      this.addData(urls.role.addRole);
    },
    async getProduceLineData(factoryCode) {
      let res = await this.getDataWithoutResponse(
        urls.productLine.getProductLine,
        {
          obj: {
            pageIndex: 0,
            facCode: this.factoryArray && this.factoryArray[0].code
          }
        }
      );
      return res.data.jsonData;
    },
    addSubmit() {
      this.addData(urls.role.addRole);
    },
    async _fillViewData() {
      let data = await this.getProduceLineData();

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
        this.fillViewData(viewData.add.addRole, "scope", "selectData", data)
      );
    }
  },
  async mounted() {
    this._fillViewData();
  }
};
</script>


