import React from 'react';
import Text from '../Text';
import SegmentIcon from '@mui/icons-material/Segment';
import { HeaderProps } from './Header.types';
import { Wrapper, StyledIcon, Row } from './Header.styles';

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Wrapper>
      <Row>
        <StyledIcon>
          <SegmentIcon color={'primary'} />
        </StyledIcon>
        <Text variant="title" color="primary">
          {title}
        </Text>
      </Row>

      <Text variant="subtitle">{subtitle}</Text>
    </Wrapper>
  );
};

export default Header;
