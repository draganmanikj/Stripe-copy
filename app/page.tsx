import type { Metadata } from "next";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { ApiReference } from "./ApiReference";
import { sectionCopy } from "./content";

export const metadata: Metadata = {
  title: "API Reference",
  description: "A polished API reference interface built with React, Vite, TypeScript, and Markdoc.",
};

export default function Home() {
  const renderedCopy = Object.fromEntries(
    Object.entries(sectionCopy).map(([key, source]) => {
      const ast = Markdoc.parse(source);
      const content = Markdoc.transform(ast);
      return [key, Markdoc.renderers.react(content, React)];
    }),
  );

  return <ApiReference renderedCopy={renderedCopy} />;
}
