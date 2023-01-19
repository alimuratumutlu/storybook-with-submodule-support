import React, { useState } from "react";
import {
	RadioGroup as MuiRadiGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";

interface Props {
	options: string[];
	value: string;
	onChange: (value: string) => void;
}

const MyRadioGroup: React.FC<Props> = ({ options, value, onChange }) => {
	const [selectedValue, setSelectedValue] = useState(value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
		onChange(event.target.value);
	};

	return (
		<MuiRadiGroup value={selectedValue} onChange={handleChange}>
			{options.map((option) => (
				<FormControlLabel
					key={option}
					value={option}
					control={<Radio />}
					label={option}
				/>
			))}
		</MuiRadiGroup>
	);
};

export default MyRadioGroup;
