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

    <!-- 统计数据1 -->
    <div id="data-count">
      <span class="title">统计数据1</span>

      <div>高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。</div>
    </div>
    <!-- 统计数据2 -->
    <div id="assets-analysis">
      <div class="title">统计数据2</div>
      <div class="bg-style">
        <div>高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。</div>
      </div>
    </div>
    <!-- 统计数据3 -->
    <div id="target-monitor">
      <div class="title">统计数据3</div>
      <div class="bg-style">
        <div style="margin: 20px 0 25px">
          <span class="subtitle">
            高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。
高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。
          </span>
        </div>
      </div>
    </div>
    <!-- 统计数据4 -->
    <div id="profit-loss-analysis">
      <div class="title">统计数据4</div>
      <div class="bg-style">
        高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。
高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。
      </div>
    </div>
    <!-- 统计数据5 -->
    <div id="preference-analysis">
      <div class="title">统计数据5</div>
      <div class="bg-style">
        高举中国特色社会主义伟大旗帜

为全面建设社会主义现代化国家而团结奋斗

——在中国共产党第二十次全国代表大会上的报告

（2022年10月16日）

习近平

同志们：

现在，我代表第十九届中央委员会向大会作报告。

中国共产党第二十次全国代表大会，是在全党全国各族人民迈上全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的关键时刻召开的一次十分重要的大会。

大会的主题是：高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。

中国共产党已走过百年奋斗历程。我们党立志于中华民族千秋伟业，致力于人类和平与发展崇高事业，责任无比重大，使命无上光荣。全党同志务必不忘初心、牢记使命，务必谦虚谨慎、艰苦奋斗，务必敢于斗争、善于斗争，坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。
      </div>
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
          label: "统计数据1",
          active: true,
        },
        {
          id: "assets-analysis",
          icon: "el-icon-wallet",
          label: "统计数据2",
          active: false,
        },
        {
          id: "target-monitor",
          icon: "el-icon-aim",
          label: "统计数据3",
          active: false,
        },
        {
          id: "profit-loss-analysis",
          icon: "el-icon-data-line",
          label: "统计数据4",
          active: false,
        },
        {
          id: "preference-analysis",
          icon: "el-icon-goods",
          label: "统计数据5",
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

    // 获取统计数据1
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
