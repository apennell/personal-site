/**
 * Next.js 13 renders everything from the server by default, but the studio
 * needs to be rendered from the client-side, so we must specify that here to
 * indicate to Next to render from the client instead
 */
"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
