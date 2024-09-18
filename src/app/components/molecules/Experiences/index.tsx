import { Box } from '@mui/material';
import { CardInfo } from '@components/atons/CardInfo';

import IconCode from '@public/iconCode.svg';

export const Experiences = () => {
  return (
    <Box className="w-full border-t ">
      <Box className="flex justify-center gap-9 my-10 ">
        <CardInfo
          icon={IconCode}
          title="Quase 5 anos como"
          position={'Programador'}
        />
        <CardInfo icon={IconCode} title="4 anos como" position={'Front end'} />{' '}
      </Box>
      <div
        className="w-full  flex justify-center gap-40
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
    </Box>
  );
};
