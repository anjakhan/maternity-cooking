import styled from 'styled-components';

const maxWidth = '900px'

export const RecipeFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${maxWidth}) {
    width: unset;
  }
`
export const HeadTitle = styled.h2`
  margin: 5px 0;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${maxWidth}) {
    flex-direction: column;
  }
`;

export const FormSubcontainer = styled.div`
  margin-right: 30px;
  margin-bottom: 50px;
  width: 380px;
`;

export const TitleContainer = styled.h2`
  font-size: 16px;
  padding: 21px 20px 6px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 10px 0;
`;

export const SubtitleContainer = styled.span`
  line-height: 70px;
  padding: 10px 5px;
`;
