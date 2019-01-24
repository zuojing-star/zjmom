<template>
  <div class="liketable">
    <dl class="table-heade">
      <dd class="table-head-col">部门列表</dd>
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
  </div>
</template>
<script>
export default {}
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
</style>
