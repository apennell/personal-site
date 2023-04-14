import Link from "next/link";
import styles from "./layout.module.css";
import "../globals.css";

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
  const navLinks = [
    {
      _id: "contact",
      href: "#contact",
      title: "Contact Me",
    },
  ];

  return (
    <html lang="en">
      <body>
        <header>
          <nav className={styles.nav}>
            <Link href="/" className={styles.homeLink}>
              Annie Pennell
            </Link>
            {navLinks.length > 0 && (
              <div className={styles.navItems}>
                {navLinks.map((link) => (
                  <Link
                    key={`${link._id}-nav`}
                    href={`/${link.href}`}
                    className={styles.navItem}
                  >
                    {link.title}
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
