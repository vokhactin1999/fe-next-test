import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "vi", "zh"],
	// Used when no locale matches
	defaultLocale: "en",
	localeDetection: false,
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(en|vi|zh)/:path*"],
};
