<template>
  <div class="pCard">
    <div class="title">AGV叫料</div>
    <div>
      <el-table :cell-style="{borderColor:'#1e5c71', borderBottom: '2px solid #1e5c71'}" :header-cell-style="{color: '#ddd', borderColor:'#1e5c71', borderBottom: '2px solid #1e5c71' }" height="382" :data="tableData" style="width: 100%">
        <el-table-column prop="sourceNo" label="料点编号" align="center" />
        <el-table-column prop="sourceName" label="料点名称" align="center" />
        <el-table-column label="料点状态" align="center">
          <template slot-scope="scope">
            <span :class="{ red: statusFilter(scope.row.statusOk) }">
              {{ scope.row.statusOk }}
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgvTableList",
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    statusFilter(str) {
      return str.indexOf("失败") > -1;
    },
  },
};
</script>

<style scoped>
.pCard {
  padding: 30px;
  background-size: 100% 100%;
  background-image: url("~@/assets/border6.jpg");
}
.title {
  font-size: 14px;
  font-weight: 600;
  
  text-align: center;
  padding: 5px 0;
  /*
  background-color: #d8edff;
  background: linear-gradient(-118deg, transparent 6px, #d8edff 0) right,
    linear-gradient(124deg, transparent 9px, #d8edff 0) left;
  background-size: 60% 100%;
  background-repeat: no-repeat;
  */
}
.red {
  color: red;
}

::v-deep .el-table__empty-block{
  background: #091421;
}

::v-deep .el-table,.el-table__expanded-cell {
  background-color: transparent;

}

::v-deep .el-table tr {
  background-color: transparent !important;
  color: #ddd;
}
::v-deep .el-table__body td,::v-deep .el-table__header th,
.el-table .cell {
  background-color: transparent;
}
::v-deep .el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}

::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
  background: #133849; 
}


</style>
