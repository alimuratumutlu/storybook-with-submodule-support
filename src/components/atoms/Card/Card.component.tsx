import React from "react";
import {
	Card as MuiCard,
	CardHeader as MuiCardHeader,
	CardContent as MuiCardContent,
	Typography as MuiTypography,
} from "@mui/material";

interface Props {
	title: string;
	content: string;
}

const Card: React.FC<Props> = ({ title, content }) => {
	return (
		<MuiCard>
			<MuiCardHeader title={title} />
			<MuiCardContent>
				<MuiTypography>{content}</MuiTypography>
			</MuiCardContent>
		</MuiCard>
	);
};

export default Card;
