import React from "react";
import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox.component";

describe("Checkbox", () => {
	it("should trigger onChange event when clicked", () => {
		const label = "Checkbox label";
		const onChange = jest.fn();
		render(<Checkbox label={label} checked={false} onChange={onChange} />);
		const checkbox = screen.getByLabelText(label);
		checkbox.click();
		expect(onChange).toHaveBeenCalledWith(true);
	});
});
