import ActivityCard from ".";

export default {
  title: "ActivityCard",
  component: ActivityCard,
};

const Template = (args) => <ActivityCard {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  title: "Sample Activity",
  date: "2021-10-15T15:34:42.000Z",
  onClickDelete: () => console.log("delete"),
};
