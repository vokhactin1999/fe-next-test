import Installbootstrap from "@/components/Installbootstrap";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }) {
	const messages = useMessages();
	return (
		<html lang={locale}>
			<head>
				<link
					href='https://fonts.cdnfonts.com/css/berlin-sans-fb'
					rel='stylesheet'
				/>
			</head>
			<Installbootstrap />
			<NextIntlClientProvider locale={locale} messages={messages}>
				<body className={inter.className}>{children}</body>
			</NextIntlClientProvider>
		</html>
	);
}
