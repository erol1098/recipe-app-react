import React from "react";
import StyledModal, { Backdrop } from "./Modal.styled";
const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onConfirm}></Backdrop>
      <StyledModal>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message.replace("_", " ")}</p>
        </div>
        <div className="actions">
          <button type="button" onClick={props.onConfirm}>
            Ok
          </button>
        </div>
      </StyledModal>
    </>
  );
};

export default Modal;
