import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { hideModal } from "../../redux/actions/modalActions";

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
`;

function Modal() {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  const onClickHandler = () => {
    dispatch(hideModal());
  };

  const renderText = () => { 
    if(pathname.includes("/product/")){
      return <p>You have to select a shoe size</p>
    }
   }

  return (
    <StyledModal onClick={onClickHandler}>
      <div>{renderText()}</div>
    </StyledModal>
  );
}

export default Modal;
