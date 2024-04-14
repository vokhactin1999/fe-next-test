import {
	useContext,
	useEffect,
	useState,
	useLayoutEffect,
	useRef,
} from "react";

import { data_temoin } from "./assets/data-temoin";
import { content_temoin } from "./assets/content-temoin";

import { ScrollInfoContext } from "./context/context";

export const useGetElementById = () => {
	const { selectedId } = useContext(ScrollInfoContext);

	const getSelectedElementById = () => {
		return data_temoin.find((item) => item.id === selectedId.gagoId);
	};

	const selectedElement = getSelectedElementById();

	return selectedElement;
};

export const useClickSelection = () => {
	const [toggleSelectLanguage, setToggleSelectLanguage] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("en");
	const handleToggleSelection = (e) => {
		e.preventDefault();
		console.log("da vo day");
		setToggleSelectLanguage((prev) => !prev);
	};

	const closeSelection = (e) => {
		setToggleSelectLanguage(false);
	};

	useEffect(() => {
		window.addEventListener("click", function (e) {
			if (e.target.closest(".select-box") === null) {
				closeSelection();
			}
		});
	}, []);

	useEffect(() => {});

	return {
		toggleSelectLanguage,
		handleToggleSelection,

		selectedLanguage,
	};
};

export const useGetContentByTemoinId = () => {
	const { selectedId } = useContext(ScrollInfoContext);
	return content_temoin?.[selectedId.gagoId];
};

// export const useGetCurrentLanguage = () => {
// 	const { i18n } = useTranslation();
// 	return i18n.language;
// };

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	const handleSize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useLayoutEffect(() => {
		handleSize();

		window.addEventListener("resize", handleSize);

		return () => window.removeEventListener("resize", handleSize);
	}, []);

	return windowSize;
};

export const useLoadingSpinner = () => {
	const [loading, setLoading] = useState(true);
	const loadingRef = useRef();

	useEffect(() => {
		loadingRef.current = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => {
			clearTimeout(loadingRef.current);
		};
	}, []);
	return {
		loading,
		setLoading,
	};
};

export const useLockRoateHorizontallyOnMobile = () => {
	const windowSize = useWindowSize();
	const [showOverlay, setShowOverlay] = useState(false);
	const isMobile = windowSize.width < 450;

	useEffect(() => {
		const handleOrientationChange = () => {
			const isPortrait = window.innerHeight > window.innerWidth;

			if (!isPortrait) {
				// If the device is in landscape mode, force it back to portrait

				if (window.orientation === 90 || window.orientation === -90) {
					if (isMobile) setShowOverlay(true);
					// You can also display a message or use other means to inform the user
					// about the requirement to switch back to portrait mode.
					// Alternatively, you can programmatically rotate the device back to portrait mode,
					// but this is generally not recommended as it interferes with the user experience.
				}
			} else {
				setShowOverlay(false);
			}
		};

		window.addEventListener("orientationchange", handleOrientationChange);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener(
				"orientationchange",
				handleOrientationChange,
			);
		};
	}, []); // Run this effect only once on component mount

	return {
		showOverlay,
	};
};

// export const useImgOptimized = () => {
// 	const inputDir = "img";
// 	const outputDir = "assets";

// 	useEffect(() => {
// 		const optimizeImages = async () => {
// 			try {
// 				const files = await imagemin(
// 					[`${inputDir}/*.png`, `${inputDir}/*.jpg`],
// 					{
// 						destination: outputDir,
// 						plugins: [
// 							imageminPngquant({ quality: [0.6, 0.8] }), // Tối ưu hóa hình ảnh PNG với pngquant
// 							imageminMozjpeg({ quality: 75 }), // Tối ưu hóa hình ảnh JPEG với MozJPEG
// 						],
// 					},
// 				);
// 				console.log("Hình ảnh đã được tối ưu hóa:", files);
// 			} catch (error) {
// 				console.error("Lỗi khi tối ưu hóa hình ảnh:", error);
// 			}
// 		};

// 		optimizeImages();

// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);
// };
