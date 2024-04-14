"use client";
import React from "react";
import Picker from "react-mobile-picker";
import "./GagoScrollingMobile.css";
import { useContext } from "react";
import { data_temoin } from "../assets/data-temoin";
import { ScrollInfoContext } from "@/context/context";

function GagoScrollingMobile() {
	const { setSelectedId, selectedId } = useContext(ScrollInfoContext);

	const getSelectedElementId = (value) => {
		setSelectedId(value);
	};

	return (
		<div className='scrollingdiv-mobile'>
			<Picker
				value={selectedId}
				onChange={getSelectedElementId}
				wheel='normal'
				style={{ height: "200px", itemHeight: "40px" }}
				className='picker-scroll'>
				<Picker.Column name='gagoId'>
					{data_temoin.map((option) => (
						<Picker.Item key={option.id} value={option.id}>
							{({ selected }) => (
								<div
									className='heading-2'
									style={{
										color: "#fff",
									}}>
									<p
										style={{
											fontSize: "18px",
											fontFamily: "Berlin Sans FB",
											fontWeight: "bold",
										}}>
										{option.title}
									</p>
								</div>
							)}
						</Picker.Item>
					))}
				</Picker.Column>
			</Picker>
		</div>
	);
}

export default GagoScrollingMobile;
