import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge.component";

storiesOf("Badge", module).add("default", () => (
	<Badge badgeContent="3">Some Text</Badge>
));
