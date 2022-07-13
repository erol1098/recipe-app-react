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
          <p>{props.message.replace("_", " ")}</p>
        </div>
        <div className="actions">
          <button type="button" onClick={props.onConfirm}>
            Ok
          </button>
        </div>
      </section>
    </StyledModal>
  );
};

export default Modal;
