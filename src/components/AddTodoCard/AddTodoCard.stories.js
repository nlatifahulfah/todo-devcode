import { todoPriority } from "components/TodoCard/TodoCard";
import AddTodoCard from ".";

export default {
  title: "AddTodoCard",
  component: AddTodoCard,
};

const Template = (args) => <AddTodoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  priority: "very-high",
};
