import React, {  } from "react";
import CartItemCounter from "../CartItemCounter";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartRemoveItem, decreaseCartItemCount, increaseCartItemCount, subTotal } from "../../redux/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";

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
  p,a {
    font-weight: 400;
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .title {
    text-decoration: none;
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
  .cartCounter{
    grid-column: 5/6;
  }

  @media(max-width:768px){
    grid-template-columns: max-content 1fr max-content 1fr max-content;
    .image{
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .title{
      grid-column: 3/4;
      grid-row: 1/2;
    }
    .unitAmount{
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: center;
      justify-self: center;
    }
    .unitTotal{
      grid-column: 5/6; 
      grid-row: 2/3;
    }
    .cartCounter{
      grid-column: 3/4;
      grid-row: 2/3;
      justify-self: center;
    }
  }

  @media(max-width: 580px){
    padding:1.5rem 1rem;
  }
  @media(max-width: 425px){
    row-gap: .5rem;
    .unitAmount{
      grid-column: 5/6;
      grid-row: 1/2;      
    }
    .cartCounter{
      grid-column: 1/4;
      grid-row: 3/4;
    }
    .title{
      grid-column: 1/6;
      grid-row: 2/3;
    }
    .unitTotal{
      grid-column:5/6;
      grid-row:3/4;
    }
  }

  
  `;
const RemoveBtn = styled.button`
  grid-column: 7/8;
  grid-row:1/2;
  align-self: end;
  justify-self:end;
  cursor: pointer;
  padding: .2rem;
  border: 1px solid green;
  background-color:#fafafa;
  transition: all .2s ease;
  &:hover{
    background-color: red;
    color: #fafafa;
    border-color: transparent;
  }
  
  @media(max-width:768px){
    grid-column: 5/6;
    grid-row: 1/2;
    align-self: center;
    justify-self:center;
  }
  @media(max-width:425px){
    grid-column: 1/6;
    grid-row: 4/5;
    justify-self: stretch;
  }
`;

function CartItem({ title, img, unit, itmCount,itmId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const deleteHandler = (e) => {
    e.stopPropagation()
    dispatch(cartRemoveItem(itmId))
    dispatch(subTotal())
  };
  const onClickHandler = () => { 
    navigate(`/product/${itmId}`)
   }
   const cartBtnHandler = (e) => { 
    e.stopPropagation()
    }
  return (
    <CartItemContainer onClick={onClickHandler} image={img}>
      <span className="image" role={"img"} aria-roledescription="shoe"></span>
      <Link to={`/product/${itmId}`} className="title" >{title}</Link>
      <p className="unitAmount">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(unit)}</p>
      <CartItemCounter onClick={cartBtnHandler} count={itmCount} decreaseHandler={decreaseHandler} increaseHandler={increaseHandler} />
      <p className="unitTotal">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(itmCount * unit)}</p>
      <RemoveBtn onClick={deleteHandler}>remove</RemoveBtn>
    </CartItemContainer>
  );
}

export default CartItem;
