import React from "react";
import ContactList from "@/components/ContactList";
import GagoProvidder from "@/components/GagoProvidder";

import "./index.css";

export const metadata = {
	title: "GAGO Studios - Mascot Design for Brand",
	verification: {
		other: {
			title: "GAGO Studios - Mascot Design for Brand",
			language: "English",
		},
	},
	description:
		"GAGO Studios provides Mascot and Comic Strips services for Brand Marketing.",
	keywords: "comicstrip, mascot, thiet ke linh vat, brand design",
	openGraph: {
		type: "website",
		url: "https://gago.studio/",
		title: "GAGO Studios - Mascot Design for Brand",
		images: [
			{
				url: "https://gago.studio/img/social.jpg",
				width: 800,
				height: 600,
				alt: "GAGO Studios Mascot",
			},
		],
	},
	twitters: {},
	robots: {
		index: true,
		follow: true,
	},
};

const Home = async () => {
	await new Promise((resolve) => setTimeout(resolve, 500));

	return (
		<>
			<div className='body'>
				<div className='cover-body'>
					<ContactList />
					<GagoProvidder />
				</div>
			</div>
		</>
	);
};

export default Home;
