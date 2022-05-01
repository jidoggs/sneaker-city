import { useEffect } from "react";
import styled from "styled-components";
import ReactPortal from "./ReactPortal";

const StyledModal = styled.div`
  
    position: fixed;
    inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    z-index: 999;
    padding: 40px 20px 20px;

  .modal-content {
    width: 70%;
    height: 70%;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 1rem;

    @media(max-width:1024px){
      width: 95%;
    }
    @media(max-width: 768px){
      font-size: 1.6rem;
    }
    @media(max-width: 646px){
      font-size: 1.4rem;
    }
    @media(max-width: 554px){
      font-size: 1rem;
    }
    @media(max-width: 418px){
      font-size: 0.8rem;
    }
  }
`;

function Modal(props) {
  const {handleClose, isOpen, homeClickHandler} = props
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  
  return (
    <ReactPortal>
      <StyledModal className="modal">
        <div className="modal-content" onClick={homeClickHandler} >{props.children}</div>
      </StyledModal>
    </ReactPortal>
  );
}

export default Modal;
