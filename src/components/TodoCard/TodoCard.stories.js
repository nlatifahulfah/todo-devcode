import TodoCard from ".";
import { todoPriority } from "./TodoCard";

export default {
  title: "TodoCard",
  component: TodoCard,
};

const Template = (args) => <TodoCard {...args} />;

export const NotDone = Template.bind({});
NotDone.args = {
  isDone: false,
  priority: todoPriority["Very High"],
  title: "Lorem Ipsum",
};
