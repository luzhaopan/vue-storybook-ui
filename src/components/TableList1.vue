<template>
  <div class="pCard">
    <div class="title">产品产量看板</div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="wipOrderNo" label="工单号" align="center" />
        <el-table-column
          prop="productAlias"
          label="成品简码ProductAlias"
          align="center"
        />
        <el-table-column prop="quantity" label="工单需求数量" align="center" />
        <el-table-column prop="okValue" label="OK数量" align="center" />
        <el-table-column prop="ngValue" label="NG数量" align="center" />
        <el-table-column
          prop="serisNullValue"
          label="扫描失败数量"
          align="center"
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
  name: "TableList",
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // tableData: [
      //   {
      //     wipOrderNo: "880000181012",
      //     productAlias: "W201B",
      //     quantity: 160,
      //     okValue: 10,
      //     ngValue: 6,
      //     serisNullValue: 30,
      //     scheduledStartDate: "2022-03-09T02:55:26.272Z",
      //     scheduledCompleteDate: "2022-03-09T02:55:26.272Z",
      //     prodValue: 0,
      //   },
      //   {
      //     wipOrderNo: "886600011012",
      //     productAlias: "W601B",
      //     quantity: 60,
      //     okValue: 10,
      //     ngValue: 6,
      //     serisNullValue: 30,
      //     scheduledStartDate: "2022-03-09T02:55:26.272Z",
      //     scheduledCompleteDate: "2022-03-09T02:55:26.272Z",
      //     prodValue: 0,
      //   },
      // ],
    };
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
  /* position: relative; */
  /* border: 1px solid #eee; */
  padding: 10px;
  background-size: 100% 100%;
  /* background-repeat: no-repeat; */
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
::v-deep .el-table .el-table__cell {
  padding: 5px 0;
}
</style>
