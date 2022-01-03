<template>
  <div class="main-container">
    <div>
      <img class="img" src="@/assets/lg.jpg" alt="" />
    </div>
    <div class="title">二米活塞杆一号岛生产实况</div>
    <Production :pro-data="proInfo" />
  </div>
</template>

<script>
import Production from "@/components/ProductionInfo";
export default {
  name: "ProductInfo",
  components: { Production },
  data() {
    return {
      proInfo: [
        {
          taskNo: "880000178611",
          taskId: "SANY-03-JAN-22 11:31 4579",
          taskTime: null,
          children: [
            {
              eqName: "机床1加工",
              eqId: "32323",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "机床2加工",
              eqId: "3233323",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "磨床加工",
              eqId: "3232423",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "32323599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "39999",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "880000178611",
          taskId: "SANY-03-JAN-22 11:15 4578",
          taskTime: "43分3秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "3231",
              startTime: "09:10:51",
              endTime: "09:20:51",
            },
            {
              eqName: "机床2加工",
              eqId: "323523",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "磨床加工",
              eqId: "32623",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "327599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "389",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "880000178611",
          taskId: "SANY-03-JAN-22 10:33 4576",
          taskTime: "50分7秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "32991",
              startTime: "09:10:51",
              endTime: "09:20:51",
            },
            {
              eqName: "机床2加工",
              eqId: "3235r23",
              startTime: "09:10:51",
              endTime: "09:20:51",
            },
            {
              eqName: "磨床加工",
              eqId: "326213",
              startTime: "11:14:28",
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "3217599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "3891",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "880000178611",
          taskId: "SANY-03-JAN-22 10:33 4574",
          taskTime: "56分25秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "32991",
              startTime: "10:32:17",
              endTime: "10:39:02",
            },
            {
              eqName: "机床2加工",
              eqId: "3235r23",
              startTime: "10:41:39",
              endTime: "11:03:55",
            },
            {
              eqName: "磨床加工",
              eqId: "326213",
              startTime: "11:14:28",
              endTime: "11:25:17",
            },
            {
              eqName: "清洗机",
              eqId: "3217599",
              startTime: "11:27:17",
              endTime: "11:28:32",
            },
            {
              eqName: "检测台",
              eqId: "3891",
              startTime: "11:28:37",
              endTime: "11:32:42",
            },
          ],
        },
        {
          taskNo: "880000178611",
          taskId: "SANY-03-JAN-22 10:14 4573",
          taskTime: "3分28秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "3231",
              startTime: "09:10:51",
              endTime: "09:20:51",
            },
            {
              eqName: "机床2加工",
              eqId: "323523",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "磨床加工",
              eqId: "32623",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "327599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "389",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "880000178611",
          taskId: "SANY-03-JAN-22 09:25 4570",
          taskTime: "108分53秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "32991",
              startTime: "09:10:51",
              endTime: "09:20:51",
            },
            {
              eqName: "机床2加工",
              eqId: "3235r23",
              startTime: "09:10:51",
              endTime: "09:20:51",
            },
            {
              eqName: "磨床加工",
              eqId: "326213",
              startTime: "11:14:28",
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "3217599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "3891",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "964295693164610560",
          taskId: "",
          taskTime: "39分11秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "32991",
              startTime: "10:32:17",
              endTime: "10:39:02",
            },
            {
              eqName: "机床2加工",
              eqId: "3235r23",
              startTime: "10:41:39",
              endTime: "11:03:55",
            },
            {
              eqName: "磨床加工",
              eqId: "326213",
              startTime: "11:14:28",
              endTime: "11:25:17",
            },
            {
              eqName: "清洗机",
              eqId: "3217599",
              startTime: "11:27:17",
              endTime: "11:28:32",
            },
            {
              eqName: "检测台",
              eqId: "3891",
              startTime: "11:28:37",
              endTime: "11:32:42",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.main-container {
  /* padding: 10px; */
  width: 100%;
  position: relative;
}
.img {
  width: 100px;
  height: 30px;
  position: absolute;
  left: 10px;
}
.title {
  text-align: center;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
</style>
