import React from "react";
import styled from "styled-components";
import CartCheckOut from "../component/cart/CartCheckOut";
import CartItemContainer from "../component/cart/CartItemContainer";

const CartPage = styled.div`
  display: flex;
  column-gap: 4rem;
  padding-top: 2rem;
`;

function Cart() {
  return (
    <CartPage>
      <CartItemContainer />
      <CartCheckOut />
    </CartPage>
  );
}

export default Cart;
