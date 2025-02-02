"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export default function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </NextThemesProvider>
  );
}
