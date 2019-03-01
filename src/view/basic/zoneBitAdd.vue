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
  computed: mapState(["zoneBitArray", "storageYardArray"]),
  data() {
    return {
      data: [],
      title: "添加区位"
    };
  },
  components: {
    Form
  },
  methods: {
    addSubmit() {
      this.addData(urls.zoneBit.addZoneBit);
    },
    _extendViewData() {
      this.data = this.extendViewData(
        [
          {
            text: "堆场代码",
            value: this.storageYardArray[0].code,
            type: "input",
            requestField: "yardCode",
            require: true,
            isHide: true
          }
        ],
        viewData.add.addZoneBit
      );
    }
  },

  mounted() {
    this._extendViewData();
  }
};
</script>


