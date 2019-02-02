<template>
  <div class="table-wrap">
    <Table
      border
      ref="selection"
      :columns="columns"
      :data="Pccompany"
      @on-select="selectOne"
      @on-selection-change="selectChange"
    ></Table>
    <Page :total="100" class="pagesplit"/>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import urls from "@/urls.js";
import axios from "axios";
import qs from "qs";

export default {
  props: ["zjtitle"],
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "公司",
          key: "name"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "所有者",
          key: "owner"
        },
        {
          title: "责任人",
          key: "responsible"
        },
        {
          title: "修改人",
          key: "modifer"
        },
        {
          title: "创建时间",
          key: "createdate"
        },
        {
          title: "修改时间",
          key: "modifydate"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      console.log(params);

                      this.$Modal.confirm({
                        title: "确定删除么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delPccompany(params.row.code);
                        },
                        onCancel: () => {}
                      });
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      Pccompany: []
    };
  },
  computed: mapState(["companyArray"]),
  methods: {
    async delPccompany(code) {
      let url = urls.company.delPccompnay;
      let data = qs.stringify({ code });
      let jsondata = await axios.post(url, data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      if (jsondata.data.msgId == 200) {
        this.getPccompany();
        this.$Message.info("删除成功");
      } else {
        this.$Message.info("删除失败");
      }
    },
    async getPccompany() {
      let url = urls.company.getPccompany;
      let jsondata = await axios.post(url);
      if (jsondata.status == 200) {
        if (this.companyArray.length > 0) {
          let name = this.companyArray[0].name;
          this.Pccompany = jsondata.data.data.map(item => {
            if (item.name == name) {
              item._checked = true;
            } else {
              item._checked = false;
            }
            return item;
          });
        } else {
          this.Pccompany = jsondata.data.data;
        }
      }
    },
    ...mapMutations([
      "chooseOneCompany",
      "choosedCompany",
      "choosedCompanyArray"
    ]),
    selectChange(selection) {
      this.choosedCompanyArray(selection);
    },
    selectOne(selection, row) {
      // console.log("选中的一行", row);
      // console.log("选中的数组", selection);
      // console.log("selectOne", this.$refs.selection);
      // this.chooseOneCompany();
      // this.$store.commit("chooseOneCompany");
    }
  },
  mounted() {
    this.getPccompany();
  }
};
</script>
<style>
.pagesplit {
  max-width: 431px;
  margin: 10px auto;
  /* position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -188px; */
}
.page-title {
  display: inline-block;
}
.page-title-wrap {
  padding: 0 0 20px 0;
}

.liketable {
  border: 1px solid #dbdbdb;
  overflow: hidden;
  color: #666;
  padding: 20px;
  border-radius: 4px;
}
.table-heade {
  display: flex;
  text-align: center;
  padding: 5px 20px;
  padding-right: 22px;
}
.table-head-col {
  flex: 1;
}
.table-item-wrap {
  padding: 0 20px;

  /* height: 200px;
  overflow-y: scroll; */
}
.table-item {
  color: #1c1c1c;
  overflow: hidden;
  list-style: none;
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
  display: flex;
}
.table-item-col {
  flex: 1;
  height: 38px;
  line-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  text-align: center;
  color: #1c1c1c;
  letter-spacing: -0.14px;
  padding-top: 0;
  margin-right: 2px;
}
.tag-icon {
  width: 14px;
  margin-right: 3px;
  /* vertical-align: middle; */
}
.button {
  margin-right: 10px;
  width: 100px;
}
.button-wrap {
  margin-bottom: 16px;
}
.form-line > label {
  display: inline-block;
  margin-right: 10px;
  width: 80px;
  text-align: right;
}
.ivu-checkbox-group {
  display: inline-block !important;
}
.ivu-row {
  display: inline-block !important;
}
.from-wrap {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 50px;
}
.form-line {
  margin-bottom: 20px;
}
.btn-submit {
  width: 162px !important;
}
</style>
