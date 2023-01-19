import React from "react";
import { Alert as MuiAert, AlertProps } from "@mui/material";

interface Props extends AlertProps {
	message: string;
}

const Alert: React.FC<Props> = ({ message, ...rest }) => {
	return <MuiAert {...rest}>{message}</MuiAert>;
};

Alert.defaultProps = {
	severity: "info",
};

export default Alert;
