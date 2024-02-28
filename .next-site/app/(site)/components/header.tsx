import Link from "next/link";

import typog from "../typog.module.css";
import styles from "./header.module.css";

export default function Header() {
  const navLinks = [
    {
      _id: "contact",
      href: "mailto:annie@sparkbird.works",
      title: "Contact",
      external: true,
    },
  ];

  return (
    <header>
      <nav className={styles.nav}>
        <p className={`${styles.homeLink} ${typog.headline}`}>Annie Pennell</p>
        {navLinks.length > 0 &&
          navLinks.map((link) => (
            <div key={`${link._id}-nav`} className={styles.navItem}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              ) : (
                <Link href={`/${link.href}`}>{link.title}</Link>
              )}
            </div>
          ))}
      </nav>
    </header>
  );
}
