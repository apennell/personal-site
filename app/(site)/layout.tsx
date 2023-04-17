import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./layout.module.css";
import typog from "./typog.module.css";
import "../globals.css";

export const metadata = {
  title: "Annie Pennell | Software Engineer",
  description:
    "Making the Web better for the world and the people in it through ethical software engineering, driven by accessibility and sustainable web practices. Providing frontend engineering and development, audits and consulting on a11y and sustainable web development, platform localization/i18n services, career coaching, and more.",
};

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    {
      _id: "contact",
      href: "mailto:annie@sparkbird.works",
      title: "Contact",
      external: true,
    },
  ];

  return (
    <html lang="en">
      <body className={sans.variable}>
        <header>
          <nav className={styles.nav}>
            <p className={`${styles.homeLink} ${typog.headline}`}>
              Annie Pennell
            </p>
            {navLinks.length > 0 &&
              navLinks.map((link) => (
                <div key={`${link._id}-nav`} className={styles.navItem}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link href={`/${link.href}`}>{link.title}</Link>
                  )}
                </div>
              ))}
          </nav>
        </header>

        {children}

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={typog.body2}>© Annie Pennell 2023</p>
          </div>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLinksGroup}>
              <div className={styles.footerItem}>
                <a
                  href="https://sparkbird.works"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={typog.body1}
                >
                  Sparkbird Works ₊⊹⁺˖
                </a>
              </div>
              <div className={styles.footerItem}>
                <a
                  href="https://www.linkedin.com/in/anniepennell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={typog.body1}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.footerLinksGroup}>
              <div className={styles.footerItem}>
                <a
                  href="https://github.com/apennell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={typog.body1}
                >
                  GitHub
                </a>
              </div>
              <div className={styles.footerItem}>
                <a href="mailto:annie@sparkbird.works" className={typog.body1}>
                  annie@sparkbird.works
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
