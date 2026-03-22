"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function MuiAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
