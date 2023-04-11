import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getAllProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "g31vrzho",
    dataset: "production",
    apiVersion: "2023-04-11",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}
