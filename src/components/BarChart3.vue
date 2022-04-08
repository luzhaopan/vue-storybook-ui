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
      default: "100%",
    },
  },
  data() {
    return {
      chart: null,
      eqId: [],
      eqArr: [],
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
    setOptions({ seriesData = [], yData = [] }) {
      // console.log(seriesData);
      // const now = +new Date();
      // let start1 = +new Date(
      //   new Date(new Date().toLocaleDateString()).getTime() + 8 * 60 * 60 * 1000
      // ); // 当天8点
      // let start2 = +new Date(
      //   new Date(new Date().toLocaleDateString()).getTime() +
      //     20 * 60 * 60 * 1000
      // ); // 当天20点

      // let time;
      // time = now >= start1 && now < start2 ? start1 : start2;
      const min = seriesData.length && seriesData[0].value[1];
      // console.log(min);
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
              '<div style="float: left;">' +
              params.marker +
              params.name +
              "</div>" +
              "<br/>" +
              "开始: " +
              moment(params.value[1]).format("YYYY-MM-DD HH:mm:ss") +
              "<br/>" +
              "结束: " +
              moment(params.value[2]).format("YYYY-MM-DD HH:mm:ss") +
              "<br/>"
            );
          },
        },
        title: {
          text: "设备用时分析",
          left: "center",
          textStyle: {
            fontSize: 15,
            color: "#000",
          },
        },
        grid: {
          left: "2%",
          top: "8%",
          right: "8%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: {
          min: function () {
            return min;
          },
          // max: function () {
          //   return start2;
          // },
          // scale: true,
          name: "时间",
          axisLine: {
            show: true,
          },
          // splitNumber: 0,
          minInterval: 1 * 3600 * 1000,
          maxInterval: 1 * 3600 * 1000,
          // boundaryGap: false,
          // axisTick: {
          //   interval: 0,
          // },
          axisLabel: {
            // interval: 10,
            // rotate: 90,
            formatter: function (val) {
              // let a = moment(time + index * 3600000 + val * 0).format(
              //   "YYYY-MM-DD HH:mm:ss"
              // );
              // let a = moment(index * 3600000 + min).format(
              //   "YYYY-MM-DD HH:00:00"
              // );
              let a = moment(val).format("HH:mm:ss");
              return a;
            },
          },
        },
        yAxis: {
          name: "设备",
          data: yData,
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
            data: seriesData,
          },
        ],
      });
    },
  },
};
</script>
