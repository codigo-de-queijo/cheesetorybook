import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tooltip } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;
export const ToolTip = Template.bind({});
ToolTip.args = {
  description: "Olá, sou um Tooltip!",
};
