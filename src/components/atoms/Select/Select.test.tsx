import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "./Select.component";

describe("Select", () => {
	it("should trigger onChange event when an option is selected", () => {
		const options = ["Option1", "Option2", "Option3"];
		const value = "Option2";
		const onChange = jest.fn();

		render(<Select options={options} value={value} onChange={onChange} />);

		const select = screen.getByRole("button");
		select.click();

		const option1 = screen.getByText("Option1");
		option1.click();

		expect(onChange).toHaveBeenCalledWith("Option1");
	});
});
