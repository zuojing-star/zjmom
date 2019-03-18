<template>
  <div class="table-wrap">
    <Table
      border
      ref="selection"
      :columns="columns"
      :data="data"
      @on-select="selectOne"
      @on-selection-change="selectChange"
    ></Table>
    <div class="page-wrap" v-if="!hidePage">
      <Page :total="totalPage" class="pagesplit" @on-change="pageChange" :page-size="pagesize"/>
      <div class="pagetext">共{{Math.ceil(totalPage/pagesize)}}页/每页{{pagesize}}条</div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import urls from "@/urls.js";
import axios from "axios";

export default {
  data() {
    return {
      pagesize: 15
    };
  },
  props: {
    columns: Array,
    data: Array,
    checkedSource: String,
    totalPage: Number,
    hidePage: Boolean //是否分页
  },
  methods: {
    pageChange(page) {
      this.$emit("pageChange", page);
    },
    async getPccompany() {
      let url = urls.company.getPccompany;
      let jsondata = await axios.post(url);
      if (jsondata.status == 200) {
        this.Pccompany = jsondata.data.data;
      }
    },
    ...mapMutations(["updateArrayState"]),
    selectChange(selection) {
      console.log("selection:", selection);
      this.updateArrayState(selection);
    },
    selectOne(selection, row) {
      // console.log("选中的一行", row);
      // console.log("选中的数组", selection);
      // console.log("selectOne", this.$refs.selection);
    }
  }
};
</script>
<style>
.pagetext {
  float: left;
  height: 32px;
  line-height: 52px;
  margin-left: 10px;
}
.page-wrap {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -100px;
}
.pagesplit {
  float: left;
  max-width: 431px;
  margin: 10px auto;
  /* position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -100px; */
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
}
</style>
