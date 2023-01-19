import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select.component";

storiesOf("Select", module).add("default", () => (
	<Select
		options={["Option1", "Option2", "Option3"]}
		value={"Option2"}
		onChange={() => {}}
	/>
));
