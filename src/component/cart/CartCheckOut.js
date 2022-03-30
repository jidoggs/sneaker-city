import React from "react";
import styled from "styled-components";
import CustomRedBtn from "../CustomRedBtn";

const Checkout = styled.section`
  flex: 1;
  h4 {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: #000000bf;
  }
  .breakdown {
    padding: 2rem 2rem 1.375rem 0.5rem;
    border-bottom: 1px solid #00000026;
    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
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
  return (
    <Checkout>
      <h4>Order summary</h4>
      <div className="breakdown">
        <p>
          Sub total <span>78,000RWF</span>
        </p>
        <p>
          Delivery fee <span>0</span>
        </p>
      </div>
      <p className="total">78,000RWF</p>
      <CustomRedBtn text="Proceed to checkout" />
    </Checkout>
  );
}

export default CartCheckOut;
