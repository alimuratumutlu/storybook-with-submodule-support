import React from "react";
import { Avatar } from "@mui/material";

interface Props {
	src?: string;
	alt: string;
}

const MyAvatar: React.FC<Props> = ({ src, alt }) => {
	return <Avatar src={src} alt={alt} />;
};

MyAvatar.defaultProps = {
	src: "",
};

export default MyAvatar;
