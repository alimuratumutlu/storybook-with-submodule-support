import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "./Radio.component";

describe("MyRadio", () => {
	it("renders label and radio input", () => {
		const onChange = jest.fn();
		render(<Radio name="name" checked={false} onChange={onChange} />);
		expect(screen.getByText("Label")).toBeInTheDocument();
		expect(screen.getByRole("radio")).toBeInTheDocument();
	});
});
