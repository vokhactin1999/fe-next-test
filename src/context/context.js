"use client";
import React, { useState } from "react";
import { createContext } from "react";
export const ScrollInfoContext = createContext("2");

export const ScrollInfoProvider = ({ children }) => {
	const [selectedId, setSelectedId] = useState({ gagoId: "2" });

	return (
		<ScrollInfoContext.Provider value={{ selectedId, setSelectedId }}>
			{children}
		</ScrollInfoContext.Provider>
	);
};
