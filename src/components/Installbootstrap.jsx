"use client";
import React, { useEffect } from "react";

const Installbootstrap = () => {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.js");
	}, []);
	return <></>;
};

export default Installbootstrap;
