import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../assets/heart2.svg';

export const FavIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 7.5px;
`;

export const HeartIconContainer = styled(HeartIcon)`
  width: 35px;
  height: 35px;
`;
  
export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 13px;
`;
  