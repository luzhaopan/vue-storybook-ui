<template>
  <div class="dashboard">
    <div style="position: relative">
      <div :class="{ fixedBar: !isFixed, fixedTop: isFixed }">
        <div v-for="(item, index1) in anchorList" :key="item.id" class="anchor">
          <div
            class="anchor-item"
            :class="{ selected: item.active }"
            @click="goAnchor(item.id, index1)"
          >
            <i :class="item.icon" />
            <span>{{ item.label }}</span>
          </div>
          <el-divider
            v-if="index1 !== 4"
            content-position="center"
            direction="vertical"
          />
        </div>
      </div>
    </div>

    <!-- 数据统计 -->
    <div id="data-count">
      <span class="title">数据统计</span>
      <span class="select-name">渠道来源</span>

      <div>666666666666</div>
    </div>
    <!-- 资产分析 -->
    <div id="assets-analysis">
      <div class="title">资产分析</div>
      <div class="bg-style">
        <div class="subtitle">资产余额统计</div>
        <div>666666666666</div>
      </div>
    </div>
    <!-- 目标监控 -->
    <div id="target-monitor">
      <div class="title">目标监控</div>
      <div class="bg-style">
        <div style="margin: 20px 0 25px">
          <span class="subtitle">目标进度统计</span>
        </div>
      </div>
    </div>
    <!-- 盈亏分析 -->
    <div id="profit-loss-analysis">
      <div class="title">盈亏分析</div>
      <div class="bg-style">
        <div class="subtitle">所有客户总盈亏</div>
      </div>
    </div>
    <!-- 偏好分析 -->
    <div id="preference-analysis">
      <div class="title">偏好分析</div>
      <div class="bg-style"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataKanban",
  data() {
    return {
      loading: false,
      index: 0,
      activeName: "data-count",
      isScroll: true,
      isFixed: false, // 锚点导航浮动
      anchorList: [
        {
          id: "data-count",
          icon: "el-icon-pie-chart",
          label: "数据统计",
          active: true,
        },
        {
          id: "assets-analysis",
          icon: "el-icon-wallet",
          label: "资产分析",
          active: false,
        },
        {
          id: "target-monitor",
          icon: "el-icon-aim",
          label: "目标监控",
          active: false,
        },
        {
          id: "profit-loss-analysis",
          icon: "el-icon-data-line",
          label: "盈亏分析",
          active: false,
        },
        {
          id: "preference-analysis",
          icon: "el-icon-goods",
          label: "偏好分析",
          active: false,
        },
      ],
      timeout: null,
    };
  },

  mounted() {
    // 开启滚动监听
    document.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // 获取当前元素的offsetTop
    getOffsetTop(obj) {
      let offsetTop = 0;
      while (obj !== window.document.body && obj != null) {
        offsetTop += obj.offsetTop;
        obj = obj.offsetParent;
      }
      return offsetTop;
    },
    // 获取窗口滚动条高度
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    // 判断当前元素是否在可视区域
    isElementInViewport(el) {
      // 获取元素是否在可视区域
      var rect = el.getBoundingClientRect();
      return { top: rect.top, id: el.id };
    },
    // 滚动监听，滚动触发的效果写在这里
    handleScroll() {
      if (this.$el.scrollTop > 0) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
        this.selectedEle("data-count");
      }
      this.scrollTop = this.getScrollTop();
      if (!this.isScroll) return;
      /**
       * scrollTop 页面的滚动条的高度
       * offsetTop 当前选中的tab元素的offsetTop
       * offsetHeight 当前选中元素的高度
       */
      const offsetTop = this.isElementInViewport(
        this.$el.querySelector(`#${this.activeName}`)
      ).top;
      const offsetHeight = this.$el.querySelector(
        `#${this.activeName}`
      ).offsetHeight;
      const actuaTop = this.scrollTop + 120;
      const length = this.anchorList.length;
      // 页面滚动中根据相应位置变换选中tab
      if (actuaTop + 200 < offsetTop && this.index > 0) {
        this.index = this.index - 1;
        this.activeName = this.anchorList[this.index].id;
        this.selectedEle(this.activeName);
      } else if (this.index < length && actuaTop > offsetTop + offsetHeight) {
        this.index = this.index + 1;
        this.activeName = this.anchorList[this.index].id;
        this.selectedEle(this.activeName);
      }
    },
    // 锚点点击跳转
    goAnchor(selector, index) {
      if (this.activeName === selector) {
        return;
      }
      if (this.timeout) clearTimeout(this.timeout);
      this.activeName = selector;
      this.selectedEle(selector);
      this.index = index;
      // 给定一个标识，锚点事件不触发滚动
      this.isScroll = false;
      const offsetTop = this.getOffsetTop(
        this.$el.querySelector(`#${selector}`)
      );
      const scrollTop = offsetTop - 120;
      this.$el.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
      this.timeout = setTimeout(() => {
        this.isScroll = true;
      }, 1000);
    },
    selectedEle(name) {
      this.anchorList.forEach((item) => {
        item.active = name === item.id;
      });
    },

    // 获取数据统计
  },
};
</script>

<style>
.dashboard {
  width: 100%;
  height: 100vh;
  padding: 10px;
  overflow-y: auto;
  position: relative;
}
.fixedBar {
  display: flex;
  position: absolute;
  width: 100%;
}
.fixedTop {
  display: flex;
  position: fixed;
  width: 100%;
  /* top: 58px; */
  left: 0;
  z-index: 1000;
  box-shadow: 2px 2px 10px 0px #ccc;
}
.anchor {
  width: 20%;
  height: 40px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.anchor-item {
  width: 99%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.anchor-item i {
  margin-right: 10px;
  margin-top: 2px;
  font-size: 20px;
  color: #757575;
}
.anchor-item span {
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: normal;
  color: #333;
  text-align: center;
  line-height: normal;
  text-transform: none;
}
.el-divider--vertical {
  height: 2em;
  margin: 4px 0;
}
.el-divider {
  background-color: #b4b4b4;
}
.bg-style {
  background: #fff;
  padding: 10px 20px;
}
#data-count {
  margin-top: 60px;
}
.title {
  font-family: "Arial Negreta", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #534fd2;
  margin: 25px 0 10px;
}
.select-name {
  margin: 0 20px;
  font-size: 16px;
  color: #5e5e5e;
}
.subtitle {
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: normal;
  color: #333;
  line-height: normal;
  margin: 10px 0;
}
#assets-analysis {
  margin-top: 20px;
}
.chart-title {
  font-family: "Arial Normal", "Arial", sans-serif;
  font-size: 14px;
  margin: 10px 20px;
  color: #555555;
}
.chart {
  width: 100%;
  height: 350px;
}
.concept {
  width: 100%;
  height: 350px;
}
.selected > span {
  border-bottom: 2px solid #534fd2;
  color: #534fd2 !important ;
}
.selected > i {
  color: #534fd2 !important ;
}
</style>
