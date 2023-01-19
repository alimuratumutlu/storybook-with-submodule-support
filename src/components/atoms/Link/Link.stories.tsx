import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "./Link.component";

storiesOf("Link", module).add("default", () => (
	<Link href="https://github.com/muum">Link</Link>
));
