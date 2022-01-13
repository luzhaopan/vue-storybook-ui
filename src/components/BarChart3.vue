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
              moment(params.value[1]).format("YYYY-MM-DD HH:mm:ss")
            );
          },
        },
        title: {
          text: "设备用时分析",
          left: "center",
        },
        // grid: {
        //   height: 300,
        // },
        xAxis: {
          scale: true,
          axisLabel: {
            interval: 0,
            // rotate: 20,
            formatter: function (val, index) {
              let a = moment(val + index * 3600000).format(
                "YYYY-MM-DD HH:mm:ss"
              );
              return a;
            },
          },
        },
        yAxis: {
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
