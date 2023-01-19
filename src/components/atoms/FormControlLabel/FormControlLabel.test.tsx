import React from "react";
import { render, screen } from "@testing-library/react";
import FormControlLabel from "./FormControlLabel.component";
import Radio from "../Radio/Radio.component";

describe("MyFormControlLabel", () => {
	it("renders label and control", () => {
		render(<FormControlLabel label="Label" control={<Radio />} />);
		expect(screen.getByText("Label")).toBeInTheDocument();
		expect(screen.getByRole("radio")).toBeInTheDocument();
	});
});
