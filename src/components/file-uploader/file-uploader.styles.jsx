import styled from 'styled-components';

export const FileContainer = styled.div`
  margin-bottom: 15px;
`;

export const FileLoader = styled.div`
    width: 100%;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 40px;
    padding: 0 15px 0 15px;
    font-size: 15px;
    background-color: black;
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0 0 15px 0;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const FileLabel = styled.label`
  cursor: pointer;
  height: auto;
  cursor: pointer;
`;

export const FileInput = styled.input`
  opacity: 0;
  width: 10px;
  cursor: pointer;
`;
