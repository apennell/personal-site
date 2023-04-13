import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/sanity/sanity-utils";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className={styles.main}>
      <h1>
        Ethical software engineering for a more sustainable and accessible world
      </h1>

      <div>
        <h2>My projects</h2>
        <ul className={styles.projects}>
          {projects.map((project) => (
            <li key={project._id} className={styles.projectCard}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.alt || ""}
                  width={250}
                  height={100}
                  className={styles.projectCardImage}
                />
              )}
              <p>
                <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
