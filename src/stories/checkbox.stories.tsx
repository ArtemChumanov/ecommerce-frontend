import React, { useState } from "react";
import Checkbox from "../components/shared/UI-elements/Checkbox/CheckBox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ setChecked, ...args }) => {
  const [check, setCheck] = useState(true);
  return <Checkbox setChecked={() => setCheck(!check)} {...args} />;
};

export const Small = Template.bind({});
Small.args = {};
