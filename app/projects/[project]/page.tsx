import { PortableText } from "@portabletext/react";

import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header>
        <h1>{project.name}</h1>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </header>

      <main>
        {project.content && (
          <div>
            <PortableText value={project.content} />
          </div>
        )}
      </main>
    </div>
  );
}
