import Image from 'next/image';
import { Box } from '@mui/material';
import { Label } from '@components/atons/Label';
import { InitSection } from '@/app/components/atons/InitSection';
import { DownloadCv } from '@components/atons/DownloadCv';
import { LetsTalk } from '@components/atons/LetsTalk';
import { MenuSocialMedia } from '@components/Menu/MenuSocialMedia';


export const Resume = () => {
  return (
    <Box className="flex flex-col gap-10 md:w-full border-1 border-white md:flex-row md:items-center md:justify-between">
      <Box className="mx-auto md:hidden">
        <Image
          src="/profileM.png"
          width={285}
          height={308}
          alt="Imagem de perfil do Francisco Italo "
          className="rounded-full"
          priority
        />
      </Box>

      <Box className="flex flex-col gap-6">
        <Label text="👋 Saudações!" />
        <InitSection />
        <Box className="hidden md:block">
          <MenuSocialMedia />
        </Box>
      </Box>
      <Box className="hidden md:block">
        <Image
          src="/profileM.png"
          width={515}
          height={515}
          alt="Imagem de perfil do Francisco Italo "
          className="rounded-full	"
          priority

        />
      </Box>
      <Box className="md:flex md:flex-col md:items-end md:gap-2">
        <DownloadCv />
        <LetsTalk />
      </Box>
    </Box>
  );
};
