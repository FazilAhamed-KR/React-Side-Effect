import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, modalIsOpen, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modalIsOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {modalIsOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
