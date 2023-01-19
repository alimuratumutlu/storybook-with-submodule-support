/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

describe("<RadioGroup />", () => {
	const options = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];

	it("renders without crashing", () => {
		render(
			<RadioGroup>
				{options.map(({ label, value }) => (
					<FormControlLabel
						key={value}
						value={value}
						control={<Radio />}
						label={label}
					/>
				))}
			</RadioGroup>
		);
	});

	it("handles change events", () => {
		const onChange = jest.fn();
		const { getByLabelText } = render(
			<RadioGroup onChange={onChange}>
				{options.map(({ label, value }) => (
					<FormControlLabel
						key={value}
						value={value}
						control={<Radio />}
						label={label}
					/>
				))}
			</RadioGroup>
		);
		const option1 = getByLabelText("Option 1");
		fireEvent.click(option1);
		expect(onChange).toHaveBeenCalledWith({ target: { value: "option1" } });
	});

	it("has the correct default value", () => {
		const option2: HTMLInputElement = screen.getByLabelText("Option 2");
		expect(option2.checked).toBe(true);
	});
});
