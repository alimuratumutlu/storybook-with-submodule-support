import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge.component";

describe("Badge", () => {
	it("should display the correct badge content", () => {
		const badgeContent = "3";
		const children = <p>Some text</p>;
		render(<Badge badgeContent={badgeContent}>{children}</Badge>);
		const badge = screen.getByText(badgeContent);
		expect(badge).toBeInTheDocument();
	});
});
