import styled from 'styled-components';

export const TopicInputContainer = styled.div`
  line-height: 40px;
  background: none;
  background-color: transparent;
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
`;

export const SelectTopicContainer = styled.select`
  width: 200px;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: white;
  color: black;
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
