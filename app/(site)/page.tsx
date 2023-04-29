import Card from "./components/card";

import typog from "./typog.module.css";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main>
      <div className={styles.heroSection}>
        <Card size="lg" customClass={styles.heroCard}>
          <h1 className={typog.display}>
            I leave the Web better than I found it.
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
              sustainability.
            </a>
          </p>
        </Card>
        <span aria-hidden className={styles.star}>
          ✴
        </span>{" "}
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <Card size="sm" customClass={styles.aboutCard}>
            <h2 className={typog.headline}>
              Solution-seeking software engineer <br />
              <span className={typog.titleLg}>
                driven by a deep desire to learn, grow, share, and create.
              </span>
            </h2>
          </Card>
          <p>
            I’ve been a working software engineer since 2015, which includes
            what I call “super full stack”—from design and project management
            all the way to backend—but I mostly stick to what I love, which is
            building the front end of beatiful interfaces. I am very design- and
            product-oriented, so I’m great at bridging designs to their
            production build.
          </p>
          <p>
            After trying my hand at engineering management in 2022, I struck out
            on my own to start a studio where I can continue to use these skills
            and others to provide freelance engineering, consulting, and
            coaching. I’m a huge advocate for accessibility (a11y) and
            sustainability in design and development, and these are the backbone
            of my studio’s work.
          </p>
          <p>
            On most days, you can find me working from a little office studio in
            my backyard in Richmond, CA, where I enjoy being distracted by the
            birds who stop by my window and taking breaks to roller skate. I
            spend too much time thinking about how much water my plants need and
            which planner to use this week.
          </p>
        </div>
      </div>
    </main>
  );
}
