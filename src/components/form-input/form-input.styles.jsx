import styled, { css } from 'styled-components';

const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

export const FormInputContainer = styled.input`
  font-weight: bold;
  background: none;
  background-color: transparent;
  color: ${mainColor};
  font-weight: bold;
  font-size: 18px;
  padding: 10px 10px 5px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${mainColor};
  margin: 10px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${mainColor};
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
