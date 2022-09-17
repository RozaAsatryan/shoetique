import React, { useState } from "react";
import StarRating from "../star/StarRating";
import { BsFillCartPlusFill, BsCheck2Circle } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ShoeItem.css";

const ShoeItem = ({ shoe, handleClick, handleWishlist }) => {
  const [btnText, setBtnText] = useState(true);
  const [heartBtn, setHeartBtn] = useState(true);

  const btnClick = (shoe) => {
    handleClick(shoe);
    setBtnText(false);
    setTimeout(() => setBtnText(true), 3000);
  };

  return (
    <div className="single-item">
      <button
        className="add-to-wish"
        onClick={() => {
          setHeartBtn(false);
          handleWishlist(shoe);
        }}
      >
        {heartBtn ? <FaRegHeart /> : <FaHeart />}
      </button>
      <LazyLoadImage
        effect="blur"
        className="item-img"
        src={shoe.img}
        alt={shoe.title}
      />
      <h3>{shoe.title}</h3>
      <p>{shoe.descr}</p>
      <p>$ {shoe.price}</p>
      <StarRating />
      <div className="item-btns">
        <button
          className={btnText ? "add-to-btn" : "add-to-btn added-btn"}
          onClick={() => btnClick(shoe)}
        >
          {btnText ? (
            <>
              <BsFillCartPlusFill />
              <span> </span>
              Add to basket
            </>
          ) : (
            <>
              <BsCheck2Circle />
              <span> </span>
              Added
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ShoeItem;
