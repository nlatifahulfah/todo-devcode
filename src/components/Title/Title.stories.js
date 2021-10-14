import Title from ".";

export default {
  title: "Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const ActivityTitle = Template.bind({});
ActivityTitle.args = {
  children: "Activity",
};
