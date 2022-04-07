import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { resetCart } from "../../redux/actions/cartActions";
import { hideModal } from "../../redux/actions/modalActions";
import CustomRedBtn from "../CustomRedBtn";

const StyledModal = styled.div`
  z-index: 10;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    padding: 8rem;
  }
  .cart{
    padding: 0;
    display:flex;
    flex-direction:column;
    row-gap: 4rem;
  }
`;

function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {pathname} = useLocation();

  const onClickHandler = () => {
    dispatch(hideModal());
    if (pathname === "/cart") {
      dispatch(resetCart())
      navigate("/")
    }
  };

  
  

  const renderText = () => { 
    if(pathname.includes("/product/")){
      return <p>You have to select a shoe size</p>
    }
    if (pathname === "/cart") {
      
      return <div className="cart">
        <p>Thank you for shopping with Sneaker city</p>
        <CustomRedBtn text={"Thanks"} onClick={onClickHandler} />
      </div>
    }
    if (pathname === "/") {
      return <p>You already have item in your cart</p>
    }
   }

  return (
    <StyledModal onClick={onClickHandler}>
      <div>{renderText()}</div>
    </StyledModal>
  );
}

export default Modal;
