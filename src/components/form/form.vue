<template>
  <div class="add-wrap ivu-card ivu-card-bordered ivu-card-body">
    <h1 class="add-title">{{title}}</h1>
    <div class="from-wrap">
      <div class="form-line" v-for="column in columns" :key="column.k">
        <label>{{ column.text }}:</label>
        <Input class="add-input" v-model="column.value"/>
        <span v-if="column.require" class="require-column">{{txt1}}</span>
      </div>

      <div class="form-line submit-wrap">
        <Button type="primary" class="btn-submit" @click="$emit('addSubmit')">{{txt2}}</Button>
        <Button type="warning" class="btn-submit" @click="backPage">{{txt3}}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/common-add.css";

export default {
  props: {
    title: String,
    columns: Array
  },
  data() {
    return {
      txt1: "必填",
      txt2: "确定",
      txt3: "取消"
    };
  },
  methods: {
    backPage() {
      this.$router.back(-1);
    }
  }
};
</script>