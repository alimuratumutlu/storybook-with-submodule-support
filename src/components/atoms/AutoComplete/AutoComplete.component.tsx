import React, { useState } from "react";
import {
	Autocomplete as MuiAutocomplete,
	Input as MuiInput,
} from "@mui/material";

interface Props {
	options: string[];
	onSelect: (value: string | null) => void;
}

const AutoComplete: React.FC<Props> = ({ options, onSelect }) => {
	const [inputValue, setInputValue] = useState<string | null>("");

	return (
		<MuiAutocomplete
			options={options}
			value={inputValue}
			onChange={(event, newValue) => {
				setInputValue(newValue);
				onSelect(newValue);
			}}
			renderInput={(params) => (
				<MuiInput {...params} placeholder="Search options" />
			)}
		/>
	);
};

export default AutoComplete;
