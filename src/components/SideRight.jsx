"use client";
import React from "react";
import GagoScrollingPc from "./GagoScrollingPc";
import GagoScrollingMobile from "./GagoScrollingMobile";
import SocialHeader from "./SocialHeader";
import { useGetElementById, useWindowSize } from "../hook";

import "./SideRight.css";
function SideRight(props) {
	const selectedElement = useGetElementById();
	const windowSize = useWindowSize();

	return (
		<div
			className='side droite'
			style={{ background: `${selectedElement.mainColor}` }}>
			{windowSize.width > 1200 ? (
				<GagoScrollingPc />
			) : (
				<GagoScrollingMobile />
			)}
			<SocialHeader />
		</div>
	);
}

export default SideRight;
