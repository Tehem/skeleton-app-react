import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    alt: "Tom's profile picture",
    srOnly: "Tom's avatar",
};

export const WithPicture = Template.bind({});
WithPicture.args = {
    src: 'https://static.fanfictions.fr/images/mini/default.png',
    alt: "Tom's profile picture",
    srOnly: "Tom's avatar",
};
