//组件间 共享
export default {
  data() {
    return {
      page: 1,
      totalPage: 0,
      data: []
    };
  },

  methods: {
    //渲染页面数据
    renderData(choosedArray, result, page) {
      if (choosedArray.length > 0) {
        this.data = this.setChecked(choosedArray, result);
      } else {
        this.data = result.data.jsonData;
      }
      this.setPage(result.data.size);
      this.updatePage(page);
    },
    //设置分页
    updatePage(nowpage) {
      this.page = nowpage;
    },
    //设置分页
    setPage(totalPage) {
      this.totalPage = totalPage;
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
    getResponse(result, array, page) {
      if (result.status == 200) this.renderData(array, result, page);
      else alert("接口调用失败!");
    },
    //表单 必填 验证
    validRequireForm(columns) {
      for (var i = 0; i < columns.length; i++) {
        if (columns[i].require && columns[i].value == "") {
          this.$Message.info(`${columns[i].text}必须填写`);
          return false;
        }
      }
      return true;
    },
    //跳转页面
    jumpTo(index, reqArray, errMsg) {
      console.log("index:", index);
      console.log("reqArray:", reqArray);
      console.log("errMsg:", errMsg);

      for (let i = 0; i < this.operation.length; i++) {
        if (i == index) {
          if (this.operation[i].require) {
            if (reqArray.length == 1) {
              this.jumpPage(this.operation[i].path);
            } else {
              this.$Modal.error({
                title: `至少选择一个${errMsg}`
              });
            }
          } else {
            this.jumpPage(this.operation[i].path);
          }
          return;
        }
      }
    },
    //跳转页面
    jumpPage(path) {
      this.$router.push({
        path
      });
    },
    //获取请求参数
    getRequestParams(data) {
      let obj = {};
      data.forEach(k => {
        obj[k.requestField] = k.value;
      });
      return obj;
    }
  }
};
