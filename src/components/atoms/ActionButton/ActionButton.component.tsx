import React from "react";
import { Fab as MuiFab } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
	color?: "default" | "inherit" | "primary" | "secondary";
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Fab: React.FC<Props> = ({ color = "primary", onClick }) => {
	return (
		<MuiFab color={color} onClick={onClick}>
			<ExpandMoreIcon />
		</MuiFab>
	);
};

Fab.defaultProps = {
	color: "primary",
};

export default Fab;
