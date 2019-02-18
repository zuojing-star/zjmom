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
import urls from "@/urls.js";
import ajax from "@/ajax.js";

export default {
  data() {
    return {
      name: "",
      address: "",
      code: "",
      modifer: "",
      owner: "",
      responsible: ""
    };
  },
  methods: {
    getParams() {
      let name = this.name;
      let address = this.address;
      let code = this.code;
      let modifer = this.modifer;
      let owner = this.owner;
      let responsible = this.responsible;

      if (name == "") {
        this.$Message.info("公司名称必须填写");
        return;
      }

      if (code == "") {
        this.$Message.info("code必须填写");
        return;
      }

      let params = {
        obj: {
          name,
          address,
          code,
          modifer,
          owner,
          responsible
        }
      };
      return params;
    },
    cleanForm() {
      this.name = "";
      this.address = "";
      this.code = "";
      this.modifer = "";
      this.owner = "";
      this.responsible = "";
    },
    //处理响应
    addResponse(result) {
      if (result.status == 200) {
        if (result.data.type == 200) {
          this.$Modal.confirm({
            title: "添加公司成功",
            content: "<p>是否继续添加</p>",
            onOk: () => {
              this.cleanForm();
            },
            onCancel: () => {
              this.$router.push({ path: "/components/tables_page/company" });
            }
          });
        } else {
          this.$Message.info("添加公司失败");
        }
      } else {
        this.$Message.info("添加公司失败");
      }
    },
    async addCompany() {
      let url = urls.company.addPcCompany;
      let result = await ajax.post(url, this.getParams());
      this.addResponse(result);
    }
  }
};
</script>

<style>
.add-title {
  padding: 10px;
}

.btn-submit {
  margin-right: 10px;
  width: 261px !important;
  height: 40px;
}
.routerlink {
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #fff;
}

.from-wrap {
  width: 684px;
}
.require-column {
  color: red;
}
.add-input {
  width: 436px !important;
}
</style>

