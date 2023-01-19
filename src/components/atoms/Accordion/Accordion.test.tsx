/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

describe("<Accordion />", () => {
	it("renders without crashing", () => {
		render(
			<Accordion>
				<AccordionSummary>Summary</AccordionSummary>
				<AccordionDetails>Details</AccordionDetails>
			</Accordion>
		);
	});

	it("expands when summary is clicked", () => {
		const { getByText } = render(
			<Accordion>
				<AccordionSummary>Summary</AccordionSummary>
				<AccordionDetails>Details</AccordionDetails>
			</Accordion>
		);
		const summary = getByText("Summary");
		fireEvent.click(summary);
		expect(summary.getAttribute("aria-expanded")).toBe("true");
	});

	it("calls onChange callback when expanded", () => {
		const onChange = jest.fn();
		const { getByText } = render(
			<Accordion onChange={onChange}>
				<AccordionSummary>Summary</AccordionSummary>
				<AccordionDetails>Details</AccordionDetails>
			</Accordion>
		);
		const summary = getByText("Summary");
		fireEvent.click(summary);
		expect(onChange).toHaveBeenCalled();
	});

	it("has the correct default expanded state", () => {
		const { getByText } = render(
			<Accordion defaultExpanded={true}>
				<AccordionSummary>Summary</AccordionSummary>
				<AccordionDetails>Details</AccordionDetails>
			</Accordion>
		);
		const summary = getByText("Summary");
		expect(summary.getAttribute("aria-expanded")).toBe("true");
	});
});
