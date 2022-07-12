import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Buttton';

//Título no storybook
export default {
    title: 'Botão',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color'}, click: { action: 'clicked' },
    },

    } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} click = {() => alert("Clicou!")}/>;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
    label: 'Success',
    backgroundColor: 'green'
};

export const Danger = Template.bind({});
Danger.args = {
    label: 'Danger',
    backgroundColor: 'red',
};

export const Warning = Template.bind({});
Warning.args = {
    label: 'Warning',
    backgroundColor: 'orange'
};

export const Info = Template.bind({});
Info.args = {
    label: 'Info',
    backgroundColor: 'rgba(255, 155, 155, 0.466)'
};

export const Light = Template.bind({});
Light.args = {
    label: 'Light',
    backgroundColor: '#B0C4DE'
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Dark',
    backgroundColor: '#8A2BE2'
};



