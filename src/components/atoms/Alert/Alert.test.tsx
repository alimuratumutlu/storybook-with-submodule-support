import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert.component";

describe("Alert", () => {
	it("should display the correct message and severity", () => {
		const message = "This is an error message";
		const severity = "error";
		render(<Alert message={message} severity={severity} />);
		expect(screen.getByText(message)).toBeInTheDocument();
		expect(screen.getByRole("alert")).toHaveAttribute(
			"aria-label",
			severity
		);
	});
});
