import styled from 'styled-components';
import { Link } from 'react-router-dom';

const maxWidth = '900px';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (max-width: ${maxWidth}) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;

  @media screen and (max-width: ${maxWidth}) {
    width: 50px;
    padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${maxWidth}) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;

  @media screen and (max-width: ${maxWidth}) {
    font-weight: lighter;
  }
`;
