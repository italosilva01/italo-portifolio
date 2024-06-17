"use client";
import { Menu } from "@components/Menu";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import dynamic from "next/dynamic";

const ResumeDinamic = dynamic(
  () => import("@components/Resume").then((component) => component.Resume),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center align-middle gap-6 md:px-7.30% w-11/12 m-auto ">
        <Menu />
        <ResumeDinamic />
      </main>
    </ThemeProvider>
  );
}
