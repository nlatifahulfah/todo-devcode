import { todoPriority } from "components/TodoCard/TodoCard";
import SelectPriority from ".";

export default {
  title: "SelectPriority",
  component: SelectPriority,
};

const Template = (args) => <SelectPriority {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: todoPriority["Very High"],
};
