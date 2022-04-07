import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  button {
    outline: none;
    border: none;
    padding: 0.5rem;
    color: #000;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
  }
  span {
    padding: 12px 20px;
    color: #000;
    background-color: #fff;
    border: 1px solid #00000026;
    border-radius: 0.5rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

function CartItemCounter({ style, count, increaseHandler, decreaseHandler }) {
  

  return (
    <Counter style={style}>
      <button disabled={count === 1} onClick={decreaseHandler}>-</button>
      <span>{count}</span>
      <button onClick={increaseHandler}>+</button>
    </Counter>
  );
}

export default CartItemCounter;
