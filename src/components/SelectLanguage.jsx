"use client";
import React, { startTransition } from "react";
import VnFlat from "./VnFlat";
import CnFlat from "./CnFlat";
import EnFlat from "./EnFlat";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import "./SelectLanguage.css";

import { useGetElementById, useClickSelection } from "../hook";

function SelectLanguage(props) {
	const selectedElement = useGetElementById();
	const t = useTranslations("IndexHomePage");
	const router = useRouter();
	const locales = useLocale();
	const { toggleSelectLanguage, handleToggleSelection, selectedLanguage } =
		useClickSelection();

	const changeLanguage = (lng) => {
		console.log(lng);
		startTransition(() => {
			router.replace(`/${lng}`);
		});
	};

	const renderTextSelectedLanguage = () => {
		const languageCode = {
			en: {
				title: "English",
				icon: <EnFlat />,
			},
			vi: {
				title: "Tiếng Việt",
				icon: <VnFlat />,
			},
			zh: {
				title: "中国人",
				icon: <CnFlat />,
			},
		};
		const info = languageCode[locales];
		return (
			<>
				{info.icon}
				<span id='languageSelect' className='selected m-0 p-t-0 p-b-0'>
					{info.title}
				</span>
			</>
		);
	};
	return (
		<div className='select-box rounded-pill'>
			{toggleSelectLanguage && (
				<div className='options-container'>
					<div
						className='option d-flex align-items-center'
						id='engLanguage'
						value='english'
						onClick={() => changeLanguage("en")}>
						<EnFlat />
						{t("en lng")}
					</div>
					<div
						className='option d-flex align-items-center'
						id='viLanguage'
						value='vietnamese'
						onClick={() => changeLanguage("vi")}>
						<span>
							<VnFlat />
						</span>
						<span>{t("vi lng")}</span>
					</div>
					<div
						className='option d-flex align-items-center'
						id='cnLanguage'
						value='chinese'
						onClick={() => changeLanguage("zh")}>
						<CnFlat />
						<label htmlFor='dm' className='m-0'>
							{t("zh lng")}
						</label>
					</div>
				</div>
			)}

			<div
				className='selector-wrapper d-flex align-items-center'
				id='selectorWrapper'
				style={{
					background: `${selectedElement.itemColor}`,
					color: "white",
					height: "33px",
				}}
				onClick={handleToggleSelection}>
				{renderTextSelectedLanguage()}
			</div>
		</div>
	);
}

export default SelectLanguage;
