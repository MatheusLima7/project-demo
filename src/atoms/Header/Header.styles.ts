import styled from 'styled-components';
import { colors } from '../../typography/colors';

export const Wrapper = styled.div`
  margin-bottom: 60px;
`;

export const StyledIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border: 1px solid ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
