import styled from 'styled-components';
import colors from '../../styles/taNaMesaTheme';

import { ENUM } from '../../services/orders';

export const Status = styled.div`
  background: ${props => props.color};
  height: 20px;
  width: 20px;
  border-radius: 20px;
  display: inline-block;
`;

export const getStatusColor = (status: string): string => {
  if (status === ENUM[1]) {
    return colors.secondaryRed;
  }
  if (status === ENUM[2]) {
    return colors.secondaryYellow;
  }
  if (status === ENUM[3]) {
    return colors.secondaryGreen;
  }
  return '#fff';
};
