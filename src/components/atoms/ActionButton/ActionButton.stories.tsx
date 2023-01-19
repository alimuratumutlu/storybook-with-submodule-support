import React from "react";
import { storiesOf } from "@storybook/react";
import ActionButton from "./ActionButton.component";

storiesOf("Action Button", module)
	.add("default", () => <ActionButton onClick={() => {}} />)
	.add("secondary", () => (
		<ActionButton onClick={() => {}} color="secondary" />
	));
