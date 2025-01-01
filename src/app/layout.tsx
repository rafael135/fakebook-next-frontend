import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Organisms/Navbar";
import Providers from "./providers";
import SideMenu from "@/components/Organisms/SideMenu";

import styles from "./layout.module.scss";
import Logo from "./components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fakebook",
	description: "Paródia do Facebook feita para estudos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Navbar>
						<Logo />
					</Navbar>
					
					<div className={`${styles.layoutContainer}`}>

						<SideMenu />

						<main>
							{children}
						</main>
				
					</div>
					
				</Providers>
			</body>
		</html>
	);
}
