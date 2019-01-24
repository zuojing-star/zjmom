<template>
  <div>
    <div>添加公司</div>
    <div class="from-wrap">
      <div class="form-line">
        <label>input:</label>
        <Input placeholder="Enter something..." style="width: 300px"/>
      </div>

      <div class="form-line">
        <label>select:</label>
        <Select style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>

      <div class="form-line">
        <label>radio:</label>
        <RadioGroup>
          <Radio label="金斑蝶"></Radio>
          <Radio label="爪哇犀牛"></Radio>
          <Radio label="印度黑羚"></Radio>
        </RadioGroup>
      </div>

      <div class="form-line">
        <label>checkbox:</label>
        <CheckboxGroup>
          <Checkbox label="香蕉"></Checkbox>
          <Checkbox label="苹果"></Checkbox>
          <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
      </div>

      <div class="form-line">
        <label>date picker:</label>
        <Row>
          <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
          <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </Row>
      </div>

      <div class="form-line">
        <Button type="primary" class="btn-submit">确定</Button>
        <Button type="warning" class="btn-submit">
          <router-link to="/components/tables_page/company" class="routerlink">取消</router-link>
        </Button>
      </div>
    </div>
  </div>
</template>

<style>
.btn-submit {
  margin-right: 10px;
}
.routerlink {
  width: 100%;
  height: 100%;
  display: inline-block;
}
</style>

