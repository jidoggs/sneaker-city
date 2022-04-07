import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { subTotal } from "../../redux/actions/cartActions";
import { showModal } from "../../redux/actions/modalActions";
import CustomRedBtn from "../CustomRedBtn";

const Checkout = styled.section`
  flex: 1;
  h4 {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 2rem;
    color: #000000bf;
  }
  .breakdown {
    padding: 2rem 2rem 1.375rem 0.5rem;
    border-bottom: 1px solid #00000026;
    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: #000000a6;

      &:last-child{
          margin-bottom: 0;
      }

      span {
        color: #000000;
      }
    }
  }
  .total{
      padding-top:1.5rem;
      padding-right: 2rem;
      padding-bottom: 4rem;
      display: flex;
      flex-direction: row-reverse;
  }
`;

function CartCheckOut() {
  const total = useSelector(state => state.cartReducer.cartItemsTotal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(subTotal())
  }, [dispatch])
  const checkoutHandler = () => { 
    dispatch(showModal())
   }

  return (
    <Checkout>
      <h4>Order summary</h4>
      <div className="breakdown">
        <p>
          Sub total <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</span>
        </p>
        <p>
          Delivery fee <span>0</span>
        </p>
      </div>
      <p className="total">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</p>
      <CustomRedBtn text="Proceed to checkout" onClick={checkoutHandler} />
    </Checkout>
  );
}

export default CartCheckOut;
