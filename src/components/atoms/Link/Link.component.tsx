import React from "react";
import { Link as MuiLink } from "@mui/material";

interface Props {
	href: string;
	children: React.ReactNode;
}

const MyLink: React.FC<Props> = ({ href, children }) => {
	return <MuiLink href={href}>{children}</MuiLink>;
};

export default MyLink;
