import { Typography } from '@mui/material';

import { HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  content: string;

}

const Text: React.FC<TextProps> = ({ content, ...rest }) => {
  return (
    <Typography variant="body1" {...rest}>
      {content}
    </Typography>
  );
};

export default Text;
