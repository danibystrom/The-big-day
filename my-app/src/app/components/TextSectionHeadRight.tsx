"use client";

import TextSplitBand from "./TextSplitBand";
import type { ReactNode } from "react";

/** Brödtext vänster, rubrik höger (spegelvänt). */
export default function TextSectionHeadRight({
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
      headPosition="right"
      uppercaseTitle={uppercaseTitle}
    >
      {children}
    </TextSplitBand>
  );
}
