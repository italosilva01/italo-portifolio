import { Typography } from '@mui/material';
interface ShowMyNameProps {
  text?: string;
  classList?: string;
}
const ShowMyName = ({
  text = 'Francisco <br /> Italo',
  classList,
}: ShowMyNameProps) => {
  return (
    <Typography
      variant="h1"
      className={`!text-5xl font-extrabold text-white text-left ${classList}`}
      sx={{ color: '#fff' }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default ShowMyName;
