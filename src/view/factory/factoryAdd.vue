<template class="addcompany">
  <div class="addtemp">
    <h1 class="add-title">添加公司</h1>
    <div class="from-wrap">
      <div class="form-line">
        <label>公司名称:</label>
        <Input class="add-input" v-model="name"/>
        <span class="require-column">必填</span>
      </div>

      <div class="form-line">
        <label>地址:</label>
        <Input class="add-input" v-model="address"/>
      </div>
      <div class="form-line">
        <label>修改人:</label>
        <Input class="add-input" v-model="modifer"/>
      </div>
      <div class="form-line">
        <label>所有者:</label>
        <Input class="add-input" v-model="owner"/>
      </div>
      <div class="form-line">
        <label>责任人:</label>
        <Input class="add-input" v-model="responsible"/>
      </div>
      <div class="form-line">
        <label>code:</label>
        <Input class="add-input" v-model="code"/>
        <span class="require-column">必填</span>
      </div>

      <div class="form-line">
        <Button type="primary" class="btn-submit" @click="addCompany">确定</Button>
        <Button type="warning" class="btn-submit">
          <router-link to="/components/tables_page/company" class="routerlink">取消</router-link>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>





