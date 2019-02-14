<template>
  <div>
    <div>
      <Table
        border
        ref="selection"
        :columns="columns"
        :data="PcEmployee"
        @on-select="selectOne"
        @on-selection-change="selectChange"
      ></Table>
      <Page :total="100" class="pagesplit"/>
    </div>
  </div>
</template>
<script>
import urls from "@/urls.js";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import qs from "qs";

export default {
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "员工",
          key: "username"
        },
        {
          title: "所属部门",
          key: "deptcode"
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
          title: "联系方式",
          key: "tellphone"
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
          title: "所属公司",
          key: "companycode"
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
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      console.log(params);

                      this.$Modal.confirm({
                        title: "确定删除部门么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delPcPerson(params.row.usercode);
                        },
                        onCancel: () => {}
                      });
                    }
                  }
                },
                "修改"
              ),
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
                        title: "确定删除部门么？",
                        content: "<p></p>",
                        onOk: () => {
                          this.delPcPerson(params.row.usercode);
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
      PcEmployee: []
    };
  },
  computed: mapState(["departmentArray", "companyArray"]),
  methods: {
    ...mapMutations(["choosedDepartmentArray"]),
    selectOne() {},
    selectChange(selection) {
      this.choosedDepartmentArray(selection);
    },

    getDepartmentName(company) {
      return company[0].name;
    },
    async delPcPerson(code) {
      let url = urls.employee.delPcPerson;
      let data = qs.stringify({ userCode: code });
      console.log(data);
      let jsondata = await axios.post(url, data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      if (jsondata.data.msgId == 200) {
        if (this.departmentArray.length == 1) {
          this.getPcEmployee(urls.employee.getPcPersonListByUserNameD, {
            deptCode: this.departmentArray[0].code
          });
        } else {
          this.getPcEmployee(urls.employee.getPcPersonListByUserNameC, {
            companyCode: this.companyArray[0].code
          });
        }
        this.$Message.info("删除员工成功");
      } else {
        this.$Message.info("删除员工失败");
      }
    },

    async getPcEmployee(url, params) {
      let jsondata = await axios({
        url,
        method: "get",
        params,
        headers: {
          "Content-Type": " application/x-www-form-urlencoded"
        }
      });

      if (jsondata.status == 200) {
        this.PcEmployee = jsondata.data.data;
      }
    }
  },
  mounted() {
    if (this.departmentArray.length == 1) {
      console.log("部门查询");
      this.getPcEmployee(urls.employee.getPcPersonListByUserNameD, {
        deptCode: this.departmentArray[0].code
      });
    } else {
      console.log("公司查询");
      this.getPcEmployee(urls.employee.getPcPersonListByUserNameC, {
        companyCode: this.companyArray[0].code
      });
    }
  }
};
</script>
<style>
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
.pagesplit {
  max-width: 431px;
  margin: 10px auto;
}
</style>
