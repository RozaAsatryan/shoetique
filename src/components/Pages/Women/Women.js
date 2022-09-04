import React from "react";
import shoes from "../../../all-shoes.json";
import ShoeItem from "../../shoe-item/ShoeItem";
import "./Women.css";


const Women = ({ handleClick, handleWishlist }) => {
  const onlyWomen = shoes.filter((shoe) => shoe.collection === "female");
  return (
    <>
      <section className="women-shoes-section">
        {onlyWomen.map((shoe) => (
          <div className="women-shoes">
            <ShoeItem
              shoe={shoe}
              handleClick={handleClick}
              handleWishlist={handleWishlist}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Women;
