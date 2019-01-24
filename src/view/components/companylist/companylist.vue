<template>
  <div>
    <Table
      border
      ref="selection"
      :columns="columns4"
      :data="data1"
      height="200"
      @on-select="selectOne"
    ></Table>
    {{ aaa }}
    <Page :total="100" class="pagesplit"/>
  </div>

  <!-- <div class="liketable">
    <dl class="table-heade">
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
      <dd class="table-head-col">11111</dd>
    </dl>

    <div class="table-item-wrap">
      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >
          11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>

      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >
          11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>

      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>

      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>
      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>
      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>
      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>
      <ul class="table-item">
        <li class="table-item-col">
          <img
            class="tag-icon"
            src="http://static-cdn.ceair.com/resource/images/AirlineLogo/mu.png"
          >11111
        </li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
        <li class="table-item-col">11111</li>
      </ul>

      <Page :total="100"/>
    </div>
  </div>-->
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
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
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  computed: {
    aaa() {
      return this.$store.state.canAddCompany;
    }
  },
  methods: {
    ...mapMutations({
      chooseOneCompany: "chooseOneCompany"
    }),
    selectOne(selection, row) {
      console.log("选中的一行", row);
      console.log("选中的数组", selection);
      console.log("selectOne", this.$refs.selection);
      this.chooseOneCompany();
      // this.$store.commit("chooseOneCompany");
    }
  }
};
</script>
<style>
.pagesplit {
  max-width: 431px;
  margin: 10px auto;
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
