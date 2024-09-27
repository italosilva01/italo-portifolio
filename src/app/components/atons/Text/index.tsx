import { Typography } from '@mui/material';

interface TextProps {
  content: string;
  classList?: string;
}

const Text: React.FC<TextProps> = ({ content, classList }) => {
  return (
    <Typography variant="body1" className={`${classList}`}>
      {content}
    </Typography>
  );
};

export default Text;
