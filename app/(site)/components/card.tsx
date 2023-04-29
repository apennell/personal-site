import styles from "./card.module.css";

export default function Card({
  children,
  size,
  customClass,
}: {
  children: React.ReactNode;
  size: "sm" | "lg";
  customClass?: string;
}) {
  return (
    <div className={`${styles.container} ${customClass || ""}`}>
      <div className={styles[`box-${size}`]}>{children}</div>
    </div>
  );
}
