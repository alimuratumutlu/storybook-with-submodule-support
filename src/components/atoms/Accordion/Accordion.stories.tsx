import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "./Accordion.component";

storiesOf("Accordion", module)
	.add("default", () => (
		<Accordion summary="Accordion Title" details="Accordion Detail" />
	))
	.add("no summary", () => (
		<Accordion summary="Accordion Title" details="Accordion Detail" />
	));
