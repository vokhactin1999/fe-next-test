"use client";
import React from "react";

import {
	useGetContentByTemoinId,
	useGetElementById,
	useLockRoateHorizontallyOnMobile,
	useWindowSize,
} from "../hook";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import "./SideLeft.css";

function SideLeft(props) {
	const selectedElement = useGetElementById();
	const contentTemoin = useGetContentByTemoinId();

	const t = useTranslations("IndexHomePage");
	const windowSize = useWindowSize();
	const widthBrowser = windowSize.width;
	const isTabLet = windowSize.width > 767;
	const params = useParams();

	const { showOverlay } = useLockRoateHorizontallyOnMobile();
	const isMobile = widthBrowser <= 450;
	const allowSee = isMobile || widthBrowser >= 1000;

	if (showOverlay) {
		return (
			<div className='spinner-container'>
				<div>
					<img
						src='img-optimize/Logo.svg'
						width='85px'
						height='105px'
						alt=''
					/>
				</div>
				<div>
					<p>{"Please rotate the mobile screen vertically"}</p>
				</div>
				<div></div>
			</div>
		);
	} else if (!allowSee && !showOverlay) {
		return <NotAllowBackground />;
	}

	return (
		<div
			className='side gauche'
			style={{ backgroundImage: `url('${selectedElement.image}')` }}>
			<div className='social-mobile-1'>
				<a
					href='https://www.behance.net/gagostudios'
					target='_blank'
					className='header-link'
					style={{ background: `${selectedElement.itemColor}` }}>
					<img src='img-optimize/behance.svg' />
				</a>
				<a
					href='https://www.instagram.com/gago.studios/'
					target='_blank'
					className='header-link'
					style={{ background: `${selectedElement.itemColor}` }}>
					<img src='img-optimize/instagram.svg' />
				</a>
			</div>
			<div className='social-mobile-2'>
				<a
					href=' https://www.facebook.com/gagostudios'
					target='_blank'
					className='header-link'
					style={{ background: `${selectedElement.itemColor}` }}>
					<img src='img-optimize/Facebook.svg' />
				</a>
				<a
					href='https://www.linkedin.com/company/gago-studios'
					target='_blank'
					className='header-link'
					style={{ background: `${selectedElement.itemColor}` }}>
					<img src='img-optimize/Linkedin.svg' />
				</a>
			</div>
			<div className='w-layout-vflex flex-block-6'>
				<div id='temoinContainer'>
					<div className='temoin'>
						<div className='bloc-temoin bac3'>
							<div
								className='bloc-text'
								style={{
									background:
										isTabLet || null
											? null
											: `${selectedElement.gradientMobile}`,
								}}>
								<div className='wrapper-btn-view-more'>
									<div className='row'>
										<div
											className='col-12 w-col-tiny-8 p-0'
											style={{ textAlign: "left" }}>
											<div className='gago__title-and-view-more'>
												<h3
													className='titre-temoin black'
													style={{
														color: isTabLet
															? `${selectedElement.mainColor}`
															: "#ffffff",
													}}>
													{selectedElement?.title}
												</h3>
												<div
													className='viewMore'
													style={{
														textAlign: "right",
													}}>
													<a
														target='_blank'
														href={
															selectedElement?.link
														}>
														<button
															className='btn-view-more link-view-more'
															style={{
																backgroundColor: `${selectedElement.mainColor}`,
																color: "#ffff",
															}}>
															<svg
																width={24}
																height={24}
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'>
																<path
																	d='M14.43 5.92993L20.5 11.9999L14.43 18.0699'
																	stroke='#ffff'
																	strokeWidth='1.5'
																	strokeMiterlimit={
																		10
																	}
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
																<path
																	d='M3.5 12H20.33'
																	stroke='#ffff'
																	strokeWidth='1.5'
																	strokeMiterlimit={
																		10
																	}
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
															</svg>{" "}
															<span className='view-more-content'>
																{t("view more")}
															</span>
														</button>
													</a>
												</div>
											</div>

											<div
												id='undermeContent'
												className='texte-temoin'
												style={{
													color: isTabLet
														? `${selectedElement.itemColor}`
														: "#ffffff",
												}}>
												{
													contentTemoin?.[
														params?.locale ?? "en"
													]
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideLeft;
