"use client";

import TextSplitBand from "./TextSplitBand";
import type { ReactNode } from "react";

/** Rubrik vänster, brödtext höger (som inspo-bilden). */
export default function TextSectionHeadLeft({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <TextSplitBand title={title} headPosition="left">
      {children}
    </TextSplitBand>
  );
}
