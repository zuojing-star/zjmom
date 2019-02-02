<template>
  <div>
    <Card>
      <tables
        ref="tables"
        editable
        searchable
        search-place="top"
        v-model="tableData"
        :columns="columns"
        @on-delete="handleDelete"
      />
      <!-- <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button> -->
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
// import { getTableData } from '@/api/data'
import ajax from '@/ajax.js'
import urls from '@/urls.js'
import axios from 'axios'

export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { title: '学号', key: 'id', sortable: true },
        { title: '姓名', key: 'name', sortable: true },
        { title: '性别', key: 'sex', editable: true },
        { title: '地址', key: 'address' },
        { title: '出生年月', key: 'birth' },
        { title: '专业', key: 'department' },
        {
          title: 'Handle',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h(
                'Poptip',
                {
                  props: {
                    confirm: true,
                    title: '你确定要删除吗?'
                  },
                  on: {
                    'on-ok': () => {
                      vm.$emit('on-delete', params)
                      vm.$emit(
                        'input',
                        params.tableData.filter(
                          (item, index) => index !== params.row.initRowIndex
                        )
                      )
                    }
                  }
                },
                [h('Button', '自定义删除')]
              )
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    async findAll () {
      let res = await ajax.get(config.url.findAll)

      this.tableData = res.data.user
    },
    async findAllPcMaterial () {
      console.log('-------------')

      // let res = await ajax.get(config.url.PcMaterialFindAll);
      // console.log("---------", res);
      // this.tableData = res.data.user;
    },
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      })
    }
  },
  mounted () {

    // axios({
    //   method: "post",
    //   url: config.url.PcMaterialFindAll,
    //   data: {},
    //   timeout: 5000,
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    //   }
    // }).then(res => {
    //   console.log("res:", res);
    // });

    // this.findAll();
    // getTableData().then(res => {
    //   this.tableData = res.data;
    //   console.log("this.tableData", this.tableData);
    // });
  }
}
</script>

<style>
</style>
