<template class="addcompany">
  <div class="addtemp">
    <h1>添加公司</h1>
    <div class="from-wrap">
      <div class="form-line">
        <label>公司名称:</label>
        <Input style="width: 300px" v-model="name"/>
      </div>

      <div class="form-line">
        <label>地址:</label>
        <Input style="width: 300px" v-model="address"/>
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
        <label>code:</label>
        <Input style="width: 300px" v-model="code"/>
        <span>必填</span>
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
import axios from "axios";

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
    async addCompany() {
      let name = this.name;
      let address = this.address;
      let code = this.code;
      let modifer = this.modifer;
      let owner = this.owner;
      let responsible = this.responsible;

      if (code == "") {
        this.$Message.info("code必须填写");
        return;
      }

      //前端发送 请求格式
      // let webData = {
      //   obj: {
      //     name,
      //     address,
      //     code,
      //     modifer,
      //     owner,
      //     responsible
      //   },

      //   list: [{}, {}],

      //   str: "aaaa,bbbb,cccc"
      // };

      //后台返回格式
      // {
      //   type:200,
      //   size:0,
      //   jsonData:[]
      // }

      let url = urls.company.addPcCompany;

      let jsondata = await axios({
        url,
        method: "post",
        data: data111,
        headers: {
          "Content-Type": " application/json"
        }
      });

      if (jsondata.status == 200) {
        if (jsondata.data.msgId == 200) {
          this.$Message.info("添加公司成功");
        } else {
          this.$Message.info("添加公司失败");
        }
      } else {
        this.$Message.info("添加公司失败");
      }
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
  padding: 10px;
}
.btn-submit {
  margin-right: 10px;
}
.routerlink {
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #fff;
}
.form-line {
  text-align: center;
}
.from-wrap {
  margin: 0 auto;
  width: 633px;
}
</style>

