import React from "react";
import { Badge as MuiBadge } from "@mui/material";

interface Props {
	badgeContent: string;
	children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ badgeContent, children }) => {
	return <MuiBadge badgeContent={badgeContent}>{children}</MuiBadge>;
};

export default Badge;
