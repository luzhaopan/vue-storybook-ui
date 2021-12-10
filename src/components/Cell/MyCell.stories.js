import MyCell from './MyCell.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Cell',
  component: MyCell,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCell },
  template: '<my-cell v-bind="$props" />',
});

export const Cell = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Cell.args = {};
