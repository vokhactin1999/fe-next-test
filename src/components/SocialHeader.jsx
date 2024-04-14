"use client";
import React, { useState } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./SocialHeader.css";
import { useGetElementById } from "../hook";
import { useTranslations } from "next-intl";
function SocialHeader(props) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const selectedElement = useGetElementById();
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const t = useTranslations("IndexHomePage");
	return (
		<div className='html-embed-2 w-embed w-script'>
			<div className='header'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Dropdown
								isOpen={dropdownOpen}
								toggle={toggle}
								size='xs'
								className='gago__dropdown'>
								<DropdownToggle
									className='rounded-pill white toggle-mobile'
									style={{
										background: selectedElement.itemColor,
										border: "none",
									}}
									caret>
									{t("download proposal")}
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<a
											className='dropdown-item download-proposal-vietnamese'
											target='_blank'
											href='https://docs.google.com/presentation/d/e/2PACX-1vS_KSmBUey_jTUqgbdIux_iE3GcmPR4jYamr4581xfaoNH8_4Wv1_OPUiBUt6iI6h1klVgz5-65rJOq/pub?start=false&loop=false&delayms=3000'>
											{t("en version")}
										</a>
									</DropdownItem>
									<DropdownItem>
										<a
											className='dropdown-item download-proposal-english'
											target='_blank'
											href='https://docs.google.com/presentation/d/e/2PACX-1vQGnFrDfUNCodXyiCb2y3V0YRyRFMnG14IR3M0MaFkYz3VsHiUcwsgDlVaKh2YmGQef-sGQHWiNNtZW/pub?start=false&loop=false&delayms=3000'>
											{t("vn version")}
										</a>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
						<div className='col'>
							<div className='social'>
								<a
									href='https://www.behance.net/gagostudios'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='img-optimize/behance.svg' />
								</a>
								<a
									href='https://www.instagram.com/gago.studios/'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='img-optimize/instagram.svg' />
								</a>
								<a
									href='https://www.facebook.com/gagostudios'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='img-optimize/Facebook.svg' />
								</a>
								<a
									href='https://www.linkedin.com/company/gago-studios'
									target='_blank'
									className='header-link'
									style={{
										background: `${selectedElement.itemColor}`,
									}}>
									<img src='img-optimize/Linkedin.svg' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialHeader;
