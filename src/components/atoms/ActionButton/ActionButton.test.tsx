import React from "react";
import { render, screen } from "@testing-library/react";
import ActionButton from "./ActionButton.component";

describe("ActionButton", () => {
	it("should trigger onClick event when clicked", () => {
		const onClick = jest.fn();
		render(<ActionButton onClick={onClick} />);
		const fabButton = screen.getByRole("button");
		fabButton.click();
		expect(onClick).toHaveBeenCalled();
	});
});
