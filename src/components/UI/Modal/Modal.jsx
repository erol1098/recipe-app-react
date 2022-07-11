import React from "react";
import StyledModal from "./Modal.styled";
const Modal = (props) => {
  console.log("entered");
  return (
    <StyledModal>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <section className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>

        <div className="content">
          <p>{props.message}</p>
        </div>
        <div className="actions">
          <button type="button" onClick={props.onConfirm}>
            Understand
          </button>
        </div>
      </section>
    </StyledModal>
  );
};

export default Modal;
