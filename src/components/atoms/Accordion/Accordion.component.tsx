import React from "react";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionProps {
	expanded?: boolean;
	onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
	summary: JSX.Element | string;
	details: JSX.Element | string;
}

const Accordion: React.FC<AccordionProps> = ({
	expanded = false,
	onChange,
	summary,
	details,
}) => {
	return (
		<MuiAccordion expanded={expanded} onChange={onChange}>
			<MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
				{summary}
			</MuiAccordionSummary>
			<MuiAccordionDetails>{details}</MuiAccordionDetails>
		</MuiAccordion>
	);
};

Accordion.defaultProps = {
	expanded: false,
	onChange: () => {},
};

export default Accordion;
