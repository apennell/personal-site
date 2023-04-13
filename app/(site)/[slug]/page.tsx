import { PortableText } from "@portabletext/react";

import { getPage } from "@/sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <main>
      <h1>{page.title}</h1>
      <div>{page.content && <PortableText value={page.content} />}</div>
    </main>
  );
}
