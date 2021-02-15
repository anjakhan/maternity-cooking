import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  top: 90px;
  right: 40px;
  z-index: 10;
  background-image: linear-gradient(to left, rgb(242, 255, 179), rgb(253, 239, 78));
`;

export const SectionContainer = styled.div`
  scrollbar-width: none;
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;
