import React from 'react';
import Text from '../Text';

import { ButtonProps } from './EditButton.types';
import EditIcon from '@mui/icons-material/Edit';
import { Action, Center, Wrapper } from './EditButton.styles';
import useButton from './useButton';

const EditButton = ({ text }: ButtonProps) => {
  const { handleClick } = useButton();
  return (
    <Wrapper>
      <Center>
        <Text variant="title" color="primary">
          {text}
        </Text>
      </Center>
      <Action onClick={handleClick}>
        <EditIcon />
      </Action>
    </Wrapper>
  );
};

export default EditButton;
