/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Autocomplete, AutocompleteRenderInputParams } from "@mui/material";

describe("<Autocomplete />", () => {
	const options = ["Option 1", "Option 2", "Option 3"];

	it("renders without crashing", () => {
		render(
			<Autocomplete
				options={options}
				renderInput={function (
					params: AutocompleteRenderInputParams
				): React.ReactNode {
					throw new Error("Function not implemented.");
				}}
			/>
		);
	});

	it("displays options when input is focused", () => {
		fireEvent.focus(screen.getByPlaceholderText("Select an option"));
		const listbox = screen.getByRole("listbox");
		expect(listbox).toBeDefined();
		options.forEach((option) => {
			expect(screen.getByText(option)).toBeDefined();
		});
	});

	it("selects an option when clicked", () => {
		const onChange = jest.fn();
		fireEvent.focus(screen.getByPlaceholderText("Select an option"));
		const listbox = screen.getByRole("listbox");
		const option = listbox.firstChild;
		fireEvent.click(option!);
		expect(onChange).toHaveBeenCalledWith(options[0]);
	});
});
