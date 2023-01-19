import React from "react";
import { storiesOf } from "@storybook/react";
import FormControlLabel from "./FormControlLabel.component";
import Radio from "../Radio/Radio.component";

storiesOf("FormControlLabel", module)
	.add("default", () => (
		<FormControlLabel
			label="Label"
			control={<Radio name="name" checked={false} />}
		/>
	))
	.add("top", () => (
		<FormControlLabel
			label="Label"
			control={<Radio />}
			labelPlacement="top"
		/>
	));
