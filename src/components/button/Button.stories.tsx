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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Primary',
    click: () => {
        alert('Este é um botão primário');
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    click: () => {
        alert('Este é um botão secundário');
    }
};

export const Success = Template.bind({});
Success.args = {
    label: 'Success',
    backgroundColor: 'green',
    click: () => {
        alert('Sucessoooo!!');
    }
};

export const Danger = Template.bind({});
Danger.args = {
    label: 'Danger',
    backgroundColor: 'red',
    click: () => {
        alert('Perigoo!');
    }
};

export const Warning = Template.bind({});
Warning.args = {
    label: 'Warning',
    backgroundColor: 'orange',
    click: () => {
        alert('Warning!');
    }
};

export const Info = Template.bind({});
Info.args = {
    label: 'Info',
    backgroundColor: 'rgba(255, 155, 155, 0.466)',
    click: () => {
        alert('Info');
    }
};

export const Light = Template.bind({});
Light.args = {
    label: 'Light',
    backgroundColor: '#B0C4DE',
    click: () => {
        alert('Light');
    }
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Dark',
    backgroundColor: '#8A2BE2',
    click: () => {
        alert('Dark');
    }
};



