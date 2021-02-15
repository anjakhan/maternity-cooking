import styled from 'styled-components';

export const CreateRecipeContainer = styled.div`
  width: 850px;
  display: flex;
  margin: 30px auto;

  @media screen and (max-width: 900px) {
    width: unset;
    justify-content: center;
  }
`;