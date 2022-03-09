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
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.updateOption(this.getOption(val));
      },
    },
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
          text: "暂无数据",
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
        color: ["#5470c6", "#ff864c"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          // data: ["OK", "NG"],
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
            data: xAxisData,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "产量",
            // min: 0,
            // max: 250,
            // interval: 50,
            // axisLabel: {
            //   formatter: '{value} ml'
            // }
          },
        ],
        series: seriesData,
        // series: [
        //   {
        //     name: "OK",
        //     type: "bar",
        //     barMaxWidth: 20,
        //     data: [
        //       2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
        //       3.3,
        //     ],
        //   },
        //   {
        //     name: "NG",
        //     type: "bar",
        //     data: [
        //       2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
        //       2.3,
        //     ],
        //   },
        // ],
      };
      // 合并传入option
      Object.assign(option, this.chartOption);
      return option;
    },
  },
};
</script>
