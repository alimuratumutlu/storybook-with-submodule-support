import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonGroup from "./ButtonGroup.component";

storiesOf("ButtonGroup", module).add("default", () => (
	<ButtonGroup
		options={["Option1", "Option2", "Option3"]}
		selectedValue={"Option2"}
		onChange={() => {}}
	/>
));
