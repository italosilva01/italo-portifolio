import { Box } from '@mui/material';
import { CardInfo } from '@components/atons/CardInfo';

import IconCode from '@public/iconCode.svg';

export const Experiences = () => {
  return (
    <Box className="w-full">
      <div className="flex flex-col gap-5 items-center">
        <Box className="flex justify-center gap-9 ">
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
        bg-purple-dull rounded h-50"
        >
          <div className="">
            <p>Desenvolvedor</p>
            <p>Front end</p>
          </div>
          <div className="">
            <p>Desenvolvedor</p>
            <p>Front end</p>
          </div>
        </div>
      </div>
    </Box>
  );
};
