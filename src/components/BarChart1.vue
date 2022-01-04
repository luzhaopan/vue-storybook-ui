<template>
  <div :id="chartId" :style="{ height: height, width: width }" />
</template>

<script>
import resize from "@/components/Charts/mixins/resize";

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
      default: "250px",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
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
      this.chart = this.$echarts.init(
        document.getElementById(this.chartId),
        "customed"
      );
      const option = this.getOption(this.chartData);
      this.chart.setOption(option, true);
    },
    getOption() {
      // const { seriesData, xAxisData, legendData } = data
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          left: "right",
        },
        xAxis: {
          name: "设备",
          type: "category",
          data: ["机器人", "车床1", "磨床", "车床2"],
        },
        yAxis: {
          name: "产量",
          type: "value",
        },
        series: [
          {
            barMaxWidth: 20,
            data: [10, 20, 15, 8],
            type: "bar",
          },
        ],
      };
      // 合并传入option
      Object.assign(option, this.chartOption);
      return option;
    },
  },
};
</script>
