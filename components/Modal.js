import { useState, useEffect } from "react";
import { hideModal } from "../state/reducers/modalSlice";

function Modal({
  title,
  isShow,
  actionButton,
  withButtons,
  dispatch,
  children,
}) {
  return (
    <div
      className="modal-overlay"
      Style={`${isShow ? "display:block" : "display:none"}`}
    >
      <div className="modal">
        <span>{title}</span>
        <span className="modal-close" onClick={() => dispatch(hideModal())}>
          X
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
