import React from "react";
import "./Modal.css";
import "../cart-section/CartDiv.css";

const Modal = ({
  children,
  setShow,
  hideRef,
  setShowCart,
  setShowWishlist,
}) => {
  return (
    <section className="modal-wrapper">
      <div className="modal-content" ref={hideRef}>
        {children}
        <div>
          <span
            className="close-icon"
            onClick={() => {
              setShow(false);
              setShowCart(false);
              setShowWishlist(false);
            }}
          >
            x
          </span>
        </div>
      </div>
    </section>
  );
};

export default Modal;
