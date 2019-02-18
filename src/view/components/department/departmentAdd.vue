<template>
  <div>
    <h1 class="add-title">添加部门</h1>
    <div class="from-wrap">
      <div class="form-line">
        <label>部门名称:</label>
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
        <Button type="primary" class="btn-submit" @click="addDepartment">确定</Button>
        <Button type="warning" class="btn-submit">
          <router-link to="/components/tables_page/department" class="routerlink">取消</router-link>
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import urls from "@/urls.js";
import axios from "axios";
import ajax from "@/ajax.js";

import { mapState } from "vuex";

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
  computed: mapState(["companyArray"]),
  methods: {
    getParams() {
      let name = this.name;
      let address = this.address;
      let code = this.code;
      let modifer = this.modifer;
      let owner = this.owner;
      let responsible = this.responsible;

      if (name == "") {
        this.$Message.info("部门名称必须填写");
        return;
      }

      if (code == "") {
        this.$Message.info("code必须填写");
        return;
      }

      let data = {
        obj: {
          name,
          address,
          code: code,
          modifer,
          owner,
          responsible,
          companycode: this.companyArray[0].code
        }
      };

      return data;
    },
    cleanForm() {
      this.name = "";
      this.address = "";
      this.code = "";
      this.modifer = "";
      this.owner = "";
      this.responsible = "";
    },
    addResponse(result) {
      if (result.status == 200) {
        if (result.data.type == 200) {
          this.$Modal.confirm({
            title: "添加部门成功",
            content: "<p>是否继续添加</p>",
            onOk: () => {
              this.cleanForm();
            },
            onCancel: () => {
              this.$router.push({ path: "/components/tables_page/department" });
            }
          });
        } else {
          this.$Message.info("添加部门失败");
        }
      } else {
        this.$Message.info("添加部门失败");
      }
    },
    async addDepartment() {
      let url = urls.department.addPcDepartment;
      let result = await ajax.post(url, this.getParams());
      this.addResponse(result);
    }
  }
};
</script>

<style>
.btn-submit {
  margin-right: 10px;
}
.routerlink {
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #fff;
}
.add-title {
  padding: 10px;
}

.btn-submit {
  margin-right: 10px;
  width: 261px !important;
  height: 40px;
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

