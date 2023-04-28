import styles from "./card.module.css";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  );
}
