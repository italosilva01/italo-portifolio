import Image from "next/image";
import { Box } from "@mui/material";
import { Label } from "@components/Label";
import { Title } from "@components/Title";
import { DownloadCv } from "@components/DownloadCv";
import { LetsTalk } from "@components/LetsTalk";

export const Resume = () => {
  return (
    <Box className="flex flex-col gap-10 md:w-full border-1 border-white md:flex-row md:items-center md:mt-24 md:justify-between">
      <Box className="md:hidden">
        <Image
          src="/profileM.png"
          width={285}
          height={308}
          alt="Imagem de perfil do Francisco Italo "
          className="rounded-full	"
        />
      </Box>

      <Box className="flex flex-col gap-6">
        <Label text="👋 Saudações!" />
        <Title />
      </Box>
      <Box className="hidden md:block">
        <Image
          src="/profileM.png"
          width={515}
          height={515}
          alt="Imagem de perfil do Francisco Italo "
          className="rounded-full	"
        />
      </Box>
      <Box>
        <DownloadCv />
        <LetsTalk />
      </Box>
    </Box>
  );
};
