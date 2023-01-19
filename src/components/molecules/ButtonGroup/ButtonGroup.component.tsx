import React from "react";
import { ButtonGroup as MuiButtonGroup } from "@mui/material";
import { Button } from "../../atoms/Button/Button.component";

interface Props {
	options: string[];
	selectedValue: string;
	onChange: (value: string) => void;
}

const MyButtonGroup: React.FC<Props> = ({
	options,
	selectedValue,
	onChange,
}) => {
	return (
		<MuiButtonGroup>
			{options.map((option) => (
				<Button
					key={option}
					variant={option === selectedValue ? "contained" : "text"}
					onClick={() => onChange(option)}
					label={option}
				/>
			))}
		</MuiButtonGroup>
	);
};

export default MyButtonGroup;
