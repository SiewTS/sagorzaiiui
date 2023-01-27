import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../ui/Text/Text";

export default {
    title: "typography/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Paragraph = Template.bind({});
Paragraph.args = {
    content:
        "I love sagorzaii because he is so handsome, charismatic, honest, sweet, kind & thoughtful.",
    category: "text",
};

export const Keyboard = Template.bind({});
Keyboard.args = {
    content: "Ctrl C",
    category: "keyboard",
};

export const Code = Template.bind({});
Code.args = {
    content: "<h1>Hello World!</h1>",
    category: "code",
};

export const Link = Template.bind({});
Link.args = {
    content: "hover here",
    category: "link",
};
