/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button.component";

describe("<Button />", () => {
	it("renders without crashing", () => {
		render(<Button label={""} />);
	});

	it("has the correct text", () => {
		expect(screen.getByText("Test")).toBeDefined();
	});

	it("handles click events", () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<Button onClick={onClick} label={"Test"} />
		);
		fireEvent.click(getByText("Test"));
		expect(onClick).toHaveBeenCalled();
	});
});
