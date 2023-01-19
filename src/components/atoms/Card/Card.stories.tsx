import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card.component";

storiesOf("Card", module).add("default", () => (
	<Card title="Card Title" content="Card Content" />
));
