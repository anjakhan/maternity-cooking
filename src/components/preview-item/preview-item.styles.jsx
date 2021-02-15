import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../assets/heart2a.svg';

const maxWidth = '900px';

export const PreviewItemContainer = styled.div`
  &:before, &:after {
    content: '';
    z-index: -1;
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 70%;
    max-width: 300px;
    max-height: 100px;
    height: 55%;
    -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    -webkit-transform: skew(15deg) rotate(6deg);
      -moz-transform: skew(15deg) rotate(6deg);
        -ms-transform: skew(15deg) rotate(6deg);
        -o-transform: skew(15deg) rotate(6deg);
            transform: skew(15deg) rotate(6deg);
  }

  min-width: 250px;
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 7px solid white;
          box-shadow: 1px 1px 8px rgba(0,0,0,.3);
     -moz-box-shadow: 1px 1px 8px rgba(0,0,0,.3);
  -webkit-box-shadow: 1px 1px 8px rgba(0,0,0,.3);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const RecipeTitleContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  font-weight: 700;
  text-transform: capitalize;
  background-color: white;
`;

export const IconContainer = styled.div`
  padding-right: 10px;
  font-family: 'Caveat', cursive;
  font-size: 18px;
  opacity: 0.7;
  float: right;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const HeartIconContainer = styled(HeartIcon)`
  z-index: 5;
  width: 30px;
  height: 30px;
  opacity: 0.7;
  position: absolute;
  bottom: 7px;
  right: 7px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
