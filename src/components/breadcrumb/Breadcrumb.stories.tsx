import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

export default {
    title: "Breadcrumb",
    component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {
    
    items: [
        {url: "https://www.google.com/",title: "FReNeTiC"},
        {url: "https://www.google.com/",title: "Raul"},
        {url: "https://github.com/", title: "Augusto"},
        {url: "https://www.instagram.com/", title: "Rômulo"},
        {url: "https://facebook.com/", title: "Abner"}
    ]
};