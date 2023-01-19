import React from "react";
import {
	CircularProgress as MuiCircularProgress,
	CircularProgressProps,
} from "@mui/material";

const MyProgress: React.FC<CircularProgressProps> = ({ value, color }) => {
	return <MuiCircularProgress value={value} color={color} />;
};

export default MyProgress;
