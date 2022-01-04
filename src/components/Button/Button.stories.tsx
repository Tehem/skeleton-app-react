import { faCoffee } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    disabled: false,
    outline: false,
    circle: false,
    square: false,
    loading: false,
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    disabled: false,
    outline: false,
    circle: false,
    square: false,
    loading: false,
    type: 'secondary',
};

export const withIcon = Template.bind({});
withIcon.args = {
    icon: (
        <FontAwesomeIcon
            icon={faCoffee}
            size="lg"
            className="-ml-1 mr-2 h-5 w-5"
            aria-hidden="true"
        />
    ),
    label: 'Button',
    disabled: false,
    outline: false,
    circle: false,
    square: false,
    loading: false,
    type: 'primary',
};
