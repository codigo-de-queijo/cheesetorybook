import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Steps } from "./Steps";

export default {
  title: "Steps",
  component: Steps,
  argTypes: {},
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const Step = Template.bind({});
Step.args = {
  current: 0,
};
