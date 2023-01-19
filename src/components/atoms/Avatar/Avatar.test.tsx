import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar.component";

describe("Avatar", () => {
	it("should display the correct src and alt", () => {
		const src = "https://example.com/avatar.jpg";
		const alt = "avatar image";
		render(<Avatar src={src} alt={alt} />);
		const avatar = screen.getByRole("img");
		expect(avatar).toHaveAttribute("src", src);
		expect(avatar).toHaveAttribute("alt", alt);
	});
});
