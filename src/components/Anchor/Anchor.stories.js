import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
Vue.use(ElementUI);
import Anchor from "./Anchor.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/AnchorPoint",
  component: Anchor,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Anchor },
  template: '<anchor v-bind="$props" />',
});

export const AnchorPoint = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
AnchorPoint.args = {};
