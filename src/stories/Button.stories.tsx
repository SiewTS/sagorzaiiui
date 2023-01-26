import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../ui/Button/Button';

export default {
    title: 'ui/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    label: 'Click Me',
    type: 'primary'
}

export const Success = Template.bind({})
Success.args = {
    label: 'Click Me',
    type: 'success'
}

export const Danger = Template.bind({})
Danger.args = {
    label: 'Click Me',
    type: 'danger'
}

export const Warning = Template.bind({})
Warning.args = {
    label: 'Click Me',
    type: 'warning'
}