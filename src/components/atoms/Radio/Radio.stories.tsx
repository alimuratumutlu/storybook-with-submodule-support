import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Radio from "./Radio.component";

storiesOf("Radio", module).add("default", () => {
	const [checked, setChecked] = useState(false);
	return (
		<Radio
			name="name"
			checked={checked}
			onChange={() => setChecked(!checked)}
		/>
	);
});
