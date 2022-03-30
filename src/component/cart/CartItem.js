import React from "react";
import CartItemCounter from "../CartItemCounter";
import styled from "styled-components";

const CartItemContainer = styled.div`
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: max-content 1fr max-content 6.958fr max-content 8fr max-content;
  align-items: center;
  background-color: #0000000a;

  .image {
    display: block;
    background-color: red;
    width: 6rem;
    height: 5rem;
    grid-column: 1/2;
  }
  p {
    font-weight: 400;
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .title {
    align-self: center;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
  }
  .unitAmount {
    align-self: flex-end;
    font-size: 16px;
    line-height: 24px;
    color: #000000a6;
  }
  .unitTotal {
    grid-column: 7/8;
  }
`;

function CartItem({ title, img, unit, total }) {
  return (
    <CartItemContainer>
      <span className="image" role={"img"} aria-roledescription="shoe"></span>
      <p className="title" >Jordan Delta 2</p>
      <p className="unitAmount">78,000RWF</p>
      <CartItemCounter style={{ gridColumn: "5/6" }} />
      <p className="unitTotal">78,000RWF</p>
    </CartItemContainer>
  );
}

export default CartItem;
