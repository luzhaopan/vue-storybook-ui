import { debounce } from "../../../utils";

export default {
  data() {
    return {
      $_resizeHandler: null,
    };
  },
  mounted() {
    this.initListener();
  },
  activated() {
    if (!this.$_resizeHandler) {
      // avoid duplication init
      this.initListener();
    }

    // when keep-alive chart activated, auto resize
    this.resize();
  },
  beforeDestroy() {
    this.destroyListener();
  },
  deactivated() {
    this.destroyListener();
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_sidebarResizeHandler(e) {
      if (e.propertyName === "width") {
        this.$_resizeHandler();
      }
    },
    initListener() {
      this.$_resizeHandler = debounce(() => {
        this.resize();
      }, 100);
      window.addEventListener("resize", this.$_resizeHandler);
    },
    destroyListener() {
      window.removeEventListener("resize", this.$_resizeHandler);
      this.$_resizeHandler = null;
    },
    resize() {
      // 单个绘图实例用chart，否则用charts
      const { chart, charts } = this;
      if (Array.isArray(charts)) {
        charts.forEach((chart) => {
          chart && chart.resize();
        });
      } else {
        chart && chart.resize();
      }
    },
  },
};
