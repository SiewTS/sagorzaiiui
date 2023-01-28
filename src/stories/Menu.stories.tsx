import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "../ui/Menu/Menu";

export default {
    title: "navigation/Menu",
    component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    items: [
        {
            label: "Oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            key: "1",
            title: "One",
        },
        {
            label: "Two",
            key: "2",
            title: "Two",
        },
        {
            label: "Three",
            key: "3",
            title: "Three",
            disabled: true,
        },
    ],
};
