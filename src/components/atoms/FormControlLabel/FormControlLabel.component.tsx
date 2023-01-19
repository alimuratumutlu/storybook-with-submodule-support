import React from "react";
import { FormControlLabel as MuiFormControlLabel } from "@mui/material";

interface Props {
	label: string;
	control: JSX.Element;
	labelPlacement?: "end" | "start" | "top" | "bottom";
}

const FormControlLabel: React.FC<Props> = ({
	label,
	control,
	labelPlacement = "end",
}) => {
	return (
		<MuiFormControlLabel
			label={label}
			control={control}
			labelPlacement={labelPlacement}
		/>
	);
};

FormControlLabel.defaultProps = {
	labelPlacement: "end",
};

export default FormControlLabel;
