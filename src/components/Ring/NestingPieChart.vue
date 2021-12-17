<template>
  <div :id="chartId" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";
import resize from "../Charts/mixins/resize";
export default {
  name: "NestingPieChart",
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
      default: "350px",
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
      this.chart = echarts.init(
        document.getElementById(this.chartId),
        "customed"
      );
      const option = this.getOption(this.chartData);
      this.updateOption(option);
    },
    updateOption(option) {
      const { seriesData } = this.chartData;
      if (seriesData.length === 0) {
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
      const { seriesData, seriesName, sign } = data;
      const circle1 =
        // 外层大圆
        {
          zlevel: -1,
          name: "",
          type: "pie",
          radius: ["30%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          emphasis: {
            scale: false,
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          selectedMode: false,
          data: [
            {
              value: 0,
              name: "搜索引擎",
              zlevel: 99,
              itemStyle: {
                opacity: 1,
                color: "#fff",
                borderColor: "#bbb",
              },
              label: {
                normal: {
                  show: false,
                  position: "center",
                },
              },
              tooltip: {
                show: false,
              },
            },
          ],
        };
      const circle2 =
        // 内层圆环
        {
          name: seriesName,
          type: "pie",
          radius: ["42%", "55%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            // position: 'outside',
            formatter: "{b} {d}%",
          },
          labelLine: {
            show: true,
            lineStyle: {
              width: 1,
            },
            length: 20,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
            lineStyle: {
              color: "#333",
              width: 1,
              type: "solid",
            },
          },
          data: seriesData,
          // data: [
          //   {
          //     value: 12,
          //     name: '传媒'
          //   },
          // ]
        };
      const option = {
        // color: [
        //   '#FFD050',
        //   '#8698FA',
        //   '#DA6FA3',
        //   '#31CD7A',
        //   '#7262EC',
        //   '#FF686D',
        //   '#D254B0',
        //   '#E4C4A8',
        //   '#CC905B'
        // ],
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: false,
          top: "5%",
          left: "center",
        },
        series: sign === "level" ? [circle2] : [circle1, circle2],
      };

      // 合并传入option
      Object.assign(option, this.chartOption);

      return option;
    },
  },
};
</script>
