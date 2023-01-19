import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "./Alert.component";

storiesOf("Alert", module)
	.add("default", () => <Alert message="This is a default message" />)
	.add("error", () => (
		<Alert message="This is an error message" severity="error" />
	))
	.add("warning", () => (
		<Alert message="This is a warning message" severity="warning" />
	));
