import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";

interface Props {
	options: string[];
	value: string;
	onChange: (value: string) => void | undefined;
}

const MySelect: React.FC<Props> = ({ options, value, onChange }) => {
	const [selectedValue, setSelectedValue] = useState(value);

	return (
		<Select
			value={selectedValue}
			onChange={(e) => {
				setSelectedValue(e.target.value as string);
				onChange(e.target.value as string);
			}}
		>
			{options.map((option) => (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			))}
		</Select>
	);
};

export default MySelect;
