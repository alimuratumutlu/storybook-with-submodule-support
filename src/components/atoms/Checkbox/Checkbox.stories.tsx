import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.component";

storiesOf("Checkbox", module)
	.add("default", () => (
		<Checkbox label="Checkbox label" checked={false} onChange={() => {}} />
	))
	.add("checked", () => (
		<Checkbox label="Checkbox label" checked={true} onChange={() => {}} />
	));
