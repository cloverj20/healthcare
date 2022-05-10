import React from "react";
import "./Modal.scss";

const Modal = ({ data, state, closeModal, children }) => {
  return state ? (
    <div className="modal">
      <h1>{data}</h1>
      {children}
    </div>
  ) : (
    <></>
  );
};

export default Modal;
