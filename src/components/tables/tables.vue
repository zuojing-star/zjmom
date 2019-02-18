<template>
  <div>
    <router-view></router-view>

    <!-- <div v-if="searchable && searchPlace === 'top'" class="search-con search-con-top">
      <Select v-model="searchKey" class="search-col">
        <Option
          v-for="item in columns"
          v-if="item.key !== 'handle'"
          :value="item.key"
          :key="`search-col-${item.key}`"
        >{{ item.title }}</Option>
      </Select>
      <Input
        @on-change="handleClear"
        clearable
        placeholder="输入关键字搜索"
        class="search-input"
        v-model="searchValue"
      />
      <Button @click="handleSearch" class="search-btn" type="primary">
        <Icon type="search"/>&nbsp;&nbsp;搜索
      </Button>
    </div>-->
    <!-- <Spin v-if="loading_state"></Spin> -->
    <!-- <Tabs :animated="false">
      <TabPane label="公司信息" icon="logo-apple">
        <div class="button-wrap">
          <Button class="button">添加</Button>
          <Button class="button">调整</Button>
          <Button class="button">删除</Button>
          <Button class="button">发布</Button>
        </div>

      </TabPane>
      <TabPane label="部门信息" icon="logo-windows">
        <div class="button-wrap">
          <Button class="button" ghost type="primary">添加</Button>
          <Button class="button">调整</Button>
          <Button class="button">删除</Button>
          <Button class="button">发布</Button>
        </div>

      </TabPane>
      <TabPane label="员工信息" icon="logo-tux">员工信息</TabPane>
      <TabPane label="工厂信息" icon="logo-tux">工厂信息</TabPane>
      <TabPane label="产线信息" icon="logo-tux">产线信息</TabPane>
    </Tabs>-->
    <!-- <Table
      ref="tablesMain"
      :data="insideTableData"
      :columns="insideColumns"
      :stripe="stripe"
      :border="border"
      :show-header="showHeader"
      :width="width"
      :height="height"
      :loading="loading"
      :disabled-hover="disabledHover"
      :highlight-row="highlightRow"
      :row-class-name="rowClassName"
      :size="size"
      :no-data-text="noDataText"
      :no-filtered-data-text="noFilteredDataText"
      @on-current-change="onCurrentChange"
      @on-select="onSelect"
      @on-select-cancel="onSelectCancel"
      @on-select-all="onSelectAll"
      @on-selection-change="onSelectionChange"
      @on-sort-change="onSortChange"
      @on-filter-change="onFilterChange"
      @on-row-click="onRowClick"
      @on-row-dblclick="onRowDblclick"
      @on-expand="onExpand"
    >
      <slot name="header" slot="header"></slot>
      <slot name="footer" slot="footer"></slot>
      <slot name="loading" slot="loading"></slot>
    </Table>-->
    <!-- <div>------{{loading_state}}</div>

    <div v-if="searchable && searchPlace === 'bottom'" class="search-con search-con-top">
      <Select v-model="searchKey" class="search-col">
        <Option
          v-for="item in columns"
          v-if="item.key !== 'handle'"
          :value="item.key"
          :key="`search-col-${item.key}`"
        >{{ item.title }}</Option>
      </Select>
      <Input placeholder="输入关键字搜索" class="search-input" v-model="searchValue"/>
      <Button class="search-btn" type="primary">
        <Icon type="search"/>&nbsp;&nbsp;搜索
      </Button>
    </div>
    <a id="hrefToExportTable" style="display: none;width: 0px;height: 0px;"></a>-->
    <!-- 测试循环 假数据 -->
    <!-- <div v-for="item in PcMaterials">
      <span>{{item.createdate}}</span>
    </div>-->
  </div>
</template>

<script>
import TablesEdit from "./edit.vue";
import handleBtns from "./handle-btns";
import { mapState } from "vuex";
import ajax from "@/ajax.js";
import config from "@/urls.js";

import "./index.less";
export default {
  name: "Tables",
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String,
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default() {
        return "";
      }
    },
    context: {
      type: Object
    },
    noDataText: {
      type: String
    },
    noFilteredDataText: {
      type: String
    },
    disabledHover: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * @description 全局设置是否可编辑
     */
    editable: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否可搜索
     */
    searchable: {
      type: Boolean,
      default: false
    },
    /**
     * @description 搜索控件所在位置，'top' / 'bottom'
     */
    searchPlace: {
      type: String,
      default: "top"
    }
  },
  /**
   * Events
   * @on-start-edit 返回值 {Object} ：同iview中render函数中的params对象 { row, index, column }
   * @on-cancel-edit 返回值 {Object} 同上
   * @on-save-edit 返回值 {Object} ：除上面三个参数外，还有一个value: 修改后的数据
   */
  data() {
    return {
      PcMaterials: [
        {
          createdate: 1548000000000
        },
        {
          createdate: 1548000000001
        },
        {
          createdate: 1548000000002
        }
      ],
      cityList: [1, 2, 3],
      insideColumns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      insideTableData: [],
      edittingCellId: "",
      edittingText: "",
      searchValue: "",
      searchKey: ""
    };
  },
  methods: {
    del() {},
    add() {},
    suportEdit(item, index) {
      item.render = (h, params) => {
        return h(TablesEdit, {
          props: {
            params: params,
            value: this.insideTableData[params.index][params.column.key],
            edittingCellId: this.edittingCellId,
            editable: this.editable
          },
          on: {
            input: val => {
              this.edittingText = val;
            },
            "on-start-edit": params => {
              this.edittingCellId = `editting-${params.index}-${
                params.column.key
              }`;
              this.$emit("on-start-edit", params);
            },
            "on-cancel-edit": params => {
              this.edittingCellId = "";
              this.$emit("on-cancel-edit", params);
            },
            "on-save-edit": params => {
              this.value[params.row.initRowIndex][
                params.column.key
              ] = this.edittingText;
              this.$emit("input", this.value);
              this.$emit(
                "on-save-edit",
                Object.assign(params, { value: this.edittingText })
              );
              this.edittingCellId = "";
            }
          }
        });
      };
      return item;
    },
    surportHandle(item) {
      let options = item.options || [];
      let insideBtns = [];
      options.forEach(item => {
        if (handleBtns[item]) insideBtns.push(handleBtns[item]);
      });
      let btns = item.button ? [].concat(insideBtns, item.button) : insideBtns;
      item.render = (h, params) => {
        params.tableData = this.value;
        return h("div", btns.map(item => item(h, params, this)));
      };
      return item;
    },
    handleColumns(columns) {
      this.insideColumns = columns.map((item, index) => {
        let res = item;
        if (res.editable) res = this.suportEdit(res, index);
        if (res.key === "handle") res = this.surportHandle(res);
        return res;
      });
    },
    setDefaultSearchKey() {
      this.searchKey =
        this.columns[0].key !== "handle"
          ? this.columns[0].key
          : this.columns.length > 1
          ? this.columns[1].key
          : "";
    },
    handleClear(e) {
      if (e.target.value === "") this.insideTableData = this.value;
    },
    handleSearch() {
      this.insideTableData = this.value.filter(
        item => item[this.searchKey].indexOf(this.searchValue) > -1
      );
    },
    handleTableData() {
      this.insideTableData = this.value.map((item, index) => {
        let res = item;
        res.initRowIndex = index;
        return res;
      });
    },
    exportCsv(params) {
      this.$refs.tablesMain.exportCsv(params);
    },
    clearCurrentRow() {
      this.$refs.talbesMain.clearCurrentRow();
    },
    onCurrentChange(currentRow, oldCurrentRow) {
      this.$emit("on-current-change", currentRow, oldCurrentRow);
    },
    onSelect(selection, row) {
      this.$emit("on-select", selection, row);
    },
    onSelectCancel(selection, row) {
      this.$emit("on-select-cancel", selection, row);
    },
    onSelectAll(selection) {
      this.$emit("on-select-all", selection);
    },
    onSelectionChange(selection) {
      this.$emit("on-selection-change", selection);
    },
    onSortChange(column, key, order) {
      this.$emit("on-sort-change", column, key, order);
    },
    onFilterChange(row) {
      this.$emit("on-filter-change", row);
    },
    onRowClick(row, index) {
      this.$emit("on-row-click", row, index);
    },
    onRowDblclick(row, index) {
      this.$emit("on-row-dblclick", row, index);
    },
    onExpand(row, status) {
      this.$emit("on-expand", row, status);
    }
  },
  watch: {
    columns(columns) {
      this.handleColumns(columns);
      this.setDefaultSearchKey();
    },
    value(val) {
      this.handleTableData();
      if (this.searchable) this.handleSearch();
    }
  },
  computed: {
    loading_state() {
      console.log("tables:", this.$store.state.abcd);
      return this.$store.state.abcd;
    }
  },
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count
  // }),
  // async getMaterial() {
  //   let jsondata = await ajax.post(config.url.PcMaterialFindAll);
  //   console.log("jsondata:", jsondata);
  // },

  mounted() {
    // this.getMaterial();
    this.handleColumns(this.columns);
    this.setDefaultSearchKey();
    this.handleTableData();
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
}
</style>
