<template>
  <div>
    <div>添加员工</div>
    <div class="from-wrap">
      <div class="form-line">
        <label>员工名称:</label>
        <Input style="width: 300px" v-model="name"/>
      </div>
      <div class="form-line">
        <label>手机:</label>
        <Input style="width: 300px" v-model="tellphone"/>
      </div>
      <div class="form-line">
        <label>地址:</label>
        <Input style="width: 300px" v-model="address"/>
      </div>
      <div class="form-line">
        <label>email:</label>
        <Input style="width: 300px" v-model="email"/>
      </div>
      <div class="form-line">
        <label>修改人:</label>
        <Input style="width: 300px" v-model="modifer"/>
      </div>
      <div class="form-line">
        <label>所有者:</label>
        <Input style="width: 300px" v-model="owner"/>
      </div>
      <div class="form-line">
        <label>责任人:</label>
        <Input style="width: 300px" v-model="responsible"/>
      </div>
      <div class="form-line">
        <label>usercode:</label>
        <Input style="width: 300px" v-model="code"/>
        <span>必填</span>
      </div>

      <div class="form-line">
        <Button type="primary" class="btn-submit" @click="addEmp">确定</Button>
        <Button type="warning" class="btn-submit">
          <router-link to="/components/tables_page/employee" class="routerlink">取消</router-link>
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import urls from "@/urls.js";
import axios from "axios";

import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      address: "",
      code: "",
      modifer: "",
      owner: "",
      responsible: "",
      email: "",
      tellphone: ""
    };
  },
  computed: mapState(["companyArray", "departmentArray"]),
  methods: {
    async addEmp() {
      console.log("addEmp");

      let name = this.name;
      let address = this.address;
      let code = this.code;
      let modifer = this.modifer;
      let owner = this.owner;
      let responsible = this.responsible;
      let email = this.email;
      let tellphone = this.tellphone;

      if (code == "") {
        this.$Message.info("code必须填写");
        return;
      }

      let data = {
        username: name,
        address,
        usercode: code,
        modifer,
        owner,
        responsible,
        companycode: this.companyArray[0].code,
        deptcode: this.departmentArray[0].code
      };

      let url = urls.employee.addPcPerson;

      let jsondata = await axios({
        url,
        method: "post",
        data,
        headers: {
          "Content-Type": " application/json"
        }
      });

      if (jsondata.status == 200) {
        if (jsondata.data.msgId == 200) {
          this.$Message.info("添加员工成功");
        } else {
          this.$Message.info("添加员工失败");
        }
      } else {
        this.$Message.info("添加员工失败");
      }
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
</style>

