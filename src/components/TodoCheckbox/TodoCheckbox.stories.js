import TodoCheckbox from ".";

export default {
  title: "TodoCheckbox",
  component: TodoCheckbox,
};

const Template = (args) => <TodoCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
};
