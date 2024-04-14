"use client";
import React from "react";

import SideLeft from "./SideLeft";
import SideRight from "./SideRight";
import { ScrollInfoProvider } from "@/context/context";
import GagoLogoAndIconLeft from "@/components/GagoLogoAndIconLeft";
const GagoProvidder = () => {
	
	return (
		<ScrollInfoProvider>
			<GagoLogoAndIconLeft />
			<div className='w-layout-hflex flex-block'>
				<SideLeft />
				<SideRight />
			</div>
		</ScrollInfoProvider>
	);
};

export default GagoProvidder;
