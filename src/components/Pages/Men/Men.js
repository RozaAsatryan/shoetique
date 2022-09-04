import React from "react";
import shoes from "../../../all-shoes.json";
import ShoeItem from "../../shoe-item/ShoeItem";
import "./Men.css";

const Men = ({ handleClick, handleWishlist }) => {
  const onlyMen = shoes.filter((shoe) => shoe.collection === "male");
  return (
    <>

      <section className="men-shoes-section">
        {onlyMen.map((shoe) => (
          <div className="men-shoes">
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

export default Men;
