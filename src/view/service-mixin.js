//组件间 共享
export default {
  data() {
    return {
      data: []
    };
  },

  methods: {
    //渲染页面数据
    renderData(choosedArray, result) {
      if (choosedArray.length > 0) {
        this.data = this.setChecked(choosedArray, result);
      } else {
        this.data = result.data.jsonData;
      }
    },
    //保存选中的状态
    setChecked(choosedArray, result) {
      return result.data.jsonData.map(item => {
        if (item.name == choosedArray[0].name) {
          item._checked = true;
        } else {
          item._checked = false;
        }
        return item;
      });
    },
    //处理 获取数据后的 响应
    getResponse(result, array) {
      if (result.status == 200) this.renderData(array, result);
      else alert("接口调用失败!");
    },
    //表单 必填 验证
    requireForm(columns) {
      for (var i = 0; i < columns.length; i++) {
        if (columns[i].require && columns[i].value == "") {
          this.$Message.info(`${columns[i].text}必须填写`);
          return false;
        }
      }
      return true;
    }
  }
};
