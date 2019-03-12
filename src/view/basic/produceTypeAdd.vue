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

console.log("viewData.add.addProduceType", viewData.add.addProduceType);

export default {
  mixins: [mixin],
  data() {
    return {
      data: viewData.add.addProduceType,
      title: "添加类型"
    };
  },
  computed: mapState(["factoryArray"]),
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(urls.produceType.createSCTypeInfo);
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
        viewData.add.addProduceType
      );
    }
  },
  mounted() {
    this._extendViewData();
  }
};
</script>
