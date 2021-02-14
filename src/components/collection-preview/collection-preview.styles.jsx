import styled from 'styled-components';

const maxWidth = '900px';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
  
  &:hover {
    color: #682c0e;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${maxWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
`;