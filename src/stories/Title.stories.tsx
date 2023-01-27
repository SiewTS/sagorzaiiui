import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "../ui/Title/Title";

export default {
    title: "typography/Title",
    component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args} />;

export const Main = Template.bind({});
Main.args = {
    label: "Main Title",
    type: "main",
};

export const SubTitle = Template.bind({});
SubTitle.args = {
    label: "Main Title",
    type: "sub",
};

export const Heading1 = Template.bind({});
Heading1.args = {
    label: "Main Title",
    type: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
    label: "Main Title",
    type: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
    label: "Main Title",
    type: "h3",
};

export const ButtonTitle = Template.bind({});
ButtonTitle.args = {
    label: "Main Title",
    type: "button",
};
