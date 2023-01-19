import React from "react";
import { storiesOf } from "@storybook/react";
import Progress from "./Progress.component";

storiesOf("Progress", module)
	.add("default", () => <Progress value={50} />)
	.add("with buffer", () => <Progress value={50} color={"inherit"} />);
