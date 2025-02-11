import { Box } from '@mui/material';
import { CardInfo } from '@components/atons/CardInfo';

import IconCode from '@public/iconCode.svg';
import ResumeExperience from '@components/atons/ResumeExperience';

export const Experiences = () => {
  return (
    <Box className="w-full">
      <div className="flex flex-col gap-5 items-center">
        <Box className="flex-col md:flex-row justify-center gap-9 hidden md:flex ">
          <CardInfo
            icon={IconCode}
            title="Quase 5 anos como"
            position={'Programador'}
          />
          <CardInfo
            icon={IconCode}
            title="4 anos como"
            position={'Front end'}
          />{' '}
        </Box>
        <div
          className="hidden md:flex w-[898px] justify-center gap-40
        bg-purple-dull-10 rounded-2xl h-50 py-[30px]"
        >
          <ResumeExperience text="Desenvolvedor" principalText="Front end" />
          <ResumeExperience
            text="Dezenas de projetos e"
            principalText="Experiências"
          />
        </div>
      </div>
    </Box>
  );
};
