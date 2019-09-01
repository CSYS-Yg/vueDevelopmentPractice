<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    // 这种监听无法监听 option 内部的属性变化 比如 option.data
    option(val) {
      this.chart.setOption(val);
    }
    // // 深度监听,但是太消耗页面性能
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }
  },
  created() {
    // 页面收缩时，防抖
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      this.chart.resize();
    },
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      this.chart.setOption(this.option);
    }
  }
};
</script>

<style></style>
