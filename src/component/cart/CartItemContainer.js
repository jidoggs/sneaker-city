import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
  height: ${props => props.size <= 1? "50vh": "unset"};

  @media(max-width:580px){
    padding: 1.25rem .5rem;
  }
`;
const CartItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

function CartItemContainer() {
  const cart = useSelector((state) => state.cartReducer.cart);
  return (
    <CartItemStyle>
      <h2>Your shopping cart</h2>
      <CartWrapper size={cart.length}>
        {cart.length > 0 ? (
          cart.map((itm, idx) => (
            <CartItem
              key={idx}
              img={itm.media.thumbUrl}
              title={itm.shoe}
              unit={itm.retailPrice}
              itmCount={itm.amount}
              itmId={itm.id}
            />
          ))
        ) : (
          <p>Cart is Empty</p>
        )}
      </CartWrapper>
    </CartItemStyle>
  );
}

export default CartItemContainer;
