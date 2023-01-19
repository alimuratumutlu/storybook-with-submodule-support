import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "./Avatar.component";

storiesOf("Avatar", module)
	.add("default", () => <Avatar alt="avatar image" />)
	.add("with src", () => (
		<Avatar
			src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
			alt="avatar image"
		/>
	));
