import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { getProject } from "@/sanity/sanity-utils";
import styles from "./page.module.css";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <h1>{project.name}</h1>
      {project.url && (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}

      {project.content && (
        <div>
          <PortableText value={project.content} />
        </div>
      )}

      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className={styles.image}
        />
      )}
    </main>
  );
}
