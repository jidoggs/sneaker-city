import React, {  } from "react";
import CartItemCounter from "../CartItemCounter";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartRemoveItem, decreaseCartItemCount, increaseCartItemCount, subTotal } from "../../redux/actions/cartActions";

const CartItemContainer = styled.div`
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: max-content 1fr 17rem 6.958fr max-content 8fr max-content;
  align-items: center;
  background-color: #0000000a;

  .image {
    display: block;
    width: 6rem;
    height: 5rem;
    grid-column: 1/2;
    background-image: ${props => `url(${props.image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  p {
    font-weight: 400;
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .title {
    align-self: center;
    font-size: 1.125rem;
    line-height: 1.625rem;
    color: #000000;
  }
  .unitAmount {
    align-self: flex-end;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #000000a6;
  }
  .unitTotal {
    grid-column: 7/8;
    grid-row:1/2;
  }
  `;
const RemoveBtn = styled.button`
  grid-column: 7/8;
  grid-row:1/2;
  align-self: end;
  justify-self:end;
  cursor: pointer;
`;

function CartItem({ title, img, unit, itmCount,itmId }) {
  const dispatch = useDispatch();
  const decreaseHandler = () => {
    dispatch(decreaseCartItemCount({id: itmId, count: itmCount}))
    if (itmCount > 1) {
      dispatch(subTotal())
    }
  };
  const increaseHandler = () => {
    dispatch(increaseCartItemCount({id: itmId, count: itmCount}))
    dispatch(subTotal())
  };
  const deleteHandler = () => {
    dispatch(cartRemoveItem(itmId))
    dispatch(subTotal())
  };
  return (
    <CartItemContainer image={img}>
      <span className="image" role={"img"} aria-roledescription="shoe"></span>
      <p className="title" >{title}</p>
      <p className="unitAmount">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(unit)}</p>
      <CartItemCounter style={{ gridColumn: "5/6" }} count={itmCount} decreaseHandler={decreaseHandler} increaseHandler={increaseHandler} />
      <p className="unitTotal">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(itmCount * unit)}</p>
      <RemoveBtn onClick={deleteHandler}>remove</RemoveBtn>
    </CartItemContainer>
  );
}

export default CartItem;
