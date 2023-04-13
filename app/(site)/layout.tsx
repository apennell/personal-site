import Link from "next/link";
import "../globals.css";

export const metadata = {
  title: "Annie Pennell | Software Engineer",
  description:
    "Making the Web better for the world and the people in it through ethical software engineering, driven by accessibility and sustainable web practices. Providing frontend engineering and development, audits and consulting on a11y and sustainable web development, platform localization/i18n services, career coaching, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Annie Pennell</Link>
          </nav>
        </header>

        {children}

        <footer>Copyright Annie Pennell Forever</footer>
      </body>
    </html>
  );
}
