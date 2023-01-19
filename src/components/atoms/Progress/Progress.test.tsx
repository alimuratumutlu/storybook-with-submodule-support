import React from "react";
import { render, screen } from "@testing-library/react";
import Progress from "./Progress.component";

describe("Progress", () => {
	it("should display the correct value and buffer value", () => {
		const value = 50;
		const color = "inherit";
		render(<Progress value={value} color={color} />);

		const progressBar = screen.getByRole("progressbar");

		expect(progressBar).toHaveAttribute("aria-valuenow", value.toString());
		expect(progressBar).toHaveAttribute("aria-valuenow", color);
	});
});
