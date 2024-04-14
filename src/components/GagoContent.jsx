import React, { Suspense } from "react";

import SideLeft from "./SideLeft";
import SideRight from "./SideRight";
import { ScrollInfoProvider } from "@/context/context";
import Spinner from "./Spinner";

const GagoContent = () => {
	return (
		<ScrollInfoProvider>
			<div className='w-layout-hflex flex-block'>
				<SideLeft />
				<SideRight />
			</div>
		</ScrollInfoProvider>
	);
};

export default GagoContent;
