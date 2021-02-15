import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';

const maxWidth = '900px';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 5px 10px;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: ${maxWidth}) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 70vw;
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 180px;
  display: none;

  @media screen and (max-width: ${maxWidth}) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    cursor: pointer;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border: 7px solid white;
    box-shadow: 1px 1px 5px rgba(0,0,0,.5);
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  }
`;

export const HeartIconContainer = styled(HeartIcon)`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
