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
      default: "200px",
    },
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.updateOption(this.getOption(val));
      },
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
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(
        document.getElementById(this.chartId),
        "customed"
      );
      const option = this.getOption(this.chartData);
      this.updateOption(option);
    },
    updateOption(option) {
      if (this.chartData.seriesData.length === 0) {
        this.chart.clear();
        this.chart.showLoading({
          text: "No Data",
          color: "#fff",
          textColor: "#909399",
          fontSize: "14px",
        });
      } else {
        this.chart.hideLoading();
        this.chart.setOption(option, true);
      }
    },
    getOption(data) {
      const { seriesData, xAxisData } = data;
      const option = {
        color: ["#5470c6", "#ee6666", "#fac858", "#ee6666"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          left: "right",
        },
        grid: {
          top: "18%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              //在设置boundaryGap 为 true的前提下，设置alignWithLabel使刻度线和标签对齐
              alignWithLabel: true,
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "产量",
          },
        ],
        series: seriesData,
      };
      // 合并传入option
      Object.assign(option, this.chartOption);
      return option;
    },
  },
};
</script>
