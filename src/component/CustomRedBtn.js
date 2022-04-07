import React from "react";
import styled from "styled-components";
const Button = styled.button`
  padding: 0.625rem 1.5rem;
  color: #fff;
  background: ${props => props.color === "secondary"? "green" :"#d90429"};
  border: none;
  outline: none;
  cursor: ${props => props.disabled? "no-drop" : "pointer" };

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

function CustomRedBtn({ text, onClick, disabled, color }) {
  return (
    <Button color={color} disabled={disabled} onClick={onClick}>
      <span>{text}</span>
    </Button>
  );
}

export default CustomRedBtn;
