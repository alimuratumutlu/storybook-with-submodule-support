import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card.component";

describe("Card", () => {
	it("should display the correct title and content", () => {
		const title = "Card Title";
		const content = "Card Content";
		render(<Card title={title} content={content} />);
		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(content)).toBeInTheDocument();
	});
});
