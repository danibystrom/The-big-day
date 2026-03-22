"use client";

import TextSplitBand from "./TextSplitBand";
import type { ReactNode } from "react";

/** Rubrik vänster, brödtext höger (som inspo-bilden). */
export default function TextSectionHeadLeft({
  title,
  children,
  uppercaseTitle = true,
}: {
  title: string;
  children: ReactNode;
  uppercaseTitle?: boolean;
}) {
  return (
    <TextSplitBand
      title={title}
      headPosition="left"
      uppercaseTitle={uppercaseTitle}
    >
      {children}
    </TextSplitBand>
  );
}
