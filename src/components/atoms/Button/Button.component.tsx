import React from "react";
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
	label: string;
	onClick?: () => void;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
	<MuiButton {...rest}>{label}</MuiButton>
);

Button.defaultProps = {
	variant: "contained",
	size: "medium",
	color: "primary",
};
