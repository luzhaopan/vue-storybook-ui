<template>
  <div class="tagBall" :style="{ width: width + 'px', height: height + 'px' }">
    <span
      v-for="(item, index) in data"
      :key="index"
      class="wordCloud_tag"
      :style="
        contentEle[index]
          ? {
              color: color[index % color.length],
              ...contentEle[index].style,
            }
          : ''
      "
      @click="handleChange(item)"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Wordcloud",
  data() {
    return {
      data: [
        "平安银行",
        "万科A",
        "国华网安",
        "ST星源",
        "深振业A",
        "*ST全新",
        "神州高铁",
        "中国宝安",
        "美丽生态",
        "深物业A",
        "南玻A",
        "沙河股份",
        "深康佳A",
        "*ST中华A",
        "深粮控股",
        "深华发A",
        "深科技",
        "深天地A",
        "特力A",
        "飞亚达",
        "深圳能源",
        "国药一致",
        "深深房A",
        "富奥股份",
        "大悦城",
        "深桑达A",
        "神州数码",
        "中国天楹",
        "南玻A",
      ],
      contentEle: [{ style: {} }],
      color: [
        "#ed4db6",
        "#fdbc2b",
        "#2d4db6",
        "#4a63de",
        "#cb4db6",
        "#0aea0a",
        "#044db6",
      ],
      width: 600,
      height: 400,
      direction: "1",
      speed: 500,
      animationID: "",
    };
  },
  mounted() {
    this.innit();
  },
  beforeDestroy() {
    window.cancelAnimationFrame(this.animationID);
  },
  methods: {
    innit() {
      const radiusX = (this.width - 50) / 2;
      const radiusY = (this.height - 50) / 2;
      this.contentEle = [];
      for (let i = 0; i < this.data.length; i++) {
        const k = -1 + (2 * (i + 1) - 1) / this.data.length;
        const a = Math.acos(k);
        const b = a * Math.sqrt(this.data.length * Math.PI);
        const x = radiusX * Math.sin(a) * Math.cos(b);
        const y = radiusY * Math.sin(a) * Math.sin(b);
        const z = radiusX * Math.cos(a);
        const singleEle = {
          x,
          y,
          z,
          style: {},
        };
        this.contentEle.push(singleEle);
      }
      this.animate();
    },
    animate() {
      this.rotateX();
      this.rotateY();
      this.move();
      this.animationID = window.requestAnimationFrame(this.animate);
    },
    rotateX() {
      const angleX = ["-1", "1"].includes(this.direction)
        ? Math.PI / Infinity
        : Math.PI / ((Number(this.direction) / 2) * Number(this.speed));

      const cos = Math.cos(angleX);
      const sin = Math.sin(angleX);

      this.contentEle = this.contentEle.map((t) => {
        const y1 = t.y * cos - t.z * sin;
        const z1 = t.z * cos + t.y * sin;
        return {
          ...t,
          y: y1,
          z: z1,
        };
      });
    },
    rotateY() {
      const angleY = ["-2", "2"].includes(this.direction)
        ? Math.PI / Infinity
        : Math.PI / (Number(this.direction) * Number(this.speed));

      const cos = Math.cos(angleY);
      const sin = Math.sin(angleY);

      this.contentEle = this.contentEle.map((t) => {
        const x1 = t.x * cos - t.z * sin;
        const z1 = t.z * cos + t.x * sin;

        return {
          ...t,
          x: x1,
          z: z1,
        };
      });
    },
    move() {
      const CX = this.width / 2;
      const CY = this.height / 2;
      // console.log(this.contentEle)
      this.contentEle = this.contentEle.map((singleEle) => {
        const { x, y, z } = singleEle;
        const fallLength = 500;
        const RADIUS = (this.width - 50) / 2;
        const scale = fallLength / (fallLength - z);
        const alpha = (z + RADIUS) / (2 * RADIUS);
        const left = `${x + CX - 15}px`;
        const top = `${y + CY - 15}px`;
        const transform = `translate(${left}, ${top}) scale(${scale})`;

        const style = {
          ...style,
          opacity: alpha + 0.5,
          zIndex: parseInt(scale * 100, 10),
          transform,
        };

        return {
          x,
          y,
          z,
          style,
        };
      });
    },
    handleRotate(value) {
      this.direction = value;
    },
    handleSpeed(value) {
      const speedObj = {
        fast: -50,
        slow: 50,
      };

      this.speed += speedObj[value];

      if (this.speed === 0) {
        this.speed = 50;
      }
    },
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.tagBall {
  margin: 30px auto;
  position: relative;
}

.wordCloud_tag {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  color: green;
  text-decoration: none;
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: bold;
  cursor: pointer;
}

.wordCloud__home {
  display: flex;
  justify-content: center;
}
</style>
