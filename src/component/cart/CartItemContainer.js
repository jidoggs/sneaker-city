import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
`;
const CartItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

function CartItemContainer() {
  const arr = [
    { title: "Jordan Delta 2", unit: "78,000RWF", price: "78,000RWF" },
    { title: "Jordan Delta 2", unit: "78,000RWF", price: "78,000RWF" },
    { title: "Jordan Delta 2", unit: "78,000RWF", price: "78,000RWF" },
    { title: "Jordan Delta 2", unit: "78,000RWF", price: "78,000RWF" },
  ];
  return (
    <CartItemStyle>
      <h2>Your shopping cart</h2>
      <CartWrapper>
        {
            arr.map((itm, id) =>  <CartItem key={id} title={itm.title} unit={itm.unit} total={itm.price}  />)
        }
      </CartWrapper>
    </CartItemStyle>
    // <div>CartItemContainer</div>
  );
}

export default CartItemContainer;
