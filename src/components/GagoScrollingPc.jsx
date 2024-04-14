"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./GagoScrollingPc.css";
import { throttle } from "lodash";
import { ScrollInfoContext } from "@/context/context";

function GagoScrollingPc(props) {
	const { setSelectedId } = useContext(ScrollInfoContext);
	const containerRef = useRef(null);
	let container = containerRef.current;

	const [containerState, setContainerState] = useState(null);

	useEffect(() => {
		if (container) setContainerState(true);
		else setContainerState(false);
	}, []);

	useEffect(() => {
		if (containerState) return () => {};
		let isInitItem = null;
		let isScrolling = false;

		if (!container) {
			console.error('Không tìm thấy vùng chứa "scrollingDiv".');
			return;
		}

		let items = Array.from(container.children);

		if (items.length === 0) {
			console.error(
				'Không tìm thấy phần tử con nào trong "scrollingDiv".',
			);
			return;
		}
		const itemHeight = items[0].offsetHeight;

		// var windowWidth = $(window).width();

		// if (windowWidth > 992) {
		//   // Handle desktop
		// } else if (windowWidth < 479) {
		//   // Handle mobile
		// }

		items.forEach((item, index) => {
			const clone = item.cloneNode(true);
			clone.setAttribute("data-temoin", item.getAttribute("data-temoin"));
			// Di chuyển phần tử đã sao chép vào vị trí đúng bắt đầu từ phần tử thứ 0
			container.appendChild(clone);
			// Nếu đây là phần tử cuối cùng trong mảng items
			if (index === items.length - 1) {
				// Di chuyển phần tử đã sao chép đầu tiên vào vị trí đầu tiên
				container.insertBefore(clone, container.firstChild);
			}
		});

		// Handle desktop
		items = Array.from(container.children);

		const isMobile = window.matchMedia(
			"only screen and (max-width: 760px)",
		).matches;

		let currentCenterItemId = null;

		const updateCenterItem = () => {
			// Update center item logic
			const centerY = isMobile
				? window.innerHeight * 0.8
				: window.innerHeight / 2;
			let closestItem = null;
			let minDistance = Infinity;

			isInitItem = true;
			items.forEach((item) => {
				const itemRect = item.getBoundingClientRect();
				const itemCenterY = (itemRect.top + itemRect.bottom) / 2;
				const distance = Math.abs(centerY - itemCenterY);

				if (distance < minDistance) {
					minDistance = distance;
					closestItem = item;
				}
			});
			// Kiểm tra xem có tìm thấy phần tử cốt lõi mới không
			const newCenterItemId = closestItem
				? closestItem.getAttribute("data-temoin")
				: 1;
			setSelectedId({ gagoId: newCenterItemId });

			if (newCenterItemId !== currentCenterItemId) {
				currentCenterItemId = newCenterItemId;

				items.forEach((item) => {
					item.style.opacity = item === closestItem ? 1 : 0.4;
					item.style.pointerEvents =
						item === closestItem ? "auto" : "none";
				});
			}
		};

		const moveItemIfNeeded = () => {
			// Move item if needed logic
			const scrollTop = container.scrollTop;
			const scrollHeight = container.scrollHeight;
			const clientHeight = container.clientHeight;
			//   if (windowWidth >= 992) {
			if (scrollTop < itemHeight * 2.5 + 30) {
				const lastItem =
					container.children[container.children.length - 1];

				container.insertBefore(lastItem, container.firstChild);

				// Tính toán lại giá trị scrollTop để đảm bảo cuộn lên không bị đứng
				container.scrollTop += lastItem.offsetHeight; // Sử dụng offsetHeight của phần tử cuối cùng
			} else if (
				scrollTop + clientHeight >=
				scrollHeight - (itemHeight + 25)
			) {
				const firstItem = container.children[0];
				container.appendChild(firstItem);
				container.scrollTop += itemHeight; // Thay đổi dấu +
			}
			//   }
			//   else {
			//     if (scrollTop < itemHeight * 2) {
			//       const lastItem =
			//         container.children[container.children.length - 1];
			//       container.insertBefore(lastItem, container.firstChild);
			//       container.scrollTop += itemHeight;
			//     } else if (
			//       scrollTop + clientHeight >=
			//       scrollHeight - itemHeight * 2
			//     ) {
			//       const firstItem = container.children[0];
			//       container.appendChild(firstItem);
			//       container.scrollTop -= itemHeight;
			//     }
			//   }
		};
		const throttledUpdate = throttle(updateCenterItem, 300);

		container.addEventListener("scroll", () => {
			if (!isScrolling) {
				isScrolling = true;
				moveItemIfNeeded();
				throttledUpdate();
				setTimeout(() => {
					isScrolling = false;
				}, 10);
			}
		});

		const mouseWheelHandler = (e) => {
			// Mouse wheel handler logic
			e.preventDefault();
			let linesToScroll =
				e.deltaY >= 0 ? 33.33333129882813 : -33.33333129882813;

			//   } else {
			//     linesToScroll = e.deltaY;
			//   }

			const scrollAmount = linesToScroll;

			// Chức năng di chuyển phần tử nếu cần thiết

			container.scrollTop += scrollAmount;
		};

		container.addEventListener("wheel", mouseWheelHandler);
		const initialAutoScroll = () => {
			const scrollOffset = 150;
			let container = containerRef.current;
			if (!container) return null;
			// Điều chỉnh các giá trị này
			container.scrollBy({
				top: scrollOffset,
				behavior: "smooth",
			});
		};
		initialAutoScroll();
		// Cleanup function if necessary
		return () => {
			// Cleanup logic
			container.removeEventListener("wheel", mouseWheelHandler);
			container.removeEventListener("scroll", () => {
				if (!isScrolling) {
					isScrolling = true;
					moveItemIfNeeded();
					throttledUpdate();
					setTimeout(() => {
						isScrolling = false;
					}, 10);
				}
			});
		};
	}, [containerState]);
	return (
		<div id='scrollingDiv' className='scrollingdiv' ref={containerRef}>
			<div data-temoin={1} className='item'>
				<h2 className='heading-2'>
					<p className='link'>TERO</p>
				</h2>
			</div>
			<div data-temoin={2} className='item'>
				<h2 className='heading-2'>
					<p className='link'>UNDERME</p>
				</h2>
			</div>
			<div data-temoin={3} className='item'>
				<h2 className='heading-2'>
					<p data-temoin={3} className='link'>
						MOPY
					</p>
				</h2>
			</div>
			<div data-temoin={4} className='item'>
				<h2 className='heading-2'>
					<p className='link'>CUPID</p>
				</h2>
			</div>
			<div data-temoin={5} className='item'>
				<h2 className='heading-2'>
					<p className='link'>DREAM BABY</p>
				</h2>
			</div>
			<div data-temoin={6} className='item'>
				<h2 className='heading-2'>
					<p className='link'>TIBI</p>
				</h2>
			</div>
			<div data-temoin={7} className='item'>
				<h2 className='heading-2'>
					<p className='link'>RICE BABY</p>
				</h2>
			</div>
			<div data-temoin={8} className='item'>
				<h2 className='heading-2'>
					<p className='link'>ANTA</p>
				</h2>
			</div>
			<div data-temoin={9} className='item'>
				<h2 className='heading-2'>
					<p className='link'>SILVER TIGER &amp; PEONY</p>
				</h2>
			</div>
			<div data-temoin={10} className='item'>
				<h2 className='heading-2'>
					<p className='link'>GH CREATION</p>
				</h2>
			</div>
			<div data-temoin={11} className='item'>
				<h2 className='heading-2'>
					<p className='link'>PIPPY</p>
				</h2>
			</div>
		</div>
	);
}

export default GagoScrollingPc;
