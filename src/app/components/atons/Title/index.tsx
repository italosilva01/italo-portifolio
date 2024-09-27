import { Typography } from '@mui/material';
import ShowMyName from '../ShowMyName';

export const Title = () => {
  return (
    <>
      <ShowMyName />
      <Typography variant="body1" sx={{ color: 'rgba(255, 255, 265, 0.5)' }}>
        Desenvolvedor Front-end | Back-end
      </Typography>
    </>
  );
};
