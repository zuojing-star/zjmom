<template>
  <div class="add-wrap ivu-card ivu-card-bordered ivu-card-body" style="padding-top:10px;">
    <h1 class="add-title">{{title}}</h1>
    <div class="from-wrap">
      <template v-for="(column,index) in columns">
        <div class="form-line" v-if="column.type=='input' && !column.isHide" :key="index">
          <label>{{ column.text }}:</label>
          <Input class="add-input" v-model="column.value"/>
          <span v-if="column.require" class="require-column">{{txt1}}</span>
        </div>

        <div class="form-line" v-if="column.type=='textarea' && !column.isHide" :key="index">
          <label>{{ column.text }}:</label>
          <Input class="add-input" v-model="column.value" type="textarea"/>
          <span v-if="column.require" class="require-column">{{txt1}}</span>
        </div>

        <div class="form-line" :key="index" v-if="column.type=='select' && !column.isHide">
          <label>{{ column.text }}:</label>
          <Select class="add-select" v-model="column.value">
            <Option
              v-for="item in column.selectData"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
          <span v-if="column.require" class="require-column">{{txt1}}</span>
        </div>

        <div class="form-line" v-if="column.type=='radio' && !column.isHide" :key="index">
          <label>{{ column.text }}:</label>
          <RadioGroup v-model="column.value">
            <Radio v-for="item in column.radioData" :key="item.value" :label="item.label"></Radio>
          </RadioGroup>
          <span v-if="column.require" class="require-column">{{txt1}}</span>
        </div>

        <div class="form-line" v-if="column.type=='datepicker' && !column.isHide" :key="index">
          <label>{{ column.text }}:</label>
          <DatePicker type="date" @on-change="dateChange($event,column.requestField)"></DatePicker>
          <span v-if="column.require" class="require-column">{{txt1}}</span>
        </div>
      </template>

      <div class="submit-wrap" style="margin-left:90px;margin-bottom:10px;">
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
      txt2: "保存",
      txt3: "取消"
    };
  },
  methods: {
    dateChange(value, howKey) {
      this.$emit("dateChange", { value, howKey });
    },
    backPage() {
      this.$router.back(-1);
    }
  }
};
</script>

<style>
.add-select {
  margin-right: 20px;
}

.ivu-input {
  width: 436px;
}
</style>