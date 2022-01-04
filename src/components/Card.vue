<template>
  <div class="pCard">
    <div class="title">AGV实时信息</div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="time" label="1" align="left"> </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="desc"
          label="2"
          align="left"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    infoData: Object,
  },
  data() {
    return {
      tableData: [
        {
          time: "12:55:27",
          desc: "机器人回复订单：892472398756327924",
        },
        {
          time: "12:55:24",
          desc: "机器人回复收到开始信号",
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
::v-deep .el-table__header-wrapper {
  display: none;
}
::v-deep .el-table .el-table__cell {
  padding: 5px 0;
}
</style>
