import typog from "../typog.module.css";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={typog.body2}>© Annie Pennell 2024</p>
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
  );
}
