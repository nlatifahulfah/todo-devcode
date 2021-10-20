import ConfirmDeleteCard from ".";

export default {
  title: "ConfirmDeleteCard",
  component: ConfirmDeleteCard,
};

const Template = (args) => <ConfirmDeleteCard {...args} />;

export const DeleteActivity = Template.bind({});
DeleteActivity.args = {
  item: "activity",
  itemTitle: "Meeting dengan Client",
};

export const DeleteListItem = Template.bind({});
DeleteListItem.args = {
  item: "List Item",
  itemTitle: "Telur ayam",
};
