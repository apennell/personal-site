import Link from "next/link";

import styles from "./not-found.module.css";
import typog from "./typog.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBox}>
          <h1 className={typog.display}>You found the 404 page!</h1>
          <p>
            If you&apos;re looking for something you think is supposed to exist
            here, please <a href="mailto:annie@sparkbird.works">let me know!</a>
          </p>
          <p>
            Otherwise, kindly make your way{" "}
            <Link href="/">back to the main page.</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
