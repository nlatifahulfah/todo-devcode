import TitleTextField from ".";

export default {
  title: "TitleTextField",
  component: TitleTextField,
};

const Template = (args) => <TitleTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "New Activity",
};
