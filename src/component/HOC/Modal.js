import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    display:flex;
    flex-direction:column;
    row-gap: 4rem;
  }
`;

function Modal() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.modalReducer.message)
  const navigate = useNavigate()
  const {pathname} = useLocation();

  const onClickHandler = () => {
    dispatch(hideModal());
    if (pathname === "/cart" || pathname === "/customProduct") {
      if (pathname === "/cart") {
        dispatch(resetCart())
      }
      navigate("/")
    }
  };

  
  return (
    <StyledModal onClick={onClickHandler}>
      <div>
      <p>{message}</p>
      {pathname ==="/cart" && <CustomRedBtn text={"Thanks"} onClick={onClickHandler} />}
      {pathname ==="/customProduct" && <CustomRedBtn text={"Thanks for participating"} onClick={onClickHandler} />}
      </div>
    </StyledModal>
  );
}

export default Modal;
