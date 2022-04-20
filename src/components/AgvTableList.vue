<template>
  <div class="pCard">
    <div class="title">AGV叫料</div>
    <div>
      <el-table border height="350" :data="tableData" style="width: 100%">
        <el-table-column prop="sourceNo" label="料点编号" align="center" />
        <el-table-column
          prop="sourceName"
          label="料点名称"
          align="center"
        />
        <el-table-column label="料点状态" align="center">
          <template slot-scope="scope">
            <span :class="{red: statusFilter(scope.row.statusOk)}">
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
      return str.indexOf('失败') > -1;
    },
  },
};
</script>

<style scoped>
.pCard {
  padding: 10px;
  background-size: 100% 100%;
  background-image: url("~@/assets/border.jpg");
}
.title {
  font-size: 14px;
  font-weight: 600;
  background-color: #d8edff;
  text-align: center;
  padding: 5px 0;

  background: linear-gradient(-118deg, transparent 6px, #d8edff 0) right,
    linear-gradient(124deg, transparent 9px, #d8edff 0) left;
  background-size: 60% 100%;
  background-repeat: no-repeat;
}
.red {
  color: red;
}
::v-deep .el-table .el-table__cell {
  padding: 5px 0;
}
</style>
