import React, { useState } from "react";
import { Modal as MuiModal } from "@mui/material";
import { Button } from "../../atoms/Button/Button.component";

interface Props {
	title: string;
	children: React.ReactNode;
	buttonText: string;
}

const MyModal: React.FC<Props> = ({ title, children, buttonText }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				variant="contained"
				onClick={handleOpen}
				label={buttonText}
			/>

			<MuiModal open={open} onClose={handleClose}>
				<div>
					<h2>{title}</h2>
					{children}
				</div>
			</MuiModal>
		</>
	);
};

export default MyModal;
