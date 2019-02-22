import ajax from "@/ajax.js";
import { getReqParams } from "@/libs/util.js";
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
    //功能 调用
    addData(url) {
      if (this.validRequireForm(this.data)) {
        let params = {
          obj: this.getRequestParams(this.data)
        };
        this.add(url, params);
      } else {
        console.log("不提交数据");
      }
    },
    async delData(url, code, callback) {
      let data = {
        str: code
      };
      console.log("删除员工：", data);
      let result = await ajax.post(url, data);
      this.delResponse(result, callback);
    },
    async updateData() {},
    async getData(
      url,
      reqParamsObj,
      chooseArray,
      page,
      showParent,
      chooseDeptArray
    ) {
      let params = getReqParams(reqParamsObj);
      let result = await ajax.post(url, params);
      this.getResponse(result, chooseArray, page, showParent, chooseDeptArray);
    },

    ////////////////////////////////////
    delResponse(result, callback) {
      if (result.data.type == 1) {
        callback && callback();
        this.$Message.info("删除成功");
      } else {
        this.$Message.info("删除失败");
      }
    },
    async add(url, params) {
      let result = await ajax.post(url, params);
      this.addResponse(result);
    },

    addResponse(result) {
      console.log("result:", result);
      if (result.status == 200) {
        if (result.data.type == 1) {
          this.$Modal.confirm({
            title: "添加成功",
            content: "<p>是否继续添加</p>",
            onOk: () => {
              this.cleanForm(this.data);
            },
            onCancel: () => {
              this.cleanForm(this.data);
              this.$router.back(-1);
            }
          });
        } else {
          this.$Message.info("添加失败");
        }
      } else {
        this.$Message.info("添加失败");
      }
    },
    //处理 获取数据后的 响应
    getResponse(result, array, page, showParent, chooseDeptArray) {
      if (result.status == 200)
        this.renderData(array, result, page, showParent, chooseDeptArray);
      else alert("接口调用失败!");
    },
    //渲染页面数据
    renderData(choosedArray, result, page, showParent, chooseDeptArray) {
      if (result.data.type == 1) {
        let tempdata = [];

        if (chooseDeptArray && chooseDeptArray.length > 0) {
          tempdata = this.setChecked(chooseDeptArray, result);
        } else if (choosedArray && choosedArray.length > 0) {
          tempdata = this.setChecked(choosedArray, result);
        } else {
          tempdata = result.data.jsonData;
        }
        if (showParent) {
          this.data = tempdata.map(k => {
            if (chooseDeptArray.length > 0) {
              k.deptName = chooseDeptArray[0].name;
              k.deptCode = chooseDeptArray[0].code;
            }
            k.compName = choosedArray[0].name;
            k.compCode = choosedArray[0].code;
            return k;
          });
        } else {
          this.data = tempdata;
        }

        this.setPage(result.data.size);
        this.updatePage(page);
      } else {
        console.log(result.data.jsonData);
      }
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
    jumpTo(index, requireArray, errMsg) {
      for (let i = 0; i < this.operation.length; i++) {
        let path = this.operation[i].path;
        if (i == index) {
          if (this.operation[i].require) {
            if (requireArray.length == 1) {
              this.jumpPage(path);
            } else {
              this.$Modal.error({
                title: `至少选择一个${errMsg}`
              });
            }
          } else {
            this.jumpPage(path);
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
    },
    cleanForm(data) {
      data.forEach(k => {
        if (!k.isHide) {
          k.value = "";
        }
      });
    },
    extendViewData(extArray, viewData) {
      return extArray.concat(viewData);
    }
  }
};
