import "../public/uno.css";
import "@unocss/reset/antfu.css";

import { type PropsWithChildren } from "react";

import { AnalyticsWrapper } from "./components/analytics";

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="font-sans">
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
