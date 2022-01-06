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
      // const data11 = {
      //   equipmentTask: [
      //     {
      //       equipmentId: "L2-HJ1",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 0,
      //           acqDateStart: "2021-12-12 22:10:00",
      //           equipmentId: "L2-HJ1",
      //           ts: "2021-12-12 22:10:00",
      //           id: "916FFA67-449E-4EBB-92DD-E1EAC7F31B2B",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-ZongZhuang",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 0,
      //           acqDateStart: "2021-12-12 22:10:00",
      //           equipmentId: "L2-ZongZhuang",
      //           ts: "2021-12-12 22:10:00",
      //           id: "97C5D40E-7DFE-4111-9EE6-2B20F7720E7C",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-TanShang",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 0,
      //           acqDateStart: "2021-12-19 16:44:00",
      //           equipmentId: "L2-TanShang",
      //           ts: "2021-12-19 16:44:00",
      //           id: "F2C9D4C1-506A-45AD-802B-29E48C5F35BD",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-HJ2",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 0,
      //           acqDateStart: "2021-12-22 14:26:00",
      //           equipmentId: "L2-HJ2",
      //           ts: "2021-12-22 14:26:00",
      //           id: "48BAE386-CDFB-43FF-8AFB-D3F3938EFB70",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-ShiYa",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-ShiYa",
      //           ts: "2021-12-04 12:13:00",
      //           id: "12A74234-5F30-4175-B91D-90B1DAF5E2F4",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-ShiYa",
      //           ts: "2021-12-04 12:13:00",
      //           id: "E0FA0392-5635-427D-AE24-1DD8B00A1D8B",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-DG",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-DG",
      //           ts: "2021-12-04 12:13:00",
      //           id: "27AEBA66-05DB-4E5B-A1D2-2D7907868B91",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-GTQingXi",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-GTQingXi",
      //           ts: "2021-12-04 12:13:00",
      //           id: "3F3B21B9-919B-4DFE-B3EC-CC75F135CC63",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-HJ3",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-HJ3",
      //           ts: "2021-12-04 12:13:00",
      //           id: "84C71ABC-8E45-4AF1-99E3-A9D7480EC0C5",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-HSGQingXi",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-HSGQingXi",
      //           ts: "2021-12-04 12:13:00",
      //           id: "BE8C2203-0809-46CC-822B-520B69F44F30",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-ShiYa",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-ShiYa",
      //           ts: "2021-12-04 12:13:00",
      //           id: "12A74234-5F30-4175-B91D-90B1DAF5E2F4",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //         {
      //           equipmentStatus: 1,
      //           acqDateStart: "2021-12-04 12:13:00",
      //           equipmentId: "L2-ShiYa",
      //           ts: "2021-12-04 12:13:00",
      //           id: "E0FA0392-5635-427D-AE24-1DD8B00A1D8B",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-HJ4",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 2,
      //           acqDateStart: "2021-12-12 22:10:00",
      //           equipmentId: "L2-HJ4",
      //           ts: "2021-12-12 22:10:00",
      //           id: "45FDF410-4BAF-44AB-9F57-756CC895A973",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //     {
      //       equipmentId: "L2-BuZhuang",
      //       equipmentList: [
      //         {
      //           equipmentStatus: 3,
      //           acqDateStart: "2021-12-22 14:53:00",
      //           equipmentId: "L2-BuZhuang",
      //           ts: "2021-12-22 14:53:00",
      //           id: "0E896D4C-4CEA-4617-8E94-D5030107C1A2",
      //           acqDateEnd: "2021-12-22 14:53:00",
      //         },
      //       ],
      //     },
      //   ],
      // };

      // const equipmentTask1 = [
      //   {
      //     equipmentId: "L2-BuZhuang",
      //     equipmentList: [
      //       {
      //         equipmentStatus: 0,
      //         acqDateStart: "2022-01-05 14:35:00",
      //         equipmentId: "L2-BuZhuang",
      //         ts: "2022-01-05 14:35:00",
      //         id: "10926C9C-BB48-4620-9A6E-952CF235AC9E",
      //         acqDateEnd: "2022-01-05 14:35:00",
      //       },
      //       {
      //         equipmentStatus: 1,
      //         acqDateStart: "2022-01-05 14:36:00",
      //         equipmentId: "L2-BuZhuang",
      //         ts: "2022-01-05 14:36:00",
      //         id: "10926C9C-BB48-4620-9A6E-952CF235AC9E",
      //         acqDateEnd: "2022-01-05 14:36:00",
      //       },
      //     ],
      //   },
      //   {
      //     equipmentId: "L2-DG",
      //     equipmentList: [
      //       {
      //         equipmentStatus: 0,
      //         acqDateStart: "2022-01-05 14:35:00",
      //         equipmentId: "L2-DG",
      //         ts: "2022-01-05 14:35:00",
      //         id: "A0C5CA0B-A748-43AF-81C5-23104C04664A",
      //         acqDateEnd: "2022-01-05 14:35:00",
      //       },
      //       {
      //         equipmentStatus: 1,
      //         acqDateStart: "2022-01-05 14:36:00",
      //         equipmentId: "L2-DG",
      //         ts: "2022-01-05 14:36:00",
      //         id: "A0C5CA0B-A748-43AF-81C5-23104C04664A",
      //         acqDateEnd: "2022-01-05 14:36:00",
      //       },
      //     ],
      //   },
      //   {
      //     equipmentId: "L2-GTQingXi",
      //     equipmentList: [
      //       {
      //         equipmentStatus: 0,
      //         acqDateStart: "2022-01-05 14:35:00",
      //         equipmentId: "L2-GTQingXi",
      //         ts: "2022-01-05 14:35:00",
      //         id: "E768E8A3-13CC-4552-8DCE-F41855C28822",
      //         acqDateEnd: "2022-01-05 14:35:00",
      //       },
      //       {
      //         equipmentStatus: 1,
      //         acqDateStart: "2022-01-05 14:36:00",
      //         equipmentId: "L2-GTQingXi",
      //         ts: "2022-01-05 14:36:00",
      //         id: "E768E8A3-13CC-4552-8DCE-F41855C28822",
      //         acqDateEnd: "2022-01-05 14:36:00",
      //       },
      //     ],
      //   },
      //   {
      //     equipmentId: "L2-GTQin44gXi",
      //     equipmentList: [
      //       {
      //         equipmentStatus: 3,
      //         acqDateStart: "2022-01-05 14:35:00",
      //         equipmentId: "L2-GTQingXi",
      //         ts: "2022-01-05 14:35:00",
      //         id: "E768E8A3-13CC-4552-8DCE-F41855C28822",
      //         acqDateEnd: "2022-01-05 14:35:00",
      //       },
      //       {
      //         equipmentStatus: 1,
      //         acqDateStart: "2022-01-05 14:36:00",
      //         equipmentId: "L2-GTQingXi",
      //         ts: "2022-01-05 14:36:00",
      //         id: "E768E8A3-13CC-4552-8DCE-F41855C28822",
      //         acqDateEnd: "2022-01-05 14:36:00",
      //       },
      //     ],
      //   },
      // ];

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
      equipmentTask.forEach((item) => {
        let baseTime = startTime1;
        console.log("b", baseTime);
        eqId.push(item.equipmentId);
        item.equipmentList.forEach((obj, index) => {
          // const start = +new Date(obj.acqDateStart);
          // const end = +new Date(obj.acqDateEnd);
          var duration = 5000;
          eqArr.push({
            name: types1[obj.equipmentStatus].name,
            // name: "",
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              color: types1[obj.equipmentStatus].color,
            },
          });
          baseTime += 5000;
        });
      });
      // console.log("1", eqId);
      console.log("n", eqArr);
      var data = [];
      var dataCount = 2;
      // 1638100800000
      // console.log(+moment("2022-01-04 19:59:00")._d);
      let startTime = +new Date("2022-01-05 14:35:00");
      // console.log(startTime);
      var categories = ["机器人", "车床1", "车床2", "磨床"];
      var types = [
        { name: "作业", color: "green", equipmentStatus: 1 },
        { name: "待机", color: "yellow", equipmentStatus: 2 },
        { name: "故障", color: "red", equipmentStatus: 3 },
        { name: "关机", color: "#d8d4d4", equipmentStatus: 0 },
      ];
      categories.forEach(function (category, index) {
        let baseTime = startTime;
        for (var i = 0; i < dataCount; i++) {
          var typeItem = types[Math.round(Math.random() * (types.length - 1))];
          var duration = 1000;
          data.push({
            name: typeItem.name,
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              color: typeItem.color,
            },
          });
          baseTime += 1000;
        }
      });
      // [index, acqDateStart, (acqDateStart + (acqDateEnd - acqDateStart)), (acqDateEnd - acqDateStart)]
      console.log("o", data);
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
          // data: categories,
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
            // data: data,
          },
        ],
      });
    },
  },
};
</script>
