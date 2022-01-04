<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";
import moment from "moment";

export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "450px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: false,
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
    // const data1 = {
    //   '机器1':[
    //     {
    //         equipmentId: '机器1',
    //         equipmentStatus: 0,
    //         acqDateStart: "2022-01-04 08:12:41",
    //         ts: "2022-01-04 08:12:41",
    //         acqDateEnd: "2022-01-04 08:12:41",
    //         id: "2b730a51-9ab3-43ee-ba94-e29e2cfb21421"
    //     },
    //     {
    //         equipmentId: '机器1',
    //         equipmentStatus: 0,
    //         acqDateStart: "2022-01-04 08:12:42",
    //         ts: "2022-01-04 08:12:42",
    //         acqDateEnd: "2022-01-04 08:12:42",
    //         id: "2b730a51-9ab3-43ee-ba94-e29e2cfb2141"
    //     }
    //   ],
    //   '机器2': [
    //       {
    //         equipmentId: '机器2',
    //         equipmentStatus: 0,
    //         acqDateStart: "2022-01-04 08:12:42",
    //         ts: "2022-01-04 08:12:42",
    //         acqDateEnd: "2022-01-04 08:12:42",
    //         id: "2b730a51-9ab3-43ee-ba94-e239e2cfb2141"
    //       },
    //       {
    //         equipmentId: '机器2',
    //         equipmentStatus: 0,
    //         acqDateStart: "2022-01-04 08:12:43",
    //         ts: "2022-01-04 08:12:43",
    //         acqDateEnd: "2022-01-04 08:12:43",
    //         id: "2b730a51-9ab3-43ee-b32a94-e29e2cfb2141"
    //       }
    //   ]
    // },
    setOptions() {
      var data = [];
      var dataCount = 2;
      // 1638100800000
      console.log(moment("2022-01-04 08:12:41"));
      var startTime = +new Date();
      var categories = ["机器人", "车床1", "车床2", "磨床"];
      var types = [
        { name: "作业", color: "green", equipmentStatus: 1 },
        { name: "待机", color: "yellow", equipmentStatus: 2 },
        { name: "故障", color: "red", equipmentStatus: -1 },
        { name: "关机", color: "#d8d4d4", equipmentStatus: 0 },
      ];
      categories.forEach(function (category, index) {
        var baseTime = startTime;
        for (var i = 0; i < dataCount; i++) {
          var typeItem = types[Math.round(Math.random() * (types.length - 1))];
          var duration = 1000;
          data.push({
            name: typeItem.name,
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              normal: {
                color: typeItem.color,
              },
            },
          });
          baseTime += 1000;
        }
      });
      console.log(data);
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
            return params.marker + params.name + ": " + params.value[3] + " ms";
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
              let a = moment(val + index * 3600000).format("YYYY-MM-DD h:mm");
              // let a1 = moment(val + 3600000).format("YYYY-MM-DD h:mm");
              return a;
            },
          },
        },
        yAxis: {
          data: categories,
        },
        series: [
          {
            type: "custom",
            renderItem: renderItem,
            label: {
              show: true,
              position: [4, -21],
              textStyle: {
                color: "#000",
                fontSize: 12,
              },
              formatter: function (data) {
                // console.log("dd", data);
                const t =
                  data.dataIndex === 0 ||
                  data.dataIndex === 10 ||
                  data.dataIndex === 20 ||
                  data.dataIndex === 30;
                return t
                  ? "作业时间：06：05（作业率:63.31%） 待机时间：03：32  故障时间：0  停机时间：0"
                  : "";
              },
            },
            itemStyle: {
              opacity: 0.8,
            },
            encode: {
              x: [1, 2],
              y: 0,
            },
            data: data,
          },
        ],
      });
    },
  },
};
</script>
