import ajax from "@/ajax.js";
//组件间 共享
export default {
  data() {
    return {
      lastCode: "",
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
      let params = {
        code
      };
      let result = await ajax.post(url, params);
      this.delResponse(result, callback);
    },
    async updateData() {},
    //isShowParent:boolean 是否传递父级数据
    async getData({
      url,
      params,
      page,
      isShowParent,
      firstParentArray,
      secondParentArray
    }) {
      let result = await ajax.post(url, params);
      if (result.status == 200)
        this.renderData({
          page,
          result,
          isShowParent,
          firstParentArray,
          secondParentArray
        });
      else alert("接口调用失败!");
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

    //
    async add(url, params) {
      let result = await ajax.post(url, params);
      this.addResponse(result);
    },
    //渲染页面数据  choosedArray 1级数据 ，chooseDeptArray 2级数据 -> 3级页面
    renderData({
      page,
      result,
      isShowParent,
      firstParentArray,
      secondParentArray
    }) {
      if (result.data.type == 1) {
        if (result.data.jsonData.length == 0) {
          this.$Message.info("没有数据!");
          this.data = [];
        } else {
          let tempdata = [];

          //设置check
          if (secondParentArray && secondParentArray.length > 0) {
            tempdata = this.setChecked(secondParentArray, result);
          } else if (firstParentArray && firstParentArray.length > 0) {
            tempdata = this.setChecked(firstParentArray, result);
          } else {
            tempdata = result.data.jsonData;
          }

          //父级传递数据
          if (isShowParent) {
            this.data = tempdata.map(k => {
              if (secondParentArray && secondParentArray.length > 0) {
                switch (
                  getParentType(
                    secondParentArray[0].code || firstParentArray[0].projCode
                  )
                ) {
                  case "CX":
                    k.lineName = secondParentArray[0].name;
                    k.lineCode =
                      secondParentArray[0].code || firstParentArray[0].projCode;
                    break;
                  case "BM":
                    k.deptName = secondParentArray[0].name;
                    k.deptCode =
                      secondParentArray[0].code || firstParentArray[0].projCode;
                    break;
                  case "AREA":
                    k.areaName = secondParentArray[0].name;
                    k.areaCode =
                      secondParentArray[0].code || firstParentArray[0].projCode;
                    break;
                }
              }

              function getParentType(sParentCode) {
                return sParentCode.split("-")[0];
              }

              if (firstParentArray && firstParentArray.length > 0) {
                switch (
                  getParentType(
                    firstParentArray[0].code || firstParentArray[0].projCode
                  )
                ) {
                  case "GS":
                    k.compName = firstParentArray[0].name;
                    k.compCode =
                      firstParentArray[0].code || firstParentArray[0].projCode;
                    break;
                  case "FAC":
                    k.facName = firstParentArray[0].name;
                    k.facCode =
                      firstParentArray[0].code || firstParentArray[0].projCode;
                    break;
                  case "YARD":
                    k.yardName = firstParentArray[0].name;
                    k.yardCode =
                      firstParentArray[0].code || firstParentArray[0].projCode;
                    break;
                  default:
                    k.projName = firstParentArray[0].name;
                    k.projCode =
                      firstParentArray[0].code || firstParentArray[0].projCode;
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

          this.setPage(result.data.pageAll);
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
