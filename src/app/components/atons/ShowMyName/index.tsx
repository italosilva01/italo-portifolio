import { Typography } from '@mui/material';
interface titleSectionProps {
  text?: string;
  classList?: string;
}
const TitleSection = ({
  text = 'Francisco <br /> Italo',
  classList,
}: titleSectionProps) => {
  return (
    <Typography
      variant="h1"
      className={`!text-5xl font-extrabold text-white text-left ${classList}`}
      sx={{ color: '#fff' }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TitleSection;
