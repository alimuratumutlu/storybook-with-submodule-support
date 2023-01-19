import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal.component";

describe("MyModal", () => {
	it("should open and close the modal when the button is clicked", () => {
		const title = "Modal Title";
		const children = "Modal Content";
		render(
			<Modal title={title} buttonText="Open Modal">
				{children}
			</Modal>
		);

		const openButton = screen.getByText("Open Modal");
		openButton.click();

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(children)).toBeInTheDocument();

		const closeButton = screen.getByRole("button", { name: /close/i });
		closeButton.click();

		expect(screen.queryByText(title)).not.toBeInTheDocument();
		expect(screen.queryByText(children)).not.toBeInTheDocument();
	});
});
