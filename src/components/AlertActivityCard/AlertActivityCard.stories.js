import AlertActivityCard from ".";

export default {
  title: "AlertActivityCard",
  component: AlertActivityCard,
};

const Template = (args) => <AlertActivityCard {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  text: "Activity berhasil dihapus",
};
