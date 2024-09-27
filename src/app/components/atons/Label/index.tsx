import { Box } from '@mui/material';

interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return (
    <Box
      className="bg-purple-dull-10 rounded-xl w-32 h-8 flex align-middle items-center 	justify-center "
      sx={{ p: 1.5 }}
    >
      <p className="text-purple-dark text-bol font-semibold text-sm	">{text}</p>
    </Box>
  );
};
