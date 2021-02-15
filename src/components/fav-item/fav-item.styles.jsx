import styled from 'styled-components';

export const FavItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  margin-bottom: 15px;
`;
  
export const FavImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const TitleContainer = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;

export const IconContainer = styled.span`
  cursor: pointer;
  font-family: 'Caveat', cursive;
  font-size: 25px;
  background-color: orange;
  opacity: 0.7;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1px 8px 4px 4px;
  line-height: 17px;

  &:hover {
    opacity: 0.9;
    font-weight: bold;
  }
`;
