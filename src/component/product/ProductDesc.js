import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { btnArr } from "../../helpers";
import { cartAddItem, updateCartItem } from "../../redux/actions/cartActions";
import { showModal } from "../../redux/actions/modalActions";
import CartItemCounter from "../CartItemCounter";
import CustomRedBtn from "../CustomRedBtn";
const ProductDecStyled = styled.div`
  flex: 1;
  padding: 2rem 0;

  .test {
    background-color: green;
  }

  .description {
    border-bottom: 1px solid #00000026;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    color: #000000a6;

    @media (max-width: 954px) {
      padding-top: 0;
    }

    h5 {
      padding-bottom: 1.125rem;
      color: #000;
    }
  }
  .btnGroup {
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;

    .btnWrapper {
      padding: 1.125rem 0;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;

      @media (max-width: 420px) {
        grid-template-columns: repeat(4, 1fr);
      }

      button {
        padding: 12px 15px;
        border-radius: 0.5rem;
        outline: none;
        border: 1px solid #00000026;
        cursor: pointer;
      }
      .active {
        background-color: red;
        color: white;
      }
    }
  }
  .cartQuantity {
    display: flex;
    column-gap: 2rem;

    @media (max-width: 954px) {
      justify-content: center;
    }
  }
`;

function ProductDesc({ data }) {
  const cartItem = useSelector((state) =>
    state.cartReducer.cart.filter((itm) => itm.id === data.id)
  );
  const [shoeSize, setShoeSize] = useState(
    cartItem.length === 1 ? cartItem[0].shoeSize : ""
  );
  const [count, setCount] = useState(
    cartItem.length === 1 ? cartItem[0].amount : 1
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (shoeSize === "") {
      dispatch(showModal("You have to select a shoe size"));
    }
    if (cartItem.length !== 1 && shoeSize !== "") {
      dispatch(cartAddItem({ ...data, shoeSize: shoeSize, amount: count }));
    }
    if (
      (cartItem.length === 1 && shoeSize !== cartItem[0].shoeSize) ||
      (cartItem.length === 1 && count !== cartItem[0].amount)
    ) {
      dispatch(
        updateCartItem({ id: cartItem[0].id, count: count, shoeSize: shoeSize })
      );
    }
    if (shoeSize !== "") {
      navigate(-1);
    }
  };

  const renderBtn = btnArr.map((btn, idx) => {
    if (shoeSize === btn) {
      return (
        <button className="active" key={idx} onClick={() => setShoeSize(btn)}>
          {btn}
        </button>
      );
    }
    return (
      <button
        key={idx}
        onClick={() => {
          setShoeSize(btn);
        }}
      >
        {btn}
      </button>
    );
  });

  const decreaseHandler = () => {
    setCount((prev) => prev - 1);
  };
  const increaseHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <ProductDecStyled>
      <section className="description">
        <h5>Description</h5>
        {`The ${data?.title} offers a fresh, fearless take on the features you
        want: durability, comfort and an attitude that's ${data?.brand} to the core. We
        updated design lines and swapped out some components. It was first lunched in ${data?.year}.`}
      </section>

      <section className="btnGroup">
        <h5>Select size</h5>
        <div className="btnWrapper">{renderBtn}</div>
        <div className="cartQuantity">
          <CartItemCounter
            count={count}
            decreaseHandler={decreaseHandler}
            increaseHandler={increaseHandler}
          />
          <CustomRedBtn
            disabled={
              cartItem.length === 1 &&
              cartItem[0].shoeSize === shoeSize &&
              count === cartItem[0].amount
            }
            text={"Add to cart"}
            onClick={onClickHandler}
          />
        </div>
      </section>
    </ProductDecStyled>
  );
}

export default ProductDesc;
