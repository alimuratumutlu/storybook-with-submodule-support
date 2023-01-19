import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal.component";

storiesOf("Modal", module).add("default", () => (
	<Modal title="Modal Title" buttonText="Open Modal">
		Modal Content
	</Modal>
));
