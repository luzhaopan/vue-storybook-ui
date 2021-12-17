<template>
  <div>
    <NestingPieChart
      :chart-data="wholeIndustryPreference"
      chart-id="industry-whole-chart"
    />
  </div>
</template>

<script>
import NestingPieChart from "./NestingPieChart";
export default {
  name: "Ring",
  components: { NestingPieChart },
  data() {
    return {
      wholeIndustryPreference: {
        seriesData: [
          {
            name: "国防军工",
            value: 0.08,
          },
          {
            name: "医疗",
            value: 0.18,
          },
          {
            name: "教育",
            value: 0.18,
          },
          {
            name: "房地产",
            value: 0.11,
          },
          {
            name: "计算机",
            value: 0.04,
          },
          {
            name: "金融",
            value: 0.15,
          },
        ],
      },
    };
  },
};
</script>
