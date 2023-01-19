import React, { useState } from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
	const [isChecked, setIsChecked] = useState(checked);

	const checkBoxLabel = { inputProps: { "aria-label": label } };

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
		onChange(event.target.checked);
	};

	return (
		<MuiCheckbox
			{...checkBoxLabel}
			checked={isChecked}
			onChange={handleChange}
		/>
	);
};

export default Checkbox;
