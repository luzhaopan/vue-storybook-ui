<template>
  <div class="pCard">
    <div class="title">数据检测</div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="工件名称" align="center" />
        <el-table-column prop="qrCode" label="工件二维码" align="center" />
        <el-table-column prop="lDiameter" label="直径左" align="center" />
        <el-table-column prop="mDiameter" label="直径中" align="center" />
        <el-table-column prop="rDiameter" label="直径右" align="center" />
        <el-table-column prop="cDiameter1" label="槽径1" align="center" />
        <el-table-column prop="wDiameter1" label="外径1" align="center" />
        <el-table-column prop="cDiameter2" label="槽径2" align="center" />
        <el-table-column prop="wDiameter2" label="外径2" align="center" />
        <el-table-column prop="result" label="结果" align="center" />
        <el-table-column prop="date" label="检测日期" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableList",
  props: {
    infoData: Object,
  },
  data() {
    return {
      tableData: [
        {
          name: "W201B",
          qrCode: "201B21134123r1CG",
          lDiameter: "84.32",
          mDiameter: "85.54",
          rDiameter: "85.19",
          cDiameter1: "48.99",
          wDiameter1: "63.97",
          cDiameter2: "56.33",
          wDiameter2: "76.53",
          result: "NG",
          date: "2022-11-10 09:11:45",
        },
        {
          name: "W201B",
          qrCode: "201B2113432123r1CG",
          lDiameter: "84.32",
          mDiameter: "85.54",
          rDiameter: "85.19",
          cDiameter1: "48.99",
          wDiameter1: "63.97",
          cDiameter2: "56.33",
          wDiameter2: "76.53",
          result: "NG",
          date: "2022-11-10 09:11:45",
        },
        {
          name: "W201B",
          qrCode: "fwrefwrvbvwG",
          lDiameter: "84.32",
          mDiameter: "85.54",
          rDiameter: "85.19",
          cDiameter1: "48.99",
          wDiameter1: "63.97",
          cDiameter2: "56.33",
          wDiameter2: "76.53",
          result: "NG",
          date: "2022-11-10 09:11:45",
        },
        {
          name: "W201B",
          qrCode: "therth4545454",
          lDiameter: "84.32",
          mDiameter: "85.54",
          rDiameter: "85.19",
          cDiameter1: "48.99",
          wDiameter1: "63.97",
          cDiameter2: "56.33",
          wDiameter2: "76.53",
          result: "NG",
          date: "2022-11-10 09:11:45",
        },
      ],
    };
  },
};
</script>

<style scoped>
.pCard {
  position: relative;
  border: 1px solid #eee;
  padding: 10px;
}
.title {
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(216, 237, 255);
  text-align: center;
  padding: 5px 0;
}
::v-deep .el-table .el-table__cell {
  padding: 5px 0;
}
</style>
