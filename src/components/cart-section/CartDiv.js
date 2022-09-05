import React, { useState, useEffect } from "react";
import "./CartDiv.css";
import {
  BsPlusCircleDotted,
  BsDashCircleDotted,
  BsTrash,
} from "react-icons/bs";

const CartDiv = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (shoe, id) => {
    shoe.amount = 1;
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      {cart.length ? (
        <>
          <h2 className="cart-head">Your Cart</h2>
          <div className="cart-list">
            <table>
              <tr className="table-head">
                <th>ITEM</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>REMOVE</th>
              </tr>
              {cart.map((shoe, i) => (
                <>
                  <tr>
                    <td>
                      <img
                        className="table-img"
                        src={shoe.img}
                        alt={shoe.title}
                      />
                    </td>
                    <td>
                      <h3>{shoe.title}</h3>
                      <p>{shoe.descr}</p>
                    </td>

                    <td>
                      <p>Price: ${shoe.price * shoe.amount}</p>
                      <div className="count-div">
                        <button
                          className="count-button"
                          onClick={() => handleChange(shoe, 1)}
                        >
                          <BsPlusCircleDotted />
                        </button>
                        <p className="amount">{shoe.amount}</p>
                        <button
                          className="count-button"
                          onClick={() => handleChange(shoe, -1)}
                        >
                          <BsDashCircleDotted />
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="remove"
                        onClick={() => handleRemove(shoe, shoe.id)}
                      >
                        <BsTrash className="remove-icon" />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </table>
            <div className="total">
              <hr />
              <span>
                <b>Total Price of your Cart: </b>
              </span>
              <span> ${price}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="empty-img">
            <img
              src="https://occasioni.stanhomeitalia.it/images/emptycart.png"
              alt="Empty cart"
            />
            <h2>Your cart is empty!</h2>
          </div>
        </>
      )}
    </>
  );
};

export default CartDiv;
