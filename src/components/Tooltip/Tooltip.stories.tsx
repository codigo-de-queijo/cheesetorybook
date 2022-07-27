import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Avatar } from "../Avatar/Avatar";

export default {
    title: 'Tooltip',
    component: Tooltip,
    argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>
    <Avatar name="Raul Henrique" format="round" size="omg"></Avatar>
</Tooltip>

export const ToolTip = Template.bind({});
ToolTip.args = {
    description: 'Olá, sou um Tooltip!'
}