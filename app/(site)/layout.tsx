import { Inter } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";
import "../globals.css";

export const metadata = {
  title: "Annie Pennell | Software Engineer",
  description:
    "Making the Web better for the world and the people in it through ethical software engineering, driven by accessibility and sustainable web practices. Providing frontend engineering and development, audits and consulting on a11y and sustainable web development, platform localization/i18n services, career coaching, and more.",
};

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
