import React from "react";
import Button from "../components/shared/UI-elements/Button/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Small = Template.bind({});
Small.args = {
  title: "Button4",
  size: "Small",
};

export const Large = Template.bind({});
Large.args = {
  title: "Button",
  size: "Large",
};
