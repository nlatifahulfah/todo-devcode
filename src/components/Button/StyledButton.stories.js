import StyledButton from "./StyledButton";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";

export default {
  title: "StyledButton",
  component: StyledButton,
};

const Template = (args) => <StyledButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "primary",
  disabled: true,
  children: "Disabled",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Secondary",
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  color: "primary",
  children: "Tambah",
  startIcon: <PlusIcon />,
};
