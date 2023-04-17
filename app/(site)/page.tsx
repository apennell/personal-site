import typog from "./typog.module.css";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBox}>
          <h1 className={typog.display}>
            Let&apos;s leave the Web better than we found it.
          </h1>
          <p className={typog.titleLg}>
            Ethical software engineering, powered by{" "}
            <a
              href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              accessibility
            </a>{" "}
            and{" "}
            <a
              href="https://www.sustainablewebmanifesto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sustainability
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
