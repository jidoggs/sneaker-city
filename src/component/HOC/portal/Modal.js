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
  }
`;

function Modal(props) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? props.handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [props.handleClose]);

  if (!props.isOpen) return null;

  
  return (
    <ReactPortal>
      <StyledModal className="modal">
        <div className="modal-content" onClick={props.homeClickHandler} >{props.children}</div>
      </StyledModal>
    </ReactPortal>
  );
}

export default Modal;
