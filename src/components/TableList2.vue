<template>
  <div class="pCard">
    <div class="title">产品产量看板</div>
    <div>
      <el-table :cell-style="{borderColor:'#1e5c71', borderBottom: '2px solid #1e5c71'}" :header-cell-style="{color: '#ddd', borderBottom: '2px solid #1e5c71' }" height="265" :data="tableData" style="width: 100%">
        <el-table-column prop="wipOrderNo" label="工单号" align="center" width="125px" />
        <el-table-column
          prop="productAlias"
          label="成品简码"
          align="center"
          width="120px" 
        />
        <el-table-column prop="quantity" label="工单数量" align="center" width="60px"   />
        <el-table-column prop="okValue" label="合格数量" align="center" width="60px"   />
        <el-table-column prop="ngValue" label="不合格数量" align="center" width="70px"      />
         
        <el-table-column
          prop="serisNullValue"
          label="扫描失败数量"
          align="center"
          width="80px"
     
        /> 
        <el-table-column
          prop="scheduledStartDate"
          label="计划开工时间"
          align="center"
        >
          <template slot-scope="scope">
            {{ timeFilter(scope.row.scheduledStartDate) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="scheduledCompleteDate"
          label="计划完工时间"
          align="center"
        >
          <template slot-scope="scope">
            {{ timeFilter(scope.row.scheduledCompleteDate) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableList2",
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    timeFilter(val) {
      return this.$moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style scoped>
.pCard {
  padding: 24px 35px;
  background-size: 100% 100%;
  background-image: url("~@/assets/border5.jpg");
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
