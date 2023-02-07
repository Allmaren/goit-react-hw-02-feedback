import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  font-family: inherit;
  text-align: center;
  color: red;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  padding: 10px 32px;
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.2);
    background-color: darkslategray;
    color: #fff;
  }
`;
