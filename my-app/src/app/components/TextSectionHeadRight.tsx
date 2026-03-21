"use client";

import TextSplitBand from "./TextSplitBand";
import type { ReactNode } from "react";

/** Brödtext vänster, rubrik höger (spegelvänt). */
export default function TextSectionHeadRight({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <TextSplitBand title={title} headPosition="right">
      {children}
    </TextSplitBand>
  );
}
