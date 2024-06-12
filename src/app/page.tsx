import { Menu } from "@components/Menu";
import { Resume } from "@components/Resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 ">
      <Menu />
      <Resume />
    </main>
  );
}
