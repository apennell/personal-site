import { getAllProjects } from "@/sanity/sanity-utils";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className={styles.main}>
      <h1>
        Ethical software engineering for a more sustainable and accessible world
      </h1>

      <section>
        <h2>My projects</h2>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </section>
    </main>
  );
}
