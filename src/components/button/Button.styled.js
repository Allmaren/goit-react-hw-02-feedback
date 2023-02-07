import styled from 'styled-components';

function getColor(propName) {
  let color = '';
  if (propName === 'good') {
    color = '#19e512';
  } else if (propName === 'neutral') {
    color = '#78137f';
  } else if (propName === 'bad') {
    color = '#e51212';
  } else {
    color = '#122ee5';
  }
  return color;
}

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
    background-color: ${getColor()};

    color: #fff;
  }
`;
