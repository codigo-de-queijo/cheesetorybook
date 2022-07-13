import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Buttton';

//Título no storybook
export default {
    title: 'Botão',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
        click: { action: 'clicked' },
    },

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    click: () => alert('Este é um botão Primário!'),
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    click: () => alert('Este é um botão Secundário!'),
    type: 'secondary',

};

export const Success = Template.bind({});
Success.args = {
    label: 'Success',
    click: () => alert('Este é um botão Success!'),
    type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
    label: 'Danger',
    click: () => alert('Este é um botão Danger!'),
    type: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
    label: 'Warning',
    click: () => alert('Cuidado ao apertar este botão!'),
    type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
    label: 'Info',
    click: () => alert('Este botão é Informativo!'),
    type: 'info',
};

export const Light = Template.bind({});
Light.args = {
    label: 'Light',
    click: () => alert('Este é um botão Light!'),
    type: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Dark',
    click: () => alert('Este é um botão Dark'),
    type: 'dark',
};



