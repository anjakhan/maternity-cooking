import styled from 'styled-components';

const maxWidth = '900px';

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${maxWidth}) {
    padding: 0 20px;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: ${maxWidth}) {
    text-align: center;
  }
`;

export const TitleBorder = styled.hr`
  border: 0;
  border-top: 1px solid rgb(34, 34, 34);
`;

export const SelectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 22vw);
  grid-gap: 20px;

  @media screen and (max-width: 1340px) {
    grid-template-columns: repeat(auto-fill, 28vw);
  }

  @media screen and (max-width: ${maxWidth}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
