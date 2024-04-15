import React from "react";
import Image from "next/image";
const ImageGago = ({ url, quanlity = 75, ...rest }) => {
	return <Image src={url} quality={quanlity} {...rest} />;
};

export default ImageGago;
