import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Button, IPropsButton } from ".";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IPropsButton) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isDisabled: false,
  label: "INGRESAR",
  type: "button",
  className: "small",
  onClick: () => { return console.log("Click boton")}
};
