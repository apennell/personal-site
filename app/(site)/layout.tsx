import Link from "next/link";
import styles from "./layout.module.css";
import "../globals.css";
import { getAllPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Annie Pennell | Software Engineer",
  description:
    "Making the Web better for the world and the people in it through ethical software engineering, driven by accessibility and sustainable web practices. Providing frontend engineering and development, audits and consulting on a11y and sustainable web development, platform localization/i18n services, career coaching, and more.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getAllPages();

  return (
    <html lang="en">
      <body>
        <header>
          <nav className={styles.nav}>
            <Link href="/" className={styles.homeLink}>
              Annie Pennell
            </Link>
            {pages?.length > 0 && (
              <div className={styles.navItems}>
                {pages.map((page) => (
                  <Link
                    key={`${page._id}-nav`}
                    href={`/${page.slug}`}
                    className={styles.navItem}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </header>

        {children}

        <footer>Copyright Annie Pennell Forever</footer>
      </body>
    </html>
  );
}
