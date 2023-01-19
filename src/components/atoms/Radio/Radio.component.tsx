import React from "react";
import Radio from "@mui/material/Radio";

interface Props {
	name?: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyRadio: React.FC<Props> = ({ name, checked, onChange }) => {
	return <Radio name={name} checked={checked} onChange={onChange} />;
};

export default MyRadio;
