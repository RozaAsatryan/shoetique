import React, { useRef, useEffect } from "react";
import "./Modal.css";
import "../cart-section/CartDiv.css";

const Modal = ({ children, setShow, setShowCart, setShowWishlist }) => {
  let hideRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!hideRef.current.contains(e.target)) {
        setShow(false);
        setShowCart(false);
        setShowWishlist(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
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
