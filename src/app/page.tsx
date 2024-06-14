"use client";
import { Menu } from "@components/Menu";
import { Resume } from "@components/Resume";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center gap-6 md:px-7.30%">
        <Menu />
        <Resume />
      </main>
    </ThemeProvider>
  );
}
