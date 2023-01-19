import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup.component";

describe("ButtonGroup", () => {
	it("should trigger onChange event when a button is clicked", () => {
		const options = ["Option1", "Option2", "Option3"];
		const selectedValue = "Option2";
		const onChange = jest.fn();
		render(
			<ButtonGroup
				options={options}
				selectedValue={selectedValue}
				onChange={onChange}
			/>
		);
		const option1 = screen.getByText("Option1");
		option1.click();
		expect(onChange).toHaveBeenCalledWith("Option1");
	});
});
