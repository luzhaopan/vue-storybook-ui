<template>
  <div :id="chartId" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";
import resize from "@/components/Charts/mixins/resize";
import moment from "moment";

export default {
  mixins: [resize],
  props: {
    chartId: {
      required: true,
      type: String,
    },
    chartData: {
      required: true,
      type: Object,
      default: () => {},
    },
    chartOption: {
      type: Object,
      default() {
        return {};
      },
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "450px",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions() {
      var types1 = {
        1: { name: "作业", color: "green", equipmentStatus: 1 },
        2: { name: "待机", color: "yellow", equipmentStatus: 2 },
        3: { name: "故障", color: "red", equipmentStatus: 3 },
        0: { name: "关机", color: "#d8d4d4", equipmentStatus: 0 },
      };
      const eqId = [];
      const eqArr = [];
      const { equipmentTask = [] } = this.chartData;
      const time =
        equipmentTask.length &&
        equipmentTask[0].equipmentList.length &&
        equipmentTask[0].equipmentList[0].acqDateStart;
      // console.log("time", time); //2022-01-05 14:35:00
      let startTime1 = +new Date(time);
      equipmentTask.forEach((item, index) => {
        let baseTime = startTime1;
        eqId.push(item.equipmentId);
        item.equipmentList.forEach((obj) => {
          // const start = +new Date(obj.acqDateStart);
          // const end = +new Date(obj.acqDateEnd);
          var duration = 1000;
          eqArr.push({
            name: types1[obj.equipmentStatus].name,
            // name: "",
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              color: types1[obj.equipmentStatus].color,
            },
          });
          baseTime += 1000;
        });
      });
      function renderItem(params, api) {
        var categoryIndex = api.value(0);
        var start = api.coord([api.value(1), categoryIndex]);
        var end = api.coord([api.value(2), categoryIndex]);
        var height = api.size([0, 1])[1] * 0.4;
        var rectShape = echarts.graphic.clipRectByRect(
          {
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height,
          },
          {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height,
          }
        );
        return (
          rectShape && {
            type: "rect",
            transition: ["shape"],
            shape: rectShape,
            style: api.style(),
          }
        );
      }
      this.chart.setOption({
        legend: {},
        tooltip: {
          formatter: function (params) {
            return (
              params.marker +
              params.name +
              ": " +
              moment(params.value[2]).format("YYYY-MM-DD h:mm")
            );
          },
        },
        title: {
          text: "设备用时分析",
          left: "center",
        },
        grid: {
          height: 300,
        },
        xAxis: {
          scale: true,
          axisLabel: {
            formatter: function (val, index) {
              // console.log("333", val);
              let a = moment(val + index * 3600000).format("YYYY-MM-DD h:mm");
              // let a1 = moment(val + 3600000).format("YYYY-MM-DD h:mm");
              return a;
            },
          },
        },
        yAxis: {
          data: eqId,
        },
        series: [
          {
            type: "custom",
            renderItem: renderItem,
            textStyle: {
              color: "#000",
              fontSize: 12,
            },
            label: {
              show: true,
              position: [4, -21],
              formatter: function (data) {
                // console.log("dd", data);
                // "作业时间：06：05（作业率:63.31%） 待机时间：03：32  故障时间：0  停机时间：0"
                const t =
                  data.dataIndex === 0 ||
                  data.dataIndex === 10 ||
                  data.dataIndex === 20 ||
                  data.dataIndex === 30;
                return t ? "" : "";
              },
            },
            itemStyle: {
              opacity: 0.8,
            },
            encode: {
              x: [1, 2],
              y: 0,
            },
            data: eqArr,
          },
        ],
      });
    },
  },
};
</script>
