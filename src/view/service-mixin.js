import ajax from "@/ajax.js";
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
    //======= 功能 调用 =======//
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
      let result = await ajax.post(url, data);
      this.delResponse(result, callback);
    },
    async updateData() {},
    //showParent:boolean 是否传递父级数据
    async getData(
      url,
      reqParamsObj,
      chooseArray,
      page,
      showParent,
      chooseDeptArray
    ) {
      let result = await ajax.post(url, reqParamsObj);
      this.getResponse(result, chooseArray, page, showParent, chooseDeptArray);
    },
    async getDataWithoutResponse(url, reqParamsObj) {
      return await ajax.post(url, reqParamsObj);
    },

    //======= 处理 响应 =======//
    delResponse(result, callback) {
      if (result.data.type == 1) {
        callback && callback();
        this.$Message.info("删除成功");
      } else {
        this.$Message.info("删除失败");
      }
    },
    addResponse(result) {
      if (result.status == 200) {
        if (result.data.type == 1) {
          this.$Modal.confirm({
            title: "添加成功",
            content: "<p>添加成功!是否继续添加?</p>",
            onOk: () => {
              this.cleanForm(this.data);
            },
            onCancel: () => {
              this.cleanForm(this.data);
              this.$router.back(-1);
            }
          });
        } else if (result.data.type == 3) {
          this.$Message.error("编码重复!");
        } else {
          this.$Message.info("添加失败");
        }
      } else {
        this.$Message.info("添加失败");
      }
    },
    getResponse(result, array, page, showParent, chooseDeptArray) {
      if (result.status == 200)
        this.renderData(array, result, page, showParent, chooseDeptArray);
      else alert("接口调用失败!");
    },

    //
    async add(url, params) {
      let result = await ajax.post(url, params);
      this.addResponse(result);
    },
    //渲染页面数据  choosedArray 1级数据 ，chooseDeptArray 2级数据 -> 3级页面
    renderData(choosedArray, result, page, showParent, chooseDeptArray) {
      if (result.data.type == 1) {
        if (result.data.jsonData.length == 0) {
          this.$Message.info("没有数据!");
          this.data = [];
        } else {
          let tempdata = [];

          //设置check
          if (chooseDeptArray && chooseDeptArray.length > 0) {
            tempdata = this.setChecked(chooseDeptArray, result);
          } else if (choosedArray && choosedArray.length > 0) {
            tempdata = this.setChecked(choosedArray, result);
          } else {
            tempdata = result.data.jsonData;
          }

          //父级传递数据
          if (showParent) {
            this.data = tempdata.map(k => {
              if (chooseDeptArray && chooseDeptArray.length > 0) {
                console.log("chooseDeptArray:", chooseDeptArray);
                switch (
                  getParentType(
                    chooseDeptArray[0].code || choosedArray[0].projCode
                  )
                ) {
                  case "CX":
                    k.lineName = chooseDeptArray[0].name;
                    k.lineCode =
                      chooseDeptArray[0].code || choosedArray[0].projCode;
                    break;
                  case "BM":
                    k.deptName = chooseDeptArray[0].name;
                    k.deptCode =
                      chooseDeptArray[0].code || choosedArray[0].projCode;
                    break;
                  case "AREA":
                    k.areaName = chooseDeptArray[0].name;
                    k.areaCode =
                      chooseDeptArray[0].code || choosedArray[0].projCode;
                    break;
                }
              }

              function getParentType(sParentCode) {
                console.log("sParentCode:", sParentCode);
                return sParentCode.split("-")[0];
              }

              if (choosedArray && choosedArray.length > 0) {
                console.log("choosedArray------:", choosedArray);
                switch (
                  getParentType(
                    choosedArray[0].code || choosedArray[0].projCode
                  )
                ) {
                  case "GS":
                    k.compName = choosedArray[0].name;
                    k.compCode =
                      choosedArray[0].code || choosedArray[0].projCode;
                    break;
                  case "FAC":
                    k.facName = choosedArray[0].name;
                    k.facCode =
                      choosedArray[0].code || choosedArray[0].projCode;
                    break;
                  case "YARD":
                    k.yardName = choosedArray[0].name;
                    k.yardCode =
                      choosedArray[0].code || choosedArray[0].projCode;
                    break;
                  default:
                    k.projName = choosedArray[0].name;
                    k.projCode =
                      choosedArray[0].code || choosedArray[0].projCode;
                }
              }

              return k;
            });
          } else {
            this.data = tempdata;
          }

          //处理时间默认值
          this.data = tempdata.map(k => {
            if (k.planEnd) {
              if (k.planEnd == "2000-01-01 00:00:00.0") {
                k.planEnd = "";
              } else {
                k.planEnd = k.planEnd.substring(0, 10);
              }
            }

            if (k.planStart) {
              if (k.planStart == "2000-01-01 00:00:00.0") {
                k.planStart = "";
              } else {
                k.planStart = k.planStart.substring(0, 10);
              }
            }

            return k;
          });

          this.setPage(result.data.size);
          this.updatePage(page);
        }
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
        if (item.code == choosedArray[0].code) {
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
        if (
          columns[i].require &&
          (!columns[i].value || columns[i].value == "")
        ) {
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
    goBack() {
      this.$router.back(-1);
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
        if (!k.isHide && !k.defaultValue) {
          k.value = "";
        }
        if (k.defaultValue && k.tempValue) {
          k.value = k.tempValue;
        }
      });
    },
    extendViewData(extArray, viewData) {
      return extArray.concat(viewData);
    },
    //填充数据
    fillViewData(
      viewData,
      whichFieldFromRequestfiled,
      whichDataFiledInObjectToFilled,
      filldata
    ) {
      let oFiled = viewData.find(o => {
        return o.requestField == whichFieldFromRequestfiled;
      });

      let produceLines = filldata.map(k => {
        return {
          value: k.code,
          label: k.name
        };
      });
      produceLines.unshift({
        value: "all",
        label: "全工厂"
      });

      oFiled[whichDataFiledInObjectToFilled] = produceLines;

      return viewData;
    }
  }
};
