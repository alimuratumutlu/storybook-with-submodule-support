import React from "react";
import { storiesOf } from "@storybook/react";
import AutoComplete from "./AutoComplete.component";

storiesOf("Auto Complete", module).add("default", () => (
	<AutoComplete
		options={["Option1", "Option2", "Option3"]}
		onSelect={() => {}}
	/>
));
