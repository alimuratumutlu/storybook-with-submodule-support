import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./Link.component";

describe("Link", () => {
	it("should have the correct href", () => {
		const href = "https://github.com/muum";
		const children = "Link";
		render(<Link href={href}>{children}</Link>);
		const link = screen.getByText(children);
		expect(link).toHaveAttribute("href", href);
	});
});
