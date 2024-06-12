import { Typography } from '@mui/material';

import { options } from './Text.constants';
import { TextProps } from './Text.types';

const Text = ({
  variant = 'default',
  children,
  color = 'default',
}: TextProps) => {
  return (
    <Typography color={color} variant={options[variant]} gutterBottom>
      {children}
    </Typography>
  );
};

export default Text;
