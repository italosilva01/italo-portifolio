import { Typography } from '@mui/material';
import TitleSection from '../ShowMyName';

export const Title = () => {
  return (
    <>
      <TitleSection />
      <Typography variant="body1" sx={{ color: 'rgba(255, 255, 265, 0.5)' }}>
        Desenvolvedor Front-end | Back-end
      </Typography>
    </>
  );
};
