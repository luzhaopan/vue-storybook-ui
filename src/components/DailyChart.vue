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
            // axisTick:{
            //   //在设置boundaryGap 为 true的前提下，设置alignWithLabel使刻度线和标签对齐
            //   alignWithLabel: true
            // },
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
        // series: [
        //   {
        //     name: "早班OK",
        //     type: "bar",
        //     stack: "Ad",
        //     barMaxWidth: 20,
        //     emphasis: {
        //       focus: "series",
        //     },
        //     markLine: {
        //       // 平均线设置
        //       silent: true, // true 去掉鼠标悬浮该线上的动画
        //       // symbol: 'none', // 该线无样式
        //       // label: {
        //       //   show: false, // 该线上的值去掉
        //       // },
        //       lineStyle: {
        //         // 设置该线样式
        //         normal: {
        //           type: "dashed",
        //           color: "#d9b500",
        //           width: 2,
        //         },
        //       },
        //       data: [
        //         {
        //           yAxis: 20, // 线的值
        //           name: "target",
        //         },
        //       ],
        //     },
        //     data: [12, 32, 11, 14, 9, 20, 10],
        //   },
        //   {
        //     name: "早班NG",
        //     type: "bar",
        //     stack: "Ad",
        //     emphasis: {
        //       focus: "series",
        //     },
        //     data: [20, 18, 11, 24, 29, 30, 30],
        //   },
        //   {
        //     name: "晚班OK",
        //     type: "bar",
        //     stack: "Ad",
        //     emphasis: {
        //       focus: "series",
        //     },
        //     data: [15, 23, 21, 15, 10, 30, 16],
        //   },
        //   {
        //     name: "晚班NG",
        //     type: "bar",
        //     stack: "Ad",
        //     emphasis: {
        //       focus: "series",
        //     },
        //     data: [25, 13, 11, 25, 17, 20, 12],
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
