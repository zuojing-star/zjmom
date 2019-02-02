<template>
  <div class="liketable">
    <div class="table-item-wrap">
      <Table
        border
        ref="selection"
        :columns="columns"
        :data="PcDepartment"
        @on-select="selectOne"
        @on-selection-change="selectChange"
      ></Table>
      <Page :total="100"/>
    </div>
  </div>
</template>
<script>
import urls from '@/urls.js'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import qs from 'qs'

export default {
  data () {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '部门',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '所有者',
          key: 'owner'
        },
        {
          title: '责任人',
          key: 'responsible'
        },
        {
          title: '修改人',
          key: 'modifer'
        },
        {
          title: '创建时间',
          key: 'createdate'
        },
        {
          title: '修改时间',
          key: 'modifydate'
        },
        {
          title: '所属公司',
          key: 'companycode'
        }
      ],
      PcDepartment: []
    }
  },
  computed: mapState(['companyArray', 'departmentArray']),
  methods: {
    ...mapMutations(['choosedDepartmentArray']),
    selectOne () {},
    selectChange (selection) {
      this.choosedDepartmentArray(selection)
    },

    getCompanyName (company) {
      return company[0].name
    },
    async getPcDepartment () {
      let url = urls.department.getPcDepartment
      let data = {
        comp: this.getCompanyName(this.companyArray)
      }

      let jsondata = await axios({
        url,
        method: 'post',
        data: qs.stringify(data),
        headers: {
          'Content-Type': ' application/x-www-form-urlencoded'
        }
      })

      if (this.departmentArray.length > 0) {
        let name = this.departmentArray[0].name
        this.PcDepartment = jsondata.data.meseage.map(item => {
          if (item.name == name) {
            item._checked = true
          } else {
            item._checked = false
          }
          return item
        })
      } else {
        this.PcDepartment = jsondata.data.meseage
      }
    }
  },
  mounted () {
    this.getPcDepartment()
  }
}
</script>
<style>
.ivu-page {
  margin-top: 20px;
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
